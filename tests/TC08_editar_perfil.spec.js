import { test, expect } from '@playwright/test';
import { login, setFirstFileInput } from './helpers.js';

test('TC-08 Editar perfil', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Editar bio' }).click();
  const closeNotice = page.getByRole('button', { name: 'Cerrar aviso' });
  if (await closeNotice.isVisible().catch(() => false)) {
    await closeNotice.click();
  }

  await page.getByRole('textbox').nth(2).fill('Terrazas');
  await page.getByRole('button', { name: 'Editar foto de perfil' }).click();
  await setFirstFileInput(page, 'sample.png');
  await page.getByRole('button', { name: 'Confirmar' }).click();

  await page.locator('textarea').fill('Soy desarrolladora frontend y backend');
  await page
    .locator('section')
    .filter({ hasText: 'Informacion de ContactoCorreo' })
    .locator('input[type="text"]')
    .fill('65435172');

  await page.getByRole('textbox', { name: 'Ej: Especializacion en' }).fill('Especialista en Frontend');
  await page.getByRole('textbox', { name: 'Ej: Desarrollador Semi Senior' }).fill('QA tester');
  await page.getByRole('button', { name: 'Guardar' }).click();
  await expect(page.getByRole('button', { name: 'Entendido' })).toBeVisible();
});

