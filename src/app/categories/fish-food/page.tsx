import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Flakes Food",
    image:
      "https://www.aqualvera.com/wp-content/uploads/aquatic-arts-tropical-flakes-premium-fish-food-1-2oz-1745585715.jpg",
    price: "$5",
  },
  {
    title: "Pellets",
    image:
      "https://tropicalaquarium.com.au/cdn/shop/products/Australianblackwormpellets.webp?v=1665017242",
    price: "$6",
  },
  {
    title: "Shrimp Food",
    image:
      "https://m.media-amazon.com/images/I/81at4E4yZ-L.jpg",
    price: "$7",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Fish Food
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Nutritious food for healthy and active fish
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