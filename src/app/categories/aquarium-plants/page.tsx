import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Java Moss",
    image:
      "https://fishsubsidy.org/wp-content/uploads/2019/10/how-to-grow-java-moss.jpg",
    price: "$5",
  },
  {
    title: "Amazon Sword",
    image:
      "https://cdn.diys.com/wp-content/uploads/2021/05/Amazon-Sword-1.jpg",
    price: "$8",
  },
  {
    title: "Anubias Plant",
    image:
      "https://www.aquariadise.com/wp-content/uploads/2017/02/Depositphotos_1452254_l-2015.jpg",
    price: "$6",
  },
];

export default function Page() {
  return (
    <div className="p-8 text-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-cyan-400">
        Aquarium Plants
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 mt-2 mb-6">
        Fresh aquatic plants for aquascaping tanks
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

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
  );
}