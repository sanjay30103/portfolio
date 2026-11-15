"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/data/content";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // When the mobile menu opens: focus the first link, close on Escape.
  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile menu if the screen grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const contact = nav[nav.length - 1];
  const mainLinks = nav.slice(0, -1);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5 rounded-full">
          <span
            aria-hidden
            className="grid size-8 place-items-center rounded-full bg-fg font-mono text-[11px] font-semibold text-bg transition-colors group-hover:bg-accent"
          >
            {site.initials}
          </span>
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-surface/80 p-1">
            {mainLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-1.5 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.href}
                className="block rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-colors hover:bg-accent"
              >
                {contact.label}
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={buttonRef}
          type="button"
          className="grid size-10 place-items-center rounded-full border border-line bg-surface text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile navigation */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
          {nav.map((item, i) => (
            <li key={item.href}>
              <a
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base text-fg transition-colors hover:bg-surface"
              >
                {item.label}
                <span aria-hidden className="font-mono text-xs text-muted">
                  0{i + 1}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
