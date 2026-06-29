import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Dragon Stone",
    image: "/images/5.jpeg",
    price: "$12",
  },
  {
    title: "Driftwood",
    image: "/images/10.jpeg",
    price: "$15",
  },
  {
    title: "Aquarium Sand Base",
    image: "/images/02 aquarium.jpg",
    price: "$8",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
        Aquascaping
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Create natural underwater landscapes and beautiful tank designs
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
