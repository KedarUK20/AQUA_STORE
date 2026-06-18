"use client";

import { useState } from "react";
import {
  Heart,
  Eye,
  ShoppingCart,
  Star,
} from "lucide-react";

type Props = {
  title: string;
  image: string;
  price: string;
  category?: string;
};

export default function ProductCard({
  title,
  image,
  price,
  category = "Premium Aquarium Product",
}: Props) {
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingItem = cart.find(
      (item: any) => item.title === title
    );

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

    alert(`${title} added to cart 🛒`);
  };

  return (
    <div
      className="
        group
        bg-gradient-to-b
        from-[#081923]
        to-[#07141d]
        rounded-3xl
        overflow-hidden
        border
        border-cyan-900/30
        hover:border-cyan-400
        hover:-translate-y-2
        transition-all
        duration-300
        shadow-xl
      "
    >
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-72
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-black">
          NEW
        </div>

        {/* Right Icons */}
        <div
          className="
            absolute
            right-4
            top-4
            flex
            flex-col
            gap-3
            opacity-0
            translate-x-3
            group-hover:opacity-100
            group-hover:translate-x-0
            transition-all
            duration-300
          "
        >
          <button
            onClick={() => setLiked(!liked)}
            className="
              h-10 w-10 rounded-full bg-black/70
              hover:bg-cyan-500
              flex items-center justify-center
              transition
            "
          >
            <Heart
              size={18}
              className={
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-white"
              }
            />
          </button>

          <button
            className="
              h-10 w-10 rounded-full bg-black/70
              hover:bg-cyan-500
              flex items-center justify-center
              transition
            "
          >
            <Eye size={18} className="text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-1 text-sm text-gray-400">
          {category}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}

          <span className="ml-2 text-sm text-gray-400">
            (5.0)
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-4xl font-bold text-cyan-400">
            {price}
          </span>

          <span className="text-sm text-gray-500 line-through">
            $12
          </span>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-2xl
            bg-cyan-500
            py-4
            font-bold
            text-black
            transition-all
            duration-300
            hover:bg-cyan-400
            hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]
          "
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}