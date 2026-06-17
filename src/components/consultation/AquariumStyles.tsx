const styles = [
  {
    title: "Nature Aquariums",
    image: "/images/nature-aquarium.jpg",
    description:
      "Inspired by rivers, forests and natural landscapes with plants and driftwood.",
  },
  {
    title: "Marine Aquariums",
    image: "/images/marine-aquarium.jpg",
    description:
      "Vibrant saltwater systems featuring exotic fish and stunning aquatic life.",
  },
  {
    title: "Reef Systems",
    image: "/images/reef-aquarium.jpg",
    description:
      "Premium coral ecosystems designed for beauty, stability and growth.",
  },
  {
    title: "Commercial Installations",
    image: "/images/commercial-aquarium.jpg",
    description:
      "Statement aquariums for hotels, offices, restaurants and public spaces.",
  },
];

export default function AquariumStyles() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            INSPIRATION
          </p>

          <h2 className="mt-4 font-serif text-5xl">Explore Aquarium Styles</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {styles.map((style) => (
            <div
              key={style.title}
              className="group overflow-hidden rounded-[32px] border border-white/10"
            >
              <div className="h-[350px] overflow-hidden">
                <img
                  src={style.image}
                  alt={style.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <h3 className="font-serif text-3xl">{style.title}</h3>

                <p className="mt-4 text-slate-400">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
