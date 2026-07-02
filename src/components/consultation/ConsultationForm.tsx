"use client";

import { FormEvent, useState } from "react";
import {
  Building2,
  ClipboardCheck,
  Droplets,
  Home,
  LifeBuoy,
  Ruler,
  Send,
  Store,
  Waves,
  Wrench,
} from "lucide-react";

const purposePoints = [
  {
    title: "Clarify the right aquarium",
    text: "Match the tank style, livestock, placement and care level to your space.",
    icon: Ruler,
  },
  {
    title: "Plan the complete setup",
    text: "Turn a loose idea into a layout, equipment direction and budget range.",
    icon: ClipboardCheck,
  },
  {
    title: "Prepare long-term care",
    text: "Decide whether you need training, routine maintenance or full support.",
    icon: LifeBuoy,
  },
];

const projectFocusOptions = [
  {
    value: "Freshwater Aquarium",
    title: "Freshwater Aquarium",
    text: "Nature aquariums, planted tanks and peaceful freshwater ecosystems.",
    icon: Droplets,
  },
  {
    value: "Marine & Reef",
    title: "Marine & Reef",
    text: "Saltwater displays, reef planning and color-rich marine environments.",
    icon: Waves,
  },
  {
    value: "Maintenance Plan",
    title: "Maintenance Plan",
    text: "Scheduled cleaning, water stability, livestock health and support.",
    icon: Wrench,
  },
];

const installationOptions = [
  {
    value: "Residence",
    title: "Residence",
    text: "Living rooms, lounges and private luxury homes.",
    icon: Home,
  },
  {
    value: "Office",
    title: "Office",
    text: "Reception areas, cabins and premium workspaces.",
    icon: Building2,
  },
  {
    value: "Commercial",
    title: "Commercial",
    text: "Hotels, restaurants, retail and hospitality spaces.",
    icon: Store,
  },
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-[#071827] px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#6fffe9]/80";

export default function ConsultationForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle",
  );
  const [feedback, setFeedback] = useState("");
  const [projectFocus, setProjectFocus] = useState("");
  const [installationSpace, setInstallationSpace] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const formData = new FormData(event.currentTarget);
    const message = [
      "Purpose: Plan the aquarium design, equipment, budget and care approach before the project begins.",
      `Project Focus: ${formData.get("projectFocus") || "Not selected"}`,
      `Installation Space: ${formData.get("installationSpace") || "Not selected"}`,
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
      setProjectFocus("");
      setInstallationSpace("");
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
    <section
      id="consultation-form"
      className="scroll-mt-28 py-16 sm:py-20 lg:py-24"
    >
      <div className="container-custom grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <aside className="lg:sticky lg:top-32">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
            Consultation Purpose
          </p>

          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
            Turn your aquarium idea into a practical design plan.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            This consultation helps us understand your room, style, maintenance
            expectations and budget before recommending a tank concept. The form
            gives our team enough context to prepare a focused first call and a
            useful proposal.
          </p>

          <div className="mt-8 grid gap-4">
            {purposePoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-[#071827]/62 p-5"
                >
                  <Icon className="h-6 w-6 text-[#d7b56d]" />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-lg border border-[#6fffe9]/20 bg-[#04111f]/82 p-5">
            <p className="text-sm font-semibold text-white">
              After you submit
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              We review the details, contact you for the consultation, then
              shape a recommendation for aquarium type, placement, equipment,
              care routine and next steps.
            </p>
          </div>
        </aside>

        <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-2xl backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
              Consult Form
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
              Tell us about the project.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Share the essentials now. We will use them to prepare a tailored
              aquarium consultation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <fieldset>
              <legend className="mb-4 text-lg font-semibold text-white">
                What are you looking for?
              </legend>

              <div className="grid gap-4 md:grid-cols-3">
                {projectFocusOptions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <label key={item.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="projectFocus"
                        value={item.value}
                        checked={projectFocus === item.value}
                        onChange={() => setProjectFocus(item.value)}
                        className="peer sr-only"
                      />
                      <span className="block min-h-[150px] rounded-lg border border-white/10 bg-[#071827] p-5 transition peer-checked:border-[#6fffe9] peer-checked:bg-[#0a2331] peer-focus-visible:ring-2 peer-focus-visible:ring-[#d7b56d]">
                        <Icon className="h-5 w-5 text-[#d7b56d]" />
                        <span className="mt-4 block font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-slate-400">
                          {item.text}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-4 text-lg font-semibold text-white">
                Where will the aquarium be installed?
              </legend>

              <div className="grid gap-4 md:grid-cols-3">
                {installationOptions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <label key={item.value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="installationSpace"
                        value={item.value}
                        checked={installationSpace === item.value}
                        onChange={() => setInstallationSpace(item.value)}
                        className="peer sr-only"
                      />
                      <span className="block min-h-[136px] rounded-lg border border-white/10 bg-[#071827] p-5 transition peer-checked:border-[#6fffe9] peer-checked:bg-[#0a2331] peer-focus-visible:ring-2 peer-focus-visible:ring-[#d7b56d]">
                        <Icon className="h-5 w-5 text-[#d7b56d]" />
                        <span className="mt-4 block font-semibold text-white">
                          {item.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-slate-400">
                          {item.text}
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                required
                minLength={2}
                className={inputClass}
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className={inputClass}
              />

              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                minLength={7}
                className={inputClass}
              />

              <input
                name="city"
                type="text"
                placeholder="City"
                className={inputClass}
              />

              <select name="projectType" className={inputClass}>
                <option value="">Project Type</option>
                <option>New aquarium design</option>
                <option>Existing aquarium upgrade</option>
                <option>Aquascaping only</option>
                <option>Maintenance visit</option>
                <option>Commercial installation</option>
              </select>

              <select name="budget" className={inputClass}>
                <option value="">Estimated Budget</option>
                <option>Rs 25,000 - Rs 50,000</option>
                <option>Rs 50,000 - Rs 1 Lakh</option>
                <option>Rs 1 Lakh - Rs 5 Lakh</option>
                <option>Rs 5 Lakh+</option>
              </select>

              <textarea
                name="message"
                placeholder="Describe your vision, room size, preferred style, livestock ideas or maintenance needs..."
                rows={6}
                required
                minLength={10}
                className={`${inputClass} resize-y md:col-span-2`}
              />
            </div>

            {feedback && (
              <p
                aria-live="polite"
                className={`rounded-lg border px-4 py-3 text-sm md:col-span-2 ${
                  status === "success"
                    ? "border-[#6fffe9]/30 bg-[#6fffe9]/10 text-[#6fffe9]"
                    : "border-red-300/30 bg-red-500/10 text-red-200"
                }`}
              >
                {feedback}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#14b8a6] px-8 py-4 text-sm font-semibold text-[#02080d] transition hover:-translate-y-0.5 hover:bg-[#6fffe9] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending request" : "Request Consultation"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
