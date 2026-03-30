import { eventContent } from '@/lib/content/wedding-content';

type InterludeProps = {
  eyebrow?: string;
  quote?: string;
  note?: string;
};

export function Interlude({
  eyebrow = eventContent.interlude.eyebrow,
  quote = eventContent.interlude.quote,
  note = eventContent.interlude.note,
}: InterludeProps) {
  return (
    <section className="bg-[var(--text-primary)] px-6 py-[120px] text-white md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-[12px] uppercase tracking-[0.2em] text-white/55">{eyebrow}</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-[clamp(2.75rem,5vw,4.75rem)] leading-[1.05] text-white">
          {quote}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-white/72 md:text-lg">{note}</p>
      </div>
    </section>
  );
}
