import { eventConfig } from '@/lib/config/event';

export const eventContent = {
  coupleLabel: 'Andres & Paulina',
  story: [
    {
      title: 'Una narrativa mas ligera',
      description:
        'La base visual prioriza ritmo, aire y bloques cortos para que la pagina se sienta cuidada desde el primer scroll.',
    },
    {
      title: 'Contenido centralizado',
      description:
        'Textos, horarios y llamados a la accion salen de una sola fuente para evitar contenido regado en toda la app.',
    },
    {
      title: 'Escalable al RSVP',
      description:
        'La estructura publica comparte tono, componentes y superficie con la futura invitacion personalizada.',
    },
  ],
  details: [
    {
      title: 'Ceremonia',
      body: `${eventConfig.dateLabel} · ${eventConfig.ceremonyTime} · La tarjeta ya existe para conectar despues con ubicacion real y mapa.`,
    },
    {
      title: 'Recepcion',
      body: 'Una segunda tarjeta lista para horarios, salon y transicion entre momentos del evento.',
    },
    {
      title: 'Codigo de vestimenta',
      body: 'Bloque base para reglas de presentacion, notas utiles y detalles logisticos visibles solo cuando esten listos.',
    },
  ],
  gifts: [
    {
      label: 'Transferencia',
      href: '#',
    },
    {
      label: 'Lista de regalos',
      href: '#',
    },
  ],
} as const;
