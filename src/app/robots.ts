import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    host:       'https://www.hervemaccioni.fr',
    sitemap:    'https://www.hervemaccioni.fr/sitemap.xml',
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/admin/*'],
      },
    ],
  };
}