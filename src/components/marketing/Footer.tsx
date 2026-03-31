import { eventContent } from '@/lib/content/wedding-content';

export function Footer() {
  return (
    <footer className="px-6 pb-16 pt-10 md:px-10 md:pb-20 md:pt-12">
      <div className="mx-auto flex min-h-[48svh] max-w-6xl items-center justify-center">
        <div className="section-stage w-full max-w-5xl rounded-[2rem] px-6 py-12 text-center shadow-[0_18px_42px_rgba(87,67,57,0.08)] md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-[14px] rounded-[1.5rem] border border-[rgba(114,142,165,0.1)]" />
          <div className="paper-divider mx-auto max-w-xs opacity-80" />
          <p className="mt-10 font-[family-name:var(--font-heading)] text-[clamp(2.5rem,4vw,3.8rem)] leading-[0.98] text-[var(--color-deep-brown)] drop-shadow-[0_1px_0_rgba(255,255,255,0.18)]">
            {eventContent.footer.quote}
          </p>
          {eventContent.footer.note ? (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[rgba(140,122,107,0.92)]">
              {eventContent.footer.note}
            </p>
          ) : null}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[rgba(114,142,165,0.26)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--terracotta)]" />
            <span className="h-px w-10 bg-[rgba(219,100,0,0.22)]" />
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-[var(--dusty-blue)]">
            22 noviembre 2026 · Zapopan, Jalisco
          </p>
        </div>
      </div>
    </footer>
  );
}
