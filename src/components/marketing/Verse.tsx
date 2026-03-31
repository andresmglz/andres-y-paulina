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
    <section className="px-6 py-8 md:px-10 md:py-12" id="verse">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-[rgba(244,237,230,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-6 shadow-[var(--shadow-panel)] md:px-8 md:py-8">
          <div className="pointer-events-none absolute inset-[12px] rounded-[2.25rem] border border-[rgba(244,237,230,0.08)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,143,166,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(201,120,88,0.08),transparent_24%)]" />

          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative order-2 lg:order-none">
              <div className="max-w-[38rem] px-2 py-4 md:px-6">
                <p className="section-label text-[rgba(136,159,176,0.92)]">{eyebrow}</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="h-px w-14 bg-[rgba(136,159,176,0.34)]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-terracotta)]" />
                  <span className="h-px w-10 bg-[rgba(216,195,168,0.24)]" />
                </div>

                <blockquote
                  className="mt-10 font-[family-name:var(--font-heading)] text-[clamp(2.55rem,4.4vw,4.6rem)] leading-[1.14] tracking-[-0.03em] text-[var(--color-ivory)]"
                  style={{
                    textShadow:
                      '0 0 1px rgba(255,248,242,0.55), 0 8px 24px rgba(0,0,0,0.12)',
                  }}
                >
                  “{quote}”
                </blockquote>

                <div className="mt-10 flex items-center gap-3">
                  <span className="h-px w-10 bg-[rgba(136,159,176,0.26)]" />
                  <span className="h-[1px] w-4 bg-[rgba(216,195,168,0.22)]" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[rgba(136,159,176,0.88)]">
                    {reference}
                  </span>
                </div>

                {note ? (
                  <p className="mt-6 max-w-2xl text-base text-[rgba(234,223,211,0.76)]">{note}</p>
                ) : null}
              </div>
            </div>

            <div className="relative order-1 min-h-[22rem] overflow-hidden rounded-[2.3rem] border border-[rgba(244,237,230,0.1)] lg:order-none lg:min-h-[31rem]">
              <Image
                alt={imageAlt}
                className="object-cover brightness-[0.9] contrast-[0.9]"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                src={imageSrc}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,16,14,0.52),rgba(22,16,14,0.18)_44%,rgba(22,16,14,0.14)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,16,14,0.22),rgba(22,16,14,0.3)_38%,rgba(22,16,14,0.56))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(22,16,14,0.18)_100%)]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(22,16,14,0),rgba(22,16,14,0.54))]" />
              <div className="absolute bottom-5 left-5 rounded-full border border-[rgba(244,237,230,0.18)] bg-[rgba(22,16,14,0.24)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(234,223,211,0.84)] backdrop-blur-[10px]">
                22 noviembre 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
