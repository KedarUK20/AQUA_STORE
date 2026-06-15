import "./globals.css";
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";

// ✅ Body font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

// ✅ Heading font
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Aquarium Nature Studio | Premium Aquascaping",
  description:
    "Premium aquarium design, aquascaping, curated aquatic products, and maintenance for refined living spaces.",
  keywords: [
    "aquarium",
    "aquascaping",
    "fish tank design",
    "aquarium plants",
    "aquarium shop",
  ],
  authors: [{ name: "Aquarium Nature Studio" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body
        className="
          bg-[#071a1f]
          text-white
          font-sans
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}