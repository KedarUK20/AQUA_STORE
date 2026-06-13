const stats = [
  {
    value: "500+",
    label: "Aquariums Installed",
  },
  {
    value: "12+",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
];

export default function TrustStats() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card p-8 text-center">
              <h3 className="font-serif text-5xl text-[#6fffe9]">
                {stat.value}
              </h3>

              <p className="mt-3 text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
