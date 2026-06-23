import { test, expect } from '@playwright/test';
import { setFirstFileInput, login } from './helpers.js';

test('TC-07 Subir evidencias', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Proyectos' }).click();
  await page.getByRole('button', { name: 'Evidencias' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await setFirstFileInput(page, 'sample.png');
  await page.getByRole('button', { name: 'Confirmar Envío' }).click();
});

