import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a self-contained production build under .next/standalone
  // that can run with `node server.js` without a full node_modules install.
  output: "standalone",
};

export default nextConfig;
