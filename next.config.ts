import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "reactjs.org",
      "nextjs.org",
      "www.typescriptlang.org",
      "tailwindcss.com",
      "www.framer.com",
      "threejs.org",
      "graphql.org",
      "nodejs.org",
      "placehold.co",
      "images.unsplash.com",
      "oaidalleapiprodscus.blob.core.windows.net" 
    ],
  },
};

export default nextConfig;