const testimonials = [
  {
    name: "Residential Client",
    review:
      "The aquarium became the centerpiece of our living room. Every guest talks about it.",
  },
  {
    name: "Corporate Client",
    review:
      "Professional from consultation through maintenance. The installation exceeded expectations.",
  },
  {
    name: "Hotel Project",
    review: "A stunning feature that completely elevated the guest experience.",
  },
];

export default function ProjectTestimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            CLIENT FEEDBACK
          </p>

          <h2 className="mt-4 font-serif text-5xl">Trusted By Clients</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="premium-card p-8">
              <div className="text-[#6fffe9] text-xl">★★★★★</div>

              <p className="mt-6 leading-8 text-slate-300">
                &ldquo;{item.review}&rdquo;
              </p>

              <p className="mt-6 text-sm uppercase tracking-wider text-slate-500">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
