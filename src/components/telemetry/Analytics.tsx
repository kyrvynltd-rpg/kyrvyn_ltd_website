"use client";

import Script from "next/script";

export function Analytics() {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim();

  return (
    <>
      {plausibleDomain && (
        <Script
          src="https://plausible.io/js/script.js"
          data-domain={plausibleDomain}
          strategy="afterInteractive"
        />
      )}
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{send_page_view:true});`}
          </Script>
        </>
      )}
    </>
  );
}
