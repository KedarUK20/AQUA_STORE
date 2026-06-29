export default function ProjectsCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aquahomeimg.png')",
        }}
      />

      <div className="absolute inset-0 bg-[#02080d]/85" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
          START YOUR PROJECT
        </p>

        <h2 className="font-serif text-5xl md:text-7xl">
          Let&apos;s Create
          <br />
          Something Extraordinary
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          From luxury residences to commercial installations, we design aquatic
          environments that leave a lasting impression.
        </p>

        <div className="mt-10">
          <button className="btn-primary">Book Consultation</button>
        </div>
      </div>
    </section>
  );
}
