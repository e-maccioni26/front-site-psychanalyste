import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.hervemaccioni.fr',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Optimisation pour les moteurs de recherche
  poweredByHeader: false, // Supprime l'en-tête X-Powered-By pour la sécurité
  // Configuration des en-têtes HTTP pour améliorer le SEO et la sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        // Optimisation du cache pour les pages statiques
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  // Redirection pour les anciennes URLs
  async redirects() {
    return [
      // Exemple de redirection pour les anciennes URLs
      {
        source: '/psychotherapeute-bordeaux',
        destination: '/psychotherapie/adultes-couples',
        permanent: true,
      },
      {
        source: '/psychanalyste-bordeaux',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;