import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Essential Care",
    subtitle: "For stable home aquariums",
    cadence: "Monthly visit",
    features: [
      "Water testing and correction notes",
      "Glass, substrate and visible algae cleaning",
      "Filter and equipment inspection",
      "Basic plant trimming and livestock observation",
    ],
  },
  {
    name: "Growth Care",
    subtitle: "For planted tanks and active displays",
    cadence: "Bi-weekly visits",
    featured: true,
    features: [
      "Water testing, dosing and parameter tracking",
      "Plant trimming, replanting and layout grooming",
      "Filter media care and flow adjustment",
      "Priority troubleshooting between visits",
    ],
  },
  {
    name: "Managed Ecosystem",
    subtitle: "For premium homes and commercial spaces",
    cadence: "Weekly or custom schedule",
    features: [
      "Complete ecosystem management",
      "Livestock health checks and stocking advice",
      "Equipment tuning, cleaning and performance review",
      "Dedicated specialist for long-term care planning",
    ],
  },
];

export default function MaintenancePlans() {
  return (
    <section id="maintenance-plans" className="bg-[#061521] py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-12 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Maintenance Plans
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Care plans based on how demanding your aquarium is.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            A low-tech home aquarium, a dense planted tank and a commercial
            lobby display do not need the same service rhythm. We match care to
            the system.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border bg-[#071827]/70 p-6 sm:p-7 ${
                plan.featured
                  ? "border-[#14b8a6] shadow-[0_0_40px_rgba(20,184,166,0.15)]"
                  : "border-white/10"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6fffe9]">
                {plan.subtitle}
              </p>

              <h3 className="mt-4 text-2xl font-semibold">{plan.name}</h3>

              <p className="mt-3 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
                {plan.cadence}
              </p>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#14b8a6]" />
                    <span className="leading-6">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/consultation" className="btn-primary mt-8 w-full">
                Enquire Now
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
