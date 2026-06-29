"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroShop() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/banner1.jpg"
        alt="Aquarium Banner"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-[100svh] items-center py-28 sm:py-32">

        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">

          <div className="max-w-3xl">

            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
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
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">

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
                  text-center
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
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2">

              <div className="rounded-lg border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6">
                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  500+
                </h2>

                <p className="mt-2 text-base text-cyan-400 sm:text-lg">
                  Live Plants
                </p>

                <p className="text-gray-400 text-sm mt-3">
                  Healthy and handpicked aquarium plants.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6">
                <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  1000+
                </h2>

                <p className="mt-2 text-base text-cyan-400 sm:text-lg">
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
