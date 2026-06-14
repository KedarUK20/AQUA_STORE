import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#02080d] text-white">

      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-xl font-bold">
              <span className="text-cyan-400">
                AQUARIUM
              </span>

              <span className="block text-xs uppercase tracking-[0.35em] text-cyan-200">
                Nature Studio
              </span>
            </h2>

            <p className="mt-5 text-sm text-slate-400 leading-7">
              Premium aquascaping, custom aquarium design,
              installation and maintenance services.
            </p>

          </div>

          <div>

            <h3 className="mb-4 font-semibold">
              Explore
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/shop">Shop</Link></li>

            </ul>

          </div>

          <div>

            <h3 className="mb-4 font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Custom Aquascaping</li>
              <li>Aquarium Installation</li>
              <li>Maintenance</li>
              <li>Corporate Aquariums</li>
              <li>Water Testing</li>

            </ul>

          </div>

          <div>

            <h3 className="mb-4 font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex gap-3">
                <MapPin className="text-cyan-400 w-5 h-5" />
                <span>
                  Kolhapur,
                  Maharashtra,
                  India
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-cyan-400 w-5 h-5" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-cyan-400 w-5 h-5" />
                <span>
                  hello@aquariumnaturestudio.com
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/5">

        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-xs text-slate-500">
            © {year} Aquarium Nature Studio.
          </p>

          <div className="flex gap-6 text-xs text-slate-500 mt-4 md:mt-0">

            <Link href="/privacy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}