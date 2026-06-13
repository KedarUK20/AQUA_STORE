export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden py-36">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/aquahomeimg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#02080d] via-[#02080d]/95 to-[#02080d]/80" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
          READY TO START?
        </p>

        <h2 className="font-serif text-5xl md:text-7xl">
          Bring Nature
          <br />
          Into Your Space
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Schedule a private consultation and discover how a custom aquarium can
          transform your home, office, or commercial environment.
        </p>

        <button className="btn-primary mt-10">Book Consultation</button>
      </div>
    </section>
  );
}
