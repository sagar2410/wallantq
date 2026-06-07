import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-wallantq.netlify.app"),
  title: "Wallantq Gallery — Premium Handcrafted Dimensional Wood Relief Art",
  description:
    "Wallantq Gallery — premium handcrafted dimensional wood relief art. Each piece is hand-painted with a protective PU coat and curated to bring a lasting, quiet presence to refined spaces. Enquire for price and availability.",
  icons: {
    icon: "/assets/logo/full-color.jpg",
    apple: "/assets/logo/full-color.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
