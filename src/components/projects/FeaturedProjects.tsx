import Image from "next/image";

const projects = [
  {
    title: "Luxury Nature Aquarium",
    category: "Residential",
    image: "/images/3.jpeg",
  },
  {
    title: "Corporate Office Display",
    category: "Commercial",
    image: "/images/4.jpeg",
  },
  {
    title: "Premium Reef Ecosystem",
    category: "Marine",
    image: "/images/7.jpeg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            FEATURED PROJECTS
          </p>

          <h2 className="mt-4 font-serif text-5xl">Signature Installations</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative h-[360px] overflow-hidden sm:h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#6fffe9]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
