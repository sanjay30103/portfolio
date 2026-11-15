import { footer, links, site } from "@/data/content";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Email", href: `mailto:${links.email}`, Icon: MailIcon, external: false },
    { label: "LinkedIn", href: links.linkedin, Icon: LinkedInIcon, external: true },
    { label: "GitHub", href: links.github, Icon: GitHubIcon, external: true },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            © {year} · {footer.tagline}
          </p>
        </div>
        <ul className="flex gap-2">
          {socials.map(({ label, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={external ? `${label} (opens in a new tab)` : label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid size-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-fg"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
