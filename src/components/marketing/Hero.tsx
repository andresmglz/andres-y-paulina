import { Button } from '@/components/ui/Button';
import { eventContent } from '@/lib/content/wedding-content';

type HeroProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  facts?: ReadonlyArray<{
    label: string;
    value: string;
  }>;
};

export function Hero({
  eyebrow = eventContent.hero.eyebrow,
  title = eventContent.hero.title,
  intro = eventContent.hero.intro,
  primaryCtaLabel = eventContent.hero.primaryCta.label,
  primaryCtaHref = eventContent.hero.primaryCta.href,
  secondaryCtaLabel = eventContent.hero.secondaryCta.label,
  secondaryCtaHref = eventContent.hero.secondaryCta.href,
  facts = eventContent.hero.facts,
}: HeroProps) {
  return (
    <section className="px-6 pb-10 pt-8 md:px-10 md:pb-14 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-[var(--color-line)] bg-[radial-gradient(circle_at_top,_rgba(215,179,159,0.52),_transparent_32%),linear-gradient(160deg,_rgba(255,250,244,0.96),_rgba(239,227,213,0.92))] p-8 shadow-[var(--shadow-soft)] md:p-12">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.55),transparent)]" />
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-gold)]">{eyebrow}</p>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-heading)] text-6xl leading-none text-[var(--color-ink)] md:text-8xl">
            {eventContent.coupleLabel}
          </h1>
          <h2 className="mt-5 max-w-xl font-[family-name:var(--font-heading)] text-3xl text-[var(--color-ink)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--color-muted)]">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={primaryCtaHref}>{primaryCtaLabel}</Button>
            <Button href={secondaryCtaHref} variant="secondary">
              {secondaryCtaLabel}
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          {facts.map((fact) => (
            <div
              className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]"
              key={fact.label}
            >
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">{fact.label}</p>
              <p className="mt-4 text-lg leading-8 text-[var(--color-ink)]">{fact.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
