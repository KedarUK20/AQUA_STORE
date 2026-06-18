"use client";

import { useState } from "react";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function ConsultationPage() {
const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
name: "",
email: "",
phone: "",
message: "",
});

const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {
e.preventDefault();


setLoading(true);

try {
  const res = await fetch("/api/consultation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  const data = await res.json();

  if (data.success) {
    alert("Consultation Request Sent Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } else {
    alert(data.message);
  }
} catch (error) {
  console.error(error);
  alert("Something went wrong.");
}

setLoading(false);


};

return (
<> <Navbar />

  <main className="min-h-screen bg-[#02080d] text-white pt-24 sm:pt-32 pb-16 sm:pb-20">
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm">
          Consultation
        </span>

        <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Ready To Build Your Dream Aquarium?
        </h1>

        <p className="mt-4 text-slate-400 text-sm sm:text-base">
          Fill out the form below and we'll contact you shortly.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-5 sm:p-8 space-y-6 border border-white/10"
      >
        {/* Name */}
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            Full Name
          </label>

          <input
            type="text"
            required
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
            placeholder="Enter your full name"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            Email
          </label>

          <input
            type="email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            placeholder="Enter your email"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            Phone Number
          </label>

          <input
            type="text"
            required
            value={form.phone}
            onChange={(e) =>
              setForm({
                ...form,
                phone: e.target.value,
              })
            }
            placeholder="Enter your phone number"
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm sm:text-base">
            Aquarium Requirement
          </label>

          <textarea
            rows={5}
            required
            value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value,
              })
            }
            placeholder="Describe your aquarium requirements..."
            className="w-full rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            bg-cyan-500
            hover:bg-cyan-400
            disabled:opacity-70
            text-black
            font-semibold
            py-3 sm:py-4
            rounded-xl
            transition
          "
        >
          {loading
            ? "Sending..."
            : "Book Consultation"}
        </button>
      </form>
    </div>
  </main>

  <Footer />
</>


);
}
