import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/OmniraBussiness";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? githubPagesBasePath : undefined,
  assetPrefix: isGithubPages ? githubPagesBasePath : undefined,
  trailingSlash: isGithubPages,
  images: {
    formats: ["image/webp"],
    unoptimized: isGithubPages,
  },
};

export default nextConfig;
