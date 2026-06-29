import Link from "next/link";
import { ArrowRight, Gem, Leaf, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Bespoke Aquarium Design",
    text: "Custom glass, cabinetry, lighting, filtration and interior-led placement.",
  },
  {
    icon: Leaf,
    title: "Luxury Aquascaping",
    text: "Stone, driftwood, rare plants and negative space composed like living artwork.",
  },
  {
    icon: ShieldCheck,
    title: "White-Glove Maintenance",
    text: "Scheduled cleaning, trimming, water chemistry, livestock health and quiet support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#061521] py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
              Studio Services
            </p>
            <h2 className="font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
              Every detail handled from first sketch to long-term care.
            </h2>
          </div>

          <Link href="/services" className="btn-secondary w-fit">
            Explore All Services
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-[#071827]/70 p-6 transition duration-300 hover:border-[#6fffe9]/50 sm:p-7"
              >
                <Icon className="h-7 w-7 text-[#14b8a6]" />
                <h3 className="mt-8 text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-400">
                  {service.text}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#6fffe9]"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
