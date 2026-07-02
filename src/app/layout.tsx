import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import { CartProvider } from "@/src/context/CartContext";

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
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-[#030d18] text-white">
        <CartProvider>
          <Navbar />

          <main className="pt-24">{children}</main>
          <Footer />

          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#04111f",
                color: "#ffffff",
                border: "1px solid rgba(111,255,233,0.25)",
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
