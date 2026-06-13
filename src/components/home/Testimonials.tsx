const testimonials = [
  {
    quote:
      "The aquarium feels like part of the architecture, not an object placed after the fact.",
    name: "Rhea M.",
    detail: "Residence, Bengaluru",
  },
  {
    quote:
      "Maintenance is invisible, punctual, and deeply professional. The tank always looks gallery-ready.",
    name: "Arvind K.",
    detail: "Founder Office",
  },
  {
    quote:
      "Their plant selection and hardscape work completely changed the mood of our lobby.",
    name: "Nisha S.",
    detail: "Boutique Hotel",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#061521] py-28">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
            Client Notes
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Calm, cinematic spaces with dependable care behind them.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="premium-card p-7"
            >
              <p className="text-xl leading-8 text-slate-100">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
