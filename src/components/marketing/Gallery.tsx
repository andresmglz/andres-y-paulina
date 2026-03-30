import Image from 'next/image';

import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { eventContent } from '@/lib/content/wedding-content';

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type GalleryProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: ReadonlyArray<GalleryItem>;
};

export function Gallery({
  eyebrow = eventContent.gallery.eyebrow,
  title = eventContent.gallery.title,
  description = eventContent.gallery.description,
  items = eventContent.gallery.items,
}: GalleryProps) {
  const sizeClassMap = [
    'h-[30rem]',
    'h-[18rem]',
    'h-[24rem]',
    'h-[20rem]',
  ] as const;

  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      <div className="gallery md:columns-2 md:gap-5">
        {items.map((item, index) => (
          <Card
            className="gallery-item image-card group mb-5 overflow-hidden border-none p-0 shadow-[0_18px_45px_rgba(61,36,28,0.1)] break-inside-avoid"
            key={item.title}
          >
            <div className={`relative ${sizeClassMap[index % sizeClassMap.length]}`}>
              <Image
                alt={item.alt}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                fill
                sizes="(min-width: 768px) 46vw, 100vw"
                src={item.src}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,13,0.02),rgba(18,14,13,0.12)_30%,rgba(0,0,0,0.72))]" />
              <div className="overlay absolute inset-x-4 bottom-4 rounded-[18px] border border-white/14 bg-[rgba(0,0,0,0.28)] p-4 backdrop-blur-[10px]">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/65">Atmosfera</p>
                <h3 className="mt-2 text-[1.8rem] leading-tight text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.45)]">
                  {item.title}
                </h3>
                {index === 0 ? (
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/84">{item.description}</p>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
