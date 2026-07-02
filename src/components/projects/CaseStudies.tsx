import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const studies = [
  {
    id: "residential-case",
    title: "Luxury Residence",
    location: "Mumbai",
    image: "/images/3.jpeg",
    challenge:
      "The client wanted a refined nature aquarium that felt integrated with a modern living room, not added as an afterthought.",
    solution:
      "We planned a custom planted aquascape with cabinet alignment, controlled lighting, balanced filtration and a care routine the family could live with.",
    result:
      "The aquarium became the visual anchor of the room while staying practical to maintain through scheduled professional care.",
    outcomes: [
      "Integrated cabinet line",
      "Planted ecosystem",
      "Recurring care plan",
    ],
  },
  {
    id: "commercial-case",
    title: "Corporate Office",
    location: "Pune",
    image: "/images/8801cf37d273eb17f5f4c276b2c116f5.jpg",
    challenge:
      "The reception area needed a premium first impression without noise, clutter or operational complexity for the office team.",
    solution:
      "We installed a large freshwater ecosystem with quiet filtration, simple access for maintenance and a composition visible from multiple entry angles.",
    result:
      "The installation improved the visitor experience and gave the reception zone a calm, memorable focal point.",
    outcomes: ["Quiet equipment", "Multi-angle visibility", "Visitor impact"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-14 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Case Studies
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Behind each installation is a practical design decision.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {studies.map((study, index) => (
            <article
              id={study.id}
              key={study.title}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative h-[340px] overflow-hidden rounded-lg border border-white/10 sm:h-[540px]">
                <Image
                  src={study.image}
                  alt={`${study.title} aquarium project`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d7b56d]">
                  {study.location}
                </p>

                <h3 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                  {study.title}
                </h3>

                <div className="mt-8 grid gap-5">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                      Challenge
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                      Design Response
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {study.solution}
                    </p>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
                      Result
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {study.result}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {study.outcomes.map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#6fffe9]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
