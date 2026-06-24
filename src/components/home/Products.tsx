import Image from "next/image";

import { productHighlights } from "../../data/home";

export default function Products() {
return ( <section
   id="shop"
   className="mx-auto w-full max-w-[1800px] px-4 py-20 sm:px-6 lg:px-10"
 >
{/* Header */} <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"> <div> <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
Curated Shop </p>

      <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
        Premium tools for healthier water and calmer care.
      </h2>
    </div>

    <button className="btn-secondary w-fit rounded-xl px-6 py-3">
      View Collection
    </button>
  </div>

  {/* Products Grid */}
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {productHighlights.map((item) => (
      <div
        key={item.name}
        className="
          premium-card
          group
          overflow-hidden
          rounded-3xl
          p-4
          transition-all
          duration-500
          hover:-translate-y-2
        "
      >
        {/* Product Image */}
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="
              object-cover
              object-center
              transition
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        {/* Category */}
        <p className="mt-5 text-xs uppercase tracking-[0.22em] text-slate-500">
          {item.category}
        </p>

        {/* Product Name */}
        <h3 className="mt-2 text-lg font-semibold text-white">
          {item.name}
        </h3>

        {/* Price */}
        <p className="mt-3 text-lg font-bold text-[#6fffe9]">
          {item.price}
        </p>

        {/* Button */}
        <button
          className="
            mt-4
            w-full
            rounded-xl
            bg-[#6fffe9]
            py-3
            font-medium
            text-black
            transition
            hover:bg-[#5ae6d2]
          "
        >
          View Product
        </button>
      </div>
    ))}
  </div>
</section>


);
}
