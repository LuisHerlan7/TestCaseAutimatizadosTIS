import { test, expect } from '@playwright/test';
import { fixturePath, login } from './helpers.js';

test('TC-06 Publicación de proyecto', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Añadir proyecto' }).click();
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).click();
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).fill('D');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).fill('Desarrollo de ');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).fill('Desarrollo de S');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).fill('Desarrollo de Sistema ');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).fill('Desarrollo de Sistema O');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'ej. Sistema de Panel Nexus' }).fill('Desarrollo de Sistema Odontologico');
  await page.getByRole('textbox', { name: 'Un breve resumen de una línea' }).click();
  await page.getByRole('textbox', { name: 'Un breve resumen de una línea' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Un breve resumen de una línea' }).fill('ES');
  await page.getByRole('textbox', { name: 'Un breve resumen de una línea' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Un breve resumen de una línea' }).fill('ES un sistema para un consultorio odontologico');
  await page.getByRole('button').first().click();
  await page.getByRole('button', { name: 'Cargar desde .txt' }).click();
  await page.locator('input[type="file"]').first().setInputFiles(fixturePath('project-description.txt'));
  await page.getByRole('button', { name: '+ Añadir Tech' }).click();
  await page.getByRole('textbox', { name: 'Escribe una tecnología y' }).fill('java');
  await page.getByRole('textbox').nth(5).fill('2026-01-06');
  await page.locator('input[type="date"]').nth(1).fill('2026-08-12');
  await page.getByRole('textbox', { name: 'https://github.com/' }).click();
  await page.getByRole('textbox', { name: 'https://github.com/' }).fill('https://github.com/4ndrea5');
  await page.getByRole('button', { name: 'Publicar Proyecto' }).click();
});

