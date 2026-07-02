"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import { useCart } from "@/src/context/CartContext";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function CartPage() {
  const { items, count, subtotal, increment, decrement, removeItem, clearCart } =
    useCart();

  const isEmpty = items.length === 0;

  return (
    <main className="min-h-screen bg-[#02080d] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Your Basket
            </p>
            <h1 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
              Shopping Cart
            </h1>
            <p className="mt-2 text-slate-400">
              {isEmpty
                ? "Your cart is empty for now."
                : `${count} item${count === 1 ? "" : "s"} ready for checkout.`}
            </p>
          </div>

          {!isEmpty && (
            <button
              type="button"
              onClick={() => {
                clearCart();
                toast("Cart cleared");
              }}
              className="inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-red-400/50 hover:text-red-300"
            >
              <Trash2 size={16} />
              Clear cart
            </button>
          )}
        </div>

        {isEmpty ? (
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#071827]/70 px-6 py-20 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
              <ShoppingBag size={28} />
            </span>
            <h2 className="mt-6 text-2xl font-semibold text-white">
              Nothing in your cart yet
            </h2>
            <p className="mt-2 max-w-md text-sm leading-7 text-slate-400">
              Browse the shop and add products. They will show up here and the
              basket icon will keep count.
            </p>
            <Link href="/shop" className="btn-primary mt-8">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            {/* Line items */}
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col gap-4 rounded-xl border border-white/10 bg-[#071827]/70 p-4 sm:flex-row sm:items-center"
                >
                  <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                    {item.image ? (
                      // Plain img (not next/image) so any product image host works
                      // without needing to be whitelisted in next.config.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center bg-white/5 text-slate-500">
                        <ShoppingBag size={22} />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-cyan-300">
                      {currency.format(item.unitPrice)}
                      <span className="text-slate-500"> each</span>
                    </p>
                  </div>

                  {/* Quantity stepper */}
                  <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.04]">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        aria-label={`Decrease ${item.title} quantity`}
                        className="grid h-9 w-9 place-items-center text-slate-300 transition hover:text-cyan-300"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="grid h-9 min-w-[2.25rem] place-items-center text-sm font-semibold text-white">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        aria-label={`Increase ${item.title} quantity`}
                        className="grid h-9 w-9 place-items-center text-slate-300 transition hover:text-cyan-300"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className="w-20 text-right text-sm font-semibold text-white">
                      {currency.format(item.unitPrice * item.quantity)}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        removeItem(item.id);
                        toast(`${item.title} removed`);
                      }}
                      aria-label={`Remove ${item.title} from cart`}
                      className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-red-400/50 hover:text-red-300"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            {/* Summary */}
            <aside className="h-fit rounded-xl border border-white/10 bg-[#04111f]/80 p-6 lg:sticky lg:top-28">
              <h2 className="text-lg font-semibold text-white">Order summary</h2>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between text-slate-300">
                  <dt>Subtotal ({count} items)</dt>
                  <dd className="font-medium text-white">
                    {currency.format(subtotal)}
                  </dd>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <dt>Shipping</dt>
                  <dd className="text-slate-400">Calculated at checkout</dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-slate-300">Total</span>
                <span className="text-2xl font-bold text-cyan-400">
                  {currency.format(subtotal)}
                </span>
              </div>

              <button
                type="button"
                onClick={() => toast.success("Checkout is coming soon")}
                className="btn-primary mt-6 w-full"
              >
                Proceed to checkout
              </button>

              <Link
                href="/shop"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300"
              >
                <ArrowLeft size={16} />
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
