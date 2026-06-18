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
    // <section className="relative bg-[#020B12] py-24">

      <div className="container mx-auto px-6">

        {/* Header */}

        <div className="text-center mb-16">

          <p
            className="
            mt-5
            max-w-3xl
            mx-auto
            text-lg
            text-slate-400
          "
          >
            Explore premium aquarium plants,
            fertilizers, fish food, aquascaping tools,
            accessories and professional equipment.
          </p>
        </div>

        {/* Grid */}

        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
        "
        >
          {items.map((item, index) => (
            <Link
              key={index}
              href={`/categories/${item.slug}`}
              className="
              group
              relative
              h-[340px]
              overflow-hidden
              rounded-[32px]

              border
              border-white/10

              bg-black/20
              backdrop-blur-xl

              shadow-xl

              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-emerald-500/50
              hover:shadow-[0_0_50px_rgba(16,185,129,0.35)]
            "
            >
              {/* Image */}

              <img
                src={item.img}
                alt={item.title}
                className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                transition-all
                duration-700

                group-hover:scale-110
              "
              />

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black
                via-black/40
                to-transparent
              "
              />

              {/* Badge */}

              <div
                className="
                absolute
                top-5
                left-5

                rounded-full

                border
                border-emerald-500/30

                bg-black/40
                backdrop-blur-xl

                px-4
                py-2

                text-xs
                font-semibold
                text-emerald-300
              "
              >
                {item.count}
              </div>

              {/* Content */}

              <div
                className="
                absolute
                bottom-6
                left-6
                right-6

                flex
                items-end
                justify-between
              "
              >
                <div>
                  <h3
                    className="
                    text-3xl
                    font-bold
                    text-white
                  "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-slate-300">
                    Explore Collection
                  </p>
                </div>

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-full

                  bg-emerald-500

                  transition-all
                  duration-300

                  group-hover:scale-110
                  group-hover:rotate-45
                "
                >
                  <ArrowRight
                    size={24}
                    className="text-white"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    // </section>
  );
}