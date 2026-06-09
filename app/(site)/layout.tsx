import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/TopBar";
import Marquee from "@/components/Marquee";
import { getSiteSettings } from "@/lib/utils/siteSettings";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-wallantq.netlify.app"),
  title: "Wallantq Gallery — Premium Handcrafted Dimensional Wood Relief Art",
  description:
    "Wallantq Gallery — premium handcrafted dimensional wood relief art. Each piece is hand-painted with a protective PU coat and curated to bring a lasting, quiet presence to refined spaces. Enquire for price and availability.",
  keywords: ["dimensional wood relief art", "handcrafted wall art", "mandala wall art", "premium wall art India", "sculptural wood relief", "custom wall art"],
  icons: {
    icon: "/assets/logo/full-color.jpg",
    apple: "/assets/logo/full-color.jpg",
  },
  openGraph: {
    title: "Wallantq Gallery — Premium Handcrafted Dimensional Wood Relief Art",
    description: "Premium handcrafted dimensional wood relief art. Curated heirloom wall art for modern collector-style interiors.",
    images: [
      {
        url: "/assets/logo/full-color.jpg",
        alt: "Wallantq Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/logo/full-color.jpg"],
  },
};

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings();

  return (
    <div className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <link rel="preconnect" href="https://assets.wallantq.com" />
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://drive.google.com" />
      <ServiceWorkerRegistration />
      {/* Marquee — fixed at very top, visible on all screen sizes */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60 }}>
        <Marquee items={settings.marqueeItems} />
      </div>
      {/* TopBar — fixed below marquee */}
      <TopBar />
      {/* Main content — no top padding; hero pages are full-bleed */}
      <main>{children}</main>
    </div>
  );
}
