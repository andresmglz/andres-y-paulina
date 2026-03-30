import { Countdown } from '@/components/marketing/Countdown';
import { EventDetails } from '@/components/marketing/EventDetails';
import { Faq } from '@/components/marketing/Faq';
import { Footer } from '@/components/marketing/Footer';
import { FloatingRsvp } from '@/components/marketing/FloatingRsvp';
import { Gifts } from '@/components/marketing/Gifts';
import { Hero } from '@/components/marketing/Hero';
import { InvitationFlow } from '@/components/marketing/InvitationFlow';
import { Timeline } from '@/components/marketing/Timeline';
import { Verse } from '@/components/marketing/Verse';

export default function HomePage() {
  return (
    <main className="page-shell overflow-hidden bg-[var(--bg-deep)]">
      <FloatingRsvp />
      <Hero />
      <Countdown />
      <Verse />
      <EventDetails />
      <Timeline />
      <Gifts />
      <Faq />
      <InvitationFlow />
      <Footer />
    </main>
  );
}
