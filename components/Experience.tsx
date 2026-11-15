import { experience } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <SectionHeading id="experience-title" eyebrow={experience.eyebrow} title={experience.title} />

        <ol className="relative space-y-10 border-l border-line pl-7 sm:pl-9">
          {experience.items.map((item, i) => (
            <li key={item.role + item.company} className="relative">
              <span
                aria-hidden
                className={`absolute top-1.5 -left-[33px] size-2.5 rounded-full ring-4 ring-bg sm:-left-[41px] ${
                  i === 0 ? "bg-accent" : "bg-line-strong"
                }`}
              />
              <p className="font-mono text-xs tracking-[0.08em] text-muted">{item.period}</p>
              <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
                {item.role} <span className="text-muted">· {item.company}</span>
              </h3>
              <ul className="mt-4 space-y-2 text-muted">
                {item.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                    {pt}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
