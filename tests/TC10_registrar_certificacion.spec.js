import { test, expect } from '@playwright/test';
import { login, setFirstFileInput } from './helpers.js';

test('TC-10 Registrar certificación', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Experiencia' }).click();
  await page.getByRole('button', { name: 'Subir Nuevo PDF, PNG, JPG o' }).click();
  await page.getByRole('button', { name: 'Certificación' }).click();
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).click();
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).fill('P');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).fill('Programador ');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).fill('Programador F');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Meta Front-End Developer' }).fill('Programador Frontend');
  await page.getByRole('textbox', { name: 'Ej: Coursera, Google,' }).click();
  await page.getByRole('textbox', { name: 'Ej: Coursera, Google,' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Coursera, Google,' }).fill('C');
  await page.getByRole('textbox', { name: 'Ej: Coursera, Google,' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: Coursera, Google,' }).fill('Coursera');
  await page.getByRole('textbox', { name: 'Ej: AB1234CD5678' }).click();
  await page.getByRole('textbox', { name: 'Ej: AB1234CD5678' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Ej: AB1234CD5678' }).fill('D3F7J8');
  await page.getByRole('textbox', { name: 'https://coursera.org/verify/' }).click();
  await page.getByRole('textbox', { name: 'https://coursera.org/verify/' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'https://coursera.org/verify/' }).fill('https://www.coursera.org/campus?utm_content=corp-to-landing-for-campus&utm_campaign=website&utm_medium=coursera&utm_source=header&utm_term=b-out');
  await page.getByText('Haz clic o arrastra el archivo aquíFormato PDF, PNG o JPG (Máx. 5MB)').click();
  await setFirstFileInput(page, 'sample.png');
  await page.getByRole('button', { name: 'Guardar Certificación' }).click();
}); 

