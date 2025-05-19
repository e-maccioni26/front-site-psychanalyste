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
};

export default nextConfig;
