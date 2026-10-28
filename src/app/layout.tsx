import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-provider";
import { RevealProvider } from "@/components/reveal-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SITE } from "@/lib/content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.katilytsy.fi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Personal trainer Kati Lytsy | Energiaa arkeen",
    template: "%s | Kati Lytsy",
  },
  description:
    "Henkilökohtaista valmennusta kiireisille yrittäjille ja johtajille Helsingissä, Vantaalla ja etänä. Pysyviä muutoksia, jotka lisäävät hyvinvointia – ei ikinä sen kustannuksella.",
  keywords: [
    "personal trainer Helsinki",
    "personal trainer Vantaa",
    "johtajavalmennus",
    "etävalmennus",
    "työhyvinvointi",
    "pienryhmävalmennus",
    "Kati Lytsy",
  ],
  authors: [{ name: "Kati Lytsy" }],
  creator: "Kati Lytsy",
  openGraph: {
    type: "website",
    locale: "fi_FI",
    url: siteUrl,
    siteName: "Personal trainer Kati Lytsy",
    title: "Personal trainer Kati Lytsy | Energiaa arkeen",
    description:
      "Autan kiireisiä yrittäjiä pääsemään elämänsä kuntoon – niin että työ, perhe ja oma jaksaminen pysyvät mukana.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Kati Lytsy, personal trainer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal trainer Kati Lytsy",
    description:
      "Henkilökohtaista valmennusta kiireisille yrittäjille ja johtajille.",
    images: ["/og.jpg"],
  },
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f1ede4",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Personal trainer Kati Lytsy",
  url: siteUrl,
  image: `${siteUrl}/og.jpg`,
  logo: `${siteUrl}/icon.svg`,
  email: SITE.email,
  telephone: "+358408671596",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kalasatamankatu 9A 50",
    postalCode: "00580",
    addressLocality: "Helsinki",
    addressCountry: "FI",
  },
  areaServed: ["Helsinki", "Vantaa"],
  sameAs: [SITE.instagram, SITE.facebook, SITE.linkedin],
  founder: {
    "@type": "Person",
    name: "Kati Lytsy",
    jobTitle: "Personal trainer",
    sameAs: [SITE.instagram, SITE.linkedin],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fi"
      className={`${poppins.variable} ${manrope.variable} ${instrument.variable}`}
    >
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          Siirry sisältöön
        </a>
        <CartProvider>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
        </CartProvider>
        <RevealProvider />
      </body>
    </html>
  );
}
