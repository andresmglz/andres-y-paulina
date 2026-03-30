import { Button } from '@/components/ui/Button';

export function FloatingRsvp() {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <Button href="#rsvp" variant="floating">
        Ver RSVP
      </Button>
    </div>
  );
}
