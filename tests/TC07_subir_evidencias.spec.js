import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://kawisoft.tis.cs.umss.edu.bo/');
  await page.getByRole('banner').getByRole('link', { name: 'Iniciar sesión' }).click();
  await page.getByRole('textbox', { name: 'Correo institucional' }).click();
  await page.getByRole('textbox', { name: 'Correo institucional' }).fill('cttandrea34@gmail.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('andy2000');
  await page.getByRole('button', { name: 'Iniciar sesión → en Dev' }).click();
  await page.getByRole('button', { name: 'Proyectos' }).click();
  await page.getByRole('button', { name: 'Evidencias' }).click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('Captura de pantalla 2026-06-06 153303.png');
  await page.getByRole('button', { name: 'Confirmar Envío' }).click();
});