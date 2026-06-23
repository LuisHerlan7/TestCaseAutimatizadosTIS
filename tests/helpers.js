import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const testUser = {
  name: process.env.E2E_USER_NAME || 'Andrea Torrico',
  email: process.env.E2E_USER_EMAIL || '696969696@est.ums.edu',
  password: process.env.E2E_USER_PASSWORD || 'holaHerlan'
};

export async function login(page) {
  await page.goto('/');
  await page.getByRole('banner').getByRole('link', { name: 'Iniciar sesión' }).click();
  await page.getByRole('textbox', { name: 'Correo institucional' }).fill(testUser.email);
  await page.getByRole('textbox', { name: 'Contraseña' }).fill(testUser.password);
  await page.getByRole('button', { name: /Iniciar sesión/i }).click();
}

export function fixturePath(fileName) {
  return path.join(__dirname, 'fixtures', fileName);
}

export async function setFirstFileInput(page, fileName) {
  await page.locator('input[type="file"]').first().setInputFiles(fixturePath(fileName));
}
