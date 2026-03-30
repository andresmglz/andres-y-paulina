# Scripts

Esta carpeta queda reservada para scripts operativos del proyecto, como importacion de invitados y utilidades de soporte.

## Utilidades actuales

- `capture-page.mjs`
  - Toma screenshots desktop y mobile de una ruta local usando Playwright.
  - Uso: `npm run design:snapshot -- / home`
  - Variables utiles:
    - `BASE_URL=http://127.0.0.1:3000`
    - `PLAYWRIGHT_CHANNEL=chrome`
