import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

export const metadata: Metadata = {
  title: "Beauty Sanctuary | Facials, Body Contouring & Massage | Euless, TX | DFW Metroplex",
  description: "Premier beauty spa in Euless, TX offering anti-aging facials, body contouring, slimming treatments & massage therapy. Serving Arlington, Irving, Grand Prairie, Fort Worth, Dallas & DFW. Licensed esthetician Carmen Marin. Book now!",
  keywords: "facials Euless TX, body contouring Euless, massage therapy Euless, anti-aging treatments DFW, slimming treatments Arlington, beauty spa Irving, esthetician Grand Prairie, facial treatments Fort Worth, body sculpting Dallas, spa services DFW metroplex",
  openGraph: {
    title: "Beauty Sanctuary by Carmen Marin | Facials & Body Contouring | Euless, TX",
    description: "Experience luxury facials, body contouring, and massage therapy in Euless. Serving the entire DFW metroplex with advanced beauty treatments.",
    url: "https://beautysanctuarybymarin.com",
    siteName: "Beauty Sanctuary",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://beautysanctuarybymarin.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaMarkup type="LocalBusiness" data={{}} />
        <SchemaMarkup type="Organization" data={{}} />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
