"use client";

import Link from "next/link";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      <div className="px-4 lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between rounded-xl border border-cyan-500/10 bg-[#04111f]/80 backdrop-blur-xl px-5 shadow-2xl">
            <Link href="/">
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-cyan-400">AQUARIUM</span>

                  <span className="block text-[9px] uppercase tracking-[0.35em] text-cyan-200">
                    Nature Studio
                  </span>
                </h1>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300">
              <Link href="/" className="hover:text-cyan-400">
                Home
              </Link>

              <Link href="/about" className="hover:text-cyan-400">
                About
              </Link>

              <Link href="/projects" className="hover:text-cyan-400">
                Projects
              </Link>

              <Link href="/gallery" className="hover:text-cyan-400">
                Gallery
              </Link>

              <Link href="/shop" className="hover:text-cyan-400">
                Shop
              </Link>

              <Link href="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Search className="hidden sm:block w-5 h-5 text-slate-300 cursor-pointer" />

              <div className="relative cursor-pointer">
                <ShoppingCart className="w-5 h-5 text-slate-300" />

                <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-[10px] px-1 rounded-full">
                  2
                </span>
              </div>

              <Link
                href="/contact"
                className="hidden md:flex rounded-lg bg-cyan-500 px-5 py-2 text-sm font-semibold text-black hover:bg-cyan-400 transition"
              >
                Free Consultation
              </Link>

              <button className="lg:hidden" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {open && (
            <div className="lg:hidden mt-2 rounded-xl bg-[#061523] border border-white/10 p-5">
              <div className="flex flex-col gap-4 text-slate-300">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/shop">Shop</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
