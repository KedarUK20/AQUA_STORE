"use client";

import { TextareaHTMLAttributes } from "react";

interface FloatingTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  icon: React.ReactNode;
  error?: string;
  maxLength?: number;
}

export default function FloatingTextarea({
  label,
  icon,
  error,
  maxLength = 500,
  value,
  ...props
}: FloatingTextareaProps) {
  return (
    <div className="relative">

      {/* Icon */}
      <div className="absolute left-5 top-6 text-cyan-400">
        {icon}
      </div>

      {/* Textarea */}
      <textarea
        {...props}
        value={value}
        maxLength={maxLength}
        placeholder=" "
        rows={6}
        className={`
          peer
          w-full
          resize-none
          rounded-2xl
          border
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-cyan-400"
          }
          bg-white/5
          backdrop-blur-xl
          pl-14
          pr-5
          pt-6
          pb-4
          text-white
          outline-none
          transition-all
          duration-300
          placeholder-transparent
          focus:ring-4
          focus:ring-cyan-500/20
        `}
      />

      {/* Floating Label */}
      <label
        className="
          absolute
          left-14
          top-5
          bg-[#030d18]
          px-1
          text-slate-400
          transition-all
          duration-300

          peer-placeholder-shown:top-5
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

      {/* Character Counter */}
      <div className="mt-2 flex items-center justify-between">

        {error ? (
          <p className="text-sm text-red-400">
            {error}
          </p>
        ) : (
          <span />
        )}

        <p className="text-xs text-slate-500">
          {(value as string)?.length || 0}/{maxLength}
        </p>

      </div>

    </div>
  );
}