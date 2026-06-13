import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <div className="px-3 sm:px-4 lg:px-6">
        <div className="glass flex h-16 items-center justify-between rounded-lg border-white/10 bg-[#04111f]/78 px-5 shadow-2xl md:px-8">
          <Link href="/" aria-label="Aquarium Nature Studio home">
            <h1 className="text-lg font-serif tracking-normal text-white md:text-xl">
              <span className="text-[#14b8a6]">AQUARIUM</span>
              <span className="block text-[9px] uppercase tracking-[0.36em] text-[#6fffe9]">
                Nature Studio
              </span>
            </h1>
          </Link>

          <nav className="hidden items-center gap-7 text-xs text-slate-300 lg:flex">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/services">Services</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#shop">Shop</Link>
            <Link href="/#about">About Us</Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/#consultation"
              className="btn-secondary hidden px-5 py-2 text-xs sm:inline-flex"
            >
              Book Consultation
            </Link>
            <Search
              className="hidden h-5 w-5 text-slate-300 sm:block"
              aria-hidden="true"
            />
            <ShoppingCart
              className="h-5 w-5 text-slate-300"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
