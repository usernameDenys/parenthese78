export type ConsentValue = "accepted" | "declined";
const KEY = "parenthese_consent";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export function getCookieConsent(): ConsentValue | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${KEY}=([^;]+)`));
  return match ? (match[1] as ConsentValue) : null;
}

export function setCookieConsent(value: ConsentValue) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `${KEY}=${value}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
}

export function applyGaConsent(value: ConsentValue) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("consent", "update", {
    analytics_storage: value === "accepted" ? "granted" : "denied",
  });
}
