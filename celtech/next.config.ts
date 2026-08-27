import type { NextConfig } from "next";

// Set BUILD_EXPORT=1 to produce a fully static HTML export in `out/`
// (real .html files for every route). Otherwise we build a self-contained
// standalone server under .next/standalone (`node server.js`).
const isExport = process.env.BUILD_EXPORT === "1";

const nextConfig: NextConfig = isExport
  ? {
      output: "export",
      images: { unoptimized: true },
    }
  : {
      output: "standalone",
    };

export default nextConfig;
