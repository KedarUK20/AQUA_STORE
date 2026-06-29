import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Neon Tetra",
    image: "/images/6.jpeg",
    price: "$2",
  },
  {
    title: "Guppy",
    image: "/images/7.jpeg",
    price: "$3",
  },
  {
    title: "Cherry Shrimp",
    image: "/images/8.jpeg",
    price: "$4",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
        Fish & Shrimp
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Colorful aquatic life for your aquarium tank
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
