import ProductCard from "../../../components/shop/ProductCard";


const products = [
  {
    title: "LED Light",
    image: "/images/4.jpeg",
    price: "$20",
  },
  {
    title: "Filter Pump",
    image: "/images/8.jpeg",
    price: "$25",
  },
  {
    title: "Aquarium Heater",
    image: "/images/9.jpeg",
    price: "$18",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
        Aquarium Accessories
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Essential tools for aquarium setup and maintenance
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5 sm:gap-6 lg:gap-8">

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
