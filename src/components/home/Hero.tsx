import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
  Droplets,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const proofPoints = [
  { value: "500+", label: "Aquariums designed" },
  { value: "10+", label: "Years of aquascaping craft" },
  { value: "50+", label: "Commercial installs" },
];

const services = [
  {
    icon: Droplets,
    title: "Custom Builds",
    text: "Glass, filtration, lighting and cabinet planning.",
  },
  {
    icon: Leaf,
    title: "Aquascaping",
    text: "Planted, reef, iwagumi and nature-led layouts.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance",
    text: "Water quality, trimming, cleaning and livestock care.",
  },
];

const projectPreviews = [
  {
    title: "Residential planted aquarium",
    location: "Private home",
    image: "/images/5.jpeg",
  },
  {
    title: "Statement lobby aquascape",
    location: "Hospitality space",
    image: "/images/banner2.jpg",
  },
  {
    title: "Premium office installation",
    location: "Corporate suite",
    image: "/images/about-story.jpg",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/5.jpeg"
          alt="Luxury planted aquarium with clear water and aquatic plants"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#02080d_0%,rgba(2,8,13,0.94)_34%,rgba(2,8,13,0.58)_66%,rgba(2,8,13,0.88)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#02080d] to-transparent" />
      </div>

      <div className="container-custom relative z-10 grid min-h-[calc(100vh-6rem)] gap-10 pb-8 pt-20 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:pb-12 lg:pt-24">
        <div className="max-w-4xl self-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Aquarium Nature Studio
          </p>

          <h1 className="mt-5 font-serif text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Luxury aquariums designed for calm, healthy spaces.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            We design, install and maintain premium planted, marine and custom
            aquariums for homes, offices and hospitality interiors.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/consultation" className="btn-primary">
              Book Consultation
            </Link>
            <Link href="/#projects" className="btn-secondary">
              Explore Projects
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
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
        </div>

        <div className="grid gap-4 self-end lg:self-center">
          <div className="rounded-lg border border-white/10 bg-[#04111f]/78 p-4 backdrop-blur-xl sm:p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-white">
                Signature Work
              </h2>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 text-xs text-[#6fffe9]"
              >
                View All
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="mt-4 grid gap-3">
              {projectPreviews.map((project) => (
                <article
                  key={project.title}
                  className="grid grid-cols-[96px_1fr] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] p-3"
                >
                  <div className="relative h-20 overflow-hidden rounded-md">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      {project.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#04111f]/78 p-4 backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              <CircleCheck className="h-4 w-4 text-[#d7b56d]" />
              Full-Service Studio
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div key={service.title}>
                    <Icon className="h-6 w-6 text-[#14b8a6]" />
                    <h3 className="mt-3 text-sm font-medium text-white">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {service.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
