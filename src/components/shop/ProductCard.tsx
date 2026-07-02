"use client";

import Image from "next/image";
import { useState } from "react";
import { Eye, Heart, ShoppingCart, Star } from "lucide-react";

type Props = {
  title: string;
  image: string;
  price: string;
  category?: string;
  link?: string;
};

type CartItem = {
  title: string;
  image: string;
  price: string;
  quantity: number;
};

export default function ProductCard({
  title,
  image,
  price,
  category = "Premium Aquarium Product",
}: Props) {
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];
    const existingItem = cart.find((item) => item.title === title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        title,
        image,
        price,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${title} added to cart`);
  };

  return (
    <div className="group flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-cyan-900/30 bg-gradient-to-b from-[#081923] to-[#07141d] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-md bg-emerald-500 px-3 py-1 text-xs font-bold text-black">
          NEW
        </div>

        <div className="absolute right-4 top-4 flex translate-x-3 flex-col gap-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => setLiked(!liked)}
            aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-black/70 transition hover:bg-cyan-500"
          >
            <Heart
              size={18}
              className={liked ? "fill-red-500 text-red-500" : "text-white"}
            />
          </button>

          <button
            type="button"
            aria-label="Quick view"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-black/70 transition hover:bg-cyan-500"
          >
            <Eye size={18} className="text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">{category}</p>

        <div className="mt-3 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-sm text-gray-400">(5.0)</span>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="text-2xl font-bold text-cyan-400 sm:text-4xl">
            {price}
          </span>

          <span className="text-sm text-gray-500 line-through">$12</span>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-4 font-bold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
