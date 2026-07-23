import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
