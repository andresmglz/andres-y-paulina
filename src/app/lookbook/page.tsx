import { Footer } from '@/components/marketing/Footer';
import { Gallery } from '@/components/marketing/Gallery';
import { EventDetails } from '@/components/marketing/EventDetails';
import { Gifts } from '@/components/marketing/Gifts';
import { Hero } from '@/components/marketing/Hero';
import { InvitationFlow } from '@/components/marketing/InvitationFlow';
import { Story } from '@/components/marketing/Story';
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
            Revision interna de primitives, superficies y estados base para la UI del proyecto.
          </p>
        </div>
      </section>

      <Hero
        eyebrow="Lookbook"
        title="Sistema base"
        intro="Revision interna de la landing publica despues del paso de fundaciones y del aterrizaje editorial."
        primaryCtaLabel="Ir a primitives"
        primaryCtaHref="#primitives"
        secondaryCtaLabel="Ver detalles"
        secondaryCtaHref="#primitives"
      />

      <Section
        id="primitives"
        eyebrow="Primitives"
        title="Sistema base"
        description="Estados iniciales para revisar tipografia, superficies y componentes reutilizables."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-6">
            <Stack gap="sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Botones</p>
              <div className="flex flex-wrap gap-3">
                <Button href="#">Confirmar asistencia</Button>
                <Button href="#" variant="secondary">
                  Ver ubicacion
                </Button>
              </div>
            </Stack>
            <Stack gap="sm">
              <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Texto base</p>
              <p className="text-base leading-7 text-[var(--color-muted)]">
                La experiencia busca una sensacion editorial, calida y ligera desde la primera carga.
              </p>
            </Stack>
          </Card>
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Resumen de invitacion</p>
            <h3 className="font-[family-name:var(--font-heading)] text-4xl text-[var(--color-ink)]">Andres Moreno</h3>
            <p className="text-sm text-[var(--color-muted)]">2 lugares reservados · Menu adulto · Mesa principal</p>
          </Card>
        </div>
      </Section>

      <Story stories={eventContent.story.slice(0, 2)} />
      <EventDetails details={eventContent.details} />
      <Gallery items={eventContent.gallery.slice(0, 2)} />
      <InvitationFlow />
      <Gifts gifts={eventContent.gifts} />
      <Footer />
    </main>
  );
}
