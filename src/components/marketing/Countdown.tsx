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
    <section className="relative flex min-h-screen min-h-[100dvh] items-center overflow-hidden bg-[linear-gradient(180deg,#f7f0e7,#f4ece1)] px-4 py-4 text-[var(--color-deep-brown)] sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,223,192,0.72),transparent_26%),radial-gradient(circle_at_16%_28%,rgba(219,100,0,0.06),transparent_20%),radial-gradient(circle_at_84%_20%,rgba(166,187,200,0.1),transparent_24%),radial-gradient(circle_at_bottom,rgba(246,223,192,0.36),transparent_28%)]" />
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[28px] border border-[rgba(216,195,168,0.24)] bg-[linear-gradient(180deg,rgba(252,247,241,0.94),rgba(246,239,233,0.94))] px-4 py-5 shadow-[0_20px_48px_rgba(184,151,119,0.12)] backdrop-blur-sm sm:rounded-[32px] sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute inset-[8px] rounded-[22px] border border-[rgba(216,195,168,0.2)] sm:inset-[10px] sm:rounded-[24px]" />
          <div className="pointer-events-none absolute inset-[16px] rounded-[18px] border border-[rgba(216,195,168,0.14)] sm:inset-[20px] sm:rounded-[20px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,223,192,0.38),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(166,187,200,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.04))]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle_at_1px_1px,rgba(140,122,107,0.5)_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="pointer-events-none absolute -bottom-8 left-6 h-24 w-32 rounded-full bg-[rgba(219,100,0,0.06)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-8 right-6 h-24 w-32 rounded-full bg-[rgba(166,187,200,0.08)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-3 -left-3 opacity-[0.42] sm:-bottom-4 sm:-left-4 sm:opacity-[0.58]">
            <Image
              alt=""
              aria-hidden="true"
              className="h-16 w-16 object-contain sm:h-32 sm:w-32"
              height={128}
              src="/ornaments/bottom-left.png"
              width={128}
            />
          </div>
          <div className="pointer-events-none absolute -bottom-3 -right-3 opacity-[0.42] sm:-bottom-4 sm:-right-4 sm:opacity-[0.58]">
            <Image
              alt=""
              aria-hidden="true"
              className="h-16 w-16 object-contain sm:h-32 sm:w-32"
              height={128}
              src="/ornaments/bottom-right.png"
              width={128}
            />
          </div>
          <div className="pointer-events-none absolute left-4 top-4 hidden text-[rgba(191,93,57,0.34)] sm:block">
            <Image alt="" aria-hidden="true" className="h-[4.5rem] w-[4.5rem]" height={72} src="/ornaments/countdown-corner.svg" width={72} />
          </div>
          <div className="pointer-events-none absolute right-4 top-4 hidden text-[rgba(191,93,57,0.34)] [transform:scaleX(-1)] sm:block">
            <Image alt="" aria-hidden="true" className="h-[4.5rem] w-[4.5rem]" height={72} src="/ornaments/countdown-corner.svg" width={72} />
          </div>

          <div className="relative text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[rgba(191,93,57,0.82)] sm:text-[11px] sm:tracking-[0.32em]">
              {eyebrow}
            </p>

            <div className="mt-2 flex items-center justify-center sm:mt-4">
              <div className="text-[rgba(140,122,107,0.58)]">
                <Image alt="" aria-hidden="true" className="h-5 w-[7.5rem] sm:h-8 sm:w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
              </div>
            </div>

            <h2
              className="mt-3 text-[1.5rem] leading-[1.02] text-[var(--color-deep-brown)] sm:mt-6 sm:text-[2.8rem]"
              style={{
                textShadow:
                  '0 0 1px rgba(255,248,242,0.32), 0 8px 20px rgba(140,122,107,0.06)',
              }}
            >
              {title}
            </h2>

            <p
              className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[rgba(42,30,26,0.72)] sm:mt-4 sm:text-[12px] sm:tracking-[0.24em]"
              style={{ textShadow: '0 0 10px rgba(255,244,236,0.04)' }}
            >
              {note}
            </p>
          </div>

          <div className="relative mt-5 overflow-hidden rounded-[20px] border border-[rgba(216,195,168,0.16)] bg-[linear-gradient(180deg,rgba(251,247,241,0.72),rgba(241,231,216,0.5))] shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_10px_24px_rgba(184,151,119,0.06)] sm:mt-10 sm:rounded-[26px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_40%),linear-gradient(90deg,rgba(246,223,192,0.08),transparent_34%,rgba(166,187,200,0.08))]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center sm:flex">
              <div className="text-[rgba(140,122,107,0.34)]">
                <Image alt="" aria-hidden="true" className="h-8 w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
              </div>
            </div>
            <div className="relative grid grid-cols-2 sm:grid-cols-4">
              {metrics.map((item, index) => (
                <div
                  className={[
                    'flex min-h-[6.35rem] flex-col items-center justify-center px-3 py-4 text-center sm:min-h-[11rem] sm:px-6 sm:py-10',
                    index < 2 ? 'border-b border-[rgba(216,195,168,0.14)] sm:border-b-0' : '',
                    index !== metrics.length - 1 ? 'sm:border-r sm:border-[rgba(216,195,168,0.18)]' : '',
                  ].join(' ')}
                  key={item.label}
                >
                  <span
                    className="font-[family-name:var(--font-heading)] text-[3.15rem] leading-none tracking-[-0.05em] text-[var(--color-terracotta-soft)] sm:text-[5.6rem]"
                    style={{
                      textShadow:
                        '0 0 1px rgba(255,245,238,0.3), 0 0 14px rgba(219,100,0,0.08), 0 10px 24px rgba(184,151,119,0.08)',
                    }}
                  >
                    {item.value}
                  </span>
                  <span className="mt-1.5 text-[8px] uppercase tracking-[0.22em] text-[rgba(114,142,165,0.84)] sm:mt-3 sm:text-[11px] sm:tracking-[0.28em]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-3 sm:mt-8">
            <div className="text-[rgba(140,122,107,0.42)]">
              <Image alt="" aria-hidden="true" className="h-5 w-[7.5rem] sm:h-8 sm:w-[10.5rem]" height={32} src="/ornaments/countdown-flourish.svg" width={168} />
            </div>
          </div>

          <p className="mt-6 hidden text-center text-sm tracking-[0.08em] text-[rgba(114,142,165,0.8)] sm:block sm:text-[15px]">
            La Victoria Eventos · Zapopan, Jalisco
          </p>
        </div>
      </div>
    </section>
  );
}
