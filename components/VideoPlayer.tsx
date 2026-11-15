import { video } from "@/data/content";
import { withBase } from "@/lib/withBase";
import YouTubeFacade from "./YouTubeFacade";

/** Framed 16:9 intro video. Uses YouTube if `video.youtubeId` is set, otherwise the local file. */
export default function VideoPlayer() {
  return (
    <figure className="rounded-3xl border border-line bg-surface p-2 shadow-[0_30px_80px_-40px_rgb(200_241_105_/_0.25)] sm:p-2.5">
      {/* Window bar */}
      <div className="flex items-center justify-between px-3 pt-1.5 pb-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-accent" />
        </span>
        <span className="font-mono text-[11px] text-muted">
          {video.caption} · {video.duration}
        </span>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface-2">
        {video.youtubeId ? (
          <YouTubeFacade id={video.youtubeId} title={video.label} />
        ) : (
          <video
            className="absolute inset-0 size-full object-cover"
            controls
            playsInline
            preload="none"
            poster={withBase(video.poster)}
            aria-label={video.label}
          >
            <source src={withBase(video.src)} type="video/mp4" />
            {video.captions && (
              <track kind="captions" src={withBase(video.captions)} srcLang="en" label="English" default />
            )}
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <figcaption className="flex items-center gap-2 px-3 pt-3 pb-1.5 text-sm text-muted">
        <span aria-hidden className="size-1.5 rounded-full bg-accent" />
        {video.speedNote}
      </figcaption>
    </figure>
  );
}
