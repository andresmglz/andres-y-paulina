import fs from 'node:fs/promises';
import path from 'node:path';

import { chromium } from 'playwright';

const routeArg = process.argv[2] ?? '/';
const slugArg = process.argv[3] ?? 'page';
const baseUrl = process.env.BASE_URL ?? 'http://127.0.0.1:3000';
const channel = process.env.PLAYWRIGHT_CHANNEL || undefined;

const route = routeArg.startsWith('/') ? routeArg : `/${routeArg}`;
const outputDir = path.join(process.cwd(), '.codex', 'artifacts', 'snapshots', slugArg);

const targets = [
  {
    name: 'desktop',
    viewport: { width: 1440, height: 1200 },
  },
  {
    name: 'mobile',
    viewport: { width: 390, height: 844 },
    isMobile: true,
  },
];

await fs.mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({
  channel,
  headless: true,
});

try {
  for (const target of targets) {
    const context = await browser.newContext({
      viewport: target.viewport,
      isMobile: target.isMobile,
    });

    const page = await context.newPage();
    const url = new URL(route, baseUrl).toString();

    await page.goto(url, { waitUntil: 'networkidle' });

    const screenshotPath = path.join(outputDir, `${target.name}.png`);
    const metaPath = path.join(outputDir, `${target.name}.json`);

    await page.screenshot({
      fullPage: true,
      path: screenshotPath,
    });

    const metadata = {
      route,
      url,
      viewport: target.viewport,
      title: await page.title(),
    };

    await fs.writeFile(metaPath, `${JSON.stringify(metadata, null, 2)}\n`, 'utf8');
    console.log(`${target.name}: ${screenshotPath}`);

    await context.close();
  }
} finally {
  await browser.close();
}
