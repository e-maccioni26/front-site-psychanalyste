import type { Metadata, ResolvingMetadata } from 'next';
import { getPostsBySlug } from '@/lib/queries';

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

  const post = await getPostsBySlug((await params).slug);
  if(!post) { return <div>Post not found.</div>}

  const formattedDate = new Date(post.date);
  const date = formattedDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 my-12 animate-fadeIn border border-gray-200">
      <h1 className="text-4xl font-bold text-[#2E3A59] mb-6 text-center" style={{fontFamily:'var(--font-title)'}} dangerouslySetInnerHTML={{ __html:post.title }}></h1>
      <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-500 mb-8 gap-2 md:gap-0">
        <span>Publié le <b>{date}</b></span>
        {post?.author?.node?.name && (
          <span>par <b className="text-[#2E3A59]">{post.author.node.name}</b></span>
        )}
      </div>
      <hr className="mb-8 border-gray-200" />
      <article className="prose prose-lg max-w-none text-[#171717]" style={{fontFamily:'var(--font-paragraph)'}} dangerouslySetInnerHTML={{ __html: post?.content }}/>
    </section>
  )
}