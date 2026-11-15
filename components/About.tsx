import { about } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />

        <div>
          <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {about.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="text-sm text-muted">{s.label}</dt>
                <dd className="mt-2 text-3xl font-medium tracking-tight text-fg">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
