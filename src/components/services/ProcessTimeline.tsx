const process = [
  {
    step: "01",
    title: "Inspect the space or existing tank",
    description:
      "We review dimensions, access, power, light, filtration, livestock, water condition and maintenance expectations.",
  },
  {
    step: "02",
    title: "Recommend the right service path",
    description:
      "You get a clear route: new build, rescape, maintenance plan, equipment upgrade, relocation or emergency recovery.",
  },
  {
    step: "03",
    title: "Prepare materials and schedule work",
    description:
      "Hardscape, plants, equipment, water treatment and livestock timing are planned before work starts.",
  },
  {
    step: "04",
    title: "Install, stabilize or restore",
    description:
      "We execute the service, test the water, tune equipment and document the next care actions.",
  },
  {
    step: "05",
    title: "Monitor and maintain",
    description:
      "For ongoing care, visits focus on water stability, plant health, livestock wellbeing and equipment reliability.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-12 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Service Process
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Clear steps, so aquarium service never feels vague.
          </h2>
        </div>

        <div className="grid gap-4">
          {process.map((item) => (
            <article
              key={item.step}
              className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[88px_1fr] sm:p-6"
            >
              <p className="font-serif text-4xl leading-none text-[#6fffe9]">
                {item.step}
              </p>

              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-2 max-w-4xl text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
