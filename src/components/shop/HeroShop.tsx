"use client";

export default function HeroShop() {
  return (
    <div className="relative h-[500px] rounded-2xl overflow-hidden">

      {/* Background Image */}

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/banner1.jpg')",
        }}
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex items-center h-full px-12">

        <div>

          <p className="text-cyan-400 text-lg font-semibold tracking-widest uppercase">
            Premium Aquarium Store
          </p>

          <h1 className="text-6xl font-extrabold text-white mt-4 leading-tight">
            Everything for Your
            <br />
            <span className="text-cyan-400">
              AQUARIUM
            </span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl text-lg">
            Discover premium aquarium plants,
            fertilizers, fish food and aquascaping
            essentials for a beautiful underwater world.
          </p>

          <div className="flex gap-4 mt-8">

            <button className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-3 rounded-xl text-black font-bold">
              Shop Now →
            </button>

            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition px-8 py-3 rounded-xl font-bold">
              Explore
            </button>

          </div>

        </div>

      </div>

      {/* Floating Badges */}

      <div className="absolute right-8 bottom-8 grid grid-cols-2 gap-3">

        <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-xl px-4 py-3">
          <p className="text-cyan-400 font-bold">
            🌿 500+
          </p>
          <p className="text-white text-sm">
            Live Plants
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-md border border-cyan-500/30 rounded-xl px-4 py-3">
          <p className="text-cyan-400 font-bold">
            🐠 1000+
          </p>
          <p className="text-white text-sm">
            Aquarium Products
          </p>
        </div>

      </div>

    </div>
  );
}