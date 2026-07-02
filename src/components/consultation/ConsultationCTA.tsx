export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/aquahomeimg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#02080d]/80" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
          READY TO BEGIN?
        </p>

        <h2 className="font-serif text-5xl md:text-7xl leading-tight">
          Bring A Living Ecosystem
          <br />
          Into Your Space
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Whether you&apos;re planning a luxury planted aquarium, marine reef system
          or commercial installation, our team is ready to guide your project
          from concept to long-term care.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="btn-primary">Schedule Consultation</button>

          <button className="btn-secondary">View Projects</button>
        </div>
      </div>
    </section>
  );
}
