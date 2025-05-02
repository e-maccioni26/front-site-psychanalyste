import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_ARTICLE_BY_SLUG = gql`
  query GetArticleBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
    }
  }
`;

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { data, loading, error } = useQuery(GET_ARTICLE_BY_SLUG, {
    variables: { slug: params.slug },
  });

  if (loading) {
    return <main><p>Chargement de l&apos;article...</p></main>;
  }
  if (error) {
    return <main><p>Erreur lors du chargement de l&apos;article.</p></main>;
  }
  if (!data?.post) {
    return <main><p>Aucun article trouvé pour ce slug.</p></main>;
  }

  return (
    <main>
      <article className="prose mx-auto">
        <h1>{data.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
      </article>
    </main>
  );
}