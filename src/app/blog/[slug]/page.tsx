import type { Metadata, ResolvingMetadata } from 'next';
import { getPostsBySlug, getAllPosts } from '@/lib/queries';
import Image from 'next/image';
import { LinkedinCard } from '@/components/LinkedinCard';
import { RecommendedPosts } from '@/components/RecommendedPosts';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostsBySlug((await params).slug);

  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: post?.title,
    openGraph: {
      images: ['/open-graph.jpg', ...previousImages],
    },
  }
}

export default async function Page({ params} : {
  params: Promise<{ slug: string}>
}) {
  const slug = (await params).slug;
  const post = await getPostsBySlug(slug);
  if(!post) { return <div>Post not found.</div>}

  // Récupérer des articles recommandés
  const { posts: recommendedPosts } = await getAllPosts('', '', {}, 3);
  // Filtrer pour ne pas inclure l'article actuel
  const filteredRecommendedPosts = recommendedPosts.filter(p => p.slug !== slug);

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleString('fr-FR', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Colonne de gauche - Article */}
        <main className="w-full lg:w-2/3 order-1">
          <article className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
            {/* Image mise en avant */}
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
              <h1 className="text-3xl md:text-4xl font-bold text-[#2E3A59] mb-6" 
                style={{fontFamily:'var(--font-title)'}} 
                dangerouslySetInnerHTML={{ __html:post.title }}>
              </h1>
              
              <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 mb-8 gap-2 md:gap-0">
                <span>Publié le <b>{date}</b></span>
                {post?.author?.node?.name && (
                  <span>par <b className="text-[#2E3A59]">{post.author.node.name}</b></span>
                )}
              </div>
              
              <hr className="mb-8 border-gray-200" />
              
              <div className="prose prose-lg max-w-none text-[#171717]" 
                style={{fontFamily:'var(--font-paragraph)'}} 
                dangerouslySetInnerHTML={{ __html: post?.content }}>
              </div>
            </div>
          </article>
        </main>
        
        {/* Colonne de droite - Sidebar */}
        <aside className="w-full lg:w-1/3 order-2">
          <RecommendedPosts posts={filteredRecommendedPosts} />
          <LinkedinCard linkedinUrl="https://www.linkedin.com/in/herv%C3%A9-maccioni-537652ba/?originalSubdomain=fr" />
        </aside>
      </div>
    </div>
  )
}