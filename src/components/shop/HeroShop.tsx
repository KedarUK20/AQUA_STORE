import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Leaf, Waves } from "lucide-react";

const heroStats = [
  {
    value: "8",
    label: "curated departments",
    icon: Leaf,
  },
  {
    value: "1k+",
    label: "aquarium essentials",
    icon: Waves,
  },
  {
    value: "Pro",
    label: "setup guidance",
    icon: BadgeCheck,
  },
];

export default function HeroShop() {
  return (
    <section className="relative min-h-[calc(100svh-8rem)] overflow-hidden border-b border-white/10">
      <Image
        src="/images/banner1.jpg"
        alt="Premium planted aquarium with aquatic plants and clear water"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.82)_0%,rgba(2,8,13,0.42)_44%,transparent_80%)]" />

      <div className="container-custom relative z-10 grid min-h-[calc(100svh-8rem)] gap-8 py-12 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:py-16">
        <div className="max-w-4xl self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Premium Aquarium Store
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Aquarium products for healthier water and calmer care.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Browse plants, fertilizers, food, hardscape, CO2 equipment and
            water-care essentials selected for beautiful long-running aquariums.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#shop-categories" className="btn-primary gap-2">
              Browse Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/consultation" className="btn-secondary">
              Ask For Setup Advice
            </Link>
          </div>
        </div>

        <div className="grid gap-3 self-end sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {heroStats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-[#04111f]/76 p-4 backdrop-blur-xl"
              >
                <Icon className="h-5 w-5 text-[#d7b56d]" />
                <p className="mt-4 font-serif text-3xl leading-none text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-300">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
