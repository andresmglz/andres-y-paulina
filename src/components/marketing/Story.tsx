import Image from 'next/image';

import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type StoryItem = {
  title: string;
  description: string;
};

type StoryProps = {
  eyebrow?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  stories?: ReadonlyArray<StoryItem>;
};

export function Story({
  eyebrow = eventContent.story.eyebrow,
  title = eventContent.story.title,
  imageSrc = eventContent.story.image.src,
  imageAlt = eventContent.story.image.alt,
  stories = eventContent.story.moments,
}: StoryProps) {
  return (
    <Section
      className="pt-6"
      eyebrow={eyebrow}
      id="story"
      title={title}
    >
      <div className="story-section grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] shadow-[var(--shadow-soft)]">
          <Image
            alt={imageAlt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            src={imageSrc}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,24,21,0.02),rgba(32,24,21,0.28))]" />
        </div>
        <div className="grid gap-8">
          {stories.map((story, index) => (
            <div
              className="border-b border-[rgba(198,93,59,0.12)] pb-8 last:border-b-0 last:pb-0 even:md:ml-10"
              key={story.title}
            >
              <p className="section-label">
                Momento {index + 1}
              </p>
              <h3 className="mt-3 text-[2rem] text-[var(--text-primary)]">
                {story.title}
              </h3>
              <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)]">{story.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
