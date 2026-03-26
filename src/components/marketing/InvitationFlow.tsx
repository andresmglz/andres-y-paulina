import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

export function InvitationFlow() {
  return (
    <Section
      id="invitation-flow"
      eyebrow={eventContent.invitationFlow.eyebrow}
      title={eventContent.invitationFlow.title}
      description={eventContent.invitationFlow.description}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {eventContent.invitationFlow.points.map((point) => (
          <Card key={point}>
            <p className="text-base leading-7 text-[var(--color-muted)]">{point}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
