import HeroShop from "../../components/shop/HeroShop";
import CategoryGrid from "../../components/shop/CategoryGrid";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#020B12] text-white">
      {/* Hero */}
      <HeroShop />

      <section className="pb-20 pt-16 sm:pt-20 lg:pb-28">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
          <div className="mb-10 text-center sm:mb-14">
            <span className="inline-block rounded-md border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              Premium Aquarium Store
            </span>

            <h2 className="mt-5 text-3xl font-bold sm:text-5xl lg:text-6xl">
              Shop By
              <span className="text-emerald-400"> Categories</span>
            </h2>
          </div>

          <CategoryGrid />
        </div>
      </section>
    </main>
  );
}
