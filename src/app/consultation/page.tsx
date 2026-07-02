import Image from "next/image";
import Link from "next/link";

import ConsultationForm from "@/src/components/consultation/ConsultationForm";
import ConsultationProcess from "../../components/consultation/ConsultationProcess";
import AquariumStyles from "../../components/consultation/AquariumStyles";
import WhyChooseUs from "../../components/consultation/WhyChooseUs";
import ConsultationCTA from "../../components/consultation/ConsultationCTA";

export default function ConsultationPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <section className="relative min-h-[calc(100svh-6rem)] overflow-hidden">
        <Image
          src="/images/gallery-1.jpg"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.95)_0%,rgba(2,8,13,0.78)_38%,rgba(2,8,13,0.24)_72%,rgba(2,8,13,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(20,184,166,0.24),transparent_28%),radial-gradient(circle_at_18%_82%,rgba(215,181,109,0.14),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#02080d] to-transparent" />

        <div className="relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-between gap-8 px-3 pb-5 pt-8 sm:px-5 sm:pt-10 md:gap-10 md:px-8 lg:px-12 lg:pt-14">
          <div className="hero-content max-w-4xl px-2 sm:px-4 md:pl-10 lg:pl-20 xl:pl-28">
            <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#6fffe9] sm:mb-5 sm:text-xs sm:tracking-[0.28em]">
              PRIVATE CONSULTATION
            </p>

            <h1 className="font-serif text-[2.55rem] leading-[1.02] sm:text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Design
              <br />
              Your Dream Aquarium
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:mt-6 md:text-base">
              Whether you&apos;re planning a luxury freshwater aquascape, reef
              ecosystem, commercial installation, or long-term maintenance
              program, our specialists will guide you through every detail.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:flex sm:flex-wrap sm:gap-3">
              <Link
                href="#consultation-form"
                className="btn-primary px-4 sm:px-7"
              >
                Start Consultation
              </Link>
              <Link href="/gallery" className="btn-secondary px-4 sm:px-7">
                View Gallery
              </Link>
            </div>
          </div>

          <div className="premium-card mx-2 grid gap-4 p-4 sm:mx-4 sm:grid-cols-3 sm:p-5 md:mx-10 lg:mx-20 xl:mx-28">
            {[
              { value: "01", label: "Design Consultation" },
              { value: "02", label: "Custom Proposal" },
              { value: "03", label: "Expert Installation" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-serif text-3xl text-white sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationForm />
      <ConsultationProcess />
      <AquariumStyles />
      <WhyChooseUs />
      <ConsultationCTA />
    </div>
  );
}
