import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Droplets, Gauge, ShieldCheck } from "lucide-react";

import BeforeAfter from "../../components/services/BeforeAfter";
import CommercialServices from "../../components/services/CommercialServices";
import ConsultationCTA from "../../components/services/ConsultationCTA";
import FAQ from "../../components/services/FAQ";
import MaintenancePlans from "../../components/services/MaintenancePlans";
import ProcessTimeline from "../../components/services/ProcessTimeline";
import ServicesGrid from "../../components/services/ServicesGrid";
import TrustStats from "../../components/services/TrustStats";

const heroPoints = [
  "Custom aquarium design and installation",
  "Aquascaping, planting, reef and livestock planning",
  "Scheduled maintenance, testing and equipment care",
];

const careHighlights = [
  {
    icon: Droplets,
    title: "Water stability",
    text: "Testing, dosing, filtration checks and practical corrections before problems grow.",
  },
  {
    icon: Gauge,
    title: "Equipment reliability",
    text: "Lighting, pumps, CO2, heaters and filtration reviewed for the actual aquarium load.",
  },
  {
    icon: ShieldCheck,
    title: "Livestock wellbeing",
    text: "Plant trimming, fish observation and habitat balance kept central to every visit.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#02080d] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/aqua maintaince.jpg"
            alt="Aquarium maintenance and service work"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,13,0.82)_0%,rgba(2,8,13,0.42)_44%,transparent_80%)]" />
        </div>

        <div className="container-custom relative z-10 grid min-h-[calc(100vh-6rem)] gap-10 pb-8 pt-20 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:pb-12 lg:pt-24">
          <div className="max-w-4xl self-center">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Aquarium Services
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.02] sm:text-5xl md:text-6xl xl:text-7xl">
              Design, build and care for aquariums that keep thriving.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              We handle the full aquarium lifecycle: concept, equipment,
              aquascaping, installation, water stability and long-term care for
              homes, offices and hospitality spaces.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/consultation" className="btn-primary">
                Book Service Consultation
              </Link>
              <Link href="#service-menu" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          <div className="grid gap-4 self-end lg:self-center">
            <div className="rounded-lg border border-white/10 bg-[#04111f]/78 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b56d]">
                Service Coverage
              </p>
              <div className="mt-5 grid gap-4">
                {heroPoints.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#6fffe9]" />
                    <p className="text-sm leading-7 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {careHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-[#04111f]/72 p-4 backdrop-blur-xl"
                  >
                    <Icon className="h-6 w-6 text-[#14b8a6]" />
                    <h3 className="mt-3 text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TrustStats />
      <ServicesGrid />
      <MaintenancePlans />
      <ProcessTimeline />
      <CommercialServices />
      <BeforeAfter />
      <FAQ />
      <ConsultationCTA />
    </div>
  );
}
