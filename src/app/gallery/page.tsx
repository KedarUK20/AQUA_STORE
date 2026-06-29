import Image from "next/image";
import Link from "next/link";

const galleryImages = [
  "/images/4.jpeg",
  "/images/3.jpeg",
  "/images/7.jpeg",
  "/images/8.jpeg",
  "/images/9.jpeg",
  "/images/3.jpeg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white">
      {/* ================= HERO ================= */}

      <section className="relative -mt-24 min-h-screen overflow-hidden">
        {/* Background */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/8.jpeg')",
          }}
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.95)_0%,rgba(2,8,13,0.78)_42%,rgba(2,8,13,0.25)_75%,rgba(2,8,13,0.75)_100%)]" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#02080d] to-transparent" />

        {/* Hero Content */}

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="container-custom">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
                Gallery
              </p>

              <h1 className="mt-6 font-serif text-5xl leading-[0.95] md:text-6xl lg:text-7xl">
                Nature Inspired
                <br />
                Aquarium Showcase
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                Discover handcrafted freshwater, reef and planted aquariums
                designed to transform homes, offices and luxury spaces into
                living ecosystems.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#gallery" className="btn-primary">
                  Explore Gallery
                </Link>

                <Link href="/consultation" className="btn-secondary">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}

      <section id="gallery" className="container-custom py-24">
        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.35em] text-[#6fffe9] text-xs">
            Featured Collection
          </p>

          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Luxury Aquarium Gallery
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400 leading-8">
            Every aquarium is individually crafted with premium aquascaping,
            natural hardscape and carefully selected aquatic life.
          </p>
        </div>

        {/* Masonry Style Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-[#071827]
              ${index % 3 === 0 ? "lg:row-span-2" : ""}`}
            >
              <Image
                src={image}
                alt={`Gallery ${index}`}
                width={700}
                height={900}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
