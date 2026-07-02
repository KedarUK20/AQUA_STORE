import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Dragon Stone",
    image: "https://img.freepik.com/premium-photo/launch-new-aquascaping-with-driftwood-dragonstone-soil-with-plants-freshwater-aquarium_421422-1808.jpg?w=2000",
    price: "$12",
  },
  {
    title: "Driftwood",
    image: "https://www.aquariadise.com/wp-content/uploads/2015/06/Aquarium-Driftwood-2-1-1024x570.jpg",
    price: "$15",
  },
  {
    title: "Aquarium Sand Base",
    image: "https://www.aquariumgallery.com.au/cdn/shop/collections/eco-complete-aquarium-substrate.jpg?v=1694851198",
    price: "$8",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pb-12 pt-28 text-white sm:px-6 lg:px-10">
      
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230425/original/pngtree-an-aquarium-full-of-algae-and-plants-picture-image_2473376.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/75 backdrop-blur-[2px]" />

      <div className="mx-auto w-full max-w-[1800px]">

        {/* Title */}
        <h1 className="text-3xl font-bold text-emerald-400 sm:text-4xl">
          Aquascaping
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 text-gray-300">
          Create natural underwater landscapes and beautiful tank designs
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
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