import Image from "next/image";

const styles = [
  {
    title: "Nature Aquariums",
    image: "/images/7.jpeg",
    description:
      "Inspired by rivers, forests and natural landscapes with plants and driftwood.",
  },
  {
    title: "Marine Aquariums",
    image: "/images/8.jpeg",
    description:
      "Vibrant saltwater systems featuring exotic fish and stunning aquatic life.",
  },
  {
    title: "Reef Systems",
    image: "/images/9.jpeg",
    description:
      "Premium coral ecosystems designed for beauty, stability and growth.",
  },
  {
    title: "Commercial Installations",
    image: "/images/10.jpeg",
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
              <div className="relative h-[280px] overflow-hidden sm:h-[350px]">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
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
