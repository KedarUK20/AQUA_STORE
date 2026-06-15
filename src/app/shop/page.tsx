import Navbar from "../../components/layout/Navbar";

import HeroShop from "../../components/shop/HeroShop";
import CategorySidebar from "../../components/shop/CategorySidebar";
import CategoryGrid from "../../components/shop/CategoryGrid";
// import FeatureBar from "../../components/shop/FeatureBar";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#06141B] text-white">
     
      <Navbar />

      <div className="px-6 py-4">
        <HeroShop />

        <div className="flex gap-6 mt-6">
          {/* Sidebar */}
          <CategorySidebar />

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">
              Shop by Categories
            </h2>

            <CategoryGrid />

            {/* <FeatureBar /> */}
          </div>
        </div>
      </div>
    </div>
  );
}