const steps = [
  {
    number: "01",
    title: "Consultation Call",
    text: "We understand your space, goals, style preferences and budget.",
  },
  {
    number: "02",
    title: "Design Proposal",
    text: "Receive a tailored aquarium concept with equipment and layout recommendations.",
  },
  {
    number: "03",
    title: "Installation",
    text: "Our specialists handle setup, aquascaping and ecosystem balancing.",
  },
  {
    number: "04",
    title: "Ongoing Care",
    text: "Choose from professional maintenance programs and support plans.",
  },
];

export default function ConsultationProcess() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            WHAT HAPPENS NEXT
          </p>

          <h2 className="mt-4 font-serif text-5xl">Our Consultation Process</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-white/10 bg-[#071827]/60 p-8 backdrop-blur-xl"
            >
              <div className="text-5xl font-bold text-[#6fffe9]">
                {step.number}
              </div>

              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
