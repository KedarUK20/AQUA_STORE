"use client";

import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/services-hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04111f] via-[#04111f]/90 to-transparent" />

      <div className="relative mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="grid min-h-[80vh] items-center lg:grid-cols-2">
          {/* Content */}
          <div className="max-w-3xl py-24">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
              Studio Services
            </p>

            <h1 className="font-serif text-6xl leading-[1.05] text-white md:text-7xl">
              Luxury Aquarium
              <br />
              Services
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              From concept design and installation to aquascaping, maintenance,
              relocation, and marine systems. Every aquarium is crafted as a
              living ecosystem.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/consultation"
                className="rounded-xl bg-[#14b8a6] px-8 py-4 font-medium text-white transition hover:bg-[#0f766e]"
              >
                Book Consultation
              </Link>

              <Link
                href="/projects"
                className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:border-[#14b8a6]"
              >
                View Portfolio
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-[#6fffe9]">500+</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#6fffe9]">12+</h3>
                <p className="mt-2 text-sm text-slate-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#6fffe9]">98%</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Empty side for image visibility */}
          <div />
        </div>
      </div>
    </section>
  );
}
