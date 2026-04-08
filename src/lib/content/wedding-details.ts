type VenueDetails = {
  venue: string;
  address: string;
  mapUrl: string;
  note: string;
};

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

type GiftOption = {
  label: string;
  description: string;
  status: string;
  href?: string;
};

type WeddingDetails = {
  couple: {
    partnerOne: string;
    partnerTwo: string;
    displayName: string;
  };
  event: {
    dateLabel: string;
    cityLabel: string;
    ceremonyTime: string;
    receptionTime: string;
    hashtag: string;
  };
  hero: {
    title: string;
    intro: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    styleNote: string;
    badge: string;
  };
  assets: {
    heroPortrait: string;
    storyLandscape: string;
    detailHands: string;
  };
  ceremony: VenueDetails;
  reception: VenueDetails;
  dressCode: {
    label: string;
    note: string;
  };
  story: {
    eyebrow: string;
    title: string;
    description: string;
    moments: ReadonlyArray<{
      title: string;
      description: string;
    }>;
  };
  countdown: {
    eyebrow: string;
    title: string;
    note: string;
    targetDateTime: string;
  };
  verse: {
    eyebrow: string;
    quote: string;
    reference: string;
    note: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    items: ReadonlyArray<GalleryItem>;
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
    items: ReadonlyArray<{
      time: string;
      title: string;
      note: string;
    }>;
  };
  recommendations: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    items: ReadonlyArray<{
      title: string;
      description: string;
      meta: string;
    }>;
  };
  interlude: {
    eyebrow: string;
    quote: string;
    note: string;
  };
  gifts: {
    eyebrow: string;
    title: string;
    description: string;
    helperText: string;
    options: ReadonlyArray<GiftOption>;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: ReadonlyArray<{
      question: string;
      answer: string;
    }>;
  };
  invitationFlow: {
    eyebrow: string;
    title: string;
    description: string;
    points: ReadonlyArray<{
      step: string;
      title: string;
      description: string;
    }>;
    note: string;
  };
  footer: {
    quote: string;
    note: string;
  };
};

