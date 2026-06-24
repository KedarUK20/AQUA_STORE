import ProductCard from  "../../../components/shop/ProductCard";

const products = [
  {
    title: "Neon Tetra",
    image:
      "https://www.aquariadise.com/wp-content/uploads/2022/10/how-many-neon-tetras-in-a-10-gallon-tank.jpeg",
    price: "$2",
  },
  {
    title: "Guppy",
    image:
      "https://aquariumfishsource.com/wp-content/uploads/2023/10/image-96-e1698162086422.png",
    price: "$3",
  },
  {
    title: "Cherry Shrimp",
    image:
      "https://cdn.realacas.com/wp-content/uploads/2024/12/Neocaridina-davidi-Red-Cherry-Shrimp-22.jpg",
    price: "$4",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Fish & Shrimp
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Colorful aquatic life for your aquarium tank
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