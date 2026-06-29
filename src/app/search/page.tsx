"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="min-h-screen bg-[#06141B] text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400">
        Search Results
      </h1>

      <p className="mt-4 text-xl">
        Searching for:{" "}
        <span className="text-cyan-300">{query}</span>
      </p>
    </div>
  );
}