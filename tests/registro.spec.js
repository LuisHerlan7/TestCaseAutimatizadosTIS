import { test, expect } from '@playwright/test';
import { testUser } from './helpers.js';

test('TC-01 Registro exitoso de usuario', async ({ page }) => {
  await page.goto('/');

  // Ir al formulario de registro
  await page.getByRole('banner').getByRole('button', { name: 'Registrarse' }).click();

  // Completar formulario
  await page.getByRole('textbox', { name: 'Nombre completo' }).fill(testUser.name);
  await page.getByRole('textbox', { name: 'Correo institucional' }).fill(testUser.email);
  await page.getByRole('textbox', { name: 'Contraseña', exact: true }).fill(testUser.password);
  await page.getByRole('textbox', { name: 'Confirmar contraseña' }).fill(testUser.password);

  // Registrar usuario
  await page.getByRole('button', { name: 'Crear mi perfil →' }).click();

  // Verificar que aparece el login
  await expect(
    page.getByRole('button', { name: /Iniciar sesión/i })
  ).toBeVisible();
});

