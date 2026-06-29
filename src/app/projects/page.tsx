import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectCategories from "../../components/projects/ProjectCategories";
import CaseStudies from "../../components/projects/CaseStudies";
import BeforeAfterProjects from "../../components/projects/BeforeAfterProjects";
import ProjectTestimonials from "../../components/projects/ProjectTestimonials";
import ProjectsCTA from "../../components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white">
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: "url('/images/3.jpeg')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02080d]/90 via-[#02080d]/60 to-[#02080d]/20" />

        {/* Decorative Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(20,184,166,0.15),transparent_35%)]" />

        <div className="relative mx-auto max-w-[1800px] px-6 lg:px-10">
          <div className="flex min-h-[75vh] items-center">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
                OUR PROJECTS
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl">
                Aquariums
                <br />
                Designed To Be
                <br />
                Remembered.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Explore residential, commercial, reef and aquascaping
                installations crafted to become living centerpieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <ProjectCategories />
      <CaseStudies />
      <BeforeAfterProjects />
      <ProjectTestimonials />
      <ProjectsCTA />
    </main>
  );
}
