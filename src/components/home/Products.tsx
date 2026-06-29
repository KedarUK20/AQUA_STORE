import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { productHighlights } from "../../data/home";

export default function Products() {
  return (
    <section id="shop" className="container-custom py-20 sm:py-28">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-4xl">
          <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
            Curated Shop
          </p>

          <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Premium tools for healthier water and calmer care.
          </h2>
        </div>

        <Link href="/shop" className="btn-secondary w-fit">
          View Collection
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {productHighlights.map((item) => (
          <article
            key={item.name}
            className="group overflow-hidden rounded-lg border border-white/10 bg-[#071827]/70"
          >
            <div className="relative h-72 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02080d]/70 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                {item.category}
              </p>

              <h3 className="mt-3 text-xl font-semibold text-white">
                {item.name}
              </h3>

              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="text-lg font-semibold text-[#6fffe9]">
                  {item.price}
                </p>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-[#6fffe9]"
                >
                  View
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
