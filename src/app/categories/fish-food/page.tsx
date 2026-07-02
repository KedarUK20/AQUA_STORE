import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Flakes Food",
    image: "https://tse1.mm.bing.net/th/id/OIP.AyfCJLeiQkF9Q0Wj5Rp2YAHaFj?pid=Api&P=0&h=180",
    price: "$5",
  },
  {
    title: "Pellets",
    image: "https://www.petzlifeworld.in/cdn/shop/files/81_YweeU1hL._SL1500.jpg?v=1725869727",
    price: "$6",
  },
  {
    title: "Shrimp Food",
    image: "https://tse4.mm.bing.net/th/id/OIP.d-ToRovIceuP8MRV3jxLwwHaHa?pid=Api&P=0&h=180",
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
          Fish Food
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 text-gray-300">
          Nutritious food for healthy and active fish
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