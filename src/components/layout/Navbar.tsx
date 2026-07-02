"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { EllipsisVertical, Search, ShoppingCart, X } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
];

type CartItem = {
  quantity?: number;
};

const getCartCount = () => {
  if (typeof window === "undefined") return 0;

  try {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[];

    return cart.reduce((total, item) => total + Number(item.quantity || 0), 0);
  } catch {
    return 0;
  }
};

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateCartCount = () => setCartCount(getCartCount());

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleSearch = () => {
    const value = query.trim();

    if (!value) return;

    router.push(`/shop?search=${encodeURIComponent(value)}`);
    setQuery("");
    setMobileMenu(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 lg:px-6">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="glass flex h-16 items-center justify-between gap-2 rounded-xl border-white/10 bg-[#04111f]/82 px-3 shadow-2xl backdrop-blur-xl sm:h-18 sm:gap-3 sm:px-5 lg:h-20 lg:px-7">
            <Link
              href="/"
              aria-label="Aquarium Nature Studio home"
              className="shrink-0"
            >
              <span className="block text-lg font-bold leading-none text-cyan-400 sm:text-xl">
                AQUARIUM
              </span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.34em] text-cyan-200 sm:text-[10px]">
                Nature Studio
              </span>
            </Link>

            <nav className="hidden items-center gap-7 text-sm xl:flex">
              {links.map((item) => {
                const isActive =
                  item.href === "/" ? pathname === "/" : pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition ${
                      isActive ? "text-cyan-300" : "text-slate-300"
                    } hover:text-cyan-300`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
              <div className="hidden items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 md:flex">
                <input
                  type="search"
                  placeholder="Search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") handleSearch();
                  }}
                  className="w-28 bg-transparent text-sm text-white outline-none placeholder:text-slate-500 lg:w-40"
                />
                <button
                  type="button"
                  onClick={handleSearch}
                  aria-label="Search shop"
                  className="text-slate-300 transition hover:text-cyan-300"
                >
                  <Search size={18} />
                </button>
              </div>

              <div className="hidden xl:block">
                <Link
                  href="/consultation"
                  className="btn-primary whitespace-nowrap px-5 py-2 text-xs"
                >
                  Book Consultation
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenu(true)}
                aria-label="Open search"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300 md:hidden"
              >
                <Search size={18} />
              </button>

              <Link
                href="/cart"
                aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ""}`}
                className="relative grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-400 px-1 text-[11px] font-bold leading-none text-[#03110d] ring-2 ring-[#04111f]">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenu(true)}
                aria-label="Open menu"
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-cyan-400/60 hover:text-cyan-300 xl:hidden"
              >
                <EllipsisVertical size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenu && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm xl:hidden"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[60] h-dvh w-[min(88vw,360px)] border-l border-cyan-400/15 bg-[#04111f]/96 shadow-2xl backdrop-blur-xl transition-transform duration-300 xl:hidden ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <span className="block text-lg font-bold text-cyan-400">
                AQUARIUM
              </span>
              <span className="block text-[9px] uppercase tracking-[0.34em] text-cyan-200">
                Nature Studio
              </span>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenu(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white"
            >
              <X size={20} />
            </button>
          </div>

          <div className="mt-5 flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 md:hidden">
            <input
              type="search"
              placeholder="Search shop"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") handleSearch();
              }}
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button
              type="button"
              onClick={handleSearch}
              aria-label="Search shop"
              className="text-slate-300"
            >
              <Search size={18} />
            </button>
          </div>

          <nav className="mt-7 flex flex-col gap-1">
            {links.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`rounded-lg px-4 py-3 text-base transition ${
                    isActive
                      ? "bg-cyan-400/10 text-cyan-300"
                      : "text-slate-200 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto space-y-3 border-t border-white/10 pt-5">
            <Link
              href="/consultation"
              onClick={() => setMobileMenu(false)}
              className="btn-primary w-full"
            >
              Book Consultation
            </Link>
            <Link
              href="/cart"
              onClick={() => setMobileMenu(false)}
              className="btn-secondary relative w-full"
            >
              View Cart
              {cartCount > 0 && (
                <span className="ml-2 inline-grid h-5 min-w-5 place-items-center rounded-full bg-emerald-400 px-1 text-[11px] font-bold leading-none text-[#03110d]">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
