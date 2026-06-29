import Image from "next/image";

const transformations = [
  {
    title: "Luxury Residence",
    before: "/images/02 aquarium.jpg",
    after: "/images/istockphoto-1967399204-612x612.jpg",
  },
  {
    title: "Corporate Office",
    before: "/images/1.jpeg",
    after: "/images/5.jpeg",
  },
];

export default function BeforeAfterProjects() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
            TRANSFORMATIONS
          </p>

          <h2 className="mt-4 font-serif text-5xl">Before & After</h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            See how ordinary spaces become living ecosystems.
          </p>
        </div>

        <div className="space-y-20">
          {transformations.map((item) => (
            <div key={item.title}>
              <h3 className="mb-8 font-serif text-3xl">{item.title}</h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="mb-3 text-sm uppercase tracking-wider text-slate-400">
                    Before
                  </div>

                  <Image
                    src={item.before}
                    alt="Before"
                    width={900}
                    height={650}
                    className="h-[450px] w-full rounded-[24px] object-cover"
                  />
                </div>

                <div>
                  <div className="mb-3 text-sm uppercase tracking-wider text-[#6fffe9]">
                    After
                  </div>

                  <Image
                    src={item.after}
                    alt="After"
                    width={900}
                    height={650}
                    className="h-[450px] w-full rounded-[24px] object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
