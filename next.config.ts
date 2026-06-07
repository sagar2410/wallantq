import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  webpack(config, { isServer, dev }) {
    if (config.module) {
      if (!config.module.parser) config.module.parser = {};
      if (!config.module.parser.javascript) config.module.parser.javascript = {};
      config.module.parser.javascript.exportsPresence = "warn";
    }

    if (dev) return config;
    // Consolidate chunks on BOTH client and server so that the _not-found
    // static-export worker can resolve every client-module reference in the
    // RSC manifest without "e[o] is not a function" errors.
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          cacheGroups: {
            framework: {
              chunks: "all",
              name: "framework",
              test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            commons: {
              name: "commons",
              chunks: "all",
              minChunks: 1,
              priority: 10,
            },
          },
        },
      };
    } else {
      // On the server side, disable chunk splitting entirely so every module
      // is available in a single bundle during static export prerendering.
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
      };
    }
    return config;
  },
};

export default nextConfig;
