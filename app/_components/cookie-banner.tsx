"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getCookieConsent, setCookieConsent } from "@/lib/cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getCookieConsent() === null) setVisible(true);
  }, []);

  function accept() {
    setCookieConsent("accepted");
    window.dispatchEvent(new Event("cookie-consent"));
    setVisible(false);
  }

  function decline() {
    setCookieConsent("declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border"
      style={{ background: "var(--color-secondary)", boxShadow: "var(--shadow-l)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <div className="flex-1 flex flex-col gap-1">
          <p className="font-medium text-foreground" style={{ fontSize: "0.95rem" }}>
            Ce site utilise des cookies
          </p>
          <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "0.82rem" }}>
            Les cookies nécessaires assurent le bon fonctionnement du site et ne peuvent pas être désactivés.
            Avec votre accord, nous utilisons également Google Analytics pour analyser les visites de manière anonyme.{" "}
            <Link
              href="/mentions-legales#cookies"
              className="underline underline-offset-2 hover:text-primary transition-colors"
            >
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="h-10 px-6 rounded-full border border-border text-foreground font-medium transition-colors hover:bg-accent"
            style={{ fontSize: "0.9rem" }}
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="h-10 px-6 rounded-full bg-primary text-white font-medium transition-opacity hover:opacity-90"
            style={{ fontSize: "0.9rem" }}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
