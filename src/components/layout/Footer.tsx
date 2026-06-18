import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-[#02080d] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-cyan-400">AQUARIUM</span>

              <span className="block text-xs uppercase tracking-[0.35em] text-cyan-200 mt-1">
                Nature Studio
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Premium aquascaping, custom aquarium design, installation,
              maintenance and luxury aquatic ecosystems for homes and
              businesses.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-white font-semibold">Explore</h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>

              <li>
                <Link href="/projects" className="footer-link">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="footer-link">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/shop" className="footer-link">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-white font-semibold">Services</h3>

            <ul className="space-y-3 text-slate-400">
              <li>Custom Aquascaping</li>
              <li>Aquarium Installation</li>
              <li>Maintenance & Care</li>
              <li>Corporate Aquariums</li>
              <li>Water Testing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-white font-semibold">Contact</h3>

            <div className="space-y-5 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />

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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-xs text-slate-500">
              © {year} Aquarium Nature Studio. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
              <Link href="/privacy" className="hover:text-cyan-400 transition">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-cyan-400 transition">
                Terms
              </Link>

              <Link href="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </div>

            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
