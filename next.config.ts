import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/order-summary-component',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;