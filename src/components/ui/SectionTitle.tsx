type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Section heading with an optional eyebrow/subtitle, matching the site's
 * cyan-eyebrow + serif-title pattern used across pages.
 */
export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionTitleProps) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : ""
      } ${className}`}
    >
      {subtitle ? (
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6fffe9]">
          {subtitle}
        </p>
      ) : null}

      <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
