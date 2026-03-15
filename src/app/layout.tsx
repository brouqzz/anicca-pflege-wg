import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";
import "./globals.css";

/* Serif: Headlines – wirkt vertrauensvoll und ruhig */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Sans: Fließtext – sehr gut lesbar */
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://anicca.berlin";

export const metadata: Metadata = {
  title: "Pflege WG Berlin | Anicca Pflege WG – Familiär wohnen, professionell versorgt",
  description:
    "Pflege WG Berlin-Tiergarten: familiäre Pflege-Wohngemeinschaft mit 5 Bewohnern. Kurzfristige Aufnahme, ambulante Pflege (SGB V/XI), Mehrsprachig. Pohlstraße 49 – Anschlussversorgung nach Krankenhaus.",
  keywords: [
    "Pflege WG Berlin",
    "Pflege WG",
    "Pflege Berlin",
    "Pflegewohngemeinschaft Berlin",
    "Pflege-Wohngemeinschaft Berlin",
    "Senioren WG Berlin",
    "Betreutes Wohnen Berlin",
    "Pflege WG Tiergarten",
    "kurzfristige Pflege Berlin",
    "ambulante Pflege Berlin",
    "Anicca Pflege WG",
    "Seniorenbetreuung Berlin",
    "Pflegeplatz Berlin",
  ],
  openGraph: {
    title: "Pflege WG Berlin | Anicca Pflege WG – Familiär wohnen, professionell versorgt",
    description:
      "Familiäre Pflege-Wohngemeinschaft in Berlin-Tiergarten. 5 Bewohner, kurzfristige Aufnahme, ambulante Pflege. Pohlstraße 49.",
    url: SITE_URL,
    siteName: "Anicca Pflege WG",
    locale: "de_DE",
    type: "website",
  },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

/** Viewport für Handy: korrekte Skalierung, kein versehentliches Zoomen */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SeniorHousing",
    name: "Anicca Pflege WG",
    description: "Familiäre Pflege-Wohngemeinschaft in Berlin-Tiergarten. Pflege WG mit 5 Bewohnern, kurzfristige Aufnahme, ambulante Pflege.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pohlstraße 49",
      addressLocality: "Berlin",
      postalCode: "10785",
      addressRegion: "Berlin",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.504,
      longitude: 13.367,
    },
    telephone: "+49-152-29451581",
    email: "nika.chekurda@icloud.com",
    areaServed: { "@type": "City", name: "Berlin" },
    priceRange: "€€",
  };

  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} flex min-h-screen flex-col font-sans antialiased overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <IntroOverlay />
        <div id="page-content" className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
