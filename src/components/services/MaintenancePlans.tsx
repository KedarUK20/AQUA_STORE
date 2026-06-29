const plans = [
  {
    name: "Essential",
    subtitle: "For hobbyists",
    features: [
      "Monthly Visit",
      "Water Testing",
      "Glass Cleaning",
      "Equipment Inspection",
    ],
  },
  {
    name: "Premium",
    subtitle: "Most Popular",
    featured: true,
    features: [
      "Bi-Weekly Visits",
      "Plant Trimming",
      "Livestock Health Monitoring",
      "Filter Maintenance",
      "Priority Support",
    ],
  },
  {
    name: "Elite",
    subtitle: "White Glove Service",
    features: [
      "Weekly Visits",
      "Complete Ecosystem Management",
      "Emergency Response",
      "Premium Aquascaping Support",
      "Dedicated Specialist",
    ],
  },
];

export default function MaintenancePlans() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            MAINTENANCE PLANS
          </p>

          <h2 className="font-serif text-5xl">Long-Term Aquarium Care</h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Keep your aquarium thriving with professional care plans tailored to
            your lifestyle and ecosystem.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`premium-card p-8 ${
                plan.featured
                  ? "border-[#14b8a6] shadow-[0_0_40px_rgba(20,184,166,0.15)]"
                  : ""
              }`}
            >
              <p className="text-sm uppercase tracking-widest text-[#6fffe9]">
                {plan.subtitle}
              </p>

              <h3 className="mt-4 text-3xl font-semibold">{plan.name}</h3>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#14b8a6]" />

                    {feature}
                  </li>
                ))}
              </ul>

              <button className="btn-primary mt-10 w-full">Enquire Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
