"use client";

import Image from "next/image";
import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

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
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    if (typeof window === "undefined") return;

    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    ) as CartItem[];

    const existingItem = cart.find(
      (item) => item.title === title
    );

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
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 rounded-xl bg-green-500 px-5 py-3 text-black font-semibold shadow-2xl animate-bounce">
          <CheckCircle size={20} />
          Added to Cart
        </div>
      )}

      <div className="group overflow-hidden rounded-2xl border border-cyan-900/70 bg-[#081923] shadow-lg transition-all duration-300 hover:border-cyan-500 hover:shadow-cyan-500/20 hover:shadow-2xl">
        
        {/* Product Image */}
        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64 lg:h-72"
          />
        </div>

        {/* Product Content */}
        <div className="p-5 sm:p-6">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            {title}
          </h2>

          <p className="mt-2 text-gray-400">{category}</p>

          {/* Rating */}
          <div className="mt-3 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          {/* Price */}
          <h3 className="mt-4 text-2xl font-bold text-cyan-400 sm:text-3xl">
            {price}
          </h3>

          {/* Quantity + Button */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <div className="flex w-full items-center justify-between rounded-xl border border-gray-600 bg-[#0d2532] sm:w-auto">
              <button
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : 1)
                }
                className="px-4 py-2 text-lg text-white hover:text-cyan-400"
              >
                -
              </button>

              <span className="px-4 py-2 text-white font-semibold">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-lg text-white hover:text-cyan-400"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 rounded-xl bg-cyan-500 px-4 py-3 font-bold text-black transition duration-300 hover:bg-cyan-400 hover:shadow-lg"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
