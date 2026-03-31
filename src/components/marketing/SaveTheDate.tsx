import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type SaveTheDateCard = {
  label: string;
  value: string;
};

type SaveTheDateProps = {
  title?: string;
  hashtag?: string;
  meta?: string;
  cards?: ReadonlyArray<SaveTheDateCard>;
};

export function SaveTheDate({
  title = eventContent.saveTheDate.title,
  hashtag = eventContent.saveTheDate.hashtag,
  meta = eventContent.saveTheDate.meta,
  cards = eventContent.saveTheDate.cards,
}: SaveTheDateProps) {
  return (
    <Section className="pt-0">
      <div className="mx-auto max-w-5xl border-t border-[rgba(47,47,47,0.1)] pt-12">
        <div className="fade-up text-center">
          <h2 className="text-center text-[var(--text-primary)]">
            {title}
          </h2>
          <p className="mt-2 text-center text-sm text-[color:rgba(43,43,43,0.6)]">{hashtag}</p>
          <p className="mt-3 text-center text-lg font-semibold text-[var(--text-primary)] md:text-xl">{meta}</p>
        </div>
        <div className="fade-up-delay-1 mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              className="rounded-2xl border border-[rgba(198,93,59,0.1)] bg-[rgba(255,255,255,0.6)] p-6 text-center shadow-[var(--shadow-soft)] backdrop-blur-[12px]"
              key={card.label}
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[color:rgba(47,47,47,0.6)]">
                {card.label}
              </p>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-xl text-[var(--text-primary)]">
                {card.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-[rgba(47,47,47,0.1)]" />
      </div>
    </Section>
  );
}
