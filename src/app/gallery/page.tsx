import Image from "next/image";
import Link from "next/link";

import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const galleryImages = [
{
image: "/images/gallery/gallery-1.jpg",
title: "Luxury Nature Aquarium",
category: "Nature",
},
{
image: "/images/gallery/gallery-2.jpg",
title: "Premium Aquascape",
category: "Aquascape",
},
{
image: "/images/gallery/gallery-3.jpg",
title: "Marine Reef Tank",
category: "Marine",
},
{
image: "/images/gallery/gallery-4.jpg",
title: "Custom Aquarium",
category: "Custom",
},
{
image: "/images/gallery/gallery-5.jpg",
title: "Nature Layout",
category: "Nature",
},
{
image: "/images/gallery/gallery-6.jpg",
title: "Luxury Aquatic Design",
category: "Aquascape",
},
];

export default function GalleryPage() {
return ( 
<main className="min-h-screen bg-[#030d18] text-white overflow-hidden"> <Navbar />

  {/* HERO */}
<section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery-1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.95)_0%,rgba(2,8,13,0.76)_38%,rgba(2,8,13,0.22)_72%,rgba(2,8,13,0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(20,184,166,0.24),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(215,181,109,0.14),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030d18] to-transparent" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between gap-8 px-3 pb-4 pt-24 sm:px-5 sm:pt-28 md:gap-10 md:px-8 lg:px-12 lg:pt-32">
          <div className="hero-content max-w-4xl px-2 pt-6 sm:px-4 md:pl-10 lg:pl-20 xl:pl-28">
            <span className="mb-4 block text-[11px] uppercase tracking-[0.24em] text-[#6fffe9] sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
              Gallery
            </span>

            <h1 className="font-serif text-[2.55rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
              Nature Inspired
              <br />
              Aquarium Showcase
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:mt-6 md:text-base">
              Explore our collection of luxury aquariums, premium aquascapes,
              custom installations, and breathtaking underwater ecosystems.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-3">
              <Link href="#gallery-grid" className="btn-primary px-4 sm:px-7">
                View Gallery
              </Link>
              <Link href="/consultation" className="btn-secondary px-4 sm:px-7">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

  {/* FEATURED */}
  <section className="pb-16 md:pb-24">

    <div className="group relative overflow-hidden rounded-3xl lg:rounded-[40px] border border-white/10">

      <Image
        src="/images/gallery-1.jpg"
        alt="Featured Aquarium"
        width={1600}
        height={900}
        priority
        className="
          h-[200px]
          sm:h-[340px]
          md:h-[450px]
          lg:h-[600px]
          xl:h-[700px]
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">

        <span className="text-cyan-400 text-sm uppercase tracking-wider">
          Featured Project
        </span>

        <h2 className="mt-3 font-serif text-2xl md:text-4xl">
          Luxury Nature Aquascape
        </h2>

        <p className="mt-2 text-slate-300">
          Premium aquarium design with aquatic plants,
          driftwood and tropical fish.
        </p>

      </div>

    </div>

  </section>

  {/* FILTERS */}
  <section className="container-custom pb-12">

    <div className="flex flex-wrap justify-center gap-3">

      {[
        "All",
        "Nature",
        "Aquascape",
        "Marine",
        "Custom",
      ].map((item) => (
        <button
          key={item}
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2.5
            text-sm
            text-slate-300
            transition-all
            duration-300
            hover:border-cyan-400
            hover:text-cyan-400
            hover:bg-cyan-500/10
          "
        >
          {item}
        </button>
      ))}

    </div>

  </section>

  {/* GALLERY GRID */}
  <section className="container-custom pb-20">

    <div className="grid gap-6 md:gap-8 sm:grid-cols-2 xl:grid-cols-3">

      {galleryImages.map((item, index) => (
        <div
          key={index}
          className="
            group
            overflow-hidden
            rounded-[28px]
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-cyan-500/40
            hover:-translate-y-3
            hover:shadow-[0_30px_80px_rgba(0,255,255,.15)]
          "
        >

          <div className="overflow-hidden">

            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={600}
              className="
                h-[240px]
                md:h-[280px]
                lg:h-[300px]
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
            />

          </div>

          <div className="p-5 md:p-6">

            <span className="text-xs uppercase tracking-wider text-cyan-400">
              {item.category}
            </span>

            <h3 className="mt-2 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Premium aquascaping and nature-inspired
              aquatic design built with expert craftsmanship.
            </p>

          </div>

        </div>
      ))}

    </div>

  </section>

  {/* STATS */}
  <section className="container-custom py-16 pb-20">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

      {[
        { value: "500+", label: "Projects" },
        { value: "10+", label: "Years Experience" },
        { value: "50+", label: "Commercial Installations" },
        { value: "100%", label: "Client Satisfaction" },
      ].map((item) => (
        <div
          key={item.label}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6 md:p-8
            text-center
          "
        >
          <h3 className="text-3xl md:text-5xl font-bold text-cyan-400">
            {item.value}
          </h3>

          <p className="mt-3 text-slate-400 text-sm">
            {item.label}
          </p>

        </div>
      ))}

    </div>

  </section>

  {/* CTA */}
  <section className="container-custom pb-24">

    <div
      className="
        rounded-[32px]
        border
        border-cyan-500/20
        bg-gradient-to-r
        from-cyan-900/20
        to-slate-900/40
        text-center
        p-8
        md:p-12
        lg:p-16
      "
    >

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
        Ready To Build Your Aquarium?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-slate-400">
        Let's transform your space into a stunning
        underwater masterpiece.
      </p>

      <Link
        href="/consultation"
        className="
          inline-flex
          items-center
          justify-center
          mt-8
          px-8
          py-4
          rounded-xl
          bg-cyan-500
          hover:bg-cyan-400
          text-black
          font-semibold
          transition
        "
      >
        Book Consultation
      </Link>

    </div>

  </section>

  <Footer />
</main>


);
}
