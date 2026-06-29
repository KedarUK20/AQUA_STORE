import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
];

const serviceLinks = [
  "Custom Aquascaping",
  "Aquarium Installation",
  "Maintenance & Care",
  "Corporate Aquariums",
  "Water Testing",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#02080d] text-white">
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-cyan-400">AQUARIUM</span>
              <span className="mt-1 block text-xs uppercase tracking-[0.35em] text-cyan-200">
                Nature Studio
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Premium aquascaping, custom aquarium design, installation,
              maintenance and luxury aquatic ecosystems for homes and
              businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">Explore</h3>
            <ul className="space-y-3 text-slate-400">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-cyan-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">Services</h3>
            <ul className="space-y-3 text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-semibold text-white">Contact</h3>
            <div className="space-y-5 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                <span>Kolhapur, Maharashtra, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="break-all">
                  hello@aquariumnaturestudio.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-xs text-slate-500 md:flex md:items-center md:justify-between">
          <p>Copyright {year} Aquarium Nature Studio. All rights reserved.</p>

          <div className="mt-4 flex flex-wrap gap-5 md:mt-0">
            <Link href="/privacy" className="transition hover:text-cyan-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-cyan-400">
              Terms
            </Link>
            <Link href="/contact" className="transition hover:text-cyan-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
