import Image from "next/image";
import { work } from "@/data/content";
import { ArrowUpRightIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Work() {
  const { labels } = work;

  return (
    <section id="work" aria-labelledby="work-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="work-title" eyebrow={work.eyebrow} title={work.title} description={work.description} />

        <ul className="mt-12 space-y-5">
          {work.projects.map((p) => (
            <li key={p.name}>
              <article className="group grid overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-line-strong lg:grid-cols-[1.1fr_1fr]">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2 lg:aspect-auto lg:min-h-[340px] lg:border-r lg:border-b-0">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 600px, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
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

                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors hover:border-fg/40 hover:bg-surface-2 lg:mt-auto"
                  >
                    {labels.live}
                    <span className="sr-only">: {p.name} (opens in a new tab)</span>
                    <ArrowUpRightIcon />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
