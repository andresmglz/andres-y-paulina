import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

type EventDetail = {
  title: string;
  body: string;
};

type EventDetailsProps = {
  details: ReadonlyArray<EventDetail>;
};

export function EventDetails({ details }: EventDetailsProps) {
  return (
    <Section
      id="details"
      eyebrow="El gran dia"
      title="Detalles base del evento"
      description="Esta seccion centraliza los datos que luego compartiran landing publica e invitacion personalizada."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {details.map((detail) => (
          <Card key={detail.title}>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">Detalle</p>
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl text-[var(--color-ink)]">
              {detail.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{detail.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
