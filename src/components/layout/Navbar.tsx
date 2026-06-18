"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");

  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ];

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
    setQuery("");
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 py-3">
        <div className="container-custom">

          <div
            className="
            glass
            h-16
            rounded-2xl
            flex
            items-center
            justify-between
            px-4
            md:px-6
            "
          >

            {/* Logo */}
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

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8 text-sm">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="
                  text-slate-300
                  transition
                  hover:text-cyan-400
                  "
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">

              {/* Search */}
              <div
                className="
                hidden
                md:flex
                items-center
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-3
                py-2
                "
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) =>
                    setQuery(e.target.value)
                  }
                  className="
                  w-36
                  bg-transparent
                  text-sm
                  text-white
                  outline-none
                  "
                />

                <button onClick={handleSearch}>
                  <Search
                    size={18}
                    className="text-slate-300 hover:text-cyan-400"
                  />
                </button>
              </div>

              {/* Mobile Search */}
              <button className="md:hidden">
                <Search
                  size={20}
                  className="text-slate-300"
                />
              </button>

              {/* Cart */}
              <Link href="/cart">
                <ShoppingCart
                  size={20}
                  className="
                  text-slate-300
                  hover:text-cyan-400
                  transition
                  "
                />
              </Link>

              {/* Desktop CTA */}
              <Link
                href="/consultation"
                className="
                hidden
                lg:flex
                btn-primary
                "
              >
                Book Consultation
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

        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`
        fixed
        top-0
        right-0
        h-screen
        w-[280px]
        bg-[#04111f]
        border-l
        border-cyan-500/10
        backdrop-blur-xl
        z-[60]
        transition-all
        duration-300
        ${
          mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
        }
      `}
      >

        <div className="p-6">

          <div className="mb-8 flex items-center justify-between">

            <h2 className="text-xl font-bold text-cyan-400">
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

          <nav className="flex flex-col gap-5">

            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileMenu(false)
                }
                className="
                text-slate-300
                hover:text-cyan-400
                "
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/consultation"
              onClick={() =>
                setMobileMenu(false)
              }
              className="btn-primary mt-4"
            >
              Book Consultation
            </Link>

          </nav>

        </div>

      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div
          onClick={() =>
            setMobileMenu(false)
          }
          className="
          fixed
          inset-0
          bg-black/50
          backdrop-blur-sm
          z-40
          "
        />
      )}
    </>
  );
}