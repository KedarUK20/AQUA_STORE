import Image from "next/image";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Link from "next/dist/client/link";

const galleryImages = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#030d18] text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 text-center container-custom">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Gallery
        </span>

        <h1 className="mt-5 font-serif text-4xl sm:text-5xl md:text-6xl">
          Nature Inspired
          <br />
          Aquarium Showcase
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-slate-400 leading-8">
          Explore our collection of custom aquascapes,
          luxury aquarium installations and aquatic ecosystems.
        </p>
      </section>

      {/* Featured Image */}
      <section className="container-custom pb-20">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10">
          <Image
            src="/images/gallery-1.jpg"
            alt="Featured Aquarium"
            width={1600}
            height={900}
            className="h-[300px] md:h-[500px] lg:h-[650px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8">
            <h2 className="font-serif text-2xl md:text-4xl">
              Featured Aquascape
            </h2>

            <p className="mt-2 text-slate-300">
              Luxury Nature Aquarium Design
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "All",
            "Aquascapes",
            "Nature",
            "Marine",
            "Custom",
          ].map((item) => (
            <button
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container-custom pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
            >
              <div className="overflow-hidden">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  width={800}
                  height={600}
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold">
                  Aquarium Project {index + 1}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Premium aquascaping and nature-inspired design.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Load More */}
      <section className="container-custom pb-24 text-center">
        <button className="btn-primary">
          Load More Projects
        </button>
      </section>

      {/* CTA */}
      <section className="container-custom pb-24">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 md:p-16 text-center">

          <h2 className="font-serif text-3xl md:text-5xl">
            Ready To Build Your Aquarium?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Let's transform your space into a stunning underwater masterpiece.
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