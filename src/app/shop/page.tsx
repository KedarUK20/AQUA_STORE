import Navbar from "../../components/layout/Navbar";
import HeroShop from "../../components/shop/HeroShop";
import Footer from "../../components/layout/Footer"
import FeaturedProducts from "../../components/home/FeaturedProjects";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#020B12]">

      <Navbar />
      
          
      {/* Hero */}
      <HeroShop />

      <Footer/>  

    </main>
  );
}