import ProductCard from  "../../../components/shop/ProductCard";

const products = [
  {
    title: "CO2 Kit",
    image:
      "https://aquascapeshop.com/cdn/shop/collections/co2-injection-kits-2277960.jpg?crop=center&height=1200&v=1753706491&width=1200",
    price: "$30",
  },
  {
    title: "CO2 Regulator",
    image:
      "https://epicaquarium.com/wp-content/uploads/2021/11/best_co2_regulator_fo_planted_aquarium.jpg",
    price: "$22",
  },
  {
    title: "CO2 Diffuser",
    image:
      "https://petmag.com/wp-content/uploads/2021/03/CO2-diffuser-on-aquarium-glass-tank.jpg",
    price: "$10",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        CO2 System
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Improve plant growth with CO2 systems for better aquascaping results
      </p>

      {/* Products Grid */}
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