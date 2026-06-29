const categories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Marine",
  "Aquascaping",
];

export default function ProjectCategories() {
  return (
    <section className="pb-16">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-10">
        <div className="flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-6 py-3 transition ${
                index === 0
                  ? "bg-[#14b8a6] text-black"
                  : "border border-white/10 hover:border-[#14b8a6]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
