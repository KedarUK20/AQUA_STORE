"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Aquarium Plants",
    slug: "aquarium-plants",
    count: "500+ Products",
    img: "https://aquariumplantsonline.com.au/wp-content/uploads/2023/06/Wide-scaled.jpg",
  },
  {
    title: "Fertilizers",
    slug: "fertilizers",
    count: "120+ Products",
    img: "https://www.aquariumcoop.com/cdn/shop/files/easy-green-all-in-one-fertilizer-32526935457861.jpg?v=1698339452&width=832",
  },
  {
    title: "Fish Food",
    slug: "fish-food",
    count: "150+ Products",
    img: "https://aquarium-boutique.com/cdn/shop/articles/min.png?v=1732452049&width=1100",
  },
  {
    title: "Accessories",
    slug: "accessories",
    count: "350+ Products",
    img: "https://st2.depositphotos.com/1004592/10554/i/950/depositphotos_105546690-stock-photo-group-of-aquarium-equipment.jpg",
  },
  {
    title: "Aquascaping",
    slug: "aquascaping",
    count: "350+ Products",
    img: "https://i.pinimg.com/originals/6a/3d/d7/6a3dd736c1fb0071d40225098c4cff4b.jpg",
  },
  {
    title: "Fish & Shrimp",
    slug: "fish-shrimp",
    count: "250+ Products",
    img: "https://www.tropicalfishcareguides.com/wp-content/uploads/2023/02/Cherry-Shrimp-1024x538.jpg",
  },
  {
    title: "CO2 System",
    slug: "co2-system",
    count: "80+ Products",
    img: "https://www.aquariumsource.com/wp-content/uploads/2025/12/CO2-Regulator-and-Diffuser-Close-Up.jpg",
  },
  {
    title: "Water Care",
    slug: "water-care",
    count: "100+ Products",
    img: "https://pet-health-advisor.com/wp-content/uploads/2024/10/what-aquarium-water-quality-testing-kits-are-best-featured.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full overflow-x-hidden px-6 py-10">
      <div className="mx-auto w-full max-w-[1700px] overflow-hidden">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/categories/${item.slug}`}
              className="group relative h-[260px] w-full min-w-0 overflow-hidden rounded-2xl border border-emerald-900/40 bg-black/20 shadow-lg transition-all duration-300 hover:border-emerald-500"
            >
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-emerald-300">
                {item.count}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Explore Collection
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 transition duration-300 group-hover:rotate-45">
                  <ArrowRight size={22} className="text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}