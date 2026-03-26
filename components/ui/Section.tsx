import { clsx } from 'clsx';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section className={clsx('px-6 py-10 md:px-10 md:py-14', className)} id={id}>
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title || description) && (
          <div className="mb-8 max-w-2xl">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">{eyebrow}</p>
            )}
            {title && (
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-4xl leading-tight text-[var(--color-ink)] md:text-5xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
