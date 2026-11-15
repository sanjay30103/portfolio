/**
 * Prefix a local file path ("/work/x.svg") with the site's base path.
 * Needed when the site lives in a sub-folder, e.g. GitHub Pages at /portfolio.
 * External URLs and "#anchors" are returned unchanged.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string): string {
  if (!path || !path.startsWith("/") || path.startsWith("//")) return path;
  return BASE + path;
}
