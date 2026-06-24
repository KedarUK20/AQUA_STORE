import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectCategories from "../../components/projects/ProjectCategories";
import CaseStudies from "../../components/projects/CaseStudies";
import BeforeAfterProjects from "../../components/projects/BeforeAfterProjects";
import ProjectTestimonials from "../../components/projects/ProjectTestimonials";
import ProjectsCTA from "../../components/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/images/aquahomeimg.png')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02080d] via-[#02080d]/95 to-[#02080d]/70" />

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
      <Footer />
    </main>
  );
}
