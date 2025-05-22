export type Category = {
    id: string;
    name: string;
    slug: string;
  }
  
  export type Post = {
    id: number;
    title: string;
    slug: string;
    date: string;
    content: string;
    excerpt?: string;
    featuredImage?: {
      node: {
        sourceUrl: string;
        altText: string;
      }
    };
    author: {
      node: {
        name: string
      }
    }
    categories: {
      nodes: {
        name: Array<string>
      }
    }
    tags: {
      nodes: {
        name: string
      }
    };
    seo?: {
      title?: string;
      metaDesc?: string;
      canonical?: string;
      fullHead?: string;
      schema?: {
        raw?: string;
      };
      opengraphUrl?: string;
      opengraphDescription?: string;
      opengraphImage?: {
        sourceUrl?: string;
      };
      opengraphModifiedTime?: string;
      opengraphPublishedTime?: string;
      opengraphPublisher?: string;
      opengraphSiteName?: string;
      opengraphTitle?: string;
      opengraphType?: string;
      twitterDescription?: string;
      twitterImage?: {
        sourceUrl?: string;
      };
      twitterTitle?: string;
    };
  }