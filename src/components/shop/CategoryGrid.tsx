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
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((item, index) => (
        <Link
          key={index}
          href={`/categories/${item.slug}`}
          className="group relative h-56 overflow-hidden rounded-2xl border border-cyan-900 hover:border-emerald-500 transition-all duration-300"
        >
          {/* Image */}

          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

          {/* Content */}

          <div className="absolute bottom-5 left-5">
            <h3 className="text-white text-2xl font-bold">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm mt-1">
              {item.count}
            </p>
          </div>

          {/* Arrow Button */}

          <div
            className="
            absolute
            bottom-5
            right-5
            w-12
            h-12
            rounded-full
            bg-emerald-500
            flex
            items-center
            justify-center
            transition-all
            duration-300
            shadow-[0_0_20px_rgba(16,185,129,0.4)]
            group-hover:scale-110
            group-hover:shadow-[0_0_35px_rgba(16,185,129,0.9)]
            "
          >
            <ArrowRight
              size={22}
              className="
              text-white
              transition-transform
              duration-300
              group-hover:translate-x-1
              "
            />
          </div>
        </Link>
      ))}
    </div>
  );
}