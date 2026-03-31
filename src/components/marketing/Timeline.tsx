import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type TimelineItem = {
  time: string;
  title: string;
  note: string;
};

type TimelineProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ReadonlyArray<TimelineItem>;
};

function WelcomeIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M6 8h12M6 12h12M6 16h7" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function CeremonyIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M5 20h14M7 20v-7.5L12 8l5 4.5V20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function PartyIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
      <path d="M8 5v4l4 4 4-4V5M8 9H6m10 0h2M12 13v6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function Timeline({
  eyebrow = eventContent.timeline.eyebrow,
  title = eventContent.timeline.title,
  description = eventContent.timeline.description,
  items = eventContent.timeline.items,
}: TimelineProps) {
  const icons = [WelcomeIcon, CeremonyIcon, PartyIcon] as const;

  return (
    <Section
      id="timeline"
      eyebrow={eyebrow}
      title={title}
      description={description}
      surface="plain"
      headerClassName="mx-auto"
    >
      <div className="paper-texture rounded-[2.2rem] border border-[rgba(114,142,165,0.14)] px-6 py-8 shadow-[var(--shadow-soft)] md:px-10 md:py-10">
        <div className="relative grid gap-10 md:gap-10">
          <div className="absolute bottom-4 left-4 top-4 hidden w-px bg-[linear-gradient(180deg,rgba(114,142,165,0.08),rgba(219,100,0,0.24),rgba(114,142,165,0.08))] md:block" />
          {items.map((item, index) => (
            <div
              className="timeline-item relative pl-10 md:grid md:grid-cols-[160px_minmax(0,1fr)] md:items-start md:gap-10 md:pl-0"
              key={`${item.time}-${item.title}`}
            >
              <div className="absolute bottom-0 left-[17px] top-2 w-px bg-[linear-gradient(180deg,rgba(114,142,165,0.18),rgba(219,100,0,0.16))] md:left-4" />
              <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(114,142,165,0.24)] bg-[linear-gradient(180deg,rgba(248,238,224,0.94),rgba(230,238,244,0.88))] text-[var(--dusty-blue)] md:left-0">
                {icons[index] ? (() => {
                  const Icon = icons[index];
                  return <Icon />;
                })() : null}
              </div>
              <div className="md:pl-14">
                <p className="section-label text-[var(--dusty-blue)]">{item.time}</p>
              </div>
              <div className="md:pl-6">
                <h3 className="mt-5 text-[2rem] leading-[0.95] text-[var(--text-primary)] md:mt-0">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-base text-[var(--text-secondary)]">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
