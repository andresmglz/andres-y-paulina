import { EventDetails } from '@/components/marketing/EventDetails';
import { Footer } from '@/components/marketing/Footer';
import { Gallery } from '@/components/marketing/Gallery';
import { Gifts } from '@/components/marketing/Gifts';
import { Hero } from '@/components/marketing/Hero';
import { InvitationFlow } from '@/components/marketing/InvitationFlow';
import { Story } from '@/components/marketing/Story';
import { eventContent } from '@/lib/content/wedding-content';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Story stories={eventContent.story} />
      <EventDetails details={eventContent.details} />
      <Gallery items={eventContent.gallery} />
      <Gifts gifts={eventContent.gifts} />
      <InvitationFlow />
      <Footer />
    </main>
  );
}
