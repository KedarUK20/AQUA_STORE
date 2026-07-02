import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProjectsCTA() {
  return (
    <section className="container-custom pb-20 sm:pb-24">
      <div className="relative overflow-hidden rounded-lg border border-cyan-300/20">
        <Image
          src="/images/aquahomeimg.png"
          alt="Premium aquarium project consultation"
          width={1600}
          height={760}
          className="h-[480px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.80),rgba(2,8,13,0.42),transparent)]" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-3xl px-6 sm:px-10 lg:px-12">
            <Sparkles className="h-8 w-8 text-[#d7b56d]" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Start Your Project
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
              Let&apos;s create an aquarium with the same level of intention.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              From luxury residences to commercial installations, we design
              aquatic environments that look composed, stay healthy and feel
              right for the space.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/consultation" className="btn-primary">
                Book Consultation
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-white transition hover:border-[#6fffe9]/60 hover:text-[#6fffe9]"
              >
                Browse Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
