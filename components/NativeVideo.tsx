"use client";

import { useRef, useState } from "react";

type Props = { src: string; poster?: string; captions?: string; label: string };

/**
 * Plain HTML5 video with our own big play button in the middle.
 * Browser controls appear only after the video starts.
 * preload="none" = nothing is downloaded until the visitor presses play.
 */
export default function NativeVideo({ src, poster, captions, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    setStarted(true);
    ref.current?.play().catch(() => {
      /* if the browser blocks play(), the controls are now visible to retry */
    });
  };

  return (
    <>
      <video
        ref={ref}
        className="absolute inset-0 size-full bg-surface-2 object-cover"
        controls={started}
        playsInline
        preload="none"
        poster={poster || undefined}
        aria-label={label}
        onPlay={() => setStarted(true)}
      >
        <source src={src} type="video/mp4" />
        {captions && <track kind="captions" src={captions} srcLang="en" label="English" default />}
        Your browser does not support the video tag.
      </video>

      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play video: ${label}`}
          className="group absolute inset-0 grid place-items-center bg-black/10 transition-colors hover:bg-black/0"
        >
          <span className="grid size-16 place-items-center rounded-full bg-fg text-bg shadow-xl transition-[transform,background-color] group-hover:scale-105 group-hover:bg-accent sm:size-20">
            <svg viewBox="0 0 24 24" className="ml-1 size-6 sm:size-7" fill="currentColor" aria-hidden focusable={false}>
              <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
            </svg>
          </span>
        </button>
      )}
    </>
  );
}
