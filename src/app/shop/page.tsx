import HeroShop from "../../components/shop/HeroShop";
import CategoryGrid from "../../components/shop/CategoryGrid";
import Footer from "../../components/layout/Footer";

export default function ShopPage() {
  return (
    <main className="-mt-24 min-h-screen bg-[#020B12]">
      <HeroShop />


      <Footer className="mt-0" />
    </main>
  );
}