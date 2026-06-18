import type { Metadata } from "next";
import { Dancing_Script, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "./_components/header";
import Footer from "./_components/footer";
import CookieBanner from "./_components/cookie-banner";
import GoogleAnalytics from "./_components/google-analytics";

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

const BASE_URL = "https://www.parenthese78.fr";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Parenthèse",
  description:
    "Accompagnement périnatal à domicile à Versailles et ses environs. Soins bébé, massages prénataux et postnataux, ateliers — par Faustine, infirmière puéricultrice.",
  url: BASE_URL,
  telephone: "+33622009039",
  email: "contact@parenthese78.fr",
  image: `${BASE_URL}/logo.webp`,
  priceRange: "€€",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Versailles et ses environs (Yvelines, 78)",
  },
  founder: {
    "@type": "Person",
    name: "Faustine Pichon",
    jobTitle: "Infirmière puéricultrice, accompagnante périnatale",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "PARENTHÈSE — Soins bien-être périnataux à domicile",
  description:
    "Accompagnement périnatal à domicile à Versailles et ses environs. Soins bébé, massages prénataux et postnataux, ateliers — par Faustine, infirmière puéricultrice.",

  openGraph: {
    title: "PARENTHÈSE — Soins bien-être périnataux à domicile",
    description:
      "Accompagnement périnatal à domicile à Versailles et ses environs. Soins bébé, massages prénataux et postnataux, ateliers — par Faustine, infirmière puéricultrice.",
    url: BASE_URL,
    siteName: "Parenthèse",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph-image", alt: "Parenthèse — soins périnataux à domicile" }],
  },

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 2000
              });
            `,
          }}
        />
      </head>
      <body className={`${dancingScript.variable} ${cormorant.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <CookieBanner />
        <GoogleAnalytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0BV0R9XZD0"
          strategy="afterInteractive"
        />
        <Script id="ga-config" strategy="afterInteractive">
          {`gtag('js', new Date()); gtag('config', 'G-0BV0R9XZD0');`}
        </Script>
      </body>
    </html>
  );
}
