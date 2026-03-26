import Link from 'next/link';

import { EventDetails } from '@/components/marketing/EventDetails';
import { Footer } from '@/components/marketing/Footer';
import { Gifts } from '@/components/marketing/Gifts';
import { Hero } from '@/components/marketing/Hero';
import { Story } from '@/components/marketing/Story';
import { eventContent } from '@/lib/content/wedding-content';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Story stories={eventContent.story} />
      <EventDetails details={eventContent.details} />
      <Gifts gifts={eventContent.gifts} />
      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-surface)] px-6 py-5 shadow-[var(--shadow-soft)] backdrop-blur sm:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Base del proyecto</p>
            <p className="mt-2 max-w-xl text-sm text-[var(--color-muted)]">
              Esta primera iteracion deja lista la estructura tecnica y visual para la landing y la
              invitacion personalizada.
            </p>
          </div>
          <Link
            className="rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            href="/lookbook"
          >
            Ver lookbook
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
