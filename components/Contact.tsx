import { contact, links } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { CalendarIcon, GitHubIcon, LinkedInIcon, MailIcon, WhatsAppIcon } from "./Icons";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 sm:py-14 lg:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          />

          <p className="relative font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span aria-hidden className="mr-2 text-accent">
              ●
            </span>
            {contact.eyebrow}
          </p>
          <h2
            id="contact-title"
            className="relative mx-auto mt-4 max-w-3xl text-3xl font-medium tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl"
          >
            {contact.title}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">{contact.text}</p>

          <div className="relative mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent"
            >
              <WhatsAppIcon />
              {contact.whatsappCta}
              <span className="sr-only">(opens WhatsApp in a new tab)</span>
            </a>
            <a
              href={`mailto:${links.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-fg/40 hover:bg-surface-2"
            >
              <MailIcon />
              {contact.emailCta}
            </a>
            <a
              href={links.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-fg/40 hover:bg-surface-2"
            >
              <CalendarIcon />
              {contact.callCta}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>

          <div className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${links.email}`}
              className="font-mono text-sm break-all text-muted underline-offset-4 transition-colors hover:text-fg hover:underline"
            >
              {links.email}
            </a>
            <span aria-hidden className="hidden h-4 w-px bg-line-strong sm:block" />
            <div className="flex gap-2">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <LinkedInIcon />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
