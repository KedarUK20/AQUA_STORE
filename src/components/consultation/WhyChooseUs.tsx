import { ShieldCheck, Sparkles, Wrench, Headphones } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Custom Design",
    text: "Every aquarium is designed around your space, lifestyle and vision.",
  },
  {
    icon: Wrench,
    title: "White-Glove Installation",
    text: "Professional setup, aquascaping and ecosystem balancing handled by experts.",
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Maintenance",
    text: "Keep your aquarium healthy with proactive care and monitoring.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    text: "Quick assistance whenever you need guidance or troubleshooting.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            WHY CHOOSE US
          </p>

          <h2 className="mt-4 font-serif text-5xl">
            Built Around Quality & Care
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            From concept to long-term ecosystem management, every detail is
            handled with precision and care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="premium-card p-8 transition duration-300 hover:-translate-y-2"
            >
              <feature.icon className="h-8 w-8 text-[#14b8a6]" />

              <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>

              <p className="mt-4 leading-7 text-slate-400">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
