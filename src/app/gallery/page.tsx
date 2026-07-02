import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Sparkles } from "lucide-react";

const featuredStats = [
  { value: "500+", label: "Aquariums designed" },
  { value: "10+", label: "Years of craft" },
  { value: "50+", label: "Commercial installs" },
];

const categories = [
  { label: "Nature", href: "#nature" },
  { label: "Aquascape", href: "#aquascape" },
  { label: "Marine", href: "#marine" },
  { label: "Custom", href: "#custom" },
];

const galleryImages = [
  {
    image: "/images/gallery-1.jpg",
    title: "Luxury Nature Aquarium",
    category: "Nature",
    id: "nature",
    description:
      "A calming planted layout with layered greens, driftwood detail and soft movement.",
  },
  {
    image: "/images/1.jpeg",
    title: "Premium Planted Aquascape",
    category: "Aquascape",
    id: "aquascape",
    description:
      "Dense planting, balanced hardscape and clean viewing angles for a refined room feature.",
  },
  {
    image: "/images/2.jpeg",
    title: "Marine Reef Display",
    category: "Marine",
    id: "marine",
    description:
      "A vibrant reef-inspired showcase planned around color, flow and visual depth.",
  },
  {
    image: "/images/3.jpeg",
    title: "Custom Interior Aquarium",
    category: "Custom",
    id: "custom",
    description:
      "Built as part of the interior language, with scale and placement tuned to the space.",
  },
  {
    image: "/images/4.jpeg",
    title: "Natural River Layout",
    category: "Nature",
    id: "nature-2",
    description:
      "A quiet composition inspired by river stones, submerged roots and open swimming zones.",
  },
  {
    image: "/images/5.jpeg",
    title: "Luxury Aquatic Design",
    category: "Aquascape",
    id: "aquascape-2",
    description:
      "A premium display focused on clear sight lines, healthy plant mass and elegant contrast.",
  },
  {
    image: "/images/6.jpeg",
    title: "Layered Green Habitat",
    category: "Nature",
    id: "nature-3",
    description:
      "A planted ecosystem shaped to feel lush, balanced and easy to enjoy every day.",
  },
  {
    image: "/images/7.jpeg",
    title: "Statement Aquascape Detail",
    category: "Aquascape",
    id: "aquascape-3",
    description:
      "Close-up texture, plant rhythm and hardscape proportion brought into one frame.",
  },
  {
    image: "/images/8.jpeg",
    title: "Residential Aquarium Moment",
    category: "Custom",
    id: "custom-2",
    description:
      "A living focal point designed for daily viewing, quiet maintenance and long-term beauty.",
  },
];

const qualityPoints = [
  "Balanced composition for the room and viewing angle",
  "Healthy plant, fish and filtration planning",
  "Premium hardscape, lighting and finishing details",
  "Maintenance thinking built into every design",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery-1.jpg"
            alt="Luxury nature aquarium gallery hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.82)_0%,rgba(2,8,13,0.42)_44%,transparent_80%)]" />
        </div>

        <div className="container-custom relative z-10 grid min-h-[calc(100vh-6rem)] gap-10 pb-8 pt-20 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:pb-12 lg:pt-24">
          <div className="max-w-4xl self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Gallery
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl xl:text-7xl">
              A portfolio of living underwater spaces.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Browse luxury aquariums, planted aquascapes, marine concepts and
              custom installations crafted for homes, offices and hospitality
              interiors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="#gallery-grid" className="btn-primary">
                View Gallery
              </Link>
              <Link href="/consultation" className="btn-secondary">
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="grid gap-3 self-end sm:grid-cols-3 lg:self-center">
            {featuredStats.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-white/10 bg-[#04111f]/76 p-4 backdrop-blur-xl"
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
        </div>
      </section>

      <section className="container-custom py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-lg border border-white/10">
            <Image
              src="/images/banner3.jpg"
              alt="Featured aquarium project with premium aquascaping"
              width={1200}
              height={900}
              className="h-[340px] w-full object-cover sm:h-[480px] lg:h-[620px]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#02080d]/85 via-[#02080d]/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#6fffe9]">
                Featured Project
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Luxury Nature Aquascape
              </h2>
            </div>
          </div>

          <div className="lg:pl-6">
            <Camera className="h-8 w-8 text-[#d7b56d]" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Visual Craft
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Every frame shows the same thing: balance, health and detail.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300">
              A beautiful aquarium has to work from across the room and up
              close. We plan the aquascape, equipment and care approach
              together, so the final result looks composed and lives well.
            </p>

            <div className="mt-7 grid gap-3">
              {qualityPoints.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#d7b56d]" />
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-6">
        <div className="container-custom flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            Browse By Style
          </p>

          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
            {categories.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-md border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 transition hover:border-[#6fffe9]/60 hover:text-[#6fffe9]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery-grid" className="container-custom py-20 sm:py-24">
        <div className="mb-12 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Project Gallery
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Real aquarium work, arranged for easy browsing.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {galleryImages.map((item) => (
            <article
              id={item.id}
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#071827]/70 transition duration-300 hover:-translate-y-1 hover:border-[#6fffe9]/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover brightness-105 saturate-[1.05] transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#02080d]/45 to-transparent" />
                <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-[#02080d]/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#6fffe9] backdrop-blur-xl">
                  {item.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-custom pb-20 sm:pb-24">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-[#071827]/78 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-10">
          <div>
            <Sparkles className="h-8 w-8 text-[#d7b56d]" />
            <h2 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
              Want your space to be part of the next gallery update?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Share your room, preferred style and maintenance expectations. We
              will help shape the right aquarium concept for the space.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <Link href="/consultation" className="btn-primary">
              Start A Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-[#6fffe9]/60 hover:text-[#6fffe9]"
            >
              See Project Stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
