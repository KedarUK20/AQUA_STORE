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
  link?: string;
};

export default function ProductCard({
  title,
  image,
  price,
}: Props) {
  const [liked, setLiked] = useState(false);

  const handleAddToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    cart.push({
      title,
      image,
      price,
      quantity: 1,
    });

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${title} added to cart 🛒`);
  };

  return (
    <div
      className="
      group
      bg-[#071a24]
      rounded-2xl
      overflow-hidden
      border
      border-cyan-900/30
      hover:border-cyan-400
      hover:-translate-y-2
      transition-all
      duration-300
      shadow-lg
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
          h-60
          w-full
          object-cover
          transition
          duration-500
          group-hover:scale-110
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Badge */}

        <div className="absolute top-4 left-4 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">
          NEW
        </div>

        {/* Icons */}

        <div
          className="
          absolute
          top-4
          right-4
          flex
          flex-col
          gap-2
          opacity-0
          group-hover:opacity-100
          transition
          "
        >
          <button
            onClick={() => setLiked(!liked)}
            className="
            w-10
            h-10
            rounded-full
            bg-black/70
            hover:bg-cyan-500
            flex
            items-center
            justify-center
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
            w-10
            h-10
            rounded-full
            bg-black/70
            hover:bg-cyan-500
            flex
            items-center
            justify-center
            transition
            "
          >
            <Eye
              size={18}
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Content */}

      <div className="p-5">

        <h3 className="text-white text-xl font-bold">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          Premium aquarium product
        </p>

        {/* Rating */}

        <div className="flex items-center gap-1 mt-3">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-gray-400 text-sm ml-2">
            (5.0)
          </span>
        </div>

        {/* Price */}

        <div className="mt-4 flex items-center justify-between">

          <span className="text-cyan-400 text-3xl font-bold">
            {price}
          </span>

          <span className="text-sm text-gray-500 line-through">
            $12
          </span>

        </div>

        {/* Add To Cart */}

        <button
          onClick={handleAddToCart}
          className="
          mt-5
          w-full
          flex
          items-center
          justify-center
          gap-2
          bg-cyan-500
          hover:bg-cyan-400
          py-3
          rounded-xl
          text-black
          font-bold
          transition-all
          duration-300
          hover:shadow-[0_0_20px_rgba(6,182,212,0.7)]
          "
        >
          <ShoppingCart size={18} />

          Add to Cart
        </button>

      </div>
    </div>
  );
}