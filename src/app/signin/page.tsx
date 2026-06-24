"use client";

import Link from "next/link";
import { Mail, Lock, Fish, Trophy, Headphones } from "lucide-react";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-[#02080d] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#04111f]/70 backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.15)]">
        <div className="grid lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div
            className="relative min-h-[700px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/signin-bg.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black/25" />

            <div className="relative z-10 h-full flex flex-col justify-between p-10">
              <div>
                <h1 className="text-5xl font-bold text-white">AQUARIUM</h1>

                <p className="text-cyan-300 tracking-[0.4em] uppercase mt-2">
                  Nature Studio
                </p>

                <div className="w-40 h-[2px] bg-cyan-400 mt-6" />

                <p className="mt-6 text-white/80 tracking-[0.3em] uppercase">
                  Create • Design • Inspire
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/10">
                  <Fish className="mx-auto text-cyan-400" />
                  <p className="text-sm mt-3 text-white">
                    Premium
                    <br />
                    Aquascaping
                  </p>
                </div>

                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/10">
                  <Trophy className="mx-auto text-cyan-400" />
                  <p className="text-sm mt-3 text-white">
                    Award Winning
                    <br />
                    Designs
                  </p>
                </div>

                <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-4 text-center border border-white/10">
                  <Headphones className="mx-auto text-cyan-400" />
                  <p className="text-sm mt-3 text-white">
                    Expert
                    <br />
                    Consultation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              <h2 className="text-5xl font-bold text-white">
                Welcome <span className="text-cyan-400">Back!</span>
              </h2>

              <p className="text-slate-400 mt-3">
                Sign in to continue to your account
              </p>

              <form className="mt-10 space-y-6">
                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Email Address
                  </label>

                  <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
                    <Mail size={18} className="text-slate-400" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent p-4 outline-none text-white"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-sm text-slate-300 mb-2">
                    Password
                  </label>

                  <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4">
                    <Lock size={18} className="text-slate-400" />

                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full bg-transparent p-4 outline-none text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <label className="flex items-center gap-2 text-slate-300">
                    <input type="checkbox" className="accent-cyan-500" />
                    Remember Me
                  </label>

                  <Link href="#" className="text-cyan-400">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    font-semibold
                    text-black
                    bg-cyan-400
                    hover:bg-cyan-300
                    transition
                  "
                >
                  SIGN IN →
                </button>
              </form>

              <div className="mt-8 text-center text-slate-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-cyan-400">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
