import { SearchBar } from "./search-bar";
import { Post } from '@/lib/types';
import Link from "next/link";

type LatestPostsProps = {
  posts: Post[];
  title?: string;
  searchTerm?: string;
  pageInfo?: { startCursor: string | null, endCursor: string | null, hasNextPage: boolean, hasPreviousPage: boolean };
  category?: string;
}

export function LatestPosts({ posts, searchTerm, pageInfo, category }: LatestPostsProps) {

  if (posts?.length === 0) {
    return <div>No posts available.</div>
  }

  return (
    <section className="mb-12 py-12 px-4 md:px-12 max-w-4xl mx-auto">
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
            className="group bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between transition hover:shadow-lg hover:border-[#A2B6C9] hover:bg-[#f7fafd] card-hover animate-fadeIn"
          >
            <div className="flex-1 min-w-0">
              <div className="text-xl font-bold text-[#2E3A59] group-hover:text-[#A2B6C9] mb-2" style={{fontFamily:'var(--font-title)'}} dangerouslySetInnerHTML={{ __html: post.title }}></div>
              <div className="text-sm text-gray-600 truncate" style={{fontFamily:'var(--font-paragraph)'}}>{post.excerpt ? post.excerpt.replace(/<[^>]+>/g, '').slice(0, 120) + (post.excerpt.length > 120 ? '...' : '') : ''}</div>
            </div>
            <div className="flex flex-col items-end mt-4 md:mt-0 md:ml-6 min-w-[120px]">
              <span className="text-xs text-gray-500 mb-1">{new Date(post.date).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              <span className="inline-block bg-[#2E3A59] text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">Lire</span>
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