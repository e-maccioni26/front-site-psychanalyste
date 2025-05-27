import { LatestPosts } from '../../components/Latest-posts';
import { getAllPosts } from '@/lib/queries';
import { LinkedinCard } from '@/components/LinkedinCard';
import { RecommendedPosts } from '@/components/RecommendedPosts';
import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export const metadata: Metadata = {
  title: 'Blog | Psychanalyste à Bordeaux | Hervé Maccioni',
  description: 'Découvrez les articles de Hervé Maccioni, psychanalyste et psychotérapeute à Bordeaux. Réflexions sur la psychothérapie, la psychanalyse et le bien-être mental.',
  keywords: 'psy bordeaux, psychanalyste bordeaux, psychothérapie, blog psychanalyse',
  openGraph: {
    title: 'Blog | Psychanalyste à Bordeaux | Hervé Maccioni',
    description: 'Découvrez les articles de Hervé Maccioni, psychanalyste à Bordeaux. Réflexions sur la psychothérapie, la psychanalyse et le bien-être mental.',
    url: 'https://www.hervemaccioni.fr/blog',
    siteName: 'Hervé Maccioni - Psychanalyste à Bordeaux',
    images: [
      {
        url: '/images/open-graph-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Hervé Maccioni - Psychanalyste à Bordeaux',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Psychanalyste à Bordeaux | Hervé Maccioni',
    description: 'Découvrez les articles de Hervé Maccioni, psychanalyste à Bordeaux. Réflexions sur la psychothérapie, la psychanalyse et le bien-être mental.',
    images: ['/images/twitter-og-blog.jpg'],
  },
  alternates: {
    canonical: 'https://www.hervemaccioni.fr/blog',
  },
};

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const searchTerm = typeof searchParams.search === 'string' ? searchParams.search : '';
  const category = typeof searchParams.categories === 'string' ? searchParams.categories : '';
  const before = searchParams.before as string || null;
  const after = searchParams.after as string || null;

  const [mainPostsData, recommendedPostsData] = await Promise.all([
    getAllPosts(searchTerm, category, { before, after }),
    getAllPosts('', '', {}, 3) 
  ]);
  
  const { posts, pageInfo } = mainPostsData;
  const { posts: recommendedPosts } = recommendedPostsData;
  
  const latestPostProps = {
    posts,
    pageInfo,
    category,
    searchTerm
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        <main className="w-full lg:w-2/3 order-1">
          <LatestPosts {...latestPostProps} />
        </main>
        
        <aside className="w-full lg:w-1/3 order-2">
          <RecommendedPosts posts={recommendedPosts} />
          <LinkedinCard linkedinUrl="https://www.linkedin.com/in/herv%C3%A9-maccioni-537652ba/?originalSubdomain=fr" />
        </aside>
      </div>
    </div>
  );
}