import {
  Building2,
  Hotel,
  Briefcase,
  UtensilsCrossed,
  HeartPulse,
  Home,
} from "lucide-react";

const industries = [
  {
    icon: Hotel,
    title: "Hotels & Resorts",
    text: "Luxury aquariums designed to create memorable guest experiences.",
  },
  {
    icon: Briefcase,
    title: "Corporate Offices",
    text: "Enhance employee wellbeing and create premium workspaces.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    text: "Create immersive dining environments with living aquatic displays.",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & Clinics",
    text: "Reduce stress and create calming waiting areas.",
  },
  {
    icon: Home,
    title: "Luxury Residences",
    text: "Bespoke aquariums integrated into modern interiors.",
  },
  {
    icon: Building2,
    title: "Retail & Commercial",
    text: "Attract visitors and create standout brand experiences.",
  },
];

export default function CommercialServices() {
  return (
    <section className="bg-[#04111f] py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            COMMERCIAL SOLUTIONS
          </p>

          <h2 className="font-serif text-5xl">
            Designed For Professional Spaces
          </h2>

          <p className="mt-4 max-w-3xl text-slate-400">
            From boutique hotels to corporate headquarters, we design aquatic
            experiences that elevate interiors and leave lasting impressions.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="premium-card p-8 transition duration-300 hover:-translate-y-2"
            >
              <industry.icon className="h-8 w-8 text-[#14b8a6]" />

              <h3 className="mt-6 text-2xl font-semibold">{industry.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">{industry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
