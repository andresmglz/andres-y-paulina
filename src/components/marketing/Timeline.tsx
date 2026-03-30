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

export function Timeline({
  eyebrow = eventContent.timeline.eyebrow,
  title = eventContent.timeline.title,
  description = eventContent.timeline.description,
  items = eventContent.timeline.items,
}: TimelineProps) {
  return (
    <Section
      id="timeline"
      eyebrow={eyebrow}
      title={title}
      description={description}
      surface="plain"
      headerClassName="mx-auto"
    >
      <div className="rounded-[2.2rem] bg-[rgba(251,247,241,0.82)] px-6 py-8 shadow-[var(--shadow-soft)] md:px-10 md:py-10">
        <div className="relative grid gap-10 md:grid-cols-3 md:gap-8 md:before:absolute md:before:left-10 md:before:right-10 md:before:top-4 md:before:h-px md:before:bg-[rgba(200,101,67,0.36)] md:before:content-['']">
          {items.map((item) => (
            <div
              className="timeline-item relative pl-10 md:pl-0 md:pt-10"
              key={`${item.time}-${item.title}`}
            >
              <div className="absolute bottom-0 left-[8px] top-2 w-px bg-[rgba(200,101,67,0.18)] md:hidden" />
              <div className="absolute left-0 top-0.5 flex h-4 w-4 items-center justify-center rounded-full border border-[rgba(200,101,67,0.28)] bg-[var(--surface-paper)] md:left-1/2 md:top-0 md:-translate-x-1/2">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
              </div>
              <p className="section-label text-[var(--terracotta)] md:text-center">{item.time}</p>
              <h3 className="mt-4 text-[2rem] leading-[0.95] text-[var(--text-primary)] md:text-center">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-base text-[var(--text-secondary)] md:mx-auto md:text-center">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
