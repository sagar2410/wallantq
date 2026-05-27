import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Marquee from "@/components/Marquee";
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
  title: "Wallantq Gallery — Premium 10-Layer MDF Handcrafted Wall Art",
  description:
    "Wallantq Gallery — premium 10-layer MDF handcrafted wall art made in Surat, India. Each piece is hand-painted with protective PU coat. Fully customizable. Enquire for price and availability.",
  keywords: ["10-layer MDF wall art", "handcrafted wall art", "mandala wall art", "premium wall art India", "MDF wall art Surat", "custom wall art"],
  icons: {
    icon: "/assets/logo/full-color.jpg",
    apple: "/assets/logo/full-color.jpg",
  },
  openGraph: {
    title: "Wallantq Gallery — Premium 10-Layer MDF Handcrafted Wall Art",
    description: "Premium 10-layer MDF handcrafted wall art made in Surat, India. Curated heirloom wall art.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>
        <ServiceWorkerRegistration />
        {/* Marquee — fixed at very top, hidden on mobile */}
        <div className="mob-hide" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 60 }}>
          <Marquee />
        </div>
        {/* TopBar — fixed below marquee */}
        <TopBar />
        {/* Main content — no top padding; hero pages are full-bleed */}
        <main>{children}</main>
      </body>
    </html>
  );
}
