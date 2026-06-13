import type { Metadata } from "next";

import DiscoverHero from "../../components/discover/DiscoverHero";
import CTA from "../../components/home/CTA";
import CraftShowcase from "../../components/home/sections/CraftShowcase";
import DiscoveryEditorial from "../../components/home/sections/DiscoveryEditorial";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";

export const metadata: Metadata = {
  title: "Discover | Aquarium Nature Studio",
  description:
    "Explore the nature-led philosophy behind premium aquascaping, planted aquariums, Iwagumi layouts, and living aquarium design.",
};

export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white overflow-hidden">
      <Navbar />
      <DiscoverHero />
      <DiscoveryEditorial />
      <CraftShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
