import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Residential Client",
    detail: "Living room aquascape",
    review:
      "The aquarium became the centerpiece of our living room. Every guest talks about it, and the maintenance support keeps it effortless.",
  },
  {
    name: "Corporate Client",
    detail: "Reception installation",
    review:
      "Professional from consultation through maintenance. The installation feels premium, quiet and completely aligned with our office.",
  },
  {
    name: "Hotel Project",
    detail: "Hospitality feature",
    review:
      "A stunning feature that elevated the guest experience and gave our lobby a calmer, more memorable identity.",
  },
];

export default function ProjectTestimonials() {
  return (
    <section id="project-feedback" className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-12 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Client Feedback
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Trusted when the aquarium has to represent the space well.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border border-white/10 bg-[#071827]/70 p-6 sm:p-7"
            >
              <div className="flex gap-1 text-[#d7b56d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${item.name}-${index}`}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-200">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="font-medium text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
