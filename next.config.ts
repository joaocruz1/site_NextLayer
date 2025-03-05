import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
      "nodejs.org"
    ],
  },
};

export default nextConfig;
