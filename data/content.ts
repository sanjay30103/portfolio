/**
 * ALL website text lives in this file.
 * Edit anything here — you never need to touch the components.
 *
 * Anything in [square brackets] is a placeholder: replace it with your real info.
 */

/* ------------------------------------------------------------------ */
/* Site / SEO                                                          */
/* ------------------------------------------------------------------ */
export const site = {
  name: "Surendra Singh",
  initials: "SS",
  role: "Web Developer & SEO",
  // TODO: replace with your real domain (no trailing slash). Used for SEO, sitemap & Open Graph.
  url: "https://your-domain.com",
  title: "Surendra Singh — Web Developer (WordPress, Next.js) & SEO",
  description:
    "I build fast websites that rank on Google. Custom WordPress & Next.js development, speed optimization, and technical, on-page & local SEO.",
  locale: "en_IN",
  // Location shown in schema (optional). Example: "Jaipur, India"
  location: "[City, Country]",
};

/* ------------------------------------------------------------------ */
/* Social / contact links                                              */
/* ------------------------------------------------------------------ */
export const links = {
  email: "surendrasinghdev383@gmail.com",
  linkedin: "https://www.linkedin.com/in/[your-handle]",
  github: "https://github.com/[your-handle]",
  calendly: "https://calendly.com/[your-handle]",
  resume: "/resume.pdf", // put your resume at /public/resume.pdf
};

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */
export const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export const hero = {
  eyebrow: "Hi, I'm Surendra Singh · Web Developer & SEO",
  headline: "I build fast websites",
  headlineAccent: "that rank on Google.",
  subtext:
    "WordPress and Next.js sites that load in a blink, and the SEO to put them where your customers are searching.",
  primaryCta: "Download Resume",
  secondaryCta: "Work with me",
  techLine: ["WordPress", "Next.js", "SEO"],
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */
export const about = {
  eyebrow: "About",
  title: "Developer brain, marketer’s eye.",
  intro: [
    "I’m Surendra, a web developer who builds with WordPress and Next.js and thinks about SEO from the very first line of code.",
    "Most sites look fine but load slowly and stay invisible on Google. I fix both: clean, fast builds plus the technical and on-page SEO that helps them get found.",
    "[Add one personal line here — e.g. where you’re based, what you enjoy, or what you’re learning right now.]",
  ],
  stats: [
    { value: "[X]+", label: "Years of experience" },
    { value: "[X]+", label: "Websites delivered" },
    { value: "[X]+", label: "Happy clients" },
  ],
};

/* ------------------------------------------------------------------ */
/* Intro video (shown on the right side of the Hero)                   */
/* Use a horizontal (16:9) video.                                      */
/*                                                                     */
/* Option A (default): your own video file                             */
/*   1. Put your video at /public/video/intro.mp4                      */
/*   2. (Optional) Put a cover image at /public/video/poster.jpg and   */
/*      change `poster` below. Keep it small (100–200 KB) — it shows   */
/*      on the first screen, so a heavy image slows the page down.     */
/*   3. (Optional) Add subtitles at /public/video/intro.vtt and set    */
/*      `captions: "/video/intro.vtt"`                                 */
/*                                                                     */
/* Option B: YouTube                                                   */
/*   Set `youtubeId` (the part after "v=" in the YouTube link).        */
/*   When it is set, YouTube is used instead of the file.              */
/* ------------------------------------------------------------------ */
export const video = {
  caption: "Meet me in 2 min",
  speedNote: "Lighthouse 95+ on every build",
  src: "/video/intro.mp4",
  poster: "/video/poster.svg",
  captions: "", // e.g. "/video/intro.vtt"
  youtubeId: "", // e.g. "dQw4w9WgXcQ"
  label: "Intro video — Surendra Singh",
  duration: "[1:30]",
};

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */
export const services = {
  eyebrow: "Services",
  title: "Two things, done properly.",
  description:
    "A great website needs to be built well and found easily. I handle both, so you don’t need two different people.",
  pillars: [
    {
      number: "01",
      name: "Build",
      tagline: "Fast, clean websites that are easy to manage.",
      items: [
        "Custom WordPress websites",
        "Next.js websites & web apps",
        "Figma to pixel-perfect code",
        "Speed & Core Web Vitals optimization",
      ],
    },
    {
      number: "02",
      name: "Rank",
      tagline: "SEO that gets the right people to your site.",
      items: [
        "Technical SEO audits & fixes",
        "On-page SEO & content structure",
        "Local SEO",
        "Google Business Profile setup & optimization",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Work / projects                                                     */
/* Put real screenshots in /public/work and update `image` below.      */
/* ------------------------------------------------------------------ */
export const work = {
  eyebrow: "Selected work",
  title: "Recent projects.",
  description: "A few builds, what was wrong, and what changed after.",
  projects: [
    {
      name: "[Project Name 1]",
      image: "/work/project-1.svg",
      imageAlt: "[Screenshot of Project Name 1 homepage]",
      tags: ["WordPress", "Speed optimization", "Technical SEO"],
      problem: "[Problem: e.g. Slow site, high bounce rate, not showing on Google]",
      solution: "[What I did: e.g. Rebuilt the theme, optimized images, fixed indexing]",
      result: "[Result: e.g. PageSpeed 95+, traffic up X%]",
      liveUrl: "https://your-project-1.com", // TODO: put the real live URL here
    },
    {
      name: "[Project Name 2]",
      image: "/work/project-2.svg",
      imageAlt: "[Screenshot of Project Name 2 homepage]",
      tags: ["Next.js", "Figma to code"],
      problem: "[Problem: e.g. Outdated design, hard to update content]",
      solution: "[What I did: e.g. Built a new Next.js site from the Figma design]",
      result: "[Result: e.g. PageSpeed 95+, launched in X weeks]",
      liveUrl: "https://your-project-2.com", // TODO: put the real live URL here
    },
    {
      name: "[Project Name 3]",
      image: "/work/project-3.svg",
      imageAlt: "[Screenshot of Project Name 3 homepage]",
      tags: ["Local SEO", "Google Business Profile"],
      problem: "[Problem: e.g. Local business invisible in Google Maps]",
      solution: "[What I did: e.g. Optimized GBP, local pages and citations]",
      result: "[Result: e.g. Top 3 in Maps for main keyword]",
      liveUrl: "https://your-project-3.com", // TODO: put the real live URL here
    },
  ],
  labels: {
    problem: "Problem",
    solution: "What I did",
    result: "Result",
    live: "View live site",
  },
};

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */
export const experience = {
  eyebrow: "Experience",
  title: "Where I’ve been working.",
  items: [
    {
      period: "[Month Year] — Present",
      role: "Web Developer",
      company: "[Company]",
      points: [
        "[What you build/own here — e.g. company websites on WordPress]",
        "[A responsibility — e.g. speed optimization & technical SEO]",
        "[An achievement — add a real number if you have one]",
      ],
    },
    {
      period: "[Year] — Present",
      role: "Freelance Web Developer & SEO",
      company: "Self-employed",
      points: [
        "[Type of clients — e.g. local businesses, startups]",
        "[What you deliver — e.g. WordPress / Next.js sites, local SEO]",
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */
export const contact = {
  eyebrow: "Contact",
  title: "Let’s build something that ranks.",
  text: "Hiring for a developer role, or need a website that actually brings in customers? Send me an email or book a quick call.",
  emailCta: "Email me",
  callCta: "Book a call",
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */
export const footer = {
  tagline: "Fast websites that rank on Google.",
};
