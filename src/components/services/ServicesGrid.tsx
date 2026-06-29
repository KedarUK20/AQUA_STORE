import {
  Gem,
  Leaf,
  ShieldCheck,
  Building2,
  Fish,
  Wrench,
  Sparkles,
  Truck,
} from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Custom Aquarium Design",
    description:
      "Luxury aquariums tailored to architecture and interior design.",
  },
  {
    icon: Leaf,
    title: "Aquascaping",
    description: "Nature-inspired layouts using stone, driftwood and plants.",
  },
  {
    icon: Fish,
    title: "Marine & Reef Systems",
    description: "Premium saltwater and coral reef environments.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Programs",
    description: "Weekly and monthly professional care plans.",
  },
  {
    icon: Building2,
    title: "Commercial Installations",
    description: "Hotels, offices, restaurants and hospitality spaces.",
  },
  {
    icon: Truck,
    title: "Aquarium Relocation",
    description: "Safe transfer and reinstallation of existing systems.",
  },
  {
    icon: Wrench,
    title: "Equipment Upgrades",
    description: "Lighting, filtration and automation enhancements.",
  },
  {
    icon: Sparkles,
    title: "Emergency Support",
    description: "Rapid troubleshooting and water quality recovery.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            WHAT WE DO
          </p>

          <h2 className="font-serif text-5xl">Complete Aquarium Services</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="premium-card group p-8 transition duration-300 hover:-translate-y-2"
            >
              <service.icon className="h-8 w-8 text-[#14b8a6]" />

              <h3 className="mt-8 text-xl font-semibold">{service.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
