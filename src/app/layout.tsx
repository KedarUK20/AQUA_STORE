import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/src/components/layout/Navbar";

// ✅ SEO Metadata
export const metadata: Metadata = {
  title: "Aquarium Nature Studio",
  description:
    "Luxury aquarium design, aquascaping, maintenance and premium aquatic products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030d18] text-white">
        <Navbar />

        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
