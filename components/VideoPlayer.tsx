import { preconnect } from "react-dom";
import { video } from "@/data/content";
import { cloudinaryPosterUrl, cloudinaryVideoUrl, isCloudinaryVideo } from "@/lib/cloudinary";
import { withBase } from "@/lib/withBase";
import NativeVideo from "./NativeVideo";
import YouTubeFacade from "./YouTubeFacade";

/**
 * Framed 16:9 intro video.
 * YouTube if `video.youtubeId` is set, otherwise our own HTML5 player
 * (Cloudinary link or a file in /public).
 */
export default function VideoPlayer() {
  const cloud = isCloudinaryVideo(video.src);
  // Start the connection to Cloudinary early so the cover image shows fast.
  if (cloud) preconnect("https://res.cloudinary.com");

  const src = cloud ? cloudinaryVideoUrl(video.src) : withBase(video.src);
  const poster = video.poster ? withBase(video.poster) : cloud ? cloudinaryPosterUrl(video.src) : undefined;

  return (
    <figure className="rounded-3xl border border-line bg-surface p-2 shadow-[0_30px_80px_-40px_rgb(200_241_105_/_0.25)] sm:p-2.5">
      {/* Window bar */}
      <div className="flex items-center justify-between px-3 pt-1.5 pb-2.5">
        {/* Three dots: green light moves 1 → 2 → 3 on a loop */}
        <span aria-hidden className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="relative size-2.5 rounded-full bg-line-strong">
              <span className="dot-light absolute inset-0 rounded-full bg-accent" style={{ animationDelay: `${i * 0.6}s` }} />
            </span>
          ))}
        </span>
        <span className="font-mono text-[11px] text-muted">
          {video.caption} · {video.duration}
        </span>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface-2">
        {video.youtubeId ? (
          <YouTubeFacade id={video.youtubeId} title={video.label} />
        ) : (
          <NativeVideo
            src={src}
            poster={poster}
            captions={video.captions ? withBase(video.captions) : undefined}
            label={video.label}
          />
        )}
      </div>

      <figcaption className="flex items-center gap-2 px-3 pt-3 pb-1.5 text-sm text-muted">
        <span aria-hidden className="size-1.5 rounded-full bg-accent" />
        {video.speedNote}
      </figcaption>
    </figure>
  );
}
