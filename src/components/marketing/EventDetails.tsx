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
      eyebrow={eyebrow}
      title={title}
      description={description}
      surface="plain"
      headerClassName="mx-auto"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {details.map((detail, index) => (
          <Card className="paper-texture flex h-full flex-col border-[rgba(111,143,166,0.12)] px-7 py-7" key={detail.title}>
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(114,142,165,0.24)] bg-[linear-gradient(180deg,rgba(248,238,224,0.94),rgba(228,236,241,0.82))] text-[var(--dusty-blue)]">
                {icons[index] ? (() => {
                  const Icon = icons[index];
                  return <Icon />;
                })() : null}
              </div>
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--dusty-blue)]">{detail.meta}</p>
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[2.3rem] leading-[0.95] text-[var(--color-ink)]">
              {detail.title}
            </h3>
            <p className="mt-4 flex-1 text-base leading-7 text-[var(--color-muted)]">{detail.body}</p>
            {detail.href && detail.linkLabel ? (
              <div className="mt-6 border-t border-[rgba(114,142,165,0.14)] pt-5">
                <Button href={detail.href} variant="heroEditorial">
                  {detail.linkLabel}
                </Button>
              </div>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
