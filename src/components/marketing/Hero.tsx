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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,9,8,0.26),rgba(14,9,8,0.42)_34%,rgba(14,9,8,0.66)_74%,rgba(14,9,8,0.82))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,100,0,0.12),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(166,187,200,0.18),transparent_24%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[52%] bg-[linear-gradient(180deg,rgba(16,10,8,0),rgba(16,10,8,0.64))]" />

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-12 pt-24 md:px-10 md:pb-20 lg:pb-28">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative mx-auto max-w-[39rem] overflow-hidden rounded-[2.6rem] border border-[rgba(246,223,192,0.18)] bg-[linear-gradient(180deg,rgba(52,36,32,0.72),rgba(31,23,20,0.72))] px-6 py-9 text-center text-white shadow-[0_36px_90px_rgba(0,0,0,0.34),0_0_44px_rgba(190,75,3,0.12)] backdrop-blur-[18px] md:px-10 md:py-14">
            <div className="pointer-events-none absolute inset-[12px] rounded-[2.2rem] border border-[rgba(255,247,240,0.12)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,247,240,0.8)_1px,transparent_0)] [background-size:20px_20px]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,100,0,0.08),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(166,187,200,0.12),transparent_24%)]" />
            <div className="pointer-events-none absolute left-1/2 top-[25%] h-56 w-[82%] -translate-x-1/2 rounded-full bg-black/28 blur-3xl" />
            <div className="pointer-events-none absolute left-5 top-5 h-14 w-14 rounded-tl-[1.2rem] border-l border-t border-[rgba(255,247,240,0.14)]" />
            <div className="pointer-events-none absolute bottom-5 right-5 h-14 w-14 rounded-br-[1.2rem] border-b border-r border-[rgba(255,247,240,0.14)]" />
            <div className="pointer-events-none absolute left-6 top-6 text-[rgba(255,247,240,0.14)]">
              <svg aria-hidden="true" className="h-12 w-12" fill="none" viewBox="0 0 48 48">
                <path d="M10 34c4-9 10-14 18-16-2 3-2 6 0 8 4-4 8-6 12-6-5 3-8 8-10 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="pointer-events-none absolute bottom-6 right-6 text-[rgba(255,247,240,0.12)]">
              <svg aria-hidden="true" className="h-10 w-10 scale-x-[-1]" fill="none" viewBox="0 0 48 48">
                <path d="M10 34c4-9 10-14 18-16-2 3-2 6 0 8 4-4 8-6 12-6-5 3-8 8-10 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
              </svg>
            </div>
            <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 bg-[radial-gradient(circle,rgba(219,100,0,0.14),transparent_68%)]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 bg-[radial-gradient(circle,rgba(166,187,200,0.12),transparent_68%)]" />

            <div className="relative z-10">
              {eyebrow ? (
                <p className="text-[11px] uppercase tracking-[0.34em] text-white/66">{eyebrow}</p>
              ) : null}
              <p className="text-[11px] uppercase tracking-[0.38em] text-white/76">{badge}</p>
              <div className="mx-auto mt-4 h-px w-16 bg-[linear-gradient(90deg,transparent,rgba(226,232,240,0.45),transparent)]" />
              <div className="editorial-divider mx-auto mt-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--terracotta-dark)]" />
              </div>

              <h1 className="mt-8 text-[4.25rem] leading-[0.86] tracking-[-0.035em] text-[var(--color-ivory)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.24)] md:text-[6.2rem] lg:text-[7rem]">
                {eventContent.coupleLabel}
              </h1>

              <h2 className="mt-6 font-[family-name:var(--font-heading)] text-[1.7rem] leading-none text-[var(--terracotta-soft)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.18)] md:text-[2.1rem]">
                {title}
              </h2>

              <p className="mt-8 text-[12px] uppercase tracking-[0.28em] text-[rgba(255,247,240,0.9)] md:text-[13px]">
                {intro}
              </p>
              <p className="mt-3 text-sm text-[rgba(166,187,200,0.9)] md:text-[15px]">{eventContent.saveTheDate.cards[1]?.value}</p>

              <div className="mx-auto mt-9 h-px w-32 bg-[linear-gradient(90deg,transparent,rgba(255,247,240,0.45),transparent)]" />

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href={primaryCtaHref} variant="heroPrimary">
                  {primaryCtaLabel}
                </Button>
                <Button href={secondaryCtaHref} variant="heroSecondary">
                  {secondaryCtaLabel}
                </Button>
              </div>

              <p className="mt-12 text-[10px] uppercase tracking-[0.32em] text-[rgba(182,204,219,0.4)]">{hashtag}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
