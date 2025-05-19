import Link from 'next/link';
import { Post } from '@/lib/types';
import Image from 'next/image';

type RecommendedPostsProps = {
  posts: Post[];
  title?: string;
}

export function RecommendedPosts({ posts, title = 'Articles à ne pas manquer' }: RecommendedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
      <h3 className="text-xl font-bold text-[#2E3A59] mb-4" style={{fontFamily:'var(--font-title)'}}>
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex items-start gap-3 hover:bg-[#f7fafd] p-2 rounded-md transition-colors duration-200"
          >
            {post.featuredImage?.node?.sourceUrl && (
              <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-md">
                <Image 
                  src={post.featuredImage.node.sourceUrl} 
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h4 className="text-sm font-medium text-[#2E3A59] group-hover:text-[#A2B6C9] line-clamp-2" 
                style={{fontFamily:'var(--font-title)'}}
                dangerouslySetInnerHTML={{ __html: post.title }}>
              </h4>
              <span className="text-xs text-gray-500">
                {new Date(post.date).toLocaleDateString("fr-FR", { day: '2-digit', month: 'short' })}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}