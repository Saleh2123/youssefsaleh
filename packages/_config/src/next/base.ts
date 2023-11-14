import type { NextConfig } from "next";
import type webpack from "webpack";

import path from "node:path";

export const base: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  distDir: path.join("target", "next", process.env.NODE_ENV),

  experimental: {
    serverComponentsExternalPackages: ["@node-rs/argon2"],
  },

  webpack: (config: webpack.Configuration) => {
    config.resolve = {
      ...config.resolve,
      extensionAlias: {
        ...config.resolve?.extensionAlias,
        ".js": [".ts", ".js"],
        ".jsx": [".tsx", ".jsx"],
      },
    };
    return config;
  },
};

export default base;
