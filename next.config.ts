import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random-image-pepebigotes.vercel.app",
      },
    ],
  },
};

export default nextConfig;
