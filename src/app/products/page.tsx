import CategoryGrid from "../../components/shop/CategoryGrid";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#020B12] text-white">
      <section className="pb-10 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-md border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              Premium Aquarium Store
            </span>

            <h1 className="mt-6 text-4xl font-bold sm:text-5xl md:text-7xl">
              Shop By
              <span className="text-emerald-400"> Categories</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Browse aquarium plants, fertilizers, fish food, aquascaping
              essentials and accessories.
            </p>
          </div>

          <CategoryGrid />
        </div>
      </section>
    </main>
  );
}
