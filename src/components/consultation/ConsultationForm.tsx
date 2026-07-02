"use client";

import { FormEvent, useState } from "react";

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const message = [
      `City: ${formData.get("city") || "Not provided"}`,
      `Project Type: ${formData.get("projectType") || "Not selected"}`,
      `Estimated Budget: ${formData.get("budget") || "Not selected"}`,
      "",
      String(formData.get("message") || ""),
    ].join("\n");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        signal: controller.signal,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send consultation request.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setFeedback(result.message || "Consultation request sent successfully.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof DOMException && error.name === "AbortError"
          ? "Email request timed out. Please try again in a moment."
          : error instanceof Error
          ? error.message
          : "Unable to send consultation request right now.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  };

  return (
    <section id="consultation-form" className="py-24">
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

          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              minLength={2}
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              required
              minLength={7}
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <input
              name="city"
              type="text"
              placeholder="City"
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none"
            />

            <select
              name="projectType"
              className="rounded-xl border border-white/10 bg-[#071827] p-4"
            >
              <option value="">Project Type</option>
              <option>Freshwater Aquarium</option>
              <option>Marine Aquarium</option>
              <option>Reef Aquarium</option>
              <option>Aquascaping</option>
              <option>Maintenance</option>
              <option>Commercial Installation</option>
            </select>

            <select
              name="budget"
              className="rounded-xl border border-white/10 bg-[#071827] p-4"
            >
              <option value="">Estimated Budget</option>
              <option>₹25,000 - ₹50,000</option>
              <option>₹50,000 - ₹1 Lakh</option>
              <option>₹1 Lakh - ₹5 Lakh</option>
              <option>₹5 Lakh+</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your vision..."
              rows={6}
              required
              minLength={10}
              className="rounded-xl border border-white/10 bg-[#071827] p-4 outline-none md:col-span-2"
            />

            {feedback && (
              <p
                className={`md:col-span-2 ${
                  status === "success" ? "text-[#6fffe9]" : "text-red-300"
                }`}
              >
                {feedback}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl bg-[#14b8a6] px-8 py-4 font-semibold text-black transition hover:scale-105 md:col-span-2"
            >
              {status === "sending" ? "Sending..." : "Request Consultation"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
