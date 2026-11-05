import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const starterRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  transpilePackages: ["@entor/theme", "@entor/ui"],
  turbopack: {
    root: starterRoot,
  },
};

export default nextConfig;
