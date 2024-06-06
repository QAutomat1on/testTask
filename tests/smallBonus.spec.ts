import { test, expect } from '@playwright/test';
test('1. Bonus for Pavlo please in the headed mode. ', async ({ page }) => {
  await page.goto('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdmo_kjnDmTF7xqm7SlgbDL91Yo0HIn8MCsQ&s');
  await page.waitForTimeout(150000);
  console.log("thanks for your time");
});