import Image from "next/image";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const values = [
  {
    title: "Nature First",
    description:
      "Every aquarium is inspired by real ecosystems and balanced aquatic environments.",
  },
  {
    title: "Premium Quality",
    description:
      "We use trusted equipment, premium plants, and high-quality hardscape materials.",
  },
  {
    title: "Long-Term Support",
    description:
      "From installation to maintenance, we help keep your aquarium thriving.",
  },
];

const processSteps = [
  "Consultation",
  "Design Planning",
  "Installation",
  "Aquascaping",
  "Maintenance",
];

const testimonials = [
  {
    name: "Rahul Shah",
    text: "The aquarium completely transformed our office space. Amazing work.",
  },
  {
    name: "Priya Patel",
    text: "Professional service and beautiful aquascaping. Highly recommended.",
  },
  {
    name: "Corporate Client",
    text: "Maintenance service keeps our aquarium looking perfect year-round.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030d18] text-white">
      <Navbar />

      {/* Intro */}
      <section className="about-custom pt-32 pb-16 text-center">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          About Us
        </span>

        <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl">
          Passion For Nature,
          <br />
          Crafted Into Every Aquarium
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
          Aquarium Nature Studio creates premium aquascapes, custom aquariums,
          and thriving aquatic ecosystems designed to bring tranquility and
          natural beauty into every space.
        </p>
      </section>

      {/* Story */}
      <section className="about-custom py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          <div>
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Our Story 
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-serif">
              Passion Meets Nature
            </h2>

            <p className="mt-6 text-slate-300 leading-8">
              Aquarium Nature Studio was founded with a simple vision:
              transforming ordinary spaces into living works of art.
              We specialize in luxury aquarium design, aquascaping,
              installation, and long-term maintenance.
            </p>

            <p className="mt-5 text-slate-400 leading-8">
              Every aquarium is thoughtfully designed to recreate natural
              ecosystems that inspire calmness, balance, and beauty.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/about-story.jpg"
              alt="Aquascaping Work"
              width={800}
              height={600}
              className="h-[300px] md:h-[500px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="about-custom py-16">
        <div className="text-center mb-12">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Our Values
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif">
            What Drives Us
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold">
                {value.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="about-custom py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

          {[
            ["500+", "Aquariums Designed"],
            ["10+", "Years Experience"],
            ["50+", "Commercial Projects"],
            ["100%", "Client Satisfaction"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-cyan-400">
                {value}
              </h3>

              <p className="mt-3 text-slate-400 text-sm">
                {label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Process */}
      <section className="about-custom py-16">

        <div className="text-center mb-12">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Our Process
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif">
            How We Work
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-5">

          {processSteps.map((step, index) => (
            <div
              key={step}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-cyan-400 text-3xl font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="mt-3">{step}</p>
            </div>
          ))}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="about-custom py-16">

        <div className="text-center mb-12">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif">
            Excellence In Every Detail
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Custom Designs
            </h3>

            <p className="mt-4 text-slate-400">
              Tailored aquarium concepts designed specifically for your
              environment and lifestyle.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Expert Aquascaping
            </h3>

            <p className="mt-4 text-slate-400">
              Nature-inspired layouts using professional techniques.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">
              Maintenance Support
            </h3>

            <p className="mt-4 text-slate-400">
              Reliable care plans to keep every ecosystem thriving.
            </p>
          </div>

        </div>

      </section>

      {/* Mission */}
      <section className="about-custom py-16">

        <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-slate-900/40 p-8 md:p-12">

          <h2 className="text-3xl md:text-4xl font-serif">
            Our Mission
          </h2>

          <p className="mt-5 max-w-4xl text-slate-300 leading-8">
            To inspire people through the beauty of nature by creating
            sustainable aquatic environments that enhance well-being
            and elevate living spaces.
          </p>

        </div>

      </section>

      {/* Testimonials */}
      <section className="about-custom py-16">

        <div className="text-center mb-12">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-serif">
            What Clients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <p className="leading-7 text-slate-300">
                "{item.text}"
              </p>

              <p className="mt-5 text-cyan-400 font-medium">
                {item.name}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="about-custom py-16 md:py-24">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-16 text-center">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif">
            Ready To Build Your Dream Aquarium?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Let's transform your space into a living masterpiece inspired by nature.
          </p>

          <button className="mt-8 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400">
            Book Consultation
          </button>

        </div>

      </section>

      <Footer />
    </main>
  );
}

