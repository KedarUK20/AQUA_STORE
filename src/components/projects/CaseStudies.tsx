const studies = [
  {
    title: "Luxury Residence",
    location: "Mumbai",
    challenge:
      "Client wanted a natural aquarium that blended with a modern living room.",
    solution:
      "Designed a custom planted aquascape with integrated cabinetry and lighting.",
    result:
      "Created a living focal point that transformed the entire interior.",
    image: "/images/project1.jpg",
  },
  {
    title: "Corporate Office",
    location: "Pune",
    challenge: "Needed a statement installation for a premium reception area.",
    solution:
      "Installed a large freshwater ecosystem with automated maintenance systems.",
    result: "Enhanced visitor experience and employee wellbeing.",
    image: "/images/project2.jpg",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            CASE STUDIES
          </p>

          <h2 className="mt-4 font-serif text-5xl">Behind The Installations</h2>
        </div>

        <div className="space-y-32">
          {studies.map((study, index) => (
            <div
              key={study.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-[550px] w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-[#6fffe9]">
                  {study.location}
                </p>

                <h3 className="mt-4 font-serif text-4xl">{study.title}</h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <h4 className="font-semibold">Challenge</h4>
                    <p className="mt-2 text-slate-400">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Solution</h4>
                    <p className="mt-2 text-slate-400">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Result</h4>
                    <p className="mt-2 text-slate-400">{study.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
