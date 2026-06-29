import Image from "next/image";

import ServicesGrid from "../../components/services/ServicesGrid";
import BeforeAfter from "../../components/services/BeforeAfter";
import ProcessTimeline from "../../components/services/ProcessTimeline";
import MaintenancePlans from "../../components/services/MaintenancePlans";
import CommercialServices from "../../components/services/CommercialServices";
import FAQ from "../../components/services/FAQ";
import ConsultationCTA from "../../components/services/ConsultationCTA";
import TrustStats from "../../components/services/TrustStats";
import FadeUp from "@/src/components/shared/FadeUp";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/aqua maintaince.jpg')] bg-cover bg-center opacity-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02080d] via-[#02080d]/95 to-[#02080d]/70" />

        <div className="relative mx-auto max-w-[1800px] px-6 lg:px-10">
          <div className="grid min-h-screen items-center gap-10 py-20 lg:min-h-[90vh] lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT CONTENT */}

            <div className="order-1 lg:order-2">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
                AQUARIUM SERVICES
              </p>

              <h1 className="font-serif text-4xl leading-[1] sm:text-5xl md:text-6xl xl:text-7xl">
                Living Ecosystems.
                <br />
                Crafted Indoors.
              </h1>

              <p className="mt-6 w-full max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                From luxury planted aquariums and reef installations to ongoing
                maintenance programs, we create aquatic environments that
                elevate homes, offices and hospitality spaces.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#6fffe9]" />
                  <p className="text-slate-300">
                    Scheduled Maintenance & Water Quality Management
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#6fffe9]" />
                  <p className="text-slate-300">
                    Freshwater, Marine & Reef Aquarium Specialists
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#6fffe9]" />
                  <p className="text-slate-300">
                    Emergency Support & Equipment Diagnostics
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#6fffe9]" />
                  <p className="text-slate-300">
                    Long-Term Ecosystem Health Monitoring
                  </p>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-xl max-w-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
                  PROFESSIONAL CARE
                </p>

                <h3 className="mt-3 font-serif text-2xl">
                  Built For Long-Term Stability
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  Our maintenance programs focus on water chemistry, livestock
                  wellbeing, equipment performance and ecosystem balance to
                  ensure your aquarium thrives year after year.
                </p>
              </div>

              {/* STATS */}
            </div>

            {/* RIGHT SHOWCASE */}

            <div className="order-1 lg:order-2">
              <div className="group relative overflow-hidden">
                <Image
                  src="/images/aqua maintaince.jpg"
                  alt="Luxury Aquarium"
                  width={900}
                  height={1200}
                  className="h-[320px] w-full rounded-3xl object-cover sm:h-[450px] lg:h-[720px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStats />

      <FadeUp>
        <ServicesGrid />
      </FadeUp>
      <BeforeAfter />

      <ProcessTimeline />

      <MaintenancePlans />

      <CommercialServices />

      <FAQ />

      <ConsultationCTA />
    </main>
  );
}
