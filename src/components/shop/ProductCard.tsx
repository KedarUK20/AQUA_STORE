"use client";

import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

type Props = {
  title: string;
  image: string;
  price: string;
  category?: string;
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
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    if (typeof window === "undefined") return;

    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];

    const existingItem = cart.find((item) => item.title === title);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        title,
        image,
        price,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));

    setShowNotification(true);
    setQuantity(1);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <>
      {showNotification && (
        <div className="fixed right-4 top-4 z-50 flex max-w-[calc(100vw-2rem)] items-center gap-3 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-black shadow-2xl">
          <CheckCircle size={20} />
          Added to Cart
        </div>
      )}

      <div className="group min-w-0 w-full max-w-full overflow-hidden rounded-2xl border border-emerald-800/50 bg-[#071510] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-emerald-500/20">
        
        {/* Product Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-[220px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[240px]"
          />
        </div>

        {/* Product Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-white md:text-2xl">
            {title}
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {category}
          </p>

          {/* Rating */}
          <div className="mt-3 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Price */}
          <h3 className="mt-4 text-2xl font-bold text-emerald-400">
            {price}
          </h3>

          {/* Quantity + Button */}
          <div className="mt-5 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[130px_minmax(0,1fr)] lg:grid-cols-1 min-[1180px]:grid-cols-[130px_minmax(0,1fr)]">
            <div className="flex min-w-0 items-center justify-between rounded-xl border border-gray-700 bg-[#0d2532]">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-4 py-3 text-white hover:text-emerald-400"
              >
                -
              </button>

              <span className="font-semibold text-white">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 text-white hover:text-emerald-400"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="min-w-0 rounded-xl bg-emerald-500 px-4 py-3 font-bold text-black transition hover:bg-emerald-400"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
