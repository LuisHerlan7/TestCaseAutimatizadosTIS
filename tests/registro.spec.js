import { test, expect } from '@playwright/test';

test('TC-01 Registro exitoso de usuario', async ({ page }) => {
  await page.goto('http://kawisoft.tis.cs.umss.edu.bo/');

  // Ir al formulario de registro
  await page.getByRole('banner').getByRole('button', { name: 'Registrarse' }).click();

  // Completar formulario
  await page.getByRole('textbox', { name: 'Nombre completo' }).fill('Andrea Torrico');
  await page.getByRole('textbox', { name: 'Correo institucional' }).fill('cttandrea34@gmail.com');
  await page.getByRole('textbox', { name: 'Contraseña', exact: true }).fill('andy2000');
  await page.getByRole('textbox', { name: 'Confirmar contraseña' }).fill('andy2000');

  // Registrar usuario
  await page.getByRole('button', { name: 'Crear mi perfil →' }).click();

  // Verificar que aparece el login
  await expect(
    page.getByRole('button', { name: 'Iniciar sesión → en Dev' })
  ).toBeVisible();
});