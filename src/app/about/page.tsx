import Image from "next/image";
import Link from "next/link";

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

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
    <>
      <Navbar />

      <main className="min-h-screen bg-[#02080d] text-white overflow-hidden">

        {/* HERO */}
        <section className="relative pt-32 md:pt-40 pb-20">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,184,166,0.18),transparent_55%)]" />

          <div className="container mx-auto px-5 max-w-7xl relative z-10">

            <span className="text-cyan-400 uppercase tracking-[0.35em] text-xs">
              About Aquarium Nature Studio
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Crafting Living
              <span className="block text-cyan-400">
                Underwater Ecosystems
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-slate-300 leading-8">
              We create luxury aquariums, premium aquascapes and thriving
              aquatic environments that transform homes, offices and
              commercial spaces into living works of art.
            </p>

          </div>

        </section>

        {/* STORY */}
        <section className="py-20">

          <div className="container mx-auto px-5 max-w-7xl">

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              <div>

                <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                  Our Story
                </span>

                <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                  Passion Meets Nature
                </h2>

                <p className="mt-6 text-slate-300 leading-8">
                  Aquarium Nature Studio was founded with a vision to
                  transform ordinary spaces into extraordinary aquatic
                  experiences.
                </p>

                <p className="mt-5 text-slate-400 leading-8">
                  Every aquarium is carefully planned, handcrafted and
                  maintained to ensure long-term beauty, health and balance.
                </p>

              </div>

              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/10 group">

                <Image
                  src="/images/about-story.jpg"
                  alt="Aquascaping"
                  width={900}
                  height={700}
                  className="
                    w-full
                    h-[300px]
                    sm:h-[400px]
                    md:h-[500px]
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>

            </div>

          </div>

        </section>

        {/* STATS */}
        <section className="py-16">

          <div className="container mx-auto px-5 max-w-7xl">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    text-center
                  "
                >
                  <h3 className="text-4xl font-bold text-cyan-400">
                    {item.value}
                  </h3>

                  <p className="mt-3 text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* VALUES */}
        <section className="py-20">

          <div className="container mx-auto px-5 max-w-7xl">

            <div className="text-center mb-12">

              <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                Our Values
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                What Drives Us
              </h2>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

              {values.map((item) => (
                <div
                  key={item.title}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                  "
                >
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* PROCESS */}
        <section className="py-20">

          <div className="container mx-auto px-5 max-w-7xl">

            <div className="text-center mb-12">

              <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                Our Process
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                From Vision To Reality
              </h2>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

              {process.map((item, index) => (
                <div
                  key={item}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                    text-center
                  "
                >
                  <div className="text-4xl font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p className="mt-4 text-slate-300">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20">

          <div className="container mx-auto px-5 max-w-7xl">

            <div className="text-center mb-12">

              <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                Why Choose Us
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold">
                Excellence In Every Detail
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-semibold">
                  Custom Designs
                </h3>

                <p className="mt-4 text-slate-400">
                  Every aquarium is uniquely designed for your space.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-semibold">
                  Expert Aquascaping
                </h3>

                <p className="mt-4 text-slate-400">
                  Nature-inspired layouts using premium materials.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-semibold">
                  Ongoing Support
                </h3>

                <p className="mt-4 text-slate-400">
                  Maintenance and long-term ecosystem care.
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-24">

          <div className="container mx-auto px-5 max-w-6xl">

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 md:p-16 text-center">

              <h2 className="text-3xl md:text-5xl font-bold">
                Ready To Build Your Dream Aquarium?
              </h2>

              <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
                Let us create a stunning aquatic centerpiece that transforms your space.
              </p>

              <Link
                href="/consultation"
                className="
                  inline-flex
                  mt-8
                  px-8
                  py-4
                  rounded-xl
                  bg-cyan-500
                  text-black
                  font-semibold
                  hover:bg-cyan-400
                  transition
                "
              >
                Book Consultation
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}