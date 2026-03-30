import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type RecommendationItem = {
  title: string;
  description: string;
  meta: string;
};

type RecommendationsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  note?: string;
  items?: ReadonlyArray<RecommendationItem>;
};

export function Recommendations({
  eyebrow = eventContent.recommendations.eyebrow,
  title = eventContent.recommendations.title,
  description = eventContent.recommendations.description,
  note = eventContent.recommendations.note,
  items = eventContent.recommendations.items,
}: RecommendationsProps) {
  return (
    <Section
      id="recommendations"
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              className="paper-panel rounded-[1.9rem] px-6 py-6"
              key={`${item.meta}-${item.title}`}
            >
              <p className="section-label text-[var(--terracotta-dark)]">{item.meta}</p>
              <h3 className="mt-4 text-[2rem] leading-[0.96] text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-4 text-base text-[var(--text-secondary)]">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="paper-panel flex flex-col justify-between rounded-[2.1rem] px-6 py-7 md:px-8">
          <div>
            <p className="section-label text-[var(--terracotta)]">Resumen</p>
            <h3 className="mt-4 text-[2.35rem] leading-[0.96] text-[var(--text-primary)]">
              Lo esencial antes del evento
            </h3>
            <p className="mt-5 text-base text-[var(--text-secondary)]">{note}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
