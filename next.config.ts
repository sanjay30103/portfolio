import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `npm run build` creates plain HTML/CSS/JS in /out
  // that can be uploaded to any normal (PHP/HTML) hosting like Hostinger.
  output: "export",
  // Each page becomes a folder with index.html (works well on Apache/LiteSpeed).
  trailingSlash: true,
  images: {
    // No Node.js server on static hosting, so images are served as-is.
    // Compress your screenshots (WebP, < 200 KB) before adding them.
    unoptimized: true,
  },
};

export default nextConfig;
