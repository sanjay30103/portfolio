import Image from "next/image";
import { work } from "@/data/content";
import { withBase } from "@/lib/withBase";
import { ArrowUpRightIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

// A different soft tint behind each project's window
const PANEL_TINTS = ["#1b2410", "#101a24", "#22160f"];

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function Work() {
  const { labels } = work;

  return (
    <section id="work" aria-labelledby="work-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="work-title" eyebrow={work.eyebrow} title={work.title} description={work.description} />

        <ul className="mt-12 space-y-5">
          {work.projects.map((p, i) => (
            <li key={p.name}>
              <article className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong lg:grid-cols-[1.1fr_1fr]">
                {/* Tinted panel with a dot grid, and the screenshot inside a Mac-style browser window */}
                <div
                  className="flex items-center justify-center border-b border-line p-5 sm:p-8 lg:border-r lg:border-b-0 lg:p-10"
                  style={{
                    backgroundImage: `radial-gradient(rgb(255 255 255 / 0.06) 1.5px, transparent 1.5px), linear-gradient(135deg, ${PANEL_TINTS[i % PANEL_TINTS.length]}, #0f0f11)`,
                    backgroundSize: "22px 22px, 100% 100%",
                  }}
                >
                  <div className="w-full overflow-hidden rounded-xl border border-white/10 bg-[#141417] shadow-[0_24px_60px_-20px_rgb(0_0_0_/_0.7)] transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3 border-b border-white/10 px-3 py-2">
                      <span aria-hidden className="flex shrink-0 gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                        <span className="size-2.5 rounded-full bg-[#febc2e]" />
                        <span className="size-2.5 rounded-full bg-[#28c840]" />
                      </span>
                      <span className="mx-auto min-w-0 truncate rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-muted">
                        {hostname(p.liveUrl)}
                      </span>
                      <span aria-hidden className="w-[42px] shrink-0" />
                    </div>
                    <Image
                      src={withBase(p.image)}
                      alt={p.imageAlt}
                      width={1200}
                      height={680}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col p-6 sm:p-8">
                  <ul aria-label="Tags" className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] sm:text-3xl">{p.name}</h3>

                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                        {labels.problem}
                      </dt>
                      <dd className="mt-1 text-fg/90">{p.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                        {labels.solution}
                      </dt>
                      <dd className="mt-1 text-fg/90">{p.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                        {labels.result}
                      </dt>
                      <dd className="mt-1 font-medium text-fg">{p.result}</dd>
                    </div>
                  </dl>

                  {/* mt-auto pushes the button to the bottom; pt-8 always keeps a gap above it */}
                  <div className="mt-auto pt-8">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors hover:border-fg/40 hover:bg-surface-2"
                    >
                      {labels.live}
                      <span className="sr-only">: {p.name} (opens in a new tab)</span>
                      <ArrowUpRightIcon />
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
