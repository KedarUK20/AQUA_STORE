import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Water Conditioner",
    image: "https://tse1.mm.bing.net/th/id/OIP.nQSrXHqDanG8Yz1hKGdsRgHaEO?pid=Api&P=0&h=180",
    price: "$6",
  },
  {
    title: "pH Control",
    image: "https://tse2.mm.bing.net/th/id/OIP.f2ARoJvTMwMK4TisTLhvOgHaCW?pid=Api&P=0&h=180",
    price: "$8",
  },
  {
    title: "Algae Remover",
    image: "https://tse2.mm.bing.net/th/id/OIP.buSQrGDqsC6v1U7jzmJaXQHaHa?pid=Api&P=0&h=180",
    price: "$7",
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
          Water Care
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 text-gray-300">
          Keep aquarium water clean, balanced and safe for fish
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