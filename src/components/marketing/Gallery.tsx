import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { clsx } from 'clsx';

type GalleryItem = {
  title: string;
  description: string;
  tone: 'warm' | 'paper' | 'accent' | 'moss';
};

type GalleryProps = {
  items: ReadonlyArray<GalleryItem>;
};

const toneClassMap: Record<GalleryItem['tone'], string> = {
  warm: 'bg-[linear-gradient(160deg,rgba(215,179,159,0.65),rgba(255,250,244,0.92))]',
  paper: 'bg-[linear-gradient(160deg,rgba(255,252,247,0.98),rgba(232,219,204,0.94))]',
  accent: 'bg-[linear-gradient(160deg,rgba(185,144,88,0.45),rgba(255,248,239,0.96))]',
  moss: 'bg-[linear-gradient(160deg,rgba(81,96,77,0.55),rgba(247,242,235,0.94))]',
};

export function Gallery({ items }: GalleryProps) {
  return (
    <Section
      eyebrow="Momentos"
      title="Una galeria ligera mientras llegan las imagenes finales"
      description="Por ahora esta seccion funciona como placeholder editorial para ritmo y atmosfera, sin depender de multimedia definitiva."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <Card className="overflow-hidden p-0" key={item.title}>
            <div className={clsx('min-h-64 p-6 md:p-8', toneClassMap[item.tone], index % 3 === 0 && 'md:min-h-80')}>
              <div className="flex h-full flex-col justify-end rounded-[1.5rem] border border-white/35 bg-white/25 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-muted)]">Atmósfera</p>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-3xl text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
