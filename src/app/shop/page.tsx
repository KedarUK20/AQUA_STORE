import type { Metadata } from "next";
import Link from "next/link";

import HeroShop from "../../components/shop/HeroShop";
import CategoryGrid from "../../components/shop/CategoryGrid";
import ProductCard from "../../components/shop/ProductCard";
import { shopCategories } from "@/src/data/shop";
import { shopProducts } from "@/src/data/products";

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

// Extra searchable keywords per category so queries like "hardscape" or
// "conditioner" resolve to the right products.
const termsBySlug = new Map(
  shopCategories.map((category) => [category.slug, category.terms.join(" ")]),
);

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const searchQuery = firstSearchValue(
    params.search ?? params.query ?? params.q,
  ).trim();
  const hasSearch = searchQuery.length > 0;
  const normalizedQuery = searchQuery.toLowerCase();

  const matchedProducts = hasSearch
    ? shopProducts.filter((product) => {
        const haystack = [
          product.title,
          product.category,
          product.slug,
          termsBySlug.get(product.slug) ?? "",
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : [];

  const matchedCategories = hasSearch
    ? shopCategories.filter((category) => {
        const haystack = [
          category.title,
          category.slug,
          category.description,
          ...category.terms,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : shopCategories;

  const hasResults = matchedProducts.length > 0 || matchedCategories.length > 0;

  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <HeroShop />

      <section id="shop-categories" className="container-custom py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              {hasSearch ? "Search Results" : "Shop By Category"}
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              {hasSearch
                ? `Results for "${searchQuery}"`
                : "Choose the right supplies for every aquarium routine."}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {hasSearch
                ? `${matchedProducts.length} product${
                    matchedProducts.length === 1 ? "" : "s"
                  } and ${matchedCategories.length} categor${
                    matchedCategories.length === 1 ? "y" : "ies"
                  } matched your search.`
                : "Explore the full store across plants, nutrition, equipment, hardscape and water-care essentials."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
              {hasSearch
                ? `${matchedProducts.length} products`
                : `${shopCategories.length} departments`}
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

        {hasSearch && !hasResults ? (
          <div className="rounded-lg border border-white/10 bg-[#071827]/70 p-8 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-[#d7b56d]">
              No matches
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              We couldn&apos;t find anything for &quot;{searchQuery}&quot;.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              Try a product name like &quot;anubias&quot;, &quot;co2&quot;,
              &quot;shrimp&quot; or &quot;fertilizer&quot;, or browse the full
              store.
            </p>
            <Link href="/shop" className="btn-primary mt-6">
              Browse all products
            </Link>
          </div>
        ) : null}

        {matchedProducts.length > 0 ? (
          <div className="mb-14">
            {hasSearch ? (
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Products
              </h3>
            ) : null}

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5 sm:gap-6 lg:gap-8">
              {matchedProducts.map((product) => (
                <ProductCard
                  key={`${product.slug}-${product.title}`}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        ) : null}

        {matchedCategories.length > 0 ? (
          <div>
            {hasSearch ? (
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Related categories
              </h3>
            ) : null}

            <CategoryGrid query={hasSearch ? searchQuery : ""} />
          </div>
        ) : null}
      </section>
    </div>
  );
}
