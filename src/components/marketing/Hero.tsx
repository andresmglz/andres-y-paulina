import Image from 'next/image';

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

function formatHeroDate(dateLabel: string) {
  const match = dateLabel.match(/^(\d{1,2}) de ([a-záéíóú]+) del (\d{4})$/i);

  if (!match) {
    return dateLabel;
  }

  const [, day, month, year] = match;
  const shortMonth = {
    enero: 'ene',
    febrero: 'feb',
    marzo: 'mar',
    abril: 'abr',
    mayo: 'may',
    junio: 'jun',
    julio: 'jul',
    agosto: 'ago',
    septiembre: 'sep',
    setiembre: 'sep',
    octubre: 'oct',
    noviembre: 'nov',
    diciembre: 'dic',
  }[month.toLowerCase()] ?? month.slice(0, 3);

  return `${day} ${shortMonth} ${year}`;
}

export function Hero({
  imageSrc = eventContent.hero.image.src,
  imageAlt = eventContent.hero.image.alt,
}: HeroProps) {
  const heroDate = formatHeroDate(eventContent.saveTheDate.cards[0]?.value ?? '');

  return (
    <section className="relative min-h-screen min-h-[100dvh] overflow-hidden">
      <Image
        alt={imageAlt}
        className="object-cover"
        fill
        priority
        sizes="100vw"
        src={imageSrc}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,223,192,0.16),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(166,187,200,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(219,100,0,0.06),transparent_18%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[32%] bg-[linear-gradient(180deg,rgba(246,239,233,0),rgba(246,239,233,0.72))]" />

      <div className="relative z-10 flex min-h-screen min-h-[100dvh] items-end px-6 pb-12 pt-24 md:px-10 md:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative mx-auto max-w-[38rem] overflow-hidden rounded-[2.4rem] border border-[rgba(216,195,168,0.28)] bg-[linear-gradient(180deg,rgba(252,247,241,0.9),rgba(246,239,233,0.92))] px-6 py-8 text-center shadow-[0_18px_50px_rgba(140,122,107,0.14)] backdrop-blur-[8px] md:px-10 md:py-10">
            <div className="pointer-events-none absolute inset-[10px] rounded-[2rem] border border-[rgba(216,195,168,0.18)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,223,192,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(166,187,200,0.12),transparent_28%)]" />
            <div className="pointer-events-none absolute -left-2 -top-2 opacity-[0.72]">
              <Image
                alt=""
                aria-hidden="true"
                className="h-24 w-24 object-contain md:h-32 md:w-32"
                height={128}
                src="/ornaments/top-left.png"
                width={128}
              />
            </div>
            <div className="pointer-events-none absolute -right-2 -top-2 opacity-[0.72]">
              <Image
                alt=""
                aria-hidden="true"
                className="h-24 w-24 object-contain md:h-32 md:w-32"
                height={128}
                src="/ornaments/top-right.png"
                width={128}
              />
            </div>

            <div className="relative z-10">
              <h1 className="text-[3.7rem] leading-[0.86] tracking-[-0.04em] text-[var(--color-deep-brown)] md:text-[5.4rem] lg:text-[6rem]">
                {eventContent.coupleLabel}
              </h1>

              <h2 className="mt-4 whitespace-nowrap font-[family-name:var(--font-heading)] text-[0.9rem] leading-none tracking-[0.08em] text-[var(--terracotta)] sm:text-[1rem] md:text-[1.12rem] lg:text-[1.2rem]">
                {heroDate}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
