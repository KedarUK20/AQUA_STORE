import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Gem,
  Leaf,
  Ruler,
  ShieldCheck,
  Sparkles,
  Waves,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Aquariums designed" },
  { value: "10+", label: "Years of hands-on experience" },
  { value: "50+", label: "Commercial spaces transformed" },
  { value: "100%", label: "Care-led project approach" },
];

const values = [
  {
    icon: Leaf,
    title: "Nature-led design",
    description:
      "Every layout starts with real aquatic behavior, plant growth, light, water flow and long-term balance.",
  },
  {
    icon: Gem,
    title: "Premium material selection",
    description:
      "We choose dependable equipment, quality hardscape, healthy plants and clean finishing details.",
  },
  {
    icon: ShieldCheck,
    title: "Aftercare that protects the investment",
    description:
      "The work continues after installation with maintenance guidance, water checks and ecosystem support.",
  },
];

const process = [
  {
    step: "01",
    title: "Consult",
    description: "We understand your space, routine, budget and design taste.",
  },
  {
    step: "02",
    title: "Design",
    description: "We plan the layout, equipment, materials and care path.",
  },
  {
    step: "03",
    title: "Install",
    description: "Our team handles setup, aquascaping and technical finishing.",
  },
  {
    step: "04",
    title: "Stabilize",
    description: "We guide the early ecosystem cycle so the aquarium matures well.",
  },
  {
    step: "05",
    title: "Maintain",
    description: "Scheduled care keeps the aquarium healthy, clear and beautiful.",
  },
];

const strengths = [
  "Custom freshwater, planted, marine and reef concepts",
  "Space planning for homes, offices, showrooms and hospitality",
  "Equipment recommendations that match the aquarium scale",
  "Maintenance plans focused on water quality and livestock health",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
        <section className="relative">
          <div className="absolute inset-0">
            <Image
              src="/images/about-story.jpg"
              alt="Premium planted aquarium aquascape"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#02080d_0%,rgba(2,8,13,0.92)_34%,rgba(2,8,13,0.62)_64%,rgba(2,8,13,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#02080d] to-transparent" />
          </div>

          <div className="container-custom relative z-10 grid min-h-[calc(100vh-6rem)] items-end gap-12 pb-8 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-14 lg:pt-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
                About Aquarium Nature Studio
              </p>

              <h1 className="mt-5 font-serif text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl xl:text-7xl">
                Premium aquariums built to feel alive, calm and effortless.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                We design, install and care for luxury aquatic environments
                that suit the space, support healthy ecosystems and stay
                beautiful long after launch day.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/consultation" className="btn-primary">
                  Book Consultation
                </Link>
                <Link href="/projects" className="btn-secondary">
                  View Projects
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:justify-self-end">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/10 bg-[#04111f]/78 p-5 backdrop-blur-xl"
                >
                  <p className="font-serif text-4xl leading-none text-white">
                    {item.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/images/banner2.jpg"
                alt="Aquarium hardscape with plants and clear water"
                width={1100}
                height={900}
                className="h-[320px] w-full object-cover sm:h-[440px] lg:h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02080d]/68 via-transparent to-transparent" />
            </div>

            <div className="lg:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b56d]">
                Our Story
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                We combine aquascaping craft with dependable service.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-300">
                <p>
                  Aquarium Nature Studio was created for people who want an
                  aquarium that looks refined without becoming difficult to
                  manage. Our work balances aesthetics, technical setup and
                  practical care from the first conversation.
                </p>
                <p>
                  Each project is planned around the room, the people using it
                  and the living ecosystem inside the glass. The result is not
                  just decoration; it is a calm focal point that can mature
                  beautifully over time.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <Ruler className="h-6 w-6 text-[#6fffe9]" />
                  <h3 className="mt-4 text-lg font-semibold">
                    Designed for your space
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Scale, lighting, visibility and daily usability are planned
                    before materials are selected.
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <Waves className="h-6 w-6 text-[#6fffe9]" />
                  <h3 className="mt-4 text-lg font-semibold">
                    Built for stability
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Filtration, flow, livestock needs and water quality guide
                    every installation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] py-18 sm:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
                What We Stand For
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Premium is not just how it looks. It is how well it lives.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-[#071827]/70 p-6"
                  >
                    <Icon className="h-7 w-7 text-[#d7b56d]" />
                    <h3 className="mt-5 text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container-custom">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="lg:sticky lg:top-32">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d7b56d]">
                  Our Process
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  A clear path from idea to thriving aquarium.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-400">
                  You always know what happens next. We keep the design,
                  installation and aftercare process simple, transparent and
                  easy to follow.
                </p>
              </div>

              <div className="grid gap-4">
                {process.map((item) => (
                  <article
                    key={item.step}
                    className="grid gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-5 sm:grid-cols-[88px_1fr] sm:p-6"
                  >
                    <p className="font-serif text-4xl leading-none text-[#6fffe9]">
                      {item.step}
                    </p>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="container-custom grid gap-8 rounded-lg border border-white/10 bg-[#071827]/78 p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
                Why Clients Choose Us
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                Detail-focused work with practical long-term care.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Our clients come to us when they want a polished aquarium
                experience without guesswork. We handle the creative direction,
                technical setup and maintenance thinking together.
              </p>
            </div>

            <div className="grid content-center gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d7b56d]" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-lg border border-cyan-300/20">
              <Image
                src="/images/banner1.jpg"
                alt="Elegant aquarium installation"
                width={1600}
                height={700}
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.94),rgba(2,8,13,0.72),rgba(2,8,13,0.32))]" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-2xl px-6 sm:px-10">
                  <Sparkles className="h-8 w-8 text-[#d7b56d]" />
                  <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                    Ready to build an aquarium that feels considered from day
                    one?
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">
                    Share your space, style and timeline. We will help you
                    shape the right aquarium concept and care plan.
                  </p>
                  <Link href="/consultation" className="btn-primary mt-7">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}
