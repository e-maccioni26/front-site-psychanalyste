import { SearchBar } from "./search-bar";
import { Post } from '@/lib/types';
import Link from "next/link";
import Image from "next/image";

type LatestPostsProps = {
  posts: Post[];
  title?: string;
  searchTerm?: string;
  pageInfo?: { startCursor: string | null, endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean };
  category?: string;
}

export function LatestPosts({ posts, searchTerm, pageInfo, category }: LatestPostsProps) {

  if (posts?.length === 0) {
    return <div className="p-6 bg-white rounded-xl shadow-md">Aucun article disponible.</div>
  }

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold text-[#2E3A59] mb-2 md:mb-0" style={{fontFamily:'var(--font-title)'}}>Blog</h2>
        <div>
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {posts.map((post: Post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col transition hover:shadow-lg hover:border-[#A2B6C9] animate-fadeIn"
          >
            {post.featuredImage?.node?.sourceUrl && (
              <div className="relative w-full h-48">
                <Image 
                  src={post.featuredImage.node.sourceUrl} 
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6 flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div 
                  className="text-xl font-bold text-[#2E3A59] group-hover:text-[#A2B6C9] mb-2" 
                  style={{fontFamily:'var(--font-title)'}} 
                  dangerouslySetInnerHTML={{ __html: post.title }}>
                </div>
                <div 
                  className="text-sm text-gray-600 line-clamp-2" 
                  style={{fontFamily:'var(--font-paragraph)'}}>
                  {post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').slice(0, 150) + (post.excerpt.length > 150 ? '...' : '') : ''}
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 md:ml-6 min-w-[120px]">
                <span className="text-xs text-gray-500 mb-2">{new Date(post.date).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                <span className="inline-block bg-[#2E3A59] text-white text-xs font-semibold px-3 py-1 rounded-full group-hover:bg-[#A2B6C9] transition-colors">Lire l&apos;article</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-between mt-10">
        <div>
          {pageInfo?.hasPreviousPage && (
            <Link
              href={{
                pathname: '/blog',
                query: {
                  before: pageInfo.startCursor,
                  ...((searchTerm || category) && { searchTerm, category })
                }
              }}
              className="text-[#2E3A59] font-semibold hover:underline"
            >
              Précédent
            </Link>
          )}
        </div>
        <div>
          {pageInfo?.hasNextPage && (
            <Link
              href={{
                pathname: '/blog',
                query: {
                  after: pageInfo.endCursor,
                  ...((searchTerm || category) && { searchTerm, category })
                }
              }}
              className="text-[#2E3A59] font-semibold hover:underline"
            >
              Suivant
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}