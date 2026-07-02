import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { shopCategories } from "@/src/data/shop";

type CategoryGridProps = {
  query?: string;
};

export default function CategoryGrid({ query = "" }: CategoryGridProps) {
  const normalizedQuery = query.trim().toLowerCase();
  const categories = normalizedQuery
    ? shopCategories.filter((item) => {
        const searchableText = [
          item.title,
          item.slug,
          item.description,
          ...item.terms,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      })
    : shopCategories;

  if (categories.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-[#071827]/70 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-[#d7b56d]">
          No matches
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-white">
          No shop categories found for {query}.
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          Try searching for plants, food, CO2, aquascaping, accessories or water
          care.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-[#6fffe9]/45 px-5 py-3 text-sm font-medium text-white transition hover:border-[#6fffe9] hover:text-[#6fffe9]"
        >
          Reset categories
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5 sm:gap-6 lg:gap-8">
      {categories.map((item) => (
        <Link
          key={item.slug}
          href={`/categories/${item.slug}`}
          className="group relative min-h-[310px] overflow-hidden rounded-lg border border-white/10 bg-[#071827]/70 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#6fffe9]/55 focus-visible:border-[#d7b56d] sm:min-h-[350px]"
        >
          <Image
            src={item.image}
            alt={`${item.title} category`}
            fill
            sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-[#02080d]/90 via-[#02080d]/20 to-transparent" />

          <div className="absolute left-5 top-5 rounded-md border border-[#6fffe9]/25 bg-[#02080d]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6fffe9] backdrop-blur-xl">
            {item.count}
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[24rem] text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#d7b56d] text-[#02080d] transition duration-300 group-hover:translate-x-1 sm:h-12 sm:w-12"
              >
                <ArrowRight className="h-5 w-5" />
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-[#6fffe9]">
              Explore collection
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
