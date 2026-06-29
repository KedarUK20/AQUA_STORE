"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function CheckoutPage() {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(cart);
  }, []);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + Number(item.price.replace("$", "")) * item.quantity;
  }, 0);

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty");
      return;
    }

    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    const orderData = {
      id: "ORD" + Date.now(),
      customer: form,
      items: cartItems,
      total: totalPrice,
      status: "Pending",
      createdAt: new Date().toLocaleString(),
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbze0JWtV9oHNl2E6ETsGpzMRvkPfSnMuMEbGJsLdx3ExHhgAuxfR70KdIEOnUNCCmkObg/exec", {
        method: "POST",
        body: JSON.stringify(orderData),
      });

      const existingOrders = JSON.parse(
        localStorage.getItem("orders") || "[]"
      );

      existingOrders.push(orderData);

      localStorage.setItem("orders", JSON.stringify(existingOrders));
      localStorage.setItem("lastOrder", JSON.stringify(orderData));
      localStorage.removeItem("cart");

      window.dispatchEvent(new Event("cartUpdated"));

      router.push("/order-success");
    } catch (error) {
      console.log(error);
      alert("Order failed");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#06141B] text-white relative">
      <Navbar />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520301255226-bf5f144451c1?q=80&w=2070')",
        }}
      />

      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Secure Checkout
          </p>

          <h1 className="text-5xl md:text-6xl font-bold">
            Complete Your Order
          </h1>

          <p className="text-gray-400 mt-4">
            Safe • Secure • Fast Delivery
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-[#0b1d26]/80 backdrop-blur-xl rounded-3xl p-12 text-center border border-cyan-900">
            <h2 className="text-3xl font-bold mb-4">
              Cart is Empty 🛒
            </h2>

            <button
              onClick={() => router.push("/shop")}
              className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl text-black font-bold"
            >
              Go To Shop
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0b1d26]/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-900">
              <h2 className="text-3xl font-bold mb-8">
                Billing Details
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Full Name"
                  className="p-4 rounded-xl bg-[#06141B] border border-cyan-900 outline-none"
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

                <input
                  placeholder="Phone Number"
                  className="p-4 rounded-xl bg-[#06141B] border border-cyan-900 outline-none"
                  onChange={(e) =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

                <input
                  placeholder="City"
                  className="p-4 rounded-xl bg-[#06141B] border border-cyan-900 outline-none"
                  onChange={(e) =>
                    setForm({ ...form, city: e.target.value })
                  }
                />

                <input
                  placeholder="Pincode"
                  className="p-4 rounded-xl bg-[#06141B] border border-cyan-900 outline-none"
                  onChange={(e) =>
                    setForm({ ...form, pincode: e.target.value })
                  }
                />
              </div>

              <textarea
                placeholder="Full Address"
                rows={5}
                className="w-full mt-5 p-4 rounded-xl bg-[#06141B] border border-cyan-900 outline-none"
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />
            </div>

            <div className="bg-[#0b1d26]/80 backdrop-blur-xl rounded-3xl p-8 border border-cyan-900">
              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-4 max-h-[350px] overflow-auto">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#06141B] p-4 rounded-xl border border-cyan-900"
                  >
                    <div className="flex justify-between">
                      <span>{item.title}</span>
                      <span>x {item.quantity}</span>
                    </div>

                    <div className="mt-2 text-cyan-400 font-bold">
                      $
                      {Number(item.price.replace("$", "")) *
                        item.quantity}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-cyan-900 mt-6 pt-6">
                <div className="flex justify-between text-2xl font-bold">
                  <span>Total</span>
                  <span className="text-cyan-400">
                    ${totalPrice}
                  </span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full mt-8 bg-cyan-500 hover:bg-cyan-400 py-4 rounded-2xl text-black font-bold text-lg disabled:opacity-50"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                🔒 100% Secure Checkout
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}