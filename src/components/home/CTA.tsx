import Link from "next/dist/client/link";

export default function CTA() {
  return (
    <section
      id="consultation"
      className="mx-auto w-full max-w-[1800px] px-4 py-28 sm:px-6 lg:px-10"
    >
      <div className="premium-card relative overflow-hidden p-8 md:p-14">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[url('/images/aquahomeimg.png')] bg-cover bg-center opacity-35 md:block" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#061521_0%,rgba(6,21,33,0.94)_48%,rgba(6,21,33,0.52)_100%)]" />

        <div className="relative max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
            Private Consultation
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Let your next room breathe with living water.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Share your room, budget, and maintenance preference. We will shape a
            complete aquarium concept around the way you live or work.
          </p>

          <Link href="/consultation" className="btn-primary mt-8">
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
