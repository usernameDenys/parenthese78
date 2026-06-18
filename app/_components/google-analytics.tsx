"use client";

import { useEffect } from "react";
import { getCookieConsent, applyGaConsent } from "@/lib/cookie-consent";

export default function GoogleAnalytics() {
  useEffect(() => {
    const stored = getCookieConsent();
    if (stored) applyGaConsent(stored);

    const onConsent = () => {
      const value = getCookieConsent();
      if (value) applyGaConsent(value);
    };

    window.addEventListener("cookie-consent", onConsent);
    return () => window.removeEventListener("cookie-consent", onConsent);
  }, []);

  return null;
}
