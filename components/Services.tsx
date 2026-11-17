import { services } from "@/data/content";
import { CheckIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-12 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="services-title"
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
          {services.pillars.map((p) => (
            <article
              key={p.name}
              className="group rounded-3xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong sm:p-9"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{p.name}</h3>
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-accent">
                  {p.number}
                </span>
              </div>
              <p className="mt-3 text-muted">{p.tagline}</p>

              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-fg">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
