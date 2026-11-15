import { hero, links } from "@/data/content";
import { ArrowUpRightIcon, DownloadIcon } from "./Icons";
import VideoPlayer from "./VideoPlayer";

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pt-14 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div>
          <p className="font-mono text-xs tracking-[0.08em] text-muted sm:text-sm">{hero.eyebrow}</p>

          <h1
            id="hero-title"
            className="mt-5 text-[2.6rem] leading-[1.02] font-medium tracking-[-0.045em] text-balance sm:text-6xl xl:text-7xl"
          >
            {hero.headline} <span className="text-muted">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted sm:text-lg">{hero.subtext}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={links.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              <DownloadIcon />
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-fg/40 hover:bg-surface"
            >
              {hero.secondaryCta}
              <ArrowUpRightIcon />
            </a>
          </div>

          <ul
            aria-label="Core skills"
            className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs text-muted sm:text-sm"
          >
            {hero.techLine.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-line-strong">
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </div>

        <VideoPlayer />
      </div>
    </section>
  );
}
