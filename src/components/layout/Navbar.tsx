"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const total = cart.reduce(
      (sum: number, item: any) => sum + item.quantity,
      0
    );

    setCartCount(total);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener("storage", updateCartCount);
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3">
        <div className="container-custom">
          <div className="glass h-16 rounded-2xl flex items-center justify-between px-4 md:px-6">

            <Link href="/">
              <div>
                <h1 className="text-lg md:text-xl font-bold text-cyan-400">
                  AQUARIUM
                </h1>
                <p className="text-[10px] tracking-[0.35em] uppercase text-cyan-200">
                  Nature Studio
                </p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-400"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-36 bg-transparent text-sm text-white outline-none"
                />

                <button onClick={handleSearch}>
                  <Search size={18} className="text-slate-300" />
                </button>
              </div>

              <Link href="/cart" className="relative">
                <ShoppingCart
                  size={22}
                  className="text-slate-300 hover:text-cyan-400"
                />

                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="lg:hidden"
              >
                {mobileMenu ? (
                  <X size={24} className="text-white" />
                ) : (
                  <Menu size={24} className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}