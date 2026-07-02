import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Water Conditioner",
    image: "/images/8.jpeg",
    price: "$6",
  },
  {
    title: "pH Control",
    image: "/images/9.jpeg",
    price: "$8",
  },
  {
    title: "Algae Remover",
    image: "/images/10.jpeg",
    price: "$7",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
        Water Care
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Keep aquarium water clean, balanced and safe for fish
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
