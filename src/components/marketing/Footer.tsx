import { eventContent } from '@/lib/content/wedding-content';

export function Footer() {
  return (
    <footer className="px-6 pb-12 pt-4 md:px-10">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-8 shadow-[var(--shadow-soft)]">
        <p className="font-[family-name:var(--font-heading)] text-3xl text-[var(--color-ink)]">
          {eventContent.footer.quote}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
          {eventContent.footer.note}
        </p>
      </div>
    </footer>
  );
}
