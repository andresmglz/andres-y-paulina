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
    <section className="flex min-h-screen min-h-[100dvh] items-center px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center">
        <div className="mx-auto w-full overflow-hidden rounded-[2.6rem] border border-[rgba(246,223,192,0.2)] bg-[radial-gradient(circle_at_top_right,rgba(166,187,200,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(219,100,0,0.16),transparent_26%),linear-gradient(180deg,rgba(190,75,3,0.96),rgba(143,58,16,0.98))] px-6 py-10 text-[var(--color-ivory)] shadow-[0_26px_64px_rgba(87,50,34,0.22)] md:px-10 md:py-12">
          <div className="pointer-events-none absolute -bottom-4 -left-4 hidden opacity-[0.26] lg:block">
            <Image
              alt=""
              aria-hidden="true"
              className="h-32 w-32 object-contain"
              height={128}
              src="/ornaments/bottom-corner-left.png"
              width={128}
            />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -right-4 hidden opacity-[0.22] lg:block [transform:scaleX(-1)]">
            <Image
              alt=""
              aria-hidden="true"
              className="h-32 w-32 object-contain"
              height={128}
              src="/ornaments/bottom-corner-left.png"
              width={128}
            />
          </div>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start lg:gap-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label text-[rgba(166,187,200,0.95)]">{gifts.eyebrow}</p>
              <h2 className="mt-4 text-[var(--color-ivory)]">{gifts.title}</h2>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[rgba(246,223,192,0.9)] md:text-[1.15rem]">
                {gifts.description}
              </p>
              <div className="mt-8 flex items-center justify-center">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-auto opacity-[0.6]"
                  height={24}
                  src="/ornaments/divider.png"
                  width={180}
                />
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[rgba(246,223,192,0.82)] md:text-[1.08rem]">
                {gifts.helperText}
              </p>
            </div>

            <div className="relative mx-auto hidden h-[15rem] w-[12rem] overflow-hidden rounded-[1.6rem] border border-[rgba(246,223,192,0.2)] bg-[rgba(42,30,26,0.16)] lg:block">
              <Image
                alt="Andrés y Abigail en un retrato editorial"
                className="object-cover"
                fill
                sizes="192px"
                src="/images/couple/gallery-02.jpg"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-4 border-t border-[rgba(246,223,192,0.14)] pt-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="grid gap-4 md:grid-cols-3">
              {gifts.options.map((gift) => (
                <div
                  className="rounded-[1.6rem] border border-[rgba(246,223,192,0.2)] bg-[linear-gradient(180deg,rgba(255,247,240,0.12),rgba(114,142,165,0.08))] px-5 py-5 text-left backdrop-blur-[6px]"
                  key={gift.label}
                >
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(166,187,200,0.96)]">
                    {gift.status}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-heading)] text-[1.9rem] leading-[0.95] text-[var(--color-ivory)]">
                    {gift.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(246,223,192,0.82)]">{gift.description}</p>
                  {gift.href ? (
                    <div className="mt-5">
                      <Button href={gift.href} variant="giftPanel">
                        Abrir opción
                      </Button>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-[rgba(246,223,192,0.22)] bg-[linear-gradient(180deg,rgba(255,247,240,0.12),rgba(114,142,165,0.12))] px-5 py-5">
              <div className="grid gap-5 md:grid-cols-[120px_1fr] md:items-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center border border-[rgba(246,223,192,0.28)] bg-[rgba(246,223,192,0.94)] px-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-deep-brown)] shadow-[0_18px_36px_rgba(87,50,34,0.22)]">
                  QR
                  <br />
                  próximamente
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(166,187,200,0.96)]">
                    Acceso rápido
                  </p>
                  <p className="mt-3 text-base leading-8 text-[rgba(246,223,192,0.84)]">
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
