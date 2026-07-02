import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "LED Light",
    image: "https://m.media-amazon.com/images/I/715B35JHltL._AC_.jpg",
    price: "$20",
  },
  {
    title: "Filter Pump",
    image: "https://i.pinimg.com/736x/39/64/bf/3964bfce493e0d042887c5c9f485274e.jpg",
    price: "$25",
  },
  {
    title: "Aquarium Heater",
    image: "https://i5.walmartimages.com/asr/408a7784-dff3-4f09-ab64-30a9481319b4_1.8cdb3183f3c7123aa642d0a7b3c710ca.jpeg",
    price: "$18",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 pt-28 pb-12 text-white sm:px-6 lg:px-8">
      
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230425/original/pngtree-an-aquarium-full-of-algae-and-plants-picture-image_2473376.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 -z-10 bg-black/80 backdrop-blur-[2px]" />

      <div className="mx-auto w-full max-w-[1800px]">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-emerald-400 sm:text-4xl">
            Aquarium Accessories
          </h1>

          <p className="mt-2 text-gray-300">
            Essential tools for aquarium setup and maintenance
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
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