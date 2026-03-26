import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

type GiftItem = {
  label: string;
  href: string;
};

type GiftsProps = {
  gifts: ReadonlyArray<GiftItem>;
};

export function Gifts({ gifts }: GiftsProps) {
  return (
    <Section
      eyebrow="Mesa de regalos"
      title="Bloque base para acciones secundarias"
      description="La presencia sigue siendo el centro, pero la UI ya queda lista para integrar regalos o enlaces externos cuando toque."
    >
      <Card className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-base leading-7 text-[var(--color-muted)]">
            Tu presencia es nuestro mejor regalo. Si deseas apoyarnos de otra forma, aqui quedaran
            las acciones listas para enlazar.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {gifts.map((gift) => (
            <Button href={gift.href} key={gift.label} variant="secondary">
              {gift.label}
            </Button>
          ))}
        </div>
      </Card>
    </Section>
  );
}
