export default function BeforeAfter() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            TRANSFORMATIONS
          </p>

          <h2 className="font-serif text-5xl">Before & After</h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Every aquarium begins as empty glass and becomes a thriving
            underwater ecosystem.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* BEFORE */}
          <div className="premium-card overflow-hidden">
            <div className="relative">
              <img
                src="/images/before.jpg"
                alt="Before"
                className="h-[500px] w-full object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-black/70 px-4 py-2 text-sm">
                BEFORE
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Empty Aquarium</h3>

              <p className="mt-3 text-slate-400">
                Bare tank before design, aquascaping and ecosystem planning.
              </p>
            </div>
          </div>

          {/* AFTER */}
          <div className="premium-card overflow-hidden">
            <div className="relative">
              <img
                src="/images/aquahomeimg.png"
                alt="After"
                className="h-[500px] w-full object-cover"
              />

              <div className="absolute left-5 top-5 rounded-full bg-[#14b8a6] px-4 py-2 text-sm">
                AFTER
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold">Living Ecosystem</h3>

              <p className="mt-3 text-slate-400">
                Fully matured aquascape with balanced livestock and long-term
                health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
