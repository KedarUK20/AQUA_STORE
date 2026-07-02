import Hero from "../components/home/Hero";

import FeaturedProjects from "../components/home/FeaturedProjects";
import Services from "../components/home/Services";
import Products from "../components/home/Products";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <Hero />

      <FeaturedProjects />

      <Services />

      <Products />

      <Testimonials />

      <CTA />
    </div>
  );
}
