import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CategoryGrid from "../../components/shop/CategoryGrid";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#020B12] text-white">

      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm">
              🌿 Premium Aquarium Store
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold">
              Shop By
              <span className="text-emerald-400"> Categories</span>
            </h1>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Browse aquarium plants, fertilizers, fish food,
              aquascaping essentials and accessories.
            </p>

          </div>

          {/* Category Grid */}
          <CategoryGrid />

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}