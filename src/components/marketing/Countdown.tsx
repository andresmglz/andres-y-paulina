'use client';

import { useEffect, useState } from 'react';

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
    <section className="relative z-10 px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="section-stage rounded-[2.4rem] px-6 py-8 md:px-8 md:py-9">
          <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="text-center lg:text-left">
              <p className="section-label text-[var(--terracotta)]">{eyebrow}</p>
              <h2 className="mt-3 text-[clamp(2rem,3vw,2.6rem)] leading-[0.95] text-[var(--text-primary)]">{title}</h2>
              <p className="mt-4 max-w-xl text-sm text-[var(--text-secondary)] md:text-base">{note}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  className="rounded-[1.2rem] border border-[rgba(200,101,67,0.1)] bg-[rgba(255,251,247,0.52)] px-4 py-4 text-center"
                  key={metric.label}
                >
                  <p className="font-[family-name:var(--font-heading)] text-[clamp(2.1rem,4vw,3rem)] leading-none text-[var(--terracotta-dark)]">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[var(--text-secondary)]">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="paper-divider mt-6" />
          <p className="mt-5 text-center text-[11px] uppercase tracking-[0.28em] text-[var(--text-secondary)]">
            22 noviembre 2026 · La Victoria Eventos · Zapopan, Jalisco
          </p>
        </div>
      </div>
    </section>
  );
}
