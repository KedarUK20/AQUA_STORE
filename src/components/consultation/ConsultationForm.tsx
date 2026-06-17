export default function ConsultationForm() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6fffe9]">
              CONSULTATION FORM
            </p>

            <h2 className="mt-4 font-serif text-4xl">
              Tell Us About Your Project
            </h2>

            <p className="mt-4 text-slate-400">
              Share your vision and our specialists will prepare a tailored
              proposal.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="mb-6 text-xl font-semibold">
              What Are You Looking For?
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="cursor-pointer rounded-2xl border border-white/10 bg-[#071827] p-6 transition hover:border-[#6fffe9]">
                <h4 className="font-semibold">Freshwater Aquarium</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Nature aquariums and planted ecosystems.
                </p>
              </div>

              <div className="cursor-pointer rounded-2xl border border-white/10 bg-[#071827] p-6 transition hover:border-[#6fffe9]">
                <h4 className="font-semibold">Marine & Reef</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Coral reefs and saltwater environments.
                </p>
              </div>

              <div className="cursor-pointer rounded-2xl border border-white/10 bg-[#071827] p-6 transition hover:border-[#6fffe9]">
                <h4 className="font-semibold">Maintenance Plan</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Long-term ecosystem care and support.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="mb-6 text-xl font-semibold">
              Where Will The Aquarium Be Installed?
            </h3>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#071827] p-6 transition hover:border-[#6fffe9]">
                <h4 className="font-semibold">🏠 Residence</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Living rooms, lounges and luxury homes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#071827] p-6 transition hover:border-[#6fffe9]">
                <h4 className="font-semibold">🏢 Office</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Reception areas and premium workspaces.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#071827] p-6 transition hover:border-[#6fffe9]">
                <h4 className="font-semibold">🏨 Commercial</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Hotels, restaurants and retail spaces.
                </p>
              </div>
            </div>
          </div>

          <form className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <input
              type="text"
              placeholder="City"
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <select className="rounded-xl border border-white/10 bg-[#071827] p-4">
              <option>Project Type</option>
              <option>Freshwater Aquarium</option>
              <option>Marine Aquarium</option>
              <option>Reef Aquarium</option>
              <option>Aquascaping</option>
              <option>Maintenance</option>
              <option>Commercial Installation</option>
            </select>

            <select className="rounded-xl border border-white/10 bg-[#071827] p-4">
              <option>Estimated Budget</option>
              <option>₹25,000 - ₹50,000</option>
              <option>₹50,000 - ₹1 Lakh</option>
              <option>₹1 Lakh - ₹5 Lakh</option>
              <option>₹5 Lakh+</option>
            </select>

            <textarea
              placeholder="Describe your vision..."
              rows={6}
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none md:col-span-2"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#14b8a6] px-8 py-4 font-semibold text-black transition hover:scale-105 md:col-span-2"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