// Edit this file with the final public information for the landing.
export const weddingDetails: WeddingDetails = {
  couple: {
    partnerOne: 'Andrés Moreno Gonzalez',
    partnerTwo: 'Abigail Ríos Pérez',
    displayName: 'Andrés & Abigail',
  },
  event: {
    dateLabel: '22 de noviembre del 2026',
    cityLabel: 'Zapopan, Jalisco',
    ceremonyTime: '5:00 PM',
    receptionTime: '4:00 PM',
    hashtag: '#AndresAndAbbyForever',
  },
  hero: {
    title: 'Nos casamos',
    intro: '22 de noviembre del 2026 · Zapopan, Jalisco',
    primaryCtaLabel: 'Ver el horario',
    primaryCtaHref: '#timeline',
    secondaryCtaLabel: 'Leer el versículo',
    secondaryCtaHref: '#verse',
    styleNote: 'Una celebración serena, cercana y luminosa',
    badge: 'Guarda la fecha',
  },
  assets: {
    heroPortrait: '/images/couple/hero-portrait.jpg',
    storyLandscape: '/images/couple/story-landscape.jpg',
    detailHands: '/images/couple/detail-hands.jpg',
  },
  ceremony: {
    venue: 'La Victoria Eventos',
    address: 'Av. Cañon de las Flores 113, La Primavera, 45226 Zapopan, Jal.',
    mapUrl:
      'https://www.google.com/maps/place/La+Victoria+-+Eventos/@20.7161269,-103.5726665,17z/data=!3m1!4b1!4m6!3m5!1s0x84260319a2eb6069:0xd7e0ed5db0e4aa79!8m2!3d20.7161269!4d-103.5700916!16s%2Fg%2F11vl3kr9l8?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D',
    note: 'Nos encontraremos en el mismo lugar para vivir la ceremonia con calma y después seguir celebrando juntos.',
  },
  reception: {
    venue: 'La Victoria Eventos',
    address: 'Mismo lugar de la ceremonia.',
    mapUrl:
      'https://www.google.com/maps/place/La+Victoria+-+Eventos/@20.7161269,-103.5726665,17z/data=!3m1!4b1!4m6!3m5!1s0x84260319a2eb6069:0xd7e0ed5db0e4aa79!8m2!3d20.7161269!4d-103.5700916!16s%2Fg%2F11vl3kr9l8?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D',
    note: 'La recepción y la convivencia sucederán en el mismo espacio para que el día se sienta continuo y ligero.',
  },
  dressCode: {
    label: 'Formal',
    note: 'Más detalles más adelante.',
  },
  story: {
    eyebrow: 'Nuestra historia',
    title: 'Una historia que volvió a encontrarse en el tiempo correcto',
    description:
      'Comenzó con algo sencillo, atravesó pausas y dudas, y con los años se convirtió en una decisión compartida, madura y profundamente agradecida.',
    moments: [
      {
        title: 'Un encuentro sin expectativas',
        description:
          'Todo empezó en la iglesia de Zapopan, en una comida de templo y una conversación casual que terminó entre risas, fotos espontáneas y una sensación de ligereza que ninguno esperaba.',
      },
      {
        title: 'El tiempo de Dios también sabe esperar',
        description:
          'Hubo intentos que no funcionaron, distancia, silencios y una etapa difícil. Pero los años acomodaron las piezas y nos permitieron volver a coincidir desde un lugar más sereno y verdadero.',
      },
      {
        title: 'Aprender a caminar juntos',
        description:
          'Hablar con honestidad, orar, estudiar la Biblia y crecer con paciencia fue cambiando todo. Hoy llegamos aquí agradecidos, convencidos y listos para dar este siguiente paso.',
      },
    ],
  },
  countdown: {
    eyebrow: 'Cuenta regresiva',
    title: 'Cada día nos acerca más',
    note: '22 de noviembre del 2026 · 5:00 PM',
    targetDateTime: '2026-11-22T17:00:00-06:00',
  },
  verse: {
    eyebrow: 'Un versículo para este momento',
    quote: 'Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.',
    reference: 'Colosenses 3:14',
    note: '',
  },
  gallery: {
    eyebrow: 'Momentos',
    title: 'Un vistazo a la atmósfera que queremos compartir',
    description:
      'Estas imágenes acompañan el tono de la landing y ayudan a que la experiencia se sienta más cercana desde la primera visita.',
    items: [
      {
        src: '/images/couple/gallery-01.jpg',
        alt: 'Andrés y Abigail caminando juntos',
        title: 'Antesala',
        description: 'Una imagen tranquila para abrir el ritmo visual de la página.',
      },
      {
        src: '/images/couple/gallery-02.jpg',
        alt: 'Andrés y Abigail en un momento de complicidad',
        title: 'Complicidad',
        description: 'Una pausa más cercana para equilibrar la narrativa y la celebración.',
      },
      {
        src: '/images/couple/gallery-03.jpg',
        alt: 'Andrés y Abigail compartiendo una mirada',
        title: 'Calma',
        description: 'Un momento sereno que sostiene el tono íntimo de la landing.',
      },
      {
        src: '/images/couple/gallery-04.jpg',
        alt: 'Andrés y Abigail celebrando su historia',
        title: 'Celebración',
        description: 'Un cierre visual más luminoso antes de entrar a los bloques prácticos.',
      },
    ],
  },
  timeline: {
    eyebrow: 'Cronología',
    title: 'El ritmo del día',
    description: 'Orden general del evento.',
    items: [
      {
        time: '4:00 PM',
        title: 'Recepción y bienvenida',
        note: 'Apertura del espacio y llegada de invitados en La Victoria Eventos.',
      },
      {
        time: '5:00 PM',
        title: 'Ceremonia',
        note: 'El momento principal del día, en el mismo lugar de la celebración.',
      },
      {
        time: 'Después',
        title: 'Brindis y convivencia',
        note: 'Seguiremos celebrando juntos sin traslados adicionales.',
      },
    ],
  },
  recommendations: {
    eyebrow: 'Recomendaciones',
    title: 'Antes de llegar',
    description: 'Información útil para organizar el día.',
    note: 'La invitación privada añadirá detalles finales cuando estén listos.',
    items: [
      {
        title: 'Llegada',
        description:
          'La mejor ventana para llegar es entre 4:00 PM y 4:30 PM. Así podrás entrar con calma, ubicarte y disfrutar el inicio sin prisas.',
        meta: 'Acceso',
      },
      {
        title: 'Traslados',
        description:
          'Ceremonia, recepción y convivencia sucederán en el mismo venue, así que no hará falta moverse a otra locación durante el evento.',
        meta: 'Logística simple',
      },
      {
        title: 'Clima',
        description:
          'La celebración se extiende hacia la tarde-noche, así que vale la pena considerar un saco ligero, chal o capa delgada para estar cómodos.',
        meta: 'Atardecer fresco',
      },
      {
        title: 'Hospedaje',
        description:
          'Si vienes de fuera, más adelante compartiremos una referencia sencilla de zonas y opciones cercanas para que el plan de llegada sea más fácil.',
        meta: 'Para invitados foráneos',
      },
    ],
  },
  interlude: {
    eyebrow: 'Un momento para detenerse',
    quote: 'El comienzo de algo eterno',
    note: 'Entre la historia que nos trajo hasta aquí y los detalles del gran día, queríamos dejar un respiro que se sienta íntimo, sereno y verdaderamente especial.',
  },
  gifts: {
    eyebrow: 'Mesa de regalos',
    title: 'Su presencia es el mejor regalo que podríamos recibir',
    description: 'Aquí compartiremos las opciones finales para quien desee tener un detalle adicional.',
    helperText: 'Más adelante publicaremos transferencia, mesa de regalos y acceso por QR.',
    options: [
      {
        label: 'Transferencia',
        description: 'CLABE o cuenta.',
        status: 'Próximamente',
      },
      {
        label: 'Mesa de regalos',
        description: 'Enlace directo al registry.',
        status: 'En preparación',
      },
      {
        label: 'Código QR',
        description: 'Acceso rápido desde celular.',
        status: 'Se activará después',
      },
    ] as const,
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Dudas comunes',
    description: '',
    items: [
      {
        question: '¿A qué hora conviene llegar?',
        answer: 'Te recomendamos llegar entre 4:00 PM y 4:30 PM para entrar con calma y ubicarte antes de la ceremonia.',
      },
      {
        question: '¿Puedo llevar acompañante o niños?',
        answer: 'La invitación será personalizada, así que cada enlace indicará exactamente quiénes forman parte de la invitación de ese hogar o persona.',
      },
      {
        question: '¿Habrá indicaciones de acceso o estacionamiento?',
        answer: 'Sí. Conforme se acerque la fecha compartiremos recomendaciones finales de llegada, accesos y cualquier nota práctica del venue.',
      },
      {
        question: '¿La ceremonia y la recepción serán en el mismo lugar?',
        answer: 'Sí. Todo sucederá en La Victoria Eventos, así que el flujo del día será continuo y no requerirá traslados intermedios.',
      },
    ],
  },
  invitationFlow: {
    eyebrow: 'RSVP',
    title: 'Confirmación de asistencia',
    description: 'Cada invitado recibirá un enlace personal para confirmar asistencia.',
    points: [
      {
        step: '01',
        title: 'Recibirás un enlace privado',
        description: 'Cada invitación llegará con un vínculo personal, listo para abrir directamente desde tu celular.',
      },
      {
        step: '02',
        title: 'Verás nombres y cupos asignados',
        description: 'La experiencia privada mostrará con claridad quiénes forman parte de la invitación y qué espacios corresponden.',
      },
      {
        step: '03',
        title: 'Confirmar será rápido y directo',
        description: 'Solo tendrás que revisar la información y responder dentro del mismo flujo, sin búsquedas manuales ni pasos extra.',
      },
    ],
    note: 'La confirmación se hará desde una invitación individual.',
  },
  footer: {
    quote: 'Nos dará mucha alegría compartir este día contigo.',
    note: '',
  },
};
