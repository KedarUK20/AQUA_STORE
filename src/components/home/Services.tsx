import { Gem, Leaf, ShieldCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Gem,
    title: "Bespoke Aquarium Design",
    text: "Custom glass, cabinetry, lighting, filtration, and interior-led placement.",
  },
  {
    icon: Leaf,
    title: "Luxury Aquascaping",
    text: "Stone, driftwood, rare plants, and negative space composed like a living artwork.",
  },
  {
    icon: ShieldCheck,
    title: "White-Glove Maintenance",
    text: "Scheduled cleaning, trimming, water chemistry, livestock health, and quiet support.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#061521] py-28">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
            Studio Services
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Every detail handled from first sketch to long-term care.
          </h2>
        </div>

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
"
>
          {services.map((service) => (
            <div
              key={service.title}
              className="premium-card group p-7 transition duration-300 hover:border-[#6fffe9]/50"
            >
              <service.icon className="h-7 w-7 text-[#14b8a6]" />
              <h3 className="mt-10 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

<div className="mt-10 text-center">
  <Link href="/services" className="btn-primary">
    Explore All Services
  </Link>
</div>;
