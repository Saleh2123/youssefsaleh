import type { NextConfig } from "next";

export const base: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  experimental: { serverActions: true },

  distDir: `./target/next/${process.env.NODE_ENV}`,

  /* eslint-disable
       @typescript-eslint/no-unsafe-member-access,
       @typescript-eslint/no-unsafe-return,
  */
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".js"],
    };
    return config;
  },
  /* eslint-enable */
};

export default base;
