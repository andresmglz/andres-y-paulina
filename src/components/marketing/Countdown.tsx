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
    <section className="relative bg-[var(--color-espresso)] px-5 py-16 text-[var(--color-ivory)] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[32px] border border-[rgba(244,237,230,0.12)] bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-[10px] rounded-[24px] border border-[rgba(244,237,230,0.08)]" />
          <div className="pointer-events-none absolute inset-[20px] rounded-[20px] border border-[rgba(191,93,57,0.08)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,120,88,0.1),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(111,143,166,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(111,143,166,0.08),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,rgba(244,237,230,0.8)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="pointer-events-none absolute -bottom-8 left-6 h-24 w-32 rounded-full bg-[rgba(201,120,88,0.08)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 right-6 h-24 w-32 rounded-full bg-[rgba(111,143,166,0.08)] blur-3xl" />
          <div className="pointer-events-none absolute left-4 top-4 hidden text-[rgba(216,195,168,0.72)] sm:block">
            <Image alt="" aria-hidden="true" className="h-[4.5rem] w-[4.5rem]" height={72} src="/ornaments/countdown-corner.svg" width={72} />
          </div>
          <div className="pointer-events-none absolute right-4 top-4 hidden text-[rgba(216,195,168,0.72)] [transform:scaleX(-1)] sm:block">
            <Image alt="" aria-hidden="true" className="h-[4.5rem] w-[4.5rem]" height={72} src="/ornaments/countdown-corner.svg" width={72} />
          </div>

          <div className="relative text-center">
            <p className="text-[11px] uppercase tracking-[0.32em] text-[rgba(210,214,221,0.78)]">
              {eyebrow}
            </p>

            <div className="mt-4 flex items-center justify-center">
              <div className="text-[rgba(216,195,168,0.78)]">
                <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
              </div>
            </div>

            <h2
              className="mt-6 text-[1.95rem] leading-tight text-[#f0ddd0] sm:text-[2.8rem]"
              style={{
                textShadow:
                  '0 0 1px rgba(255,248,242,0.7), 0 0 18px rgba(235,193,167,0.12), 0 10px 26px rgba(0,0,0,0.14)',
              }}
            >
              {title}
            </h2>

            <p
              className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#eadfd3]/88 sm:text-[12px]"
              style={{ textShadow: '0 0 14px rgba(255,244,236,0.08)' }}
            >
              {note}
            </p>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[26px] border border-[rgba(244,237,230,0.09)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(111,143,166,0.065))] shadow-[inset_0_1px_0_rgba(244,237,230,0.06)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,237,230,0.06),transparent_36%),linear-gradient(90deg,rgba(191,93,57,0.04),transparent_32%,rgba(111,143,166,0.05))]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center sm:flex">
              <div className="text-[rgba(216,195,168,0.72)]">
                <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
              </div>
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-4">
              {metrics.map((item, index) => (
                <div
                  className={[
                    'flex min-h-[9.5rem] flex-col items-center justify-center px-4 py-8 text-center sm:min-h-[11rem] sm:px-6 sm:py-10',
                    index < 2 ? 'border-b border-[rgba(244,237,230,0.08)] sm:border-b-0' : '',
                    index !== metrics.length - 1 ? 'sm:border-r sm:border-[rgba(136,159,176,0.18)]' : '',
                  ].join(' ')}
                  key={item.label}
                >
                  <span
                    className="font-[family-name:var(--font-heading)] text-[4.2rem] leading-none tracking-[-0.05em] text-[#f0ddd0] sm:text-[5.6rem]"
                    style={{
                      textShadow:
                        '0 0 1px rgba(255,248,242,0.76), 0 0 18px rgba(235,193,167,0.12), 0 12px 30px rgba(0,0,0,0.16)',
                    }}
                  >
                    {item.value}
                  </span>
                  <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[rgba(136,159,176,0.92)] sm:text-[11px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="text-[rgba(216,195,168,0.78)]">
              <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
            </div>
          </div>

          <p className="mt-6 text-center text-sm tracking-[0.08em] text-[rgba(136,159,176,0.76)] sm:text-[15px]">
            La Victoria Eventos · Zapopan, Jalisco
          </p>
        </div>
      </div>
    </section>
  );
}
