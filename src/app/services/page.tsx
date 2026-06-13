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
        <div className="absolute inset-0 bg-[url('/images/aquahomeimg.png')] bg-cover bg-center opacity-20" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02080d] via-[#02080d]/95 to-[#02080d]/60" />

        <div className="relative mx-auto max-w-[1800px] px-6 lg:px-10">
          <div className="flex min-h-[85vh] items-center">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
                AQUARIUM SERVICES
              </p>

              <h1 className="font-serif text-6xl leading-[1.05] md:text-8xl">
                Designed.
                <br />
                Built.
                <br />
                Maintained.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Bespoke aquariums, luxury aquascapes, reef systems, maintenance
                programs and commercial installations created to become living
                centerpieces.
              </p>

              <div className="mt-10 flex gap-4">
                <button className="btn-primary">Book Consultation</button>

                <button className="btn-secondary">View Portfolio</button>
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
