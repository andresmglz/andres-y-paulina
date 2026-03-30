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

export function EventDetails({
  eyebrow = eventContent.details.eyebrow,
  title = eventContent.details.title,
  description = eventContent.details.description,
  details = eventContent.details.cards,
}: EventDetailsProps) {
  return (
    <Section
      id="details"
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {details.map((detail, index) => (
          <Card className="flex h-full flex-col px-7 py-7" key={detail.title}>
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--terracotta-dark)]">{detail.meta}</p>
              <span className="font-[family-name:var(--font-heading)] text-2xl text-[var(--terracotta)]/70">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[2.3rem] leading-[0.95] text-[var(--color-ink)]">
              {detail.title}
            </h3>
            <p className="mt-4 flex-1 text-base leading-7 text-[var(--color-muted)]">{detail.body}</p>
            {detail.href && detail.linkLabel ? (
              <div className="mt-6 border-t border-[rgba(200,101,67,0.12)] pt-5">
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
