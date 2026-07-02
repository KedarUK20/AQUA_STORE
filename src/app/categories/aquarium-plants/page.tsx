import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Java Moss",
    image: "/images/1.jpeg",
    price: "$5",
  },
  {
    title: "Amazon Sword",
    image: "/images/2.jpeg",
    price: "$8",
  },
  {
    title: "Anubias Plant",
    image: "/images/3.jpeg",
    price: "$6",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1800px]">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400 sm:text-4xl">
        Aquarium Plants
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Fresh aquatic plants for aquascaping tanks
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5 sm:gap-6 lg:gap-8">

        {products.map((p, i) => (
          <ProductCard
            key={i}
            title={p.title}
            image={p.image}
            price={p.price}
            link="/categories/aquarium-plants"
          />
        ))}

      </div>
      </div>

    </main>
  );
}
