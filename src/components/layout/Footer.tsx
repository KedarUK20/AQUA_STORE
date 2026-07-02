import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

type FooterProps = {
  className?: string;
};

export default function Footer({ className = "mt-24" }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-8 border-t border-white/10 bg-[#02080d] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>

            <h2 className="text-xl font-bold">
              <span className="text-cyan-400">
                AQUARIUM
              </span>

              <span className="block text-xs uppercase tracking-[0.35em] text-cyan-200 mt-1">
                Nature Studio
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Premium aquascaping, custom aquarium design,
              installation, maintenance and luxury aquatic
              ecosystems for homes and businesses.
            </p>

           

          </div>

          {/* Explore */}
          <div>

            <h3 className="mb-5 text-white font-semibold">
              Explore
            </h3>

            <ul className="space-y-3 text-slate-400">
              {exploreLinks.map((link) => (
          
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-cyan-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="mb-5 text-white font-semibold">
              Services
            </h3>

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

            <h3 className="mb-5 text-white font-semibold">
              Contact
            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="flex items-start gap-3">

                <MapPin className="h-5 w-5 shrink-0 text-cyan-400 mt-1" />

                <span>
                  Kolhapur,
                  Maharashtra,
                  India
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Phone className="h-5 w-5 text-cyan-400" />

                <span>
                  +91 9876543210
                </span>

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

      

    </footer>
  );
}
