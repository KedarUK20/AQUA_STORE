import Image from "next/image";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Link from "next/dist/client/link";

const values = [
  {
    title: "Nature First",
    description:
      "Every aquarium is inspired by natural ecosystems and balanced aquatic environments.",
  },
  {
    title: "Premium Quality",
    description:
      "We use trusted equipment, premium aquatic plants, and luxury hardscape materials.",
  },
  {
    title: "Long-Term Support",
    description:
      "From installation to maintenance, we ensure your aquarium stays healthy and beautiful.",
  },
];

const stats = [
  {
    value: "500+",
    label: "Aquariums Designed",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Commercial Projects",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
  },
];

const process = [
  "Consultation",
  "Design",
  "Installation",
  "Aquascaping",
  "Maintenance",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.18),transparent_55%)]" />

        <div className="about-custom relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
            About Aquarium Nature Studio
          </span>

          <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-7xl">
            Crafting Living
            <span className="block text-gradient">
              Underwater Ecosystems
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-400 md:text-lg">
            We create luxury aquariums, premium aquascapes, and thriving
            aquatic environments that transform homes, offices, hotels,
            and commercial spaces into living works of art.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="about-custom py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
              Our Story
            </span>

            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Passion Meets Nature
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              Aquarium Nature Studio was founded with a vision to transform
              ordinary spaces into extraordinary aquatic experiences.
              Through premium design and expert aquascaping, we create
              living ecosystems that inspire calmness and connection
              with nature.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              Every aquarium is carefully planned, handcrafted, and
              maintained to ensure long-term beauty, health, and balance.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/about-story.jpg"
              alt="Aquascaping"
              width={900}
              height={700}
              className="h-[320px] w-full object-cover md:h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="about-custom py-16">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="premium-card p-6 text-center"
            >
              <h3 className="text-3xl font-bold text-[#6fffe9] md:text-5xl">
                {item.value}
              </h3>

              <p className="mt-3 text-sm text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="about-custom py-16 lg:py-24">
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            Our Values
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="premium-card p-8"
            >
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="about-custom py-16">
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            Our Process
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
            From Vision To Reality
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((step, index) => (
            <div
              key={step}
              className="premium-card p-6 text-center"
            >
              <div className="text-4xl font-bold text-[#14b8a6]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="mt-4 text-sm text-slate-300">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="about-custom py-16 lg:py-24">
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            Why Choose Us
          </span>

          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
            Excellence In Every Detail
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="premium-card p-8">
            <h3 className="text-xl font-semibold">
              Custom Designs
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Every aquarium is uniquely designed to complement
              your interior and lifestyle.
            </p>
          </div>

          <div className="premium-card p-8">
            <h3 className="text-xl font-semibold">
              Expert Aquascaping
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Nature-inspired layouts built with premium materials
              and professional techniques.
            </p>
          </div>

          <div className="premium-card p-8">
            <h3 className="text-xl font-semibold">
              Ongoing Support
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Reliable maintenance and expert care for a thriving ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-custom py-20">
        <div className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-slate-900/40 p-8 text-center md:p-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            Ready To Build Your Dream Aquarium?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Let us create a stunning aquatic centerpiece that transforms
            your space into a living masterpiece.
          </p>

          <Link href="/consultation" className="btn-primary mt-8">
            Book Consultation
          </Link>

           
        </div>
      </section>

      <Footer />
    </main>
  );
}