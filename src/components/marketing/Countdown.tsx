'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { eventContent } from '@/lib/content/wedding-content';

type CountdownProps = {
  eyebrow?: string;
  title?: string;
  note?: string;
  targetDateTime?: string;
};

type CountdownState = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};

function getCountdownParts(targetDateTime: string): CountdownState {
  const target = new Date(targetDateTime).getTime();
  const diff = target - Date.now();

  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isComplete: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
    isComplete: false,
  };
}

export function Countdown({
  eyebrow = eventContent.countdown.eyebrow,
  title = eventContent.countdown.title,
  note = eventContent.countdown.note,
  targetDateTime = eventContent.countdown.targetDateTime,
}: CountdownProps) {
  const [countdown, setCountdown] = useState<CountdownState | null>(null);

  useEffect(() => {
    const update = () => {
      setCountdown(getCountdownParts(targetDateTime));
    };

    update();
    const intervalId = window.setInterval(update, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDateTime]);

  const metrics = [
    { label: 'Días', value: countdown?.days ?? '--' },
    { label: 'Horas', value: countdown?.hours ?? '--' },
    { label: 'Minutos', value: countdown?.minutes ?? '--' },
    { label: 'Segundos', value: countdown?.seconds ?? '--' },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(241,231,216,0.98),rgba(246,239,233,0.98))] px-5 py-16 text-[var(--color-deep-brown)] sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(190,75,3,0.14),transparent_24%),radial-gradient(circle_at_14%_26%,rgba(219,100,0,0.09),transparent_18%),radial-gradient(circle_at_82%_20%,rgba(114,142,165,0.15),transparent_24%),radial-gradient(circle_at_bottom,rgba(166,187,200,0.12),transparent_28%)]" />
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] border border-[rgba(114,142,165,0.14)] bg-[linear-gradient(180deg,rgba(246,239,233,0.94),rgba(241,231,216,0.92))] px-6 py-10 shadow-[0_18px_48px_rgba(87,67,57,0.12)] backdrop-blur-sm sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-[10px] rounded-[24px] border border-[rgba(114,142,165,0.1)]" />
          <div className="pointer-events-none absolute inset-[20px] rounded-[20px] border border-[rgba(190,75,3,0.1)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(219,100,0,0.12),transparent_24%),radial-gradient(circle_at_80%_18%,rgba(114,142,165,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(190,75,3,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,rgba(114,142,165,0.65)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="pointer-events-none absolute -bottom-8 left-6 h-24 w-32 rounded-full bg-[rgba(219,100,0,0.1)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 right-6 h-24 w-32 rounded-full bg-[rgba(114,142,165,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute left-4 top-4 hidden text-[rgba(190,75,3,0.45)] sm:block">
            <Image alt="" aria-hidden="true" className="h-[4.5rem] w-[4.5rem]" height={72} src="/ornaments/countdown-corner.svg" width={72} />
          </div>
          <div className="pointer-events-none absolute right-4 top-4 hidden text-[rgba(190,75,3,0.45)] [transform:scaleX(-1)] sm:block">
            <Image alt="" aria-hidden="true" className="h-[4.5rem] w-[4.5rem]" height={72} src="/ornaments/countdown-corner.svg" width={72} />
          </div>

          <div className="relative text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[rgba(190,75,3,0.78)]">
              {eyebrow}
            </p>

            <div className="mt-4 flex items-center justify-center">
              <div className="text-[rgba(219,100,0,0.62)]">
                <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
              </div>
            </div>

            <h2
              className="mt-6 text-[1.95rem] leading-tight text-[var(--color-deep-brown)] sm:text-[2.8rem]"
              style={{
                textShadow:
                  '0 0 1px rgba(255,248,242,0.45), 0 0 18px rgba(219,100,0,0.08), 0 10px 24px rgba(87,67,57,0.08)',
              }}
            >
              {title}
            </h2>

            <p
              className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[rgba(42,30,26,0.78)] sm:text-[12px]"
              style={{ textShadow: '0 0 14px rgba(255,244,236,0.06)' }}
            >
              {note}
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[26px] border border-[rgba(114,142,165,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(166,187,200,0.14))] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_10px_24px_rgba(87,67,57,0.05)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_38%),linear-gradient(90deg,rgba(190,75,3,0.08),transparent_34%,rgba(114,142,165,0.08))]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center sm:flex">
              <div className="text-[rgba(190,75,3,0.4)]">
                <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
              </div>
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-4">
              {metrics.map((item, index) => (
                <div
                  className={[
                    'flex min-h-[9.5rem] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[11rem] sm:px-6 sm:py-10',
                    index < 2 ? 'border-b border-[rgba(114,142,165,0.12)] sm:border-b-0' : '',
                    index !== metrics.length - 1 ? 'sm:border-r sm:border-[rgba(114,142,165,0.18)]' : '',
                  ].join(' ')}
                  key={item.label}
                >
                  <span
                    className="font-[family-name:var(--font-heading)] text-[4.2rem] leading-none tracking-[-0.05em] text-[var(--color-terracotta)] sm:text-[5.6rem]"
                    style={{
                      textShadow:
                        '0 0 1px rgba(255,245,238,0.4), 0 0 18px rgba(219,100,0,0.12), 0 12px 30px rgba(87,67,57,0.1)',
                    }}
                  >
                    {item.value}
                  </span>
                  <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(114,142,165,0.92)] sm:text-[11px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="text-[rgba(219,100,0,0.56)]">
              <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
            </div>
          </div>

          <p className="mt-6 text-center text-sm tracking-[0.08em] text-[rgba(114,142,165,0.86)] sm:text-[15px]">
            La Victoria Eventos · Zapopan, Jalisco
          </p>
        </div>
      </div>
    </section>
  );
}
