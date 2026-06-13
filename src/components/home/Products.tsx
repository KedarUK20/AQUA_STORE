import Image from "next/image";

import { productHighlights } from "../../data/home";

export default function Products() {
  return (
    <section
      id="shop"
      className="mx-auto w-full max-w-[1800px] px-4 py-28 sm:px-6 lg:px-10"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
            Curated Shop
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Premium tools for healthier water and calmer care.
          </h2>
        </div>
        <button className="btn-secondary w-fit">View Collection</button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {productHighlights.map((item) => (
          <div
            key={item.name}
            className="premium-card group p-4"
          >
            <div className="relative h-56 overflow-hidden bg-slate-800">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.22em] text-slate-500">
              {item.category}
            </p>
            <h3 className="mt-2 font-medium text-white">{item.name}</h3>

            <p className="mt-3 text-[#6fffe9]">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
