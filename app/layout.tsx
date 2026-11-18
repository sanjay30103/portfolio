import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/components/Analytics";
import { site } from "@/data/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// The site may live in a sub-folder (GitHub Pages: /portfolio). Next.js already adds that
// sub-folder to image URLs, so metadataBase is just the origin and page URLs are written in full.
const siteOrigin = new URL(site.url).origin;
const homeUrl = `${site.url}/`;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Web Developer",
    "WordPress Developer",
    "Next.js Developer",
    "SEO",
    "Technical SEO",
    "Local SEO",
    "Speed Optimization",
    site.name,
  ],
  alternates: { canonical: homeUrl },
  openGraph: {
    type: "website",
    url: homeUrl,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        {children}
        <Analytics id={site.googleTagId} />
      </body>
    </html>
  );
}
