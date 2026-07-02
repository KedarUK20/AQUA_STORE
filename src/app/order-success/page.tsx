"use client";

import Link from "next/link";
import Navbar from "../../components/layout/Navbar";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-[#06141B] text-white">
      <Navbar />

      <section className="flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-2xl w-full bg-[#0b1d26] border border-cyan-900 rounded-3xl p-10 text-center shadow-xl">
          <div className="text-7xl mb-6">✅</div>

          <h1 className="text-5xl font-bold text-cyan-400 mb-4">
            Order Placed Successfully
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            Thank you for your order.
            Your aquarium products will be processed soon.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* <Link
              href="/shop"
              className="bg-cyan-500 hover:bg-cyan-400 px-6 py-4 rounded-xl text-black font-bold"
            >
              Continue Shopping
            </Link> */}

            <Link
              href="/"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-4 rounded-xl font-bold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
