import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

export function InvitationFlow() {
  return (
    <Section
      id="rsvp"
      eyebrow={eventContent.invitationFlow.eyebrow}
      title={eventContent.invitationFlow.title}
      description={eventContent.invitationFlow.description}
      surface="plain"
      headerClassName="mx-auto"
    >
      <div className="rounded-[2.2rem] bg-[rgba(251,247,241,0.88)] px-6 py-7 shadow-[var(--shadow-soft)] md:px-8 md:py-8">
        <div className="grid gap-4 md:grid-cols-3 md:gap-0">
          {eventContent.invitationFlow.points.map((point) => (
            <div
              className="border-b border-[rgba(200,101,67,0.12)] px-2 py-4 last:border-b-0 md:border-b-0 md:border-r md:px-5 md:last:border-r-0"
              key={`${point.step}-${point.title}`}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--terracotta-dark)]">
                {point.step}
              </p>
              <h3 className="mt-3 text-[1.85rem] leading-[0.96] text-[var(--text-primary)]">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 border-t border-[rgba(200,101,67,0.12)] px-1 pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="section-label text-[var(--terracotta)]">Siguiente paso</p>
            <p className="mt-4 max-w-3xl text-base text-[var(--text-secondary)]">
              {eventContent.invitationFlow.note}
            </p>
          </div>
          <a
            className="inline-flex items-center justify-center rounded-full border border-[rgba(200,101,67,0.24)] px-5 py-3 text-sm font-semibold text-[var(--terracotta-dark)] transition duration-200 hover:bg-[rgba(200,101,67,0.08)]"
            href="#faq"
          >
            Ver dudas comunes
          </a>
        </div>
      </div>
    </Section>
  );
}
