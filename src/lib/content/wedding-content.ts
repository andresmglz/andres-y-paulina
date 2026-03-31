import { eventConfig } from '@/lib/config/event';
import { weddingDetails } from '@/lib/content/wedding-details';

export const eventContent = {
  coupleLabel: weddingDetails.couple.displayName,
  hero: {
    eyebrow: '',
    title: weddingDetails.hero.title,
    badge: weddingDetails.hero.badge,
    hashtag: weddingDetails.event.hashtag,
    intro: weddingDetails.hero.intro,
    primaryCta: {
      label: weddingDetails.hero.primaryCtaLabel,
      href: weddingDetails.hero.primaryCtaHref,
    },
    secondaryCta: {
      label: weddingDetails.hero.secondaryCtaLabel,
      href: weddingDetails.hero.secondaryCtaHref,
    },
    image: {
      src: weddingDetails.assets.heroPortrait,
      alt: 'Retrato de Andrés y Abigail',
    },
    detailImage: {
      src: weddingDetails.assets.detailHands,
      alt: 'Detalle de las manos de Andrés y Abigail',
    },
  },
  saveTheDate: {
    title: weddingDetails.hero.badge,
    hashtag: weddingDetails.event.hashtag,
    meta: `${eventConfig.dateLabel} · ${eventConfig.cityLabel}`,
    cards: [
      {
        label: 'Fecha',
        value: eventConfig.dateLabel,
      },
      {
        label: 'Lugar',
        value: weddingDetails.ceremony.venue,
      },
      {
        label: 'Ciudad',
        value: eventConfig.cityLabel,
      },
    ],
  },
  story: {
    eyebrow: weddingDetails.story.eyebrow,
    title: weddingDetails.story.title,
    description: weddingDetails.story.description,
    image: {
      src: weddingDetails.assets.storyLandscape,
      alt: 'Andrés y Abigail juntos en una fotografía horizontal',
    },
    moments: weddingDetails.story.moments,
  },
  countdown: weddingDetails.countdown,
  verse: weddingDetails.verse,
  details: {
    eyebrow: 'El gran día',
    title: 'Información del evento',
    description: '',
    cards: [
      {
        title: 'Ceremonia',
        body: `${eventConfig.dateLabel} · ${eventConfig.ceremonyTime}. ${weddingDetails.ceremony.venue}. ${weddingDetails.ceremony.address}.`,
        meta: 'Momento principal',
        href: weddingDetails.ceremony.mapUrl,
        linkLabel: 'Abrir mapa',
      },
      {
        title: 'Recepción y bienvenida',
        body: `${eventConfig.receptionTime}. ${weddingDetails.reception.venue}. ${weddingDetails.reception.address}`,
        meta: 'Celebración',
        href: weddingDetails.reception.mapUrl,
        linkLabel: 'Ver ubicación',
      },
      {
        title: 'Código de vestimenta',
        body: `${weddingDetails.dressCode.label}. ${weddingDetails.dressCode.note}`,
        meta: 'Presentación',
      },
    ],
  },
  timeline: weddingDetails.timeline,
  recommendations: weddingDetails.recommendations,
  interlude: weddingDetails.interlude,
  gallery: {
    eyebrow: weddingDetails.gallery.eyebrow,
    title: weddingDetails.gallery.title,
    description: weddingDetails.gallery.description,
    items: weddingDetails.gallery.items,
  },
  gifts: {
    eyebrow: weddingDetails.gifts.eyebrow,
    title: weddingDetails.gifts.title,
    description: weddingDetails.gifts.description,
    helperText: weddingDetails.gifts.helperText,
    options: weddingDetails.gifts.options,
  },
  faq: weddingDetails.faq,
  invitationFlow: weddingDetails.invitationFlow,
  footer: weddingDetails.footer,
  styleNote: weddingDetails.hero.styleNote,
} as const;
