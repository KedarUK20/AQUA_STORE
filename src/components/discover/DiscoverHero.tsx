import Image from "next/image";
import Link from "next/link";

export default function DiscoverHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative min-h-screen">
          <Image
            src="/images/aquahomeimg.png"
            alt="Premium planted aquarium landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.92)_0%,rgba(2,8,13,0.72)_44%,rgba(2,8,13,0.18)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#02080d] to-transparent" />

          <div className="relative z-10 flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-28 md:px-14 lg:px-24">
            <p className="text-xs uppercase tracking-[0.36em] text-[#6fffe9]">
              Discover Our Inspiration
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] text-white md:text-7xl xl:text-8xl">
              The calm science of living landscapes.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              A premium aquascape is not decoration. It is a miniature
              ecosystem shaped by observation, patience, proportion, and care.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/#projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/#consultation" className="btn-secondary">
                Start a Consultation
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
}
