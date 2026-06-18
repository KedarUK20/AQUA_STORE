import ProductCard from  "../../../components/shop/ProductCard";

const products = [
  {
    title: "Dragon Stone",
    image:
      "https://img.freepik.com/premium-photo/launch-new-aquascaping-with-driftwood-dragonstone-soil-with-plants-freshwater-aquarium_421422-1808.jpg?w=2000",
    price: "$12",
  },
  {
    title: "Driftwood",
    image:
      "https://zenaquaria.com/wp-content/uploads/2023/07/ZA-Best-Driftwood-for-Aquariums-Image-1.jpg",
    price: "$15",
  },
  {
    title: "Aquarium Sand Base",
    image:
      "https://www.aquariumgallery.com.au/cdn/shop/collections/eco-complete-aquarium-substrate.jpg?v=1694851198",
    price: "$8",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Aquascaping
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Create natural underwater landscapes and beautiful tank designs
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

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
  );
}