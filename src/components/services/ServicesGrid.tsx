import Link from "next/link";
import {
  Building2,
  Fish,
  Gem,
  Leaf,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Custom Aquarium Design",
    description:
      "Tank size, placement, cabinet finish, lighting mood and viewing angles planned for your room.",
    deliverables: ["Concept direction", "Equipment list", "Space planning"],
  },
  {
    icon: Leaf,
    title: "Aquascaping & Planting",
    description:
      "Stone, driftwood, substrate, plants and open swimming zones composed for a healthy layout.",
    deliverables: ["Hardscape layout", "Plant selection", "CO2 guidance"],
  },
  {
    icon: Fish,
    title: "Marine & Reef Systems",
    description:
      "Saltwater displays planned around flow, filtration, coral needs and stable water parameters.",
    deliverables: ["Reef equipment", "Flow planning", "Stocking sequence"],
  },
  {
    icon: ShieldCheck,
    title: "Maintenance Programs",
    description:
      "Regular cleaning, testing, trimming and health checks for planted, freshwater and marine systems.",
    deliverables: ["Visit schedule", "Water testing", "Care reports"],
  },
  {
    icon: Building2,
    title: "Commercial Installations",
    description:
      "Aquariums for lobbies, offices, hotels, restaurants and clinics where reliability matters.",
    deliverables: ["Site planning", "Quiet systems", "Service access"],
  },
  {
    icon: Wrench,
    title: "Repair & Equipment Upgrades",
    description:
      "Filtration, lighting, pump, heater and CO2 improvements for tanks that need better performance.",
    deliverables: ["Diagnostics", "Upgrade plan", "Installation support"],
  },
  {
    icon: Truck,
    title: "Relocation & Reset",
    description:
      "Safe aquarium moving, livestock handling, rescape support and restart planning.",
    deliverables: ["Move planning", "Livestock care", "Reinstallation"],
  },
];

export default function ServicesGrid() {
  return (
    <section id="service-menu" className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Service Menu
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
              Choose the service that matches where your aquarium is now.
            </h2>
          </div>

          <Link href="/consultation" className="btn-secondary w-fit">
            Discuss Your Tank
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-lg border border-white/10 bg-[#071827]/70 p-6 transition duration-300 hover:border-[#6fffe9]/45 sm:p-7"
              >
                <Icon className="h-8 w-8 text-[#14b8a6]" />

                <h3 className="mt-7 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.deliverables.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 px-3 py-1 text-xs text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
