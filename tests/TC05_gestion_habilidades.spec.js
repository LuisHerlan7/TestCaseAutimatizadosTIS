import { test, expect } from '@playwright/test';
import { login } from './helpers.js';

test('TC-05 Gestión de habilidades técnicas y blandas', async ({ page }) => {
  await login(page);

  await page.getByRole('button', { name: 'Habilidades' }).click();
  await page.getByRole('button', { name: 'Editar' }).click();

  await page.getByRole('button', { name: 'Agregar habilidad técnica' }).click();
  const techSection = page.locator('[id^="skill-tech-"]').last();
  await techSection.getByRole('textbox', { name: 'Nombre' }).fill('Python');
  await techSection.getByRole('combobox').selectOption('Avanzado');
  await techSection.getByRole('slider').fill('80');

  await page.getByRole('button', { name: 'Agregar habilidad blanda' }).click();
  const softSection = page.locator('[id^="skill-soft-"]').last();
  await softSection.getByRole('textbox', { name: 'Nombre' }).fill('Trabajo en equipo');
  await softSection.getByRole('combobox').selectOption('Intermedio');
  await softSection.getByRole('slider').fill('60');

  await page.getByRole('button', { name: 'Guardar' }).click();
  await expect(page.getByText(/Python|Trabajo en equipo/i)).toBeVisible();
});

