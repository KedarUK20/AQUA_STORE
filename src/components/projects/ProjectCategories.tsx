import Link from "next/link";

const categories = [
  { label: "All Projects", href: "#featured-projects" },
  { label: "Residential", href: "#residential-case" },
  { label: "Commercial", href: "#commercial-case" },
  { label: "Transformations", href: "#transformations" },
  { label: "Client Feedback", href: "#project-feedback" },
];

export default function ProjectCategories() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-6">
      <div className="container-custom flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          Browse Project Proof
        </p>

        <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
          {categories.map((category, index) => (
            <Link
              key={category.label}
              href={category.href}
              className={`shrink-0 rounded-md border px-4 py-2 text-sm transition ${
                index === 0
                  ? "border-[#14b8a6] bg-[#14b8a6] text-black"
                  : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-[#6fffe9]/60 hover:text-[#6fffe9]"
              }`}
            >
              {category.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
