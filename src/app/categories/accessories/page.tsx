import ProductCard from "../../../components/shop/ProductCard";


const products = [
  {
    title: "LED Light",
    image:
      "https://lovefishtank.com/wp-content/uploads/led-aquarium-light.jpg",
    price: "$20",
  },
  {
    title: "Filter Pump",
    image:
      "https://m.media-amazon.com/images/I/61Gaq+zz0ML._SL500_.jpg",
    price: "$25",
  },
  {
    title: "Aquarium Heater",
    image:
      "https://m.media-amazon.com/images/I/A1A4ObhtnOL.jpg",
    price: "$18",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Aquarium Accessories
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Essential tools for aquarium setup and maintenance
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