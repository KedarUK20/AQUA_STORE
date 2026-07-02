import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "CO2 Kit",
    image: "https://tse3.mm.bing.net/th/id/OIP.Zvjc90jnYoClw3_ioJNaZgHaE8?pid=Api&P=0&h=180",
    price: "$30",
  },
  {
    title: "CO2 Regulator",
    image: "https://epicaquarium.com/wp-content/uploads/2021/11/best_co2_regulator_fo_planted_aquarium.jpg",
    price: "$22",
  },
  {
    title: "CO2 Diffuser",
    image: "https://petmag.com/wp-content/uploads/2021/03/CO2-diffuser-on-aquarium-glass-tank.jpg",
    price: "$10",
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
          CO2 System
        </h1>

        {/* Subtitle */}
        <p className="mt-2 mb-6 text-gray-300">
          Improve plant growth with CO2 systems for better aquascaping results
        </p>

        {/* Products Grid */}
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