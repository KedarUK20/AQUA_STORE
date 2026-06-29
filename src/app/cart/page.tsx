"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const updateCart = (updatedCart: any[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    router.push("/checkout");
  };

  return (
    <main className="min-h-screen bg-[#06141B] text-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-5xl font-bold text-cyan-400 mb-10">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <p>Cart Empty</p>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-[#0b1d26] p-5 rounded-xl mb-4"
              >
                <h2>{item.title}</h2>
                <p>{item.price}</p>
                <p>Qty: {item.quantity}</p>

                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 px-4 py-2 rounded mt-3"
                >
                  Remove
                </button>
              </div>
            ))}

            <h2 className="text-3xl mt-6">Total: ${totalPrice}</h2>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-cyan-500 py-4 rounded-xl text-black font-bold"
            >
              Checkout
            </button>
          </>
        )}
      </section>

      <Footer />
    </main>
  );
}