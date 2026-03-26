# Fundaciones de la pagina de boda

## Objetivo de AYP-001
- Crear la base tecnica y visual del proyecto sobre `Next.js + TypeScript + Tailwind`.
- Dejar lista una estructura reutilizable para la landing publica y la futura invitacion personalizada.
- Reemplazar el smoke test de ejemplo de Playwright por pruebas contra la app local real.

## Estructura inicial
- `src/app/`
  - `layout.tsx`
  - `page.tsx`
  - `lookbook/page.tsx`
  - `globals.css`
- `src/components/ui/`
  - `Button.tsx`
  - `Card.tsx`
  - `Section.tsx`
  - `Stack.tsx`
- `src/components/marketing/`
  - `Hero.tsx`
  - `Story.tsx`
  - `EventDetails.tsx`
  - `Gifts.tsx`
  - `Footer.tsx`
- `src/lib/content/`
  - `wedding-content.ts`
- `src/lib/config/`
  - `site.ts`
  - `event.ts`
- `supabase/`
  - `README.md`
- `scripts/`
  - `README.md`

## Scripts
- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run test:e2e`

## Notas
- Esta iteracion no implementa RSVP ni modelo de datos.
- `group_name`, tokens y Supabase entran en tickets posteriores.
- `/lookbook` sirve como guia interna ligera; no se monta Storybook en el release 1.
