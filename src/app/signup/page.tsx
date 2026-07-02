"use client";

import Link from "next/link";
import { Fish, Headphones, Lock, Mail, Trophy, User } from "lucide-react";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#02080d] px-4 pb-10 pt-28">
      <div className="w-full max-w-6xl overflow-hidden rounded-lg border border-cyan-500/20 bg-[#04111f]/70 shadow-[0_0_50px_rgba(0,255,255,0.15)] backdrop-blur-xl">
        <div className="grid lg:grid-cols-2">
          <div
            className="relative min-h-[520px] bg-cover bg-center lg:min-h-[760px]"
            style={{
              backgroundImage: "url('/images/signin-bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-10">
              <div>
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                  AQUARIUM
                </h1>

                <p className="mt-2 text-sm uppercase tracking-[0.28em] text-cyan-300 sm:tracking-[0.4em]">
                  Nature Studio
                </p>

                <div className="mt-6 h-[2px] w-40 bg-cyan-400" />

                <p className="mt-6 text-sm uppercase tracking-[0.24em] text-white/80 sm:tracking-[0.3em]">
                  Create / Design / Inspire
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-0">
                <div className="rounded-lg border border-white/10 bg-black/30 p-4 text-center backdrop-blur-lg">
                  <Fish className="mx-auto text-cyan-400" />
                  <p className="mt-3 text-sm text-white">
                    Premium
                    <br />
                    Aquascaping
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/30 p-4 text-center backdrop-blur-lg">
                  <Trophy className="mx-auto text-cyan-400" />
                  <p className="mt-3 text-sm text-white">
                    Award Winning
                    <br />
                    Designs
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-black/30 p-4 text-center backdrop-blur-lg">
                  <Headphones className="mx-auto text-cyan-400" />
                  <p className="mt-3 text-sm text-white">
                    Expert
                    <br />
                    Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-8 md:p-12">
            <div className="w-full max-w-md">
              <h2 className="text-4xl font-bold text-white sm:text-5xl">
                Create <span className="text-cyan-400">Account</span>
              </h2>

              <p className="mt-3 text-slate-400">
                Join us to design and track your dream aquarium
              </p>

              <form className="mt-10 space-y-6">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-4">
                    <User size={18} className="shrink-0 text-slate-400" />

                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="min-w-0 flex-1 bg-transparent p-4 text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email Address
                  </label>

                  <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-4">
                    <Mail size={18} className="shrink-0 text-slate-400" />

                    <input
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      className="min-w-0 flex-1 bg-transparent p-4 text-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Password
                  </label>

                  <div className="flex items-center rounded-lg border border-white/10 bg-white/5 px-4">
                    <Lock size={18} className="shrink-0 text-slate-400" />

                    <input
                      type="password"
                      autoComplete="new-password"
                      placeholder="Create a password"
                      className="min-w-0 flex-1 bg-transparent p-4 text-white outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-400 py-4 font-semibold text-black transition hover:bg-cyan-300"
                >
                  CREATE ACCOUNT
                </button>
              </form>

              <div className="mt-8 text-center text-slate-400">
                Already have an account?{" "}
                <Link href="/signin" className="text-cyan-400">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
