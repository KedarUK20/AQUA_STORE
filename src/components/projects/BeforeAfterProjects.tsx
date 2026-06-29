import Image from "next/image";

const transformations = [
  {
    title: "Luxury Residence",
    before: "/images/02 aquarium.jpg",
    after: "/images/istockphoto-1967399204-612x612.jpg",
    note: "From an empty focal wall to a warm planted aquarium feature.",
  },
  {
    title: "Corporate Office",
    before: "/images/1.jpeg",
    after: "/images/5.jpeg",
    note: "A reception display shaped for daily visibility and premium calm.",
  },
];

export default function BeforeAfterProjects() {
  return (
    <section id="transformations" className="bg-[#061521] py-20 sm:py-28">
      <div className="container-custom">
        <div className="mb-14 max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Transformations
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-6xl">
            Ordinary spaces, redesigned around living water.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            The best aquarium projects improve the room first, then reward
            closer viewing with detail, movement and healthy ecosystem design.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {transformations.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-[#071827]/70 p-4 sm:p-5"
            >
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-serif text-3xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.note}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-slate-500">
                    Before
                  </p>
                  <Image
                    src={item.before}
                    alt={`${item.title} before aquarium installation`}
                    width={900}
                    height={650}
                    className="h-[300px] w-full rounded-lg object-cover sm:h-[380px]"
                  />
                </div>

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[#6fffe9]">
                    After
                  </p>
                  <Image
                    src={item.after}
                    alt={`${item.title} after aquarium installation`}
                    width={900}
                    height={650}
                    className="h-[300px] w-full rounded-lg object-cover sm:h-[380px]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
