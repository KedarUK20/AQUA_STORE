import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Neon Tetra",
    image: "https://shrimpybusiness.com/cdn/shop/products/NeonTetra1.jpg?v=1644547585",
    price: "$2",
  },
  {
    title: "Guppy",
    image: "https://cdn.britannica.com/02/117202-050-62267C8B/Guppy.jpg",
    price: "$3",
  },
  {
    title: "Cherry Shrimp",
    image: "https://roxyaquarium.com.au/app/uploads/2022/07/Cherry-Shrimp.webp",
    price: "$4",
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

      {/* Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/80 backdrop-blur-[2px]" />

      <div className="mx-auto w-full max-w-[1800px]">

        {/* Title */}
        <h1 className="text-3xl font-bold text-emerald-400 sm:text-4xl">
          Fish & Shrimp
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 text-gray-300">
          Colorful aquatic life for your aquarium tank
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