const baseUrl = process.env.WORDPRESS_URL;
import { gql, GraphQLClient } from 'graphql-request';
import { Category, Post } from './types';

const client = new GraphQLClient(`${baseUrl}/graphql`);

export async function getCategories(): Promise<Category[]> {
  const query = gql`
  query getCategories {
    categories(first: 100) {
      nodes {
        id
        name
        slug
      }
    }
  }
  `;

  const data: { categories: { nodes: Category[] } } = await client.request(query);
  return data.categories.nodes;
}


export async function getAllPosts(
  searchTerm: string = '',
  category: string = '',
  params: { before?: string | null; after?: string | null } = {},
  limit: number = 10
): Promise<{
  posts: Post[],
  pageInfo: {
    startCursor: string | null,
    endCursor: string | null,
    hasNextPage: boolean,
    hasPreviousPage: boolean
  }
}> {
  const hasSearchTerm = searchTerm && searchTerm.trim() !== '';
  const hasCategoryTerm = category && category.trim() !== '';
  const isPrevious = !!params.before;

  const variableDefinitions: string[] = ['$perPage: Int!'];
  const variables: {
    perPage: number;
    before?: string | null;
    after?: string | null;
    search?: string;
    categorySlug?: string;
  } = { perPage: limit };

  if (isPrevious) {
    variableDefinitions.push('$before: String');
    variables.before = params.before;
  } else {
    variableDefinitions.push('$after: String');
    variables.after = params.after;
  }

  if (hasSearchTerm) {
    variableDefinitions.push('$search: String');
    variables.search = searchTerm;
  }
  if (hasCategoryTerm) {
    variableDefinitions.push('$categorySlug: String');
    variables.categorySlug = category;
  }

  const whereConditions: string[] = [];
  if (hasSearchTerm) whereConditions.push('search: $search');
  if (hasCategoryTerm) whereConditions.push('categoryName: $categorySlug');

  const whereClause = whereConditions.length > 0
    ? `where: { ${whereConditions.join(', ')} }`
    : '';

  const query = gql`
    query GetPosts(${variableDefinitions.join(', ')}) {
      posts(
        ${isPrevious ? 'last: $perPage' : 'first: $perPage'},
        ${isPrevious ? 'before: $before' : 'after: $after'},
        ${whereClause}
      ) {
        nodes {
          id
          title
          excerpt
          date
          slug
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  `;

  const data: {
    posts: {
      nodes: Post[],
      pageInfo: {
        startCursor: string | null,
        endCursor: string | null,
        hasNextPage: boolean,
        hasPreviousPage: boolean
      }
    }
  } = await client.request(query, variables);

  return {
    posts: data.posts.nodes,
    pageInfo: data.posts.pageInfo,
  }
}


export async function getPostsBySlug(slug: string) : Promise<Post | null> {
  const query = gql`
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        title
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        seo {
          title
          metaDesc
          canonical
          fullHead
          schema {
            raw
          }
          # --- CORRECTIONS ICI  ---
          opengraphUrl
          opengraphDescription
          opengraphImage { # Ceci est un type imbriqué
            sourceUrl
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          
          twitterDescription
          twitterImage { # Ceci est un type imbriqué
            sourceUrl
          }
          twitterTitle
          # --- FIN DES CORRECTIONS ---
        }
      }
    }
  `;
  const variables = { slug };
  const data : { post: Post } = await client.request(query, variables);
  return data.post;
}