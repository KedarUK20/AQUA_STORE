import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ConsultationForm from "@/src/components/consultation/ConsultationForm";
import ConsultationProcess from "../../components/consultation/ConsultationProcess";
import AquariumStyles from "../../components/consultation/AquariumStyles";
import WhyChooseUs from "../../components/consultation/WhyChooseUs";
import ConsultationCTA from "../../components/consultation/ConsultationCTA";

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-[#02080d] text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/aquahomeimg.png')] bg-cover bg-center opacity-10" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#02080d] via-[#02080d]/95 to-[#02080d]/80" />

        <div className="relative mx-auto max-w-[1800px] px-6 lg:px-10">
          <div className="flex min-h-[80vh] items-center">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#6fffe9]">
                PRIVATE CONSULTATION
              </p>

              <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl">
                Let's Design
                <br />
                Your Dream Aquarium
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you're planning a luxury freshwater aquascape, reef
                ecosystem, commercial installation, or long-term maintenance
                program, our specialists will guide you through every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConsultationForm />
      <ConsultationProcess />
      <AquariumStyles />
      <WhyChooseUs />
      <ConsultationCTA />

      <Footer />
    </main>
  );
}
