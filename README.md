# Surendra Singh - Portfolio

One-page portfolio built with Next.js (App Router) + Tailwind CSS, exported as a **static site** for Hostinger shared hosting.

## Branches

| Branch   | What's in it                                   |
| -------- | ---------------------------------------------- |
| `source` | This Next.js source code                       |
| `main`   | Static build for the domain root (Hostinger)   |
| `gh-pages` | Static build for `/portfolio` (GitHub Pages) |

## Edit content

All text lives in [`data/content.ts`](data/content.ts). Replace anything in `[brackets]`.

- Resume → `public/resume.pdf`
- Project screenshots → `public/work/` (compress to WebP, < 200 KB)
- Intro video → `public/video/intro.mp4` (cover image: `public/video/poster.jpg`)

## Run locally

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

This builds the site twice and pushes only static files: `main` (for Hostinger, pulled into `public_html`) and `gh-pages` (for https://sanjay30103.github.io/portfolio/).

After changing code, also save the source:

```bash
git add -A && git commit -m "Update content" && git push origin source
```
