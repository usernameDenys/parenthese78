"use client";

import Script from "next/script";
import { useState, useEffect } from "react";
import { getCookieConsent } from "@/lib/cookie-consent";

const GA_ID = "G-0BV0R9XZD0";

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === "accepted") setConsented(true);

    function onConsent() {
      if (getCookieConsent() === "accepted") setConsented(true);
    }

    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
