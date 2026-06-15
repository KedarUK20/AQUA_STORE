"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="glass flex h-16 items-center justify-between rounded-lg border-white/10 bg-[#04111f]/78 px-5 shadow-2xl md:px-8">

          {/* LOGO */}
          <Link href="/" aria-label="Aquarium Nature Studio home">
            <h1 className="text-lg font-serif tracking-normal text-white md:text-xl">
              <span className="text-[#14b8a6]">AQUARIUM</span>
              <span className="block text-[9px] uppercase tracking-[0.36em] text-[#6fffe9]">
                Nature Studio
              </span>
            </h1>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden items-center gap-7 text-xs text-slate-300 lg:flex">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/#about">About Us</Link>
          </nav>

          {/* SEARCH + CART */}
          <div className="flex items-center gap-3">

            {/* SEARCH INPUT (desktop) */}
            <div className="hidden sm:flex items-center bg-white/10 px-3 py-1 rounded-md">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent outline-none text-white text-sm w-32"
              />

              <button onClick={handleSearch}>
                <Search className="h-5 w-5 text-slate-300 cursor-pointer" />
              </button>
            </div>

            {/* CONSULT BUTTON */}
            <Link
              href="/#consultation"
              className="btn-secondary hidden px-5 py-2 text-xs sm:inline-flex"
            >
              Book Consultation
            </Link>

            {/* CART */}
            <ShoppingCart
              className="h-5 w-5 text-slate-300 cursor-pointer"
              aria-hidden="true"
            />
          </div>

        </div>
      </div>
    </header>
  );
}