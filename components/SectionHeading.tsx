type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ id, eyebrow, title, description }: Props) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <span aria-hidden className="mr-2 text-accent">
          ●
        </span>
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
