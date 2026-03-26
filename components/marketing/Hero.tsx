import { Button } from '@/components/ui/Button';
import { eventConfig } from '@/lib/config/event';
import { eventContent } from '@/lib/content/wedding-content';

type HeroProps = {
  eyebrow?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function Hero({
  eyebrow = eventConfig.dateLabel,
  subtitle = 'Nos casamos',
  ctaLabel = 'Ver lookbook',
  ctaHref = '/lookbook',
}: HeroProps) {
  return (
    <section className="px-6 pb-10 pt-8 md:px-10 md:pb-14 md:pt-12">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[radial-gradient(circle_at_top,_rgba(215,179,159,0.42),_transparent_36%),linear-gradient(160deg,_rgba(255,250,244,0.95),_rgba(239,227,213,0.92))] p-8 shadow-[var(--shadow-soft)] md:p-12">
          <p className="text-xs uppercase tracking-[0.34em] text-[var(--color-gold)]">{eyebrow}</p>
          <h1 className="mt-5 max-w-xl font-[family-name:var(--font-heading)] text-6xl leading-none text-[var(--color-ink)] md:text-8xl">
            {eventContent.coupleLabel}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-[var(--color-muted)]">{subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={ctaHref}>{ctaLabel}</Button>
            <Button href="#details" variant="secondary">
              Ver detalles
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface-strong)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Direccion visual</p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              Editorial clasica, espacios amplios, superficies suaves y una transicion limpia entre
              landing publica e invitacion personalizada.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Release 1</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--color-muted)]">
              <li>Base de app con Next, Tailwind y TypeScript.</li>
              <li>Lookbook interno para revisar primitives y secciones.</li>
              <li>Smoke tests locales con Playwright sobre la app real.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
