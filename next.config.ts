import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPagesBuild ? (process.env.NEXT_PUBLIC_BASE_PATH ?? "") : "";

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild
    ? {
        output: "export" as const,
        distDir: "docs",
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
        typescript: {
          tsconfigPath: "./tsconfig.github-pages.json",
        },
      }
    : {}),
};

export default nextConfig;
