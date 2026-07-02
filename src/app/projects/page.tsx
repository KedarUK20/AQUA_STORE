import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import BeforeAfterProjects from "../../components/projects/BeforeAfterProjects";
import CaseStudies from "../../components/projects/CaseStudies";
import FeaturedProjects from "../../components/projects/FeaturedProjects";
import ProjectCategories from "../../components/projects/ProjectCategories";
import ProjectTestimonials from "../../components/projects/ProjectTestimonials";
import ProjectsCTA from "../../components/projects/ProjectsCTA";

const heroStats = [
  { value: "500+", label: "Aquariums delivered" },
  { value: "50+", label: "Commercial installs" },
  { value: "10+", label: "Years of craft" },
];

const promises = [
  "Residential, hospitality, office and showroom installations",
  "Design, aquascaping, filtration, lighting and maintenance planning",
  "Built for visual impact and long-term ecosystem stability",
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/3.jpeg"
            alt="Premium custom aquarium project"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.82)_0%,rgba(2,8,13,0.42)_44%,transparent_80%)]" />
        </div>

        <div className="container-custom relative z-10 grid min-h-[calc(100vh-6rem)] gap-10 pb-8 pt-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:pb-12 lg:pt-24">
          <div className="max-w-4xl self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Project Portfolio
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl xl:text-7xl">
              Aquariums designed to become permanent focal points.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Explore custom residential, commercial, marine and planted
              aquarium projects shaped around the room, the ecosystem and the
              people who live with it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#featured-projects" className="btn-primary">
                View Signature Work
              </Link>
              <Link href="/consultation" className="btn-secondary">
                Plan A Project
              </Link>
            </div>
          </div>

          <div className="grid gap-4 self-end lg:self-center">
            <div className="rounded-lg border border-white/10 bg-[#04111f]/78 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b56d]">
                What We Deliver
              </p>
              <div className="mt-5 grid gap-4">
                {promises.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#6fffe9]" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-[#04111f]/72 p-4 backdrop-blur-xl"
                >
                  <p className="font-serif text-3xl leading-none text-white">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:border-[#6fffe9]/60 hover:text-[#6fffe9]"
            >
              Read Case Studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProjects />
      <ProjectCategories />
      <CaseStudies />
      <BeforeAfterProjects />
      <ProjectTestimonials />
      <ProjectsCTA />
    </div>
  );
}
