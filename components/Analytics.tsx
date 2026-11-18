import Script from "next/script";

/**
 * Google tag (GA4), exactly as Google provides it.
 * Loaded after the page is interactive so it doesn't slow the first paint.
 */
export default function Analytics({ id }: { id: string }) {
  if (!id) return null;

  return (
    <>
      <Script id="google-tag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=${id}`} strategy="afterInteractive" />
    </>
  );
}
