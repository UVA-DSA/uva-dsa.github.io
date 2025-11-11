import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * No basePath needed for user/organization GitHub Pages sites like
   * uva-dsa.github.io (served from domain root).
   * For project pages, set basePath to "/<repo>".
   */
  // basePath: "/uva-dsa.github.io",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
