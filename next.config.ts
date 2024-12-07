import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dolphiv.cluster030.hosting.ovh.net',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
