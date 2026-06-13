import Link from "next/link";

const footerLinks = [
  { label: "Discover", href: "/discover" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Shop", href: "/#shop" },
  { label: "Consultation", href: "/#consultation" },
];

export default function Footer() {
  return (
    <footer id="about" className="border-t border-white/10 bg-[#02080d] py-14">
      <div className="mx-auto grid w-full max-w-[1800px] gap-10 px-4 sm:px-6 lg:px-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link href="/" className="font-serif text-2xl text-white">
            <span className="text-[#14b8a6]">AQUARIUM</span>
            <span className="block text-[10px] uppercase tracking-[0.4em] text-[#6fffe9]">
              Nature Studio
            </span>
          </Link>
          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            Premium aquascaping, aquarium builds, curated aquatic products, and
            calm long-term maintenance for homes, offices, hotels, and living
            spaces.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-300 md:justify-end">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-slate-500 md:col-span-2 md:flex md:items-center md:justify-between">
          <p>Copyright 2026 Aquarium Nature Studio. All rights reserved.</p>
          <p className="mt-3 md:mt-0">Designed for living water.</p>
        </div>
      </div>
    </footer>
  );
}
