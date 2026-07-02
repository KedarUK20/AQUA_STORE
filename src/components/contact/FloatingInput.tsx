"use client";

import { InputHTMLAttributes } from "react";

interface FloatingInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: React.ReactNode;
  error?: string;
}

export default function FloatingInput({
  label,
  icon,
  error,
  ...props
}: FloatingInputProps) {
  return (
    <div className="relative">

      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400">
        {icon}
      </div>

      <input
        {...props}
        placeholder=" "
        className={`
          peer
          w-full
          rounded-2xl
          border
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-cyan-400"
          }
          bg-white/5
          backdrop-blur-xl
          py-4
          pl-14
          pr-5
          text-white
          outline-none
          transition
          placeholder-transparent
          focus:ring-4
          focus:ring-cyan-500/20
        `}
      />

      <label
        className="
          absolute
          left-14
          top-4
          bg-[#030d18]
          px-1
          text-slate-400
          transition-all

          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base

          peer-focus:-top-3
          peer-focus:text-xs
          peer-focus:text-cyan-400

          peer-not-placeholder-shown:-top-3
          peer-not-placeholder-shown:text-xs
        "
      >
        {label}
      </label>

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}