"use client";

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";

const categories = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "Aquarium Plants",
    slug: "/categories/aquarium-plants",
    hasChildren: true,
  },
  {
    name: "Fertilizers",
    slug: "/categories/fertilizers",
    hasChildren: true,
  },
  {
    name: "Fish Food",
    slug: "/categories/fish-food",
  },
  {
    name: "Aquascaping",
    slug: "/categories/aquascaping",
    hasChildren: true,
  },
  {
    name: "Accessories",
    slug: "/categories/accessories",
  },
  {
    name: "Fish & Shrimp",
    slug: "/categories/fish-shrimp",
  },
  {
    name: "CO2 System",
    slug: "/categories/co2-system",
  },
  {
    name: "Water Care",
    slug: "/categories/water-care",
  },
];

export default function CategorySidebar() {
  const router = useRouter();

  return (
    <aside
      className="
        w-[320px]
        rounded-2xl
        overflow-hidden
        bg-[#071a24]
        border border-cyan-900/40
        shadow-[0_0_25px_rgba(34,211,238,0.08)]
      "
    >
      {/* Header */}
      <div
        className="
          flex items-center gap-4
          px-6 py-5
          bg-gradient-to-r
          from-emerald-700
          to-cyan-700
        "
      >
        <Menu size={26} className="text-white" />

        <h2 className="text-white text-2xl font-bold">
          All Categories
        </h2>
      </div>

      {/* Menu */}
      <ul>
        {categories.map((category) => (
          <li
            key={category.name}
            onClick={() => router.push(category.slug)}
            className="
              group
              flex
              items-center
              justify-between
              px-6
              py-5
              border-b
              border-cyan-900/30
              text-gray-300
              hover:bg-cyan-500/10
              hover:text-cyan-300
              cursor-pointer
              transition-all
              duration-300
            "
          >
            <span className="font-medium text-lg">
              {category.name}
            </span>

            {category.hasChildren && (
              <span
                className="
                  text-cyan-400
                  text-xl
                  opacity-70
                  group-hover:translate-x-1
                  transition-transform
                "
              >
                ›
              </span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}