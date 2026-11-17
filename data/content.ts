/**
 * ALL website text lives in this file.
 * Edit anything here - you never need to touch the components.
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
  title: "Surendra Singh - Web Developer (WordPress, Next.js) & SEO",
  description:
    "I build fast websites that rank on Google. Custom WordPress & Next.js development, speed optimization, and technical, on-page & local SEO.",
  locale: "en_IN",
  // Location shown in schema (optional). Example: "Jaipur, India"
  location: "Delhi, India",
};

/* ------------------------------------------------------------------ */
/* Social / contact links                                              */
/* ------------------------------------------------------------------ */
export const links = {
  email: "surendrasinghdev383@gmail.com",
  linkedin: "https://www.linkedin.com/in/[your-handle]",
  github: "https://github.com/[your-handle]",
  calendly: "https://calendly.com/[your-handle]",
  resume: "/resume/surendra-singh-resume.pdf", // regenerate with: npm run resume
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
    "[Add one personal line here - e.g. where you’re based, what you enjoy, or what you’re learning right now.]",
  ],
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "130+", label: "Websites delivered" },
    { value: "20+", label: "Happy clients" },
  ],
};

/* ------------------------------------------------------------------ */
/* Intro video (shown on the right side of the Hero)                   */
/* Use a horizontal (16:9) video.                                      */
/*                                                                     */
/* Option A (current): Cloudinary                                      */
/*   Upload the video to Cloudinary and paste its .mp4 link in `src`.  */
/*   Compression and the cover image are made automatically from the   */
/*   link - leave `poster` empty. When you shoot a new video, just     */
/*   replace `src` (and `duration`).                                   */
/*                                                                     */
/* Option B: a file in /public/video, e.g. src: "/video/intro.mp4"     */
/*   and poster: "/video/poster.jpg" (keep the poster under 200 KB).   */
/*                                                                     */
/* Option C: YouTube - set `youtubeId` (part after "v=" in the link).  */
/*   YouTube shows its own controls and logo, so it's off for now.     */
/*                                                                     */
/* Subtitles (optional): captions: "/video/intro.vtt"                  */
/* ------------------------------------------------------------------ */
export const video = {
  caption: "Meet me in a minute",
  speedNote: "Lighthouse 95+ on every build",
  src: "https://res.cloudinary.com/bqylneie/video/upload/v1794928476/Surendra_portfolio.mp4",
  poster: "", // empty = auto cover image from the Cloudinary video
  captions: "",
  youtubeId: "", // old YouTube video: "kp8aojxzvW8"
  label: "Intro video - Surendra Singh",
  duration: "1:10",
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
/* Screenshots live in /public/work as WebP (1200px wide, ~35 KB).     */
/* ------------------------------------------------------------------ */
export const work = {
  eyebrow: "Selected work",
  title: "Recent projects.",
  description: "A few builds, what was wrong, and what changed after.",
  projects: [
    {
      name: "Wishtml",
      image: "/work/wishtml-marketing-agency-website-nextjs.webp",
      imageAlt:
        "Wishtml marketing agency website homepage with the headline 'Customers are searching. Let them find you.' and cards for local SEO, restaurant websites and SEO reports",
      tags: ["Next.js", "WordPress to Next.js", "Website redesign"],
      problem: "The old WordPress site was slow, and its design didn't show the quality of the agency's work.",
      solution: "Redesigned the site and rebuilt it from scratch in Next.js, with clean, lightweight code and SEO-ready pages.",
      result: "A modern, much faster website that presents the agency's website, SEO and ads services properly.",
      liveUrl: "https://wishtml.com/",
    },
    {
      name: "Vincenzo Capuano",
      image: "/work/vincenzo-capuano-pizza-restaurant-website-react.webp",
      imageAlt:
        "Vincenzo Capuano pizzeria website hero with a video of the 2022 World Pizza Champion, Zomato, Swiggy and Book a Table buttons",
      tags: ["React", "Wix to React", "SEO"],
      problem: "The site was built on Wix: slow, and the design didn't match a world pizza champion's brand.",
      solution: "Designed a new site in React with a video hero, table booking and Zomato/Swiggy ordering, and handled the SEO.",
      result: "A fast, premium site that fits the brand, with a 100/100 Lighthouse SEO score.",
      liveUrl: "https://vincenzocapuano.in/",
    },
    {
      name: "itDeal SG",
      image: "/work/itdealsg-flash-deals-ecommerce-woocommerce.webp",
      imageAlt:
        "itDeal SG electronics store with product search, category menu, today's flash deals with a countdown timer and discounted products, and weekly bestsellers",
      tags: ["WooCommerce", "Custom theme", "Custom plugins", "B2B"],
      problem: "The store had to serve both shoppers and business buyers on one platform, without getting slow.",
      solution: "Built a custom WordPress theme and custom plugins, including smart product search and a custom checkout flow, plus a B2B 'For Business' section.",
      result: "One fast platform for retail and B2B orders, with a 100/100 Lighthouse accessibility score.",
      liveUrl: "https://itdealsg.com/",
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
      period: "Present",
      role: "Web Developer",
      company: "Digityza",
      location: "Toronto, Canada · Remote",
      points: [
        "WordPress, Next.js and Shopify websites for healthcare and service businesses",
        "Lightweight custom themes and plugins, and Claude AI automation for blogs and repetitive tasks",
        "Speed, SEO, hosting and deployment. Won the company's Best Website Design Award",
      ],
    },
    {
      period: "Sep 2022 - Dec 2025",
      role: "Web Developer",
      company: "Webdrop",
      location: "Calgary, Canada · Remote",
      points: [
        "WordPress and WooCommerce websites for businesses across many industries",
        "Custom themes and plugins, Figma to responsive builds, payment integrations",
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
