// @ts-check
import { test, expect } from '@playwright/test';

test('home renders the wedding foundation experience', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Andres & Paulina/i);
  await expect(page.getByRole('heading', { name: /andres & paulina/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /nos casamos/i })).toBeVisible();
  await expect(page.getByText(/nuestra historia/i).first()).toBeVisible();
  await expect(page.getByRole('heading', { name: /el ritmo del dia/i })).toBeVisible();
  await expect(page.getByText(/momentos/i).first()).toBeVisible();
  await expect(page.getByText(/mesa de regalos/i).first()).toBeVisible();
});

test('lookbook exposes the design primitives', async ({ page }) => {
  await page.goto('/lookbook');

  await expect(page.getByRole('heading', { name: /lookbook/i })).toBeVisible();
  await expect(page.locator('a[href="#primitives"]').first()).toBeVisible();
  await expect(page.locator('#primitives').getByRole('heading', { name: /^sistema base$/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /la confirmacion llegara/i })).toBeVisible();
});
