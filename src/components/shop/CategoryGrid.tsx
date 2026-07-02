"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { shopCategories } from "@/src/data/shop";

export default function CategoryGrid() {
  return (
    <section className="w-full overflow-x-hidden px-6 py-10">
      <div className="mx-auto w-full max-w-[1700px] overflow-hidden">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {shopCategories.map((item) => (
            <Link
              key={item.slug}
              href={`/categories/${item.slug}`}
              className="group relative h-[260px] w-full min-w-0 overflow-hidden rounded-2xl border border-emerald-900/40 bg-black/20 shadow-lg transition-all duration-300 hover:border-emerald-500"
            >
              <img
                src={item.image}
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