import Link from "next/link";
import { CircleCheck, Droplets, Leaf, ShieldCheck } from "lucide-react";

import { productHighlights, projectStories } from "../../data/home";

const services = [
  { icon: Droplets, title: "Custom Design", text: "Tailored to your room" },
  { icon: Leaf, title: "Aquascaping", text: "Planted, reef, iwagumi" },
  { icon: ShieldCheck, title: "Maintenance", text: "Quiet expert care" },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#02080d]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/aquahomeimg.png')" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.94)_0%,rgba(2,8,13,0.74)_38%,rgba(2,8,13,0.2)_72%,rgba(2,8,13,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(20,184,166,0.24),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(215,181,109,0.14),transparent_30%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#02080d] to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col justify-between gap-12 px-4 pb-5 pt-28 sm:px-6 md:px-8 lg:px-12">
        <div className="hero-content max-w-4xl pt-8 md:pl-14 lg:pt-16 xl:pl-24">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#6fffe9]">
            Aquarium Nature Studio
          </p>

          <h1 className="max-w-3xl font-serif text-5xl leading-[0.98] tracking-normal text-white md:text-7xl xl:text-8xl">
            We Design.
            <br />
            You Relax.
            <br />
            Nature Thrives.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-200 md:text-base">
            Luxury aquarium design, custom builds, and premium aquatic products
            for a thriving underwater world.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#projects" className="btn-primary">
              Explore Projects
            </Link>
            <Link href="/#shop" className="btn-secondary">
              Shop Now
            </Link>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          <div className="premium-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Featured Projects
              </h2>
              <Link href="/#projects" className="text-xs text-[#6fffe9]">
                View All
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {projectStories.map((project, index) => (
                <div key={project.title} className="group">
                  <div
                    className="h-28 rounded-md bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                    style={{
                      backgroundImage: `url('/images/aquahomeimg.png')`,
                      backgroundPosition:
                        index === 0
                          ? "left center"
                          : index === 1
                            ? "center"
                            : "right center",
                    }}
                  />
                  <p className="mt-3 text-sm font-medium text-white">
                    {project.title}
                  </p>
                  <p className="text-xs text-slate-400">{project.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Our Services
              </h2>
              <span className="text-xs text-slate-500">03</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {services.map((service) => (
                <div key={service.title}>
                  <service.icon className="mb-3 h-6 w-6 text-[#14b8a6]" />
                  <h3 className="text-sm font-medium text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Best Selling Products
              </h2>
              <Link href="/#shop" className="text-xs text-[#6fffe9]">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {productHighlights.map((item) => (
                <div
                  key={item.name}
                  className="rounded-md border border-white/10 bg-[#071827]/80 p-3"
                >
                  <div className="mb-3 h-14 rounded bg-[url('/images/aquahomeimg.png')] bg-cover bg-center" />
                  <p className="truncate text-xs text-slate-300">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card grid gap-5 p-5 sm:grid-cols-[0.8fr_1fr]">
            <div className="min-h-36 rounded-md bg-[url('/images/aquahomeimg.png')] bg-cover bg-left" />
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
                Knowledge Hub
              </p>
              <h3 className="mt-3 text-xl font-serif text-white">
                Build a thriving planted aquarium.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Learn water balance, planting strategy, livestock care, and
                premium maintenance routines.
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs text-[#6fffe9]">
                <CircleCheck className="h-4 w-4" />
                Expert guided care
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
