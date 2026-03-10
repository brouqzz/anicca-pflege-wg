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

export const metadata: Metadata = {
  title: "Anicca Pflege WG | Betreutes Wohnen mit Herz",
  description:
    "Premium Pflege-Wohngemeinschaft – Sicherheit und Vertrauen für Ihre Angehörigen. Wir verbinden Geborgenheit mit professioneller Betreuung.",
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
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${sourceSans.variable} flex min-h-screen flex-col font-sans antialiased overflow-x-hidden`}
      >
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
