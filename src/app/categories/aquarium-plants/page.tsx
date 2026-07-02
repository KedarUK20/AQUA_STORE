import ProductCard from "../../../components/shop/ProductCard";

const products = [
  {
    title: "Java Moss",
    image: "https://www.aquariumsource.com/wp-content/uploads/2019/08/java-moss-main.jpg",
    price: "$5",
  },
  {
    title: "Amazon Sword",
    image: "https://m.media-amazon.com/images/I/71iCDSrSGtL._AC_SL1000_.jpg",
    price: "$8",
  },
  {
    title: "Anubias Plant",
    image: "https://www.aquariadise.com/wp-content/uploads/2023/02/Can-Anubias-Grow-Out-of-Water.jpeg",
    price: "$6",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip px-4 pb-10 pt-28 text-white sm:px-6 sm:pb-12 lg:px-8">
      
      
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
        <h1 className="text-3xl font-bold text-emerald-400 sm:text-4xl">
          Aquarium Plants
        </h1>

        <p className="mt-2 mb-8 text-gray-300">
          Fresh aquatic plants for aquascaping tanks
        </p>

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}
