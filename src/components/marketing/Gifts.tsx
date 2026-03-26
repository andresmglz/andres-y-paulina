import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

type GiftItem = {
  label: string;
  href: string;
};

type GiftsContent = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ReadonlyArray<GiftItem>;
};

type GiftsProps = {
  gifts: GiftsContent;
};

export function Gifts({ gifts }: GiftsProps) {
  return (
    <Section
      eyebrow={gifts.eyebrow}
      title={gifts.title}
      description={gifts.description}
    >
      <Card className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-base leading-7 text-[var(--color-muted)]">
            Tu presencia es lo mas importante. Esta seccion solo deja preparada la estructura para
            que luego puedan completar enlaces reales sin redisenar la pagina.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {gifts.actions.map((gift) => (
            <Button href={gift.href} key={gift.label} variant="secondary">
              {gift.label}
            </Button>
          ))}
        </div>
      </Card>
    </Section>
  );
}
