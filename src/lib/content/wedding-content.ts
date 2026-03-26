import { eventConfig } from '@/lib/config/event';

export const eventContent = {
  coupleLabel: 'Andres & Paulina',
  hero: {
    eyebrow: `${eventConfig.dateLabel} · ${eventConfig.cityLabel}`,
    title: 'Nos casamos',
    intro:
      'Queremos celebrar un dia sereno, luminoso y muy nuestro. Esta pagina reune la historia, el ritmo del evento y la antesala de la invitacion personalizada.',
    primaryCta: {
      label: 'Ver el gran dia',
      href: '#details',
    },
    secondaryCta: {
      label: 'Como funcionara la invitacion',
      href: '#invitation-flow',
    },
    facts: [
      {
        label: 'Ceremonia',
        value: `${eventConfig.ceremonyTime} · ${eventConfig.cityLabel}`,
      },
      {
        label: 'Recepcion',
        value: `${eventConfig.receptionTime} · Lugar por confirmar`,
      },
      {
        label: 'Estilo',
        value: 'Editorial clasico, cercano y sin ruido visual',
      },
    ],
  },
  story: [
    {
      title: 'Una historia contada con calma',
      description:
        'Queremos que la pagina se sienta como una carta abierta: ligera, clara y con espacio para lo importante.',
    },
    {
      title: 'Un dia para compartir',
      description:
        'La landing publica presenta el contexto del evento y prepara la transicion hacia la invitacion personalizada que recibira cada invitado.',
    },
    {
      title: 'Detalles sin saturar',
      description:
        'La experiencia prioriza pocos bloques, bien resueltos, para que cada seccion se lea con naturalidad tanto en telefono como en desktop.',
    },
  ],
  details: [
    {
      title: 'Ceremonia',
      body: `${eventConfig.dateLabel} · ${eventConfig.ceremonyTime}. Aqui conectaremos templo, direccion y mapa cuando tengamos la informacion final.`,
      meta: 'Momento principal',
    },
    {
      title: 'Recepcion',
      body: `${eventConfig.receptionTime}. Este bloque quedara listo para salon, traslado y notas utiles para los invitados.`,
      meta: 'Celebracion',
    },
    {
      title: 'Codigo de vestimenta',
      body: 'Formal con una lectura fresca y luminosa. El copy final puede afinarse en cuanto definan reglas o paleta sugerida.',
      meta: 'Presentacion',
    },
  ],
  gallery: [
    {
      title: 'Luz suave',
      description: 'Una muestra de atmosfera para la landing mientras llegan las fotos finales.',
      tone: 'warm',
    },
    {
      title: 'Papel y textura',
      description: 'Superficies claras, ritmo editorial y contrastes suaves para mantener la pagina ligera.',
      tone: 'paper',
    },
    {
      title: 'Color acento',
      description: 'Un sistema visual con dorados y blush para separar momentos sin saturar.',
      tone: 'accent',
    },
    {
      title: 'Cierre intencional',
      description: 'La galeria tambien sirve como puente emocional antes de hablar de regalos o invitacion.',
      tone: 'moss',
    },
  ],
  gifts: {
    eyebrow: 'Mesa de regalos',
    title: 'Tu presencia es lo mas importante',
    description:
      'Si despues deseas apoyarnos de otra manera, aqui quedaran las opciones finales. Por ahora la seccion ya existe para no dejar ese bloque improvisado al final.',
    actions: [
      {
        label: 'Transferencia',
        href: '#',
      },
      {
        label: 'Lista de regalos',
        href: '#',
      },
    ],
  },
  invitationFlow: {
    eyebrow: 'Tu invitacion',
    title: 'La confirmacion llegara como una continuacion natural de esta pagina',
    description:
      'Cada invitado recibira un enlace personal para confirmar asistencia. No hace falta escribir codigos ni buscar tu nombre manualmente: la experiencia privada abrira ya preparada para ti.',
    points: [
      'La landing publica comparte tono visual con la invitacion personalizada.',
      'La confirmacion de asistencia vivira en un enlace privado, no en esta pagina publica.',
      'La informacion personal de invitados se mantiene fuera de la landing.',
    ],
  },
  footer: {
    quote: 'Gracias por acompanarnos desde ahora en este camino.',
    note: 'Cuando tengas datos finales de lugar, mapas, regalos o texto personal, podras editarlos desde el contenido centralizado.',
  },
} as const;
