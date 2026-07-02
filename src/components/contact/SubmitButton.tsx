"use client";

import { Loader2, SendHorizontal } from "lucide-react";

interface SubmitButtonProps {
  loading: boolean;
}

export default function SubmitButton({
  loading,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        group
        relative
        inline-flex
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        bg-cyan-500
        px-8
        py-4
        font-semibold
        text-black
        transition-all
        duration-500

        hover:-translate-y-1
        hover:bg-cyan-400
        hover:shadow-[0_15px_45px_rgba(34,211,238,0.45)]

        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >
      {/* Glow Background */}
      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-cyan-400
          via-cyan-300
          to-cyan-500
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Button Content */}
      <span className="relative flex items-center gap-3">

        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message

            <SendHorizontal
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-2
              "
            />
          </>
        )}

      </span>
    </button>
  );
}