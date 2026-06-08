import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://kawisoft.tis.cs.umss.edu.bo/');
  await page.getByRole('banner').getByRole('link', { name: 'Iniciar sesión' }).click();
  await page.getByRole('textbox', { name: 'Correo institucional' }).click();
  await page.getByRole('textbox', { name: 'Correo institucional' }).fill('cttandrea34@gmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('andy2000');
  await page.getByRole('textbox', { name: 'Contraseña' }).press('Enter');
  await page.getByRole('button', { name: 'Iniciar sesión → en Dev' }).click();
  await page.getByRole('button', { name: 'Exportar CV' }).click();
  await page.getByRole('button', { name: 'PDF A4 / print-ready' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Descargar reporte' }).click();
  const download = await downloadPromise;
});