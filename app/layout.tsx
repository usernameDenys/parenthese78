import type { Metadata } from "next";
import { Dancing_Script, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
import CookieBanner from "./_components/cookie-banner";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing-script",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "PARENTHÈSE — Soins bien-être périnataux à domicile",
  description:
    "Accompagnement périnatal à domicile à Versailles et ses environs. Soins bébé, massages prénataux et postnataux, ateliers — par Faustine, infirmière puéricultrice.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${dancingScript.variable} ${cormorant.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
