// @ts-check
import { test, expect } from '@playwright/test';

test('home renders the wedding foundation experience', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Andr.s .* Paulina/i);
  await expect(page.getByRole('heading', { name: /Andr.s .* Paulina/i }).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /nos casamos/i })).toBeVisible();
  await expect(page.getByText(/cuenta regresiva/i).first()).toBeVisible();
  await expect(page.getByText(/colosenses 3:14/i).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /el ritmo del d[ií]a/i })).toBeVisible();
  await expect(page.getByText(/mesa de regalos/i).first()).toBeVisible();
  await expect(page.getByText(/preguntas frecuentes/i).first()).toBeVisible();
});

test('lookbook exposes the design primitives', async ({ page }) => {
  await page.goto('/lookbook');

  await expect(page.getByRole('heading', { name: /lookbook/i })).toBeVisible();
  await expect(page.locator('#primitives').getByRole('heading', { name: /^sistema base$/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /confirmaci[oó]n de asistencia/i })).toBeVisible();
});
