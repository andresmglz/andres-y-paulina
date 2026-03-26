import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';

type StoryItem = {
  title: string;
  description: string;
};

type StoryProps = {
  stories: ReadonlyArray<StoryItem>;
};

export function Story({ stories }: StoryProps) {
  return (
    <Section
      eyebrow="Nuestra historia"
      title="Una base para contar la boda con calma y claridad"
      description="Estas tarjetas sirven como plantilla para la narrativa editorial de la landing."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {stories.map((story) => (
          <Card className="min-h-52" key={story.title}>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">Momento</p>
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-3xl text-[var(--color-ink)]">
              {story.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{story.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
