export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      data-gsap="section-heading"
      className="section-heading mb-10 max-w-2xl sm:mb-12 lg:mb-14"
    >
      <p
        data-gsap="heading-label"
        className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-blue-400/90 sm:text-xs"
      >
        {label}
      </p>
      <h2
        data-gsap="heading-title"
        className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p
          data-gsap="heading-desc"
          className="mt-3 text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base"
        >
          {description}
        </p>
      )}
    </div>
  );
}
