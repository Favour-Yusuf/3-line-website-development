import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  typescript: {
    ignoreBuildErrors: false, // keep this for type safety
  },
  eslint: {
    ignoreDuringBuilds: false, // change to false to catch issues early
  },
};

export default nextConfig;
