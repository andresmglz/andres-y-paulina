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
  quote = eventContent.verse.quote,
  reference = eventContent.verse.reference,
  note = eventContent.verse.note,
  imageSrc = eventContent.story.image.src,
  imageAlt = eventContent.story.image.alt,
}: VerseProps) {
  return (
    <section className="flex min-h-screen min-h-[100dvh] items-center px-6 py-8 md:px-10 md:py-12" id="verse">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.8rem] border border-[rgba(244,237,230,0.1)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-6 py-6 shadow-[var(--shadow-panel)] md:px-8 md:py-8">
          <div className="pointer-events-none absolute inset-[12px] rounded-[2.25rem] border border-[rgba(244,237,230,0.08)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(111,143,166,0.1),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(201,120,88,0.08),transparent_24%)]" />
          <div className="pointer-events-none absolute left-2 top-2 hidden opacity-[0.22] lg:block">
            <Image
              alt=""
              aria-hidden="true"
              className="h-24 w-24 object-contain"
              height={96}
              src="/ornaments/leaf.png"
              width={96}
            />
          </div>
          <div className="pointer-events-none absolute bottom-3 right-3 hidden opacity-[0.14] lg:block [transform:scaleX(-1)_scaleY(-1)]">
            <Image
              alt=""
              aria-hidden="true"
              className="h-20 w-20 object-contain"
              height={80}
              src="/ornaments/leaf.png"
              width={80}
            />
          </div>
          <div className="pointer-events-none absolute -bottom-2 left-0 hidden opacity-[0.7] lg:block">
            <Image
              alt=""
              aria-hidden="true"
              className="h-48 w-48 object-contain"
              height={192}
              src="/ornaments/bottom-corner-left.png"
              width={192}
            />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative order-2 lg:order-none">
              <div className="max-w-[38rem] px-2 py-4 md:px-6">
                <blockquote
                  className="font-[family-name:var(--font-heading)] text-[clamp(2.75rem,4.6vw,4.9rem)] leading-[1.14] tracking-[-0.03em] text-[var(--color-deep-brown)]"
                  style={{
                    textShadow:
                      '0 1px 0 rgba(246,223,192,0.28), 0 8px 24px rgba(42,30,26,0.08)',
                  }}
                >
                  “{quote}”
                </blockquote>

                <div className="mt-12 flex items-center gap-3">
                  <span className="h-px w-10 bg-[rgba(114,142,165,0.3)]" />
                  <span className="h-[1px] w-4 bg-[rgba(190,75,3,0.18)]" />
                  <span className="text-[11px] uppercase tracking-[0.28em] text-[rgba(114,142,165,0.92)]">
                    {reference}
                  </span>
                </div>

                {note ? (
                  <p className="mt-6 max-w-2xl text-base text-[rgba(140,122,107,0.86)]">{note}</p>
                ) : null}
              </div>
            </div>

            <div className="relative order-1 min-h-[22rem] overflow-hidden rounded-[2.3rem] border border-[rgba(244,237,230,0.1)] lg:order-none lg:min-h-[31rem]">
              <Image
                alt={imageAlt}
                className="object-cover brightness-[0.98] contrast-[0.96]"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                src={imageSrc}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(246,239,233,0.06),rgba(246,239,233,0.02)_42%,rgba(42,30,26,0.08)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,239,233,0.04),rgba(42,30,26,0.12)_78%,rgba(42,30,26,0.18))]" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(246,239,233,0),rgba(42,30,26,0.18))]" />
              <div className="absolute bottom-5 left-5 rounded-full border border-[rgba(244,237,230,0.22)] bg-[rgba(246,239,233,0.22)] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-[rgba(246,239,233,0.94)] backdrop-blur-[10px]">
                22 noviembre 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
