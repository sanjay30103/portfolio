/**
 * Helpers for Cloudinary video links like
 * https://res.cloudinary.com/<cloud>/video/upload/v123/name.mp4
 */
const MARKER = "/video/upload/";

export function isCloudinaryVideo(src: string): boolean {
  return src.includes("res.cloudinary.com") && src.includes(MARKER);
}

/** Insert a transformation (e.g. "q_auto") right after /video/upload/. */
function withTransform(src: string, transform: string): string {
  return src.replace(MARKER, `${MARKER}${transform}/`);
}

/** Smaller file, same quality to the eye (Cloudinary picks the best compression). */
export function cloudinaryVideoUrl(src: string): string {
  return isCloudinaryVideo(src) ? withTransform(src, "q_auto") : src;
}

/** Cover image taken from the video at 1 second, max 1280px wide, auto format. */
export function cloudinaryPosterUrl(src: string): string {
  if (!isCloudinaryVideo(src)) return "";
  return withTransform(src, "so_1,w_1280,c_limit,q_auto,f_auto").replace(/\.[a-z0-9]+(\?.*)?$/i, ".jpg");
}
