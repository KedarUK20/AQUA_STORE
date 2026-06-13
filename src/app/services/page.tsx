import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
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
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/aqua maintaince.jpg')] bg-cover bg-center opacity-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02080d] via-[#02080d]/95 to-[#02080d]/70" />

        <div className="relative mx-auto max-w-[1800px] px-6 lg:px-10">
          <div className="grid min-h-[90vh] items-center gap-16 lg:grid-cols-2">
            {/* LEFT CONTENT */}

            <div className="max-w-3xl">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
                AQUARIUM SERVICES
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] md:text-6xl xl:text-7xl">
                Living Ecosystems.
                <br />
                Crafted Indoors.
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
                From luxury planted aquariums and reef installations to ongoing
                maintenance programs, we create aquatic environments that
                elevate homes, offices and hospitality spaces.
              </p>

              {/* STATS */}
            </div>

            {/* RIGHT SHOWCASE */}

            <div className="hidden lg:block">
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#071827]/60 backdrop-blur-xl">
                <img
                  src="/images/aqua maintaince.jpg"
                  alt="Luxury Aquarium"
                  className="h-[650px] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02080d] via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
                    Signature Installation
                  </p>

                  <h3 className="mt-3 font-serif text-4xl">Nature Aquarium</h3>

                  <p className="mt-3 max-w-md text-slate-300">
                    Custom aquascaping, premium filtration systems and long-term
                    ecosystem care.
                  </p>
                </div>
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

      <Footer />
    </main>
  );
}
