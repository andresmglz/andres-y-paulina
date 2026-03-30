import { Footer } from '@/components/marketing/Footer';
import { EventDetails } from '@/components/marketing/EventDetails';
import { Faq } from '@/components/marketing/Faq';
import { Gallery } from '@/components/marketing/Gallery';
import { Gifts } from '@/components/marketing/Gifts';
import { Hero } from '@/components/marketing/Hero';
import { InvitationFlow } from '@/components/marketing/InvitationFlow';
import { SaveTheDate } from '@/components/marketing/SaveTheDate';
import { Story } from '@/components/marketing/Story';
import { Timeline } from '@/components/marketing/Timeline';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Stack } from '@/components/ui/Stack';
import { eventContent } from '@/lib/content/wedding-content';

export default function LookbookPage() {
  return (
    <main className="pb-16">
      <section className="px-6 pt-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl text-[var(--color-ink)] md:text-6xl">
            Lookbook
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Revisión interna de primitives, superficies y estados base para la UI del proyecto.
          </p>
        </div>
      </section>

      <Hero
        eyebrow="Lookbook"
        title="Sistema base"
        intro="Revisión interna de la landing pública después del paso de fundaciones y del aterrizaje editorial."
        primaryCtaLabel="Ir a primitives"
        primaryCtaHref="#primitives"
        secondaryCtaLabel="Ver detalles"
        secondaryCtaHref="#primitives"
        badge="Lookbook"
        hashtag="Preview interno"
      />

      <SaveTheDate
        title="Guarda la fecha"
        hashtag="Jerarquía de referencia"
        meta="22 de noviembre del 2026 · Zapopan, Jalisco"
        cards={eventContent.saveTheDate.cards}
      />

      <Section
        id="primitives"
        eyebrow="Primitives"
        title="Sistema base"
        description="Estados iniciales para revisar tipografía, superficies y componentes reutilizables."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6">
            <Stack gap="sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Botones</p>
              <div className="flex flex-wrap gap-3">
                <Button href="#">Confirmar asistencia</Button>
                <Button href="#" variant="secondary">
                  Ver ubicación
                </Button>
              </div>
            </Stack>
            <Stack gap="sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Texto base</p>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                La experiencia busca una sensación editorial, cálida y ligera desde la primera carga.
              </p>
            </Stack>
          </Card>
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Resumen de invitación</p>
            <h3 className="font-[family-name:var(--font-heading)] text-4xl text-[var(--color-ink)]">Andrés Moreno</h3>
            <p className="text-sm text-[var(--color-muted)]">2 lugares reservados · Menú adulto · Mesa principal</p>
          </Card>
        </div>
      </Section>

      <Story stories={eventContent.story.moments.slice(0, 2)} />
      <EventDetails details={eventContent.details.cards} />
      <Timeline items={eventContent.timeline.items.slice(0, 2)} />
      <Gallery items={eventContent.gallery.items.slice(0, 2)} />
      <InvitationFlow />
      <Gifts gifts={eventContent.gifts} />
      <Faq items={eventContent.faq.items.slice(0, 2)} />
      <Footer />
    </main>
  );
}
