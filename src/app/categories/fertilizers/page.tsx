import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Liquid Fertilizer",
    image: "https://www.shrimpscience.com/articles/shrimp-tank-fertilizers/images/seachem_flourish_bottle.jpg",
    price: "$10",
  },
  {
    title: "Root Tabs",
    image: "https://aquariumlesson.com/wp-content/uploads/2026/05/aquarium-root-tabs-guide-hero.webp",
    price: "$7",
  },
  {
    title: "Iron Supplement",
    image: "https://tse1.mm.bing.net/th/id/OIP.jnXI-3BzD8UL-YmlyVQyugHaHa?pid=Api&P=0&h=180",
    price: "$9",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230425/original/pngtree-an-aquarium-full-of-algae-and-plants-picture-image_2473376.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/80 backdrop-blur-[2px]" />

      <div className="mx-auto w-full max-w-[1800px]">

        {/* Title */}
        <h1 className="text-3xl font-bold text-emerald-400 sm:text-4xl">
          Fertilizers
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 text-gray-300">
          Boost plant growth with premium fertilizers for healthy aquascaping tanks
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
          {products.map((p, i) => (
            <ProductCard
              key={i}
              title={p.title}
              image={p.image}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}