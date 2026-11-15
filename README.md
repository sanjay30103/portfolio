# Surendra Singh — Portfolio

One-page portfolio built with Next.js (App Router) + Tailwind CSS, exported as a **static site** for Hostinger shared hosting.

## Branches

| Branch   | What's in it                                   |
| -------- | ---------------------------------------------- |
| `source` | This Next.js source code                       |
| `main`   | Only the built static files (what Hostinger serves) |

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

This builds the site into `/out` and pushes only those static files to the `main` branch. Hostinger's Git deployment pulls `main` into `public_html`.

After changing code, also save the source:

```bash
git add -A && git commit -m "Update content" && git push origin source
```
