"use client";

import Image from "next/image";
import { useState } from "react";

type Props = { id: string; title: string };

/**
 * Shows a thumbnail + play button and only loads the (heavy) YouTube player
 * after the visitor clicks — keeps the page fast and Lighthouse happy.
 */
export default function YouTubeFacade({ id, title }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="absolute inset-0 size-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className="group absolute inset-0 size-full"
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        unoptimized
        sizes="(min-width: 1024px) 1100px, 100vw"
        className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-full bg-fg text-bg shadow-xl transition-[transform,background-color] group-hover:scale-105 group-hover:bg-accent sm:size-20">
          <svg viewBox="0 0 24 24" className="ml-1 size-6 sm:size-7" fill="currentColor" aria-hidden focusable={false}>
            <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
