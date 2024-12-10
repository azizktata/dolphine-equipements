import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'dolphiv.cluster030.hosting.ovh.net',
        pathname: '/wp-content/uploads/**',
      },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
};

export default nextConfig;
