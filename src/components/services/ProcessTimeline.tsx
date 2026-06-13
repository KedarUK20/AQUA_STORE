const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We understand your space, goals, maintenance preference and budget.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Layouts, materials, equipment and livestock are planned in detail.",
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Tank setup, aquascaping, equipment integration and water preparation.",
  },
  {
    step: "04",
    title: "Maturation",
    description: "Cycling, livestock introduction and ecosystem stabilization.",
  },
  {
    step: "05",
    title: "Maintenance",
    description: "Regular care, trimming, testing and long-term optimization.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-28 bg-[#04111f]">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            OUR PROCESS
          </p>

          <h2 className="font-serif text-5xl">Built with patience.</h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Every aquarium is developed through a structured process that
            prioritizes longevity and ecosystem health.
          </p>
        </div>

        <div className="space-y-8">
          {process.map((item) => (
            <div
              key={item.step}
              className="premium-card flex flex-col gap-6 p-8 md:flex-row md:items-center"
            >
              <div className="text-5xl font-bold text-[#14b8a6]">
                {item.step}
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-2 max-w-3xl text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
