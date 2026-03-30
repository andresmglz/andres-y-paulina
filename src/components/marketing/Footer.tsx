import { eventContent } from '@/lib/content/wedding-content';

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
      <div className="mx-auto flex min-h-[48svh] max-w-6xl items-center justify-center">
        <div className="w-full max-w-5xl text-center">
          <div className="paper-divider mx-auto max-w-xs opacity-60" />
          <p className="mt-10 font-[family-name:var(--font-heading)] text-[clamp(2.5rem,4vw,3.8rem)] leading-[0.98] text-[var(--surface-paper)]">
            {eventContent.footer.quote}
          </p>
          {eventContent.footer.note ? (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[rgba(255,247,240,0.68)]">
              {eventContent.footer.note}
            </p>
          ) : null}
          <p className="mt-8 text-[11px] uppercase tracking-[0.32em] text-[var(--terracotta-soft)]">
            22 noviembre 2026 · Zapopan, Jalisco
          </p>
        </div>
      </div>
    </footer>
  );
}
