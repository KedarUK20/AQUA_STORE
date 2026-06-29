"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroShop() {
  return (
    <section className="relative min-h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/70" />

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-black leading-tight text-white">
              Premium Products
              <br />
              For <span className="text-cyan-400">Aquariums</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
              Discover premium aquarium plants, fertilizers, fish food,
              aquascaping essentials and high-quality aquarium accessories.
            </p>

            {/* Button */}
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/products"
                className="rounded-xl bg-cyan-500 px-6 py-3 sm:px-8 sm:py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              >
                Shop Now
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:mt-12">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6">
                <h2 className="text-3xl font-bold text-white md:text-5xl">
                  500+
                </h2>

                <p className="mt-2 text-base text-cyan-400 sm:text-lg">
                  Live Plants
                </p>

                <p className="text-gray-400 text-sm mt-3">
                  Healthy and handpicked aquarium plants.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl sm:p-6">
                <h2 className="text-3xl font-bold text-white md:text-5xl">
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
