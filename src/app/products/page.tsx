import Footer from "../../components/layout/Footer";
import CategoryGrid from "../../components/shop/CategoryGrid";

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://blog.hannainst.com/hubfs/aquascaping-305878-edited.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/75" />

      <section className="relative z-10 px-4 pb-6 pt-8 sm:px-6 sm:pb-8 sm:pt-10 lg:px-10">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-8 rounded-2xl border border-cyan-900/50 bg-black/30 backdrop-blur-md px-5 py-7 text-center shadow-lg sm:px-8 sm:py-9 md:mb-10">
            <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              Premium Aquarium Store
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Shop By
              <span className="text-emerald-400"> Categories</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Browse aquarium plants, fertilizers, fish food, aquascaping
              essentials and accessories.
            </p>
          </div>

          {/* Categories */}
          <CategoryGrid />
        </div>
      </section>

      <Footer className="mt-0" />
    </main>
  );
}
