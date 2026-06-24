import Image from "next/image";

import { projectStories } from "../../data/home";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          subtitle="Portfolio"
          title="Aquarium environments with a sense of place"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {projectStories.map((project) => (
            <div
              key={project.title}
              className="premium-card overflow-hidden group" >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02080d]/90 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.26em] text-[#6fffe9]">
                  {project.location}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">
                  {project.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
