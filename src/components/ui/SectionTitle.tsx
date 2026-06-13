type Props = {
  subtitle?: string;
  title: string;
};

export default function SectionTitle({ subtitle, title }: Props) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p className="mb-3 text-xs uppercase tracking-[0.34em] text-[#6fffe9]">
          {subtitle}
        </p>
      )}

      <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
        {title}
      </h2>
    </div>
  );
}
