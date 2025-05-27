import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import { getPostsBySlug, getAllPosts } from '@/lib/queries';
import { LinkedinCard } from '@/components/LinkedinCard';
import { RecommendedPosts } from '@/components/RecommendedPosts';

type Props = {
  params: Promise<{ slug: string }>;
};

export type OGType =
  | 'article'
  | 'website'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';

const OG_TYPES: readonly OGType[] = [
  'article',
  'website',
  'book',
  'profile',
  'music.song',
  'music.album',
  'music.playlist',
  'music.radio_station',
  'video.movie',
  'video.episode',
  'video.tv_show',
  'video.other',
] as const;

/**
 * Transforme la valeur Yoast (string libre) en OGType strict.
 * Si la valeur ne fait pas partie des littéraux, on fallback sur 'article'.
 */
function mapOgType(value?: string | null): OGType {
  return OG_TYPES.includes(value as OGType) ? (value as OGType) : 'article';
}
// --------------------------------------------------------

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostsBySlug(slug);

  if (!post || !post.seo) {
    return {
      title: 'Article non trouvé - Hervé Maccioni',
      description: "Cet article de blog n'existe pas ou a été supprimé.",
    };
  }

  const { seo: yoastSeo } = post;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

  return {
    title: yoastSeo.title || post.title,
    description: yoastSeo.metaDesc,
    alternates: {
      canonical: yoastSeo.canonical || `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: yoastSeo.opengraphTitle || yoastSeo.title || post.title,
      description: yoastSeo.opengraphDescription || yoastSeo.metaDesc,
      url: yoastSeo.opengraphUrl || `${baseUrl}/blog/${post.slug}`,
      siteName:
        yoastSeo.opengraphSiteName || 'Hervé Maccioni – Psychanalyste à Bordeaux',
      images: yoastSeo.opengraphImage?.sourceUrl
        ? [
            {
              url: yoastSeo.opengraphImage.sourceUrl,
              width: 1200,
              height: 630,
              alt: yoastSeo.opengraphTitle || post.title,
            },
          ]
        : [],
      locale: 'fr_FR',
      type: mapOgType(yoastSeo.opengraphType),
      publishedTime: yoastSeo.opengraphPublishedTime ?? undefined,
      modifiedTime: yoastSeo.opengraphModifiedTime ?? undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: yoastSeo.twitterTitle || yoastSeo.title || post.title,
      description: yoastSeo.twitterDescription || yoastSeo.metaDesc,
      images: yoastSeo.twitterImage?.sourceUrl ? [yoastSeo.twitterImage.sourceUrl] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = await getPostsBySlug(slug);
  if (!post) return <div>Post not found.</div>;
  

  const { posts: recommended } = await getAllPosts('', '', {}, 3);
  const sidebarPosts = recommended.filter((p) => p.slug !== slug);

  const date = new Date(post.date).toLocaleString('fr-FR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

    /* ---------------- JSON-LD article ---------------- */
    const jsonLdScript = post.seo?.schema?.raw ? (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: post.seo.schema.raw }}
      />
    ) : null;

  return (
    <>
    {jsonLdScript}
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* ------- Article ------- */}
        <main className="w-full lg:w-2/3 order-1">
          <article className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {post.featuredImage?.node?.sourceUrl && (
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="p-8">
              <h1
                className="text-3xl md:text-4xl font-bold text-[#2E3A59] mb-6"
                style={{ fontFamily: 'var(--font-title)' }}
                dangerouslySetInnerHTML={{ __html: post.title }}
              />

              <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 mb-8 gap-2">
                <span>
                  Publié le <b>{date}</b>
                </span>
                {post.author?.node?.name && (
                  <span>
                    par <b className="text-[#2E3A59]">{post.author.node.name}</b>
                  </span>
                )}
              </div>

              <hr className="mb-8 border-gray-200" />

              <div
                className="prose prose-lg max-w-none text-[#171717]"
                style={{ fontFamily: 'var(--font-paragraph)' }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </article>
        </main>

        {/* ------- Sidebar ------- */}
        <aside className="w-full lg:w-1/3 order-2">
          <RecommendedPosts posts={sidebarPosts} />
          <LinkedinCard linkedinUrl="https://www.linkedin.com/in/herv%C3%A9-maccioni-537652ba/?originalSubdomain=fr" />
        </aside>
      </div>
    </div>
    </>
  );
}
