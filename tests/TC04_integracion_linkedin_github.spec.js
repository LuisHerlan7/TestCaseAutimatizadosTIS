import { test, expect } from '@playwright/test';
import { login } from './helpers.js';

test('TC-04 Integración con perfiles externos (LinkedIn/GitHub)', async ({ page }) => {
  await login(page);

  // Acceder a configuración
  await page.getByRole('button', { name: 'Configuración' })
    .click();

  // Vincular GitHub
  await page.locator('input[type="text"]').nth(4)
    .fill('https://github.com/4ndrea5');

  // Vincular LinkedIn
  await page.locator('input[type="text"]').nth(5)
    .fill('https://www.linkedin.com/in/carolina-torrico-7ba9763b1/');

  // Guardar cambios
  await page.getByRole('button', { name: 'Guardar' })
    .click();

  // Confirmación
  await page.getByRole('button', { name: 'Entendido' })
    .click();

  // Verificación
  await expect(
    page.locator('input[type="text"]').nth(4)
  ).toHaveValue('https://github.com/4ndrea5');

  await expect(
    page.locator('input[type="text"]').nth(5)
  ).toHaveValue('https://www.linkedin.com/in/carolina-torrico-7ba9763b1/');
});

