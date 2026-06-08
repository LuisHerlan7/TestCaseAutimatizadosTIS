import { test, expect } from '@playwright/test';

test('TC-04 Integración con perfiles externos (LinkedIn/GitHub)', async ({ page }) => {
  // Iniciar sesión
  await page.goto('http://kawisoft.tis.cs.umss.edu.bo/');

  await page.getByRole('banner')
    .getByRole('link', { name: 'Iniciar sesión' })
    .click();

  await page.getByRole('textbox', { name: 'Correo institucional' })
    .fill('cttandrea34@gmail.com');

  await page.getByRole('textbox', { name: 'Contraseña' })
    .fill('andy2000');

  await page.getByRole('button', { name: 'Iniciar sesión → en Dev' })
    .click();

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