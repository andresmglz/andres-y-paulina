import Image from 'next/image';

import { Button } from '@/components/ui/Button';
import { eventContent } from '@/lib/content/wedding-content';

type GiftItem = {
  label: string;
  description: string;
  status: string;
  href?: string;
};

type GiftsContent = {
  eyebrow: string;
  title: string;
  description: string;
  helperText: string;
  options: ReadonlyArray<GiftItem>;
};

type GiftsProps = {
  gifts?: GiftsContent;
};

export function Gifts({ gifts = eventContent.gifts }: GiftsProps) {
  return (
    <section className="px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto w-full overflow-hidden rounded-[2.6rem] border border-[rgba(246,223,192,0.12)] bg-[radial-gradient(circle_at_top_right,rgba(166,187,200,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(219,100,0,0.1),transparent_28%),linear-gradient(180deg,#201612,#140f0d)] px-6 py-10 text-white shadow-[var(--shadow-panel)] md:px-10 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label text-[rgba(182,204,219,0.86)]">{gifts.eyebrow}</p>
              <h2 className="mt-4 text-white">{gifts.title}</h2>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-[1.15rem]">
                {gifts.description}
              </p>
              <div className="paper-divider mx-auto mt-8 max-w-sm opacity-30" />
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/78 md:text-[1.08rem]">
                {gifts.helperText}
              </p>
            </div>

            <div className="relative mx-auto hidden h-[15rem] w-[12rem] overflow-hidden rounded-[1.6rem] bg-black/40 lg:block">
              <Image
                alt="Andrés y Paulina en un retrato editorial"
                className="object-cover"
                fill
                sizes="192px"
                src="/images/couple/gallery-02.jpg"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-4 border-t border-white/10 pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="grid gap-4 md:grid-cols-3">
              {gifts.options.map((gift) => (
                <div
                  className="rounded-[1.6rem] border border-[rgba(182,204,219,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(111,143,166,0.04))] px-5 py-5 text-left"
                  key={gift.label}
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(166,187,200,0.92)]">
                    {gift.status}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[1.9rem] leading-[0.95] text-white">
                    {gift.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72">{gift.description}</p>
                  {gift.href ? (
                    <div className="mt-5">
                      <Button href={gift.href} variant="heroEditorial">
                        Abrir opción
                      </Button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-[rgba(166,187,200,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(114,142,165,0.1))] px-5 py-5">
              <div className="grid gap-5 md:grid-cols-[120px_1fr] md:items-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center border border-white/16 bg-[var(--surface-paper)] px-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--text-primary)] shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  QR
                  <br />
                  próximamente
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(182,204,219,0.86)]">
                    Acceso rápido
                  </p>
                  <p className="mt-3 text-base leading-8 text-white/74">
                    Este bloque mostrará el acceso más directo cuando quede listo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
