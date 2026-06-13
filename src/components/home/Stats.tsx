import Container from "../ui/Container";

const stats = [
  {
    value: "500+",
    label: "Aquariums Crafted",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
  {
    value: "50+",
    label: "Rare Plant Species",
  },
  {
    value: "10+",
    label: "Years of Craft",
  },
];

export default function Stats() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="grid border-y border-white/10 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="border-white/10 px-5 py-8 text-center md:border-r last:md:border-r-0"
            >
              <h3 className="text-4xl font-semibold text-[#d7b56d] md:text-5xl">
                {item.value}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
