import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type EventDetail = {
  title: string;
  body: string;
  meta: string;
  href?: string;
  linkLabel?: string;
};

type EventDetailsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  details?: ReadonlyArray<EventDetail>;
};

function CeremonyIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M4 20h16M6.5 20V9.5L12 5l5.5 4.5V20M10 20v-5h4v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function ToastIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M7 4v5l3.5 4V20M17 4v5l-3.5 4V20M7 9h10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function DressIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M9 4c0 1.4-1 2.5-2.4 3l1.7 4L5 20h14l-3.3-9 1.7-4C16 6.5 15 5.4 15 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function EventDetails({
  eyebrow = eventContent.details.eyebrow,
  title = eventContent.details.title,
  description = eventContent.details.description,
  details = eventContent.details.cards,
}: EventDetailsProps) {
  const icons = [CeremonyIcon, ToastIcon, DressIcon] as const;

  return (
    <Section
      id="details"
      surface="plain"
      className="bg-[linear-gradient(180deg,rgba(248,242,235,0.96),rgba(244,236,225,0.98))]"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.6rem] border border-[rgba(216,195,168,0.18)] bg-[linear-gradient(180deg,rgba(252,247,241,0.9),rgba(246,239,233,0.92))] px-5 py-8 shadow-[0_20px_50px_rgba(178,149,119,0.08)] sm:px-8 sm:py-10 md:px-10 md:py-12">
          <div className="pointer-events-none absolute inset-[10px] rounded-[2.15rem] border border-[rgba(216,195,168,0.16)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,223,192,0.42),transparent_28%),radial-gradient(circle_at_18%_26%,rgba(166,187,200,0.12),transparent_16%),linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.06))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,rgba(140,122,107,0.42)_1px,transparent_0)] [background-size:24px_24px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="pointer-events-none absolute -left-6 top-5 hidden opacity-[0.46] md:block">
              <Image alt="" aria-hidden="true" className="h-28 w-44 object-contain" height={112} src="/ornaments/leaf.png" width={176} />
            </div>
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--dusty-blue)]">{eyebrow}</p>
            <h2 className="mt-4 text-[var(--color-ink)]">{title}</h2>
            {description ? (
              <p className="mt-5 text-base text-[var(--color-muted)]">{description}</p>
            ) : null}
            <div className="mt-5 flex justify-center">
              <Image
                alt=""
                aria-hidden="true"
                className="h-6 w-24 object-contain opacity-[0.4]"
                height={32}
                src="/ornaments/divider2.png"
                width={96}
              />
            </div>
          </div>

          <div className="relative mt-8 grid gap-5 md:grid-cols-3 md:gap-6">
            <div className="pointer-events-none absolute left-2 top-[-1.35rem] hidden opacity-[0.7] md:block">
              <Image alt="" aria-hidden="true" className="h-24 w-36 object-contain" height={96} src="/ornaments/leaf.png" width={144} />
            </div>
            {details.map((detail, index) => (
              <Card className="paper-texture relative flex h-full flex-col overflow-hidden border-[rgba(216,195,168,0.22)] bg-[linear-gradient(180deg,rgba(252,248,242,0.96),rgba(246,239,233,0.92))] px-7 py-7 shadow-[0_16px_38px_rgba(178,149,119,0.08)]" key={detail.title}>
                <div className="pointer-events-none absolute inset-[10px] rounded-[22px] border border-[rgba(216,195,168,0.12)]" />
                {index === 0 ? (
                  <div className="pointer-events-none absolute left-3 top-3 opacity-[0.26]">
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="h-12 w-12 object-contain"
                      height={48}
                      src="/ornaments/top-left.png"
                      width={48}
                    />
                  </div>
                ) : null}
                {index === details.length - 1 ? (
                  <div className="pointer-events-none absolute -bottom-1 -right-1 opacity-[0.42]">
                    <Image
                      alt=""
                      aria-hidden="true"
                      className="h-16 w-16 object-contain [transform:scaleX(-1)]"
                      height={64}
                      src="/ornaments/bottom-corner-left.png"
                      width={64}
                    />
                  </div>
                ) : null}
                {index === 1 ? (
                  <div className="pointer-events-none absolute bottom-4 right-5 opacity-[0.22]">
                    <Image alt="" aria-hidden="true" className="h-6 w-20 object-contain" height={24} src="/ornaments/divider2.png" width={80} />
                  </div>
                ) : null}

                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(114,142,165,0.24)] bg-[linear-gradient(180deg,rgba(248,238,224,0.94),rgba(228,236,241,0.82))] text-[var(--dusty-blue)]">
                    {icons[index] ? (() => {
                      const Icon = icons[index];
                      return <Icon />;
                    })() : null}
                  </div>
                  <p className="text-right text-[11px] uppercase tracking-[0.26em] text-[var(--dusty-blue)]">{detail.meta}</p>
                </div>
                <h3 className="relative mt-5 font-[family-name:var(--font-heading)] text-[2.15rem] leading-[0.95] text-[var(--color-ink)] sm:text-[2.3rem]">
                  {detail.title}
                </h3>
                <p className="relative mt-4 flex-1 text-base leading-7 text-[var(--color-muted)]">{detail.body}</p>
                {detail.href && detail.linkLabel ? (
                  <div className="relative mt-6 border-t border-[rgba(114,142,165,0.12)] pt-5">
                    <Button href={detail.href} variant="heroEditorial">
                      {detail.linkLabel}
                    </Button>
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
