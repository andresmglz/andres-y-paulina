import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ReadonlyArray<FaqItem>;
};

export function Faq({
  eyebrow = eventContent.faq.eyebrow,
  title = eventContent.faq.title,
  description = eventContent.faq.description,
  items = eventContent.faq.items,
}: FaqProps) {
  return (
    <Section
      id="faq"
      eyebrow={eyebrow}
      title={title}
      description={description}
      surface="plain"
      headerClassName="mx-auto"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <div className="rounded-[1.8rem] border border-[rgba(114,142,165,0.16)] bg-[linear-gradient(180deg,rgba(248,238,224,0.96),rgba(241,231,216,0.92))] px-6 py-6 text-left shadow-[0_14px_36px_rgba(35,25,20,0.05)]" key={item.question}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--dusty-blue)]">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="mt-4 text-[2rem] leading-[0.96] text-[var(--text-primary)]">{item.question}</h3>
            <p className="mt-4 text-base text-[var(--text-secondary)]">{item.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
