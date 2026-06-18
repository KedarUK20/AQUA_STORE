import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
// import CraftShowcase from "../components/home/sections/CraftShowcase";
// import DiscoveryEditorial from "../components/home/sections/DiscoveryEditorial";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Services from "../components/home/Services";
import Products from "../components/home/Products";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white overflow-hidden">
      <Navbar />

      <Hero />
     
      {/* <DiscoveryEditorial /> */}

      {/* <CraftShowcase /> */}

      <FeaturedProjects />

      <Services />

      <Products />

      <Testimonials />

      <CTA />

      <Footer />
    </main>
  );
}
