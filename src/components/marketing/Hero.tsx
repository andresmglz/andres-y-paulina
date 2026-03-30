import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { eventContent } from '@/lib/content/wedding-content';

type HeroProps = {
  eyebrow?: string;
  title?: string;
  badge?: string;
  hashtag?: string;
  intro?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({
  eyebrow,
  title = eventContent.hero.title,
  badge = eventContent.hero.badge,
  hashtag = eventContent.hero.hashtag,
  intro = eventContent.hero.intro,
  primaryCtaLabel = eventContent.hero.primaryCta.label,
  primaryCtaHref = eventContent.hero.primaryCta.href,
  secondaryCtaLabel = eventContent.hero.secondaryCta.label,
  secondaryCtaHref = eventContent.hero.secondaryCta.href,
  imageSrc = eventContent.hero.image.src,
  imageAlt = eventContent.hero.image.alt,
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        alt={imageAlt}
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,14,12,0.18),rgba(22,14,12,0.42)_32%,rgba(18,12,10,0.78))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,162,139,0.16),transparent_24%)]" />

      <div className="relative z-10 flex min-h-screen items-end px-6 py-8 md:px-10 md:py-10 lg:items-center">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-sm rounded-[2rem] border border-[rgba(255,247,240,0.18)] bg-[rgba(251,247,241,0.88)] px-6 py-7 shadow-[0_24px_80px_rgba(20,12,10,0.24)] backdrop-blur-[10px] md:max-w-[29rem] md:px-8 md:py-9">
            {eyebrow ? (
              <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--terracotta-dark)]">{eyebrow}</p>
            ) : null}
            <p className="text-[11px] uppercase tracking-[0.34em] text-[var(--text-secondary)]">{badge}</p>
            <div className="mt-4 h-px w-16 bg-[rgba(200,101,67,0.32)]" />
            <h1 className="mt-5 text-[3.3rem] leading-[0.9] text-[var(--text-primary)] md:text-[5.2rem]">
              {eventContent.coupleLabel}
            </h1>
            <h2 className="mt-4 text-[13px] uppercase tracking-[0.28em] text-[var(--text-secondary)]">{title}</h2>
            <p className="mt-5 text-base text-[var(--text-secondary)] md:text-lg">{intro}</p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{eventContent.saveTheDate.cards[1]?.value}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={primaryCtaHref} variant="primary">
                {primaryCtaLabel}
              </Button>
              <Button href={secondaryCtaHref} variant="heroEditorial">
                {secondaryCtaLabel}
              </Button>
            </div>

            <p className="mt-7 text-[11px] uppercase tracking-[0.32em] text-[var(--text-secondary)]/78">{hashtag}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
