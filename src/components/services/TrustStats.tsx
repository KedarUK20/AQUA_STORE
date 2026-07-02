const stats = [
  {
    value: "500+",
    label: "Aquariums installed and serviced",
  },
  {
    value: "10+",
    label: "Years of aquarium care experience",
  },
  {
    value: "50+",
    label: "Commercial service environments",
  },
  {
    value: "3",
    label: "Care levels for different tank needs",
  },
];

export default function TrustStats() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-10">
      <div className="container-custom">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/10 bg-[#071827]/70 p-5"
            >
              <h3 className="font-serif text-4xl leading-none text-[#6fffe9]">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
