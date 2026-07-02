import type { Metadata } from "next";
import Link from "next/link";

import HeroShop from "../../components/shop/HeroShop";
import CategoryGrid from "../../components/shop/CategoryGrid";
import { shopCategories } from "@/src/data/shop";

export const metadata: Metadata = {
  title: "Shop Aquarium Products | Aquarium Nature Studio",
  description:
    "Browse aquarium plants, fertilizers, fish food, aquascaping tools, CO2 systems and water-care products.",
};

type ShopPageProps = {
  searchParams: Promise<{
    q?: string | string[];
    query?: string | string[];
    search?: string | string[];
  }>;
};

function firstSearchValue(value?: string | string[]) {
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }

  return value ?? "";
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const searchQuery = firstSearchValue(
    params.search ?? params.query ?? params.q,
  ).trim();
  const hasSearch = searchQuery.length > 0;

  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <HeroShop />

      <section id="shop-categories" className="container-custom py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Shop By Category
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              {hasSearch
                ? `Showing categories for "${searchQuery}"`
                : "Choose the right supplies for every aquarium routine."}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {hasSearch
                ? "Search filters the curated shop departments so you can jump to the closest collection."
                : "Explore the full store across plants, nutrition, equipment, hardscape and water-care essentials."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              {shopCategories.length} departments
            </p>

            {hasSearch ? (
              <Link
                href="/shop"
                className="rounded-md border border-[#6fffe9]/45 px-4 py-2 text-sm font-medium text-white transition hover:border-[#6fffe9] hover:text-[#6fffe9]"
              >
                Clear search
              </Link>
            ) : null}
          </div>
        </div>

        <CategoryGrid query={searchQuery} />
      </section>
    </div>
  );
}
