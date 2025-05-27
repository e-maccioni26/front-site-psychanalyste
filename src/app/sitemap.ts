import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/queries'; 


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL;


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const { posts } = await getAllPosts('', '', {}, 100); 

  const postsEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date), 
    changeFrequency: 'weekly', 
    priority: 0.8, 
  }));


  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`, 
      lastModified: new Date(), 
      changeFrequency: 'daily', 
      priority: 1, 
    },
    {
      url: `${BASE_URL}/qui-suis-je`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/psychotherapie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily', 
      priority: 0.9,
    },
  ];

  return [...staticPages, ...postsEntries];
}