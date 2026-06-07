import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  devIndicators: false,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  ...(process.env.NODE_ENV === "development"
    ? {
        async rewrites() {
          return [
            {
              source: "/admin/:path*",
              destination: "http://localhost:3333/admin/:path*",
            },
            {
              source: "/.sanity/:path*",
              destination: "http://localhost:3333/.sanity/:path*",
            },
            {
              source: "/@vite/:path*",
              destination: "http://localhost:3333/@vite/:path*",
            },
            {
              source: "/@react-refresh",
              destination: "http://localhost:3333/@react-refresh",
            },
            {
              source: "/static/:path*",
              destination: "http://localhost:3333/static/:path*",
            },
            {
              source: "/node_modules/:path*",
              destination: "http://localhost:3333/node_modules/:path*",
            },
            {
              source: "/@fs/:path*",
              destination: "http://localhost:3333/@fs/:path*",
            },
            {
              source: "/sanity.config.ts",
              destination: "http://localhost:3333/sanity.config.ts",
            },
            {
              source: "/sanity/:path*",
              destination: "http://localhost:3333/sanity/:path*",
            },
          ];
        },
      }
    : {}),
  webpack(config, { isServer, dev }) {
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
