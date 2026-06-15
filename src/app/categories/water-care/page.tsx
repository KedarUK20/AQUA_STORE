import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Water Conditioner",
    image:
      "https://aquapics.com.au/cdn/shop/products/ShCondCleaerAquarium125ml.png?v=1679283205",
    price: "$6",
  },
  {
    title: "pH Control",
    image:
      "https://aquariumgrow.com/wp-content/uploads/2025/04/How-to-Check-Your-Aquariums-pH-Levels-Step-by-Step-Guide.jpg",
    price: "$8",
  },
  {
    title: "Algae Remover",
    image:
      "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/g/14/7460af2b-4d27-4ded-8d05-a654e8583084.jpg",
    price: "$7",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Water Care
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Keep aquarium water clean, balanced and safe for fish
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