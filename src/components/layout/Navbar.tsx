"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const router = useRouter();

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-3 md:px-6">
        <div
          className="
          h-16
          rounded-2xl
          bg-[#04111f]/80
          backdrop-blur-xl
          border border-cyan-500/10
          flex items-center justify-between
          px-4 md:px-8
        "
        >
          {/* Logo */}
          <Link href="/">
            <div>
              <h1 className="text-lg md:text-xl font-bold text-cyan-400">
                AQUARIUM
              </h1>

              <p className="text-[8px] md:text-[10px] tracking-[0.35em] text-cyan-200 uppercase">
                Nature Studio
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-white">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Search Desktop */}
            <div className="hidden md:flex items-center bg-white/10 rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) =>
                  setQuery(e.target.value)
                }
                className="
                  bg-transparent
                  outline-none
                  text-white
                  w-36
                "
              />

              <button onClick={handleSearch}>
                <Search
                  size={18}
                  className="text-white"
                />
              </button>
            </div>

            {/* Mobile Search */}
            <button className="md:hidden">
              <Search
                size={22}
                className="text-white"
              />
            </button>

            {/* Consultation */}
            <Link
              href="/consultation"
              className="
              hidden md:flex
              px-5 py-2
              rounded-xl
              border border-cyan-500
              text-white
              hover:bg-cyan-500/10
            "
            >
              Consultation
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <ShoppingCart
                size={22}
                className="text-white"
              />
            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() =>
                setMobileMenu(!mobileMenu)
              }
              className="lg:hidden"
            >
              {mobileMenu ? (
                <X
                  size={24}
                  className="text-white"
                />
              ) : (
                <Menu
                  size={24}
                  className="text-white"
                />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
        fixed top-0 right-0
        h-screen w-[280px]
        bg-[#06141B]
        border-l border-cyan-500/20
        z-[60]
        transition-all duration-300
        ${
          mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >
        <div className="p-6">

          <div className="flex justify-between mb-8">
            <h2 className="text-xl text-white font-bold">
              Menu
            </h2>

            <button
              onClick={() =>
                setMobileMenu(false)
              }
            >
              <X className="text-white" />
            </button>
          </div>

          <div className="flex flex-col gap-5 text-white">

            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/cart">Cart</Link>

          </div>

        </div>
      </div>
    </>
  );
}