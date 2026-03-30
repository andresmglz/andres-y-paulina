import Image from 'next/image';

import { eventContent } from '@/lib/content/wedding-content';

type VerseProps = {
  eyebrow?: string;
  quote?: string;
  reference?: string;
  note?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Verse({
  eyebrow = eventContent.verse.eyebrow,
  quote = eventContent.verse.quote,
  reference = eventContent.verse.reference,
  note = eventContent.verse.note,
  imageSrc = eventContent.story.image.src,
  imageAlt = eventContent.story.image.alt,
}: VerseProps) {
  return (
    <section className="px-6 py-10 md:px-10 md:py-12" id="verse">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="order-1 rounded-[2.2rem] bg-[rgba(251,247,241,0.92)] px-7 py-8 shadow-[var(--shadow-soft)] md:px-10 md:py-10 lg:order-none">
          <p className="section-label text-[var(--terracotta)]">{eyebrow}</p>
          <div className="mt-5 h-px w-16 bg-[rgba(200,101,67,0.28)]" />
          <blockquote className="mt-6 font-[family-name:var(--font-heading)] text-[clamp(2.35rem,4vw,4.3rem)] leading-[0.98] text-[var(--text-primary)]">
            “{quote}”
          </blockquote>
          <p className="mt-5 text-sm uppercase tracking-[0.26em] text-[var(--terracotta-dark)]">
            {reference}
          </p>
          {note ? <p className="mt-6 max-w-xl text-base text-[var(--text-secondary)]">{note}</p> : null}
        </div>

          <div className="order-2 relative min-h-[24rem] overflow-hidden rounded-[2.6rem] border border-[rgba(255,247,240,0.14)] shadow-[var(--shadow-panel)] lg:order-none lg:min-h-[33rem]">
            <Image
              alt={imageAlt}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              src={imageSrc}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,18,15,0.04),rgba(26,18,15,0.12)_36%,rgba(26,18,15,0.44))]" />
            <div className="absolute bottom-6 left-6 rounded-full border border-white/18 bg-[rgba(18,12,10,0.34)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-white/82 backdrop-blur-[8px]">
              22 noviembre 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
