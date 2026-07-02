import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Luxury Nature Aquarium",
    category: "Residential",
    image: "/images/3.jpeg",
    description:
      "A planted living-room centerpiece planned around cabinetry, light and long-term maintenance.",
    scope: ["Planted layout", "Custom cabinet", "Care program"],
  },
  {
    title: "Corporate Office Display",
    category: "Commercial",
    image: "/images/4.jpeg",
    description:
      "A reception installation designed to feel premium, quiet and dependable for daily visitors.",
    scope: ["Freshwater ecosystem", "Quiet filtration", "Visitor impact"],
  },
  {
    title: "Premium Reef Ecosystem",
    category: "Marine",
    image: "/images/7.jpeg",
    description:
      "A vivid marine display built around color, water movement and responsible equipment planning.",
    scope: ["Marine concept", "Flow planning", "Stability care"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="featured-projects" className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Featured Projects
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
              Signature installations with a clear design purpose.
            </h2>
          </div>

          <Link href="/gallery" className="btn-secondary w-fit">
            Open Gallery
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#071827]/70"
            >
              <div className="relative h-[360px] overflow-hidden sm:h-[480px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-md border border-white/10 bg-[#02080d]/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6fffe9] backdrop-blur-xl">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-3xl leading-tight">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/10 px-3 py-1 text-xs text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href="#case-studies"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#6fffe9]"
                >
                  See project thinking
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
