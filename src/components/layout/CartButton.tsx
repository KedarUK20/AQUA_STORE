"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { useCart } from "@/src/context/CartContext";

/**
 * Basket icon with a live item-count badge.
 * Reads the shared cart so the count updates as items are added.
 */
export default function CartButton() {
  const { count } = useCart();
  const badgeLabel = count > 99 ? "99+" : `${count}`;

  return (
    <Link
      href="/cart"
      aria-label={count > 0 ? `Cart, ${count} items` : "Cart, empty"}
      className="relative grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
    >
      <ShoppingCart size={18} />
      {count > 0 && (
        <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-cyan-400 px-1 text-[11px] font-bold leading-none text-[#02080d] shadow-[0_0_12px_rgba(6,182,212,0.6)]">
          {badgeLabel}
        </span>
      )}
    </Link>
  );
}
