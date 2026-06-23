import { test, expect } from '@playwright/test';
import { login } from './helpers.js';

test('TC-09 Exportar CV', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Exportar CV' }).click();
  await page.getByRole('button', { name: 'PDF A4 / print-ready' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar reporte' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/\.(pdf|html)$/i);
});

