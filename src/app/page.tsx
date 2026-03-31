import { Countdown } from '@/components/marketing/Countdown';
import { EventDetails } from '@/components/marketing/EventDetails';
import { Faq } from '@/components/marketing/Faq';
import { Footer } from '@/components/marketing/Footer';
import { Gifts } from '@/components/marketing/Gifts';
import { Hero } from '@/components/marketing/Hero';
import { Timeline } from '@/components/marketing/Timeline';
import { Verse } from '@/components/marketing/Verse';

export default function HomePage() {
  return (
    <main className="page-shell overflow-hidden bg-[var(--bg-deep)]">
      <Hero />
      <Countdown />
      <Verse />
      <EventDetails />
      <Timeline />
      <Gifts />
      <Faq />
      <Footer />
    </main>
  );
}
