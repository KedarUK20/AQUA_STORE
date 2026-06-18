"use client";

import Link from "next/link";

export default function HeroShop() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/banner1.jpg"
        alt="Aquarium Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">

        <div className="container mx-auto px-6 md:px-12 lg:px-20">

          <div className="max-w-3xl">

            <h1
              className="
                text-5xl
                md:text-7xl
                xl:text-8xl
                font-black
                leading-tight
                text-white
              "
            >
              Premium Products
              <br />
              For{" "}
              <span className="text-cyan-400">
                Aquariums
              </span>
            </h1>

            <p
              className="
                mt-6
                text-lg
                md:text-2xl
                text-gray-300
                max-w-2xl
              "
            >
              Discover premium aquarium plants,
              fertilizers, fish food, aquascaping
              essentials and high-quality aquarium
              accessories.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/products"
                className="
                  rounded-2xl
                  bg-cyan-500
                  px-8
                  py-4
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-cyan-400
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                "
              >
                Shop Now
              </Link>

              {/* <Link
                href="/gallery"
                className="
                  rounded-2xl
                  border
                  border-cyan-400
                  px-8
                  py-4
                  text-white
                  transition-all
                  duration-300
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                "
              >
                Explore Gallery
              </Link> */}

            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-14 max-w-xl">

              <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  500+
                </h2>

                <p className="text-cyan-400 text-lg mt-2">
                  Live Plants
                </p>

                <p className="text-gray-400 text-sm mt-3">
                  Healthy and handpicked aquarium plants.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  1000+
                </h2>

                <p className="text-cyan-400 text-lg mt-2">
                  Products
                </p>

                <p className="text-gray-400 text-sm mt-3">
                  Filters, lights, substrate and more.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}