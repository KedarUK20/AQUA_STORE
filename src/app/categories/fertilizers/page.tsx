import ProductCard from  "../../../components/shop/ProductCard";

const products = [
  {
    title: "Liquid Fertilizer",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.ALDAU-VrksYPFeT4cfRLkQHaHa?pid=Api&P=0&h=180",
    price: "$10",
  },
  {
    title: "Root Tabs",
    image:
      "https://www.aquariumcoop.com/cdn/shop/files/small_root_tabs_fish_and_shrimp_safe.jpg?v=1719248289&width=832",
    price: "$7",
  },
  {
    title: "Iron Supplement",
    image:
      "https://pauls-aquariums.myshopify.com/cdn/shop/products/iron.jpg?v=1679632205",
    price: "$9",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Fertilizers
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Boost plant growth with premium fertilizers for healthy aquascaping tanks
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