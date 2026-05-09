export type ConsentValue = "accepted" | "declined";
const KEY = "parenthese_consent";

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
