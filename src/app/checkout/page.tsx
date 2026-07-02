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
      await fetch(
        "https://script.google.com/macros/s/AKfycbze0JWtV9oHNl2E6ETsGpzMRvkPfSnMuMEbGJsLdx3ExHhgAuxfR70KdIEOnUNCCmkObg/exec",
        {
          method: "POST",
          body: JSON.stringify(orderData),
        }
      );

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
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#06141B] text-white">
        <Navbar />

        {/* Background */}
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520301255226-bf5f144451c1?q=80&w=2070')",
          }}
        />

        {/* Overlay */}
        <div className="fixed inset-0 -z-10 bg-black/80" />

        <section className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-24">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
              Secure Checkout
            </p>

            <h1 className="text-5xl font-bold md:text-6xl">
              Complete Your Order
            </h1>

            <p className="mt-4 text-gray-400">
              Safe • Secure • Fast Delivery
            </p>
          </div>

          {cartItems.length === 0 ? (
            <div className="rounded-3xl border border-emerald-900 bg-[#0b1d26]/80 p-12 text-center backdrop-blur-xl">
              <h2 className="mb-4 text-3xl font-bold">Cart is Empty 🛒</h2>

              <button
                onClick={() => router.push("/shop")}
                className="rounded-xl bg-emerald-500 px-8 py-4 font-bold text-black hover:bg-emerald-400"
              >
                Go To Shop
              </button>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Billing */}
              <div className="rounded-3xl border border-emerald-900 bg-[#0b1d26]/80 p-8 backdrop-blur-xl lg:col-span-2">
                <h2 className="mb-8 text-3xl font-bold">Billing Details</h2>

                <div className="grid gap-5 md:grid-cols-2">
                  <input
                    placeholder="Full Name"
                    className="rounded-xl border border-emerald-900 bg-[#06141B] p-4 outline-none"
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                  />

                  <input
                    placeholder="Phone Number"
                    className="rounded-xl border border-emerald-900 bg-[#06141B] p-4 outline-none"
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />

                  <input
                    placeholder="City"
                    className="rounded-xl border border-emerald-900 bg-[#06141B] p-4 outline-none"
                    onChange={(e) =>
                      setForm({ ...form, city: e.target.value })
                    }
                  />

                  <input
                    placeholder="Pincode"
                    className="rounded-xl border border-emerald-900 bg-[#06141B] p-4 outline-none"
                    onChange={(e) =>
                      setForm({ ...form, pincode: e.target.value })
                    }
                  />
                </div>

                <textarea
                  placeholder="Full Address"
                  rows={5}
                  className="mt-5 w-full rounded-xl border border-emerald-900 bg-[#06141B] p-4 outline-none"
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                />
              </div>

              {/* Summary */}
              <div className="rounded-3xl border border-emerald-900 bg-[#0b1d26]/80 p-8 backdrop-blur-xl">
                <h2 className="mb-8 text-3xl font-bold">Order Summary</h2>

                <div className="max-h-[350px] space-y-4 overflow-auto">
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-emerald-900 bg-[#06141B] p-4"
                    >
                      <div className="flex justify-between">
                        <span>{item.title}</span>
                        <span>x {item.quantity}</span>
                      </div>

                      <div className="mt-2 font-bold text-emerald-400">
                        $
                        {Number(item.price.replace("$", "")) * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-emerald-900 pt-6">
                  <div className="flex justify-between text-2xl font-bold">
                    <span>Total</span>
                    <span className="text-emerald-400">${totalPrice}</span>
                  </div>
                </div>

                <button
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="mt-8 w-full rounded-2xl bg-emerald-500 py-4 text-lg font-bold text-black hover:bg-emerald-400 disabled:opacity-50"
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}