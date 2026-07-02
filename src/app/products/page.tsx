import Footer from "../../components/layout/Footer";
import CategoryGrid from "../../components/shop/CategoryGrid";

export default function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://blog.hannainst.com/hubfs/aquascaping-305878-edited.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/80" />

      <section className="relative z-10 py-12">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 rounded-2xl border border-emerald-500/20 bg-black/30 p-6 backdrop-blur-md lg:p-8">
            <span className="inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              Premium Aquarium Store
            </span>

            <h1 className="mt-4 text-4xl font-bold lg:text-6xl">
              Shop By
              <span className="text-emerald-400"> Categories</span>
            </h1>

            <p className="mt-3 max-w-3xl text-lg text-slate-300">
              Browse aquarium plants, fertilizers, fish food, aquascaping
              essentials and accessories.
            </p>
          </div>

          {/* Categories */}
          <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
            <CategoryGrid />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}