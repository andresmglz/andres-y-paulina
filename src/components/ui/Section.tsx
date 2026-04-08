import { clsx } from 'clsx';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  surface?: 'stage' | 'plain';
  viewportClassName?: string;
  innerClassName?: string;
  headerClassName?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  surface = 'stage',
  viewportClassName,
  innerClassName,
  headerClassName,
}: SectionProps) {
  return (
    <section className={clsx('flex min-h-screen min-h-[100dvh] items-center px-6 py-8 md:px-10 md:py-12', className)} id={id}>
      <div className={clsx('mx-auto w-full max-w-6xl', viewportClassName)}>
        <div
          className={clsx(
            surface === 'stage' ? 'section-stage rounded-[2.75rem] px-6 py-8 md:px-10 md:py-10' : 'w-full',
            innerClassName,
          )}
        >
          {(eyebrow || title || description) && (
            <div className={clsx('mb-10 max-w-3xl text-center md:mb-14', headerClassName)}>
            {eyebrow && <p className="section-label">{eyebrow}</p>}
            {title && (
              <h2 className="mt-4 text-[var(--text-primary)]">
                {title}
              </h2>
            )}
            {description && <p className="mt-5 text-base text-[var(--text-secondary)]">{description}</p>}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
