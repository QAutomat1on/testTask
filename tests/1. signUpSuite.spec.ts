import { test, expect } from '@playwright/test';

test('1. Sign up screen availability', async ({ page }) => {
  const signUplinkLoc = page.locator('[href="/register"]');
  
  await page.goto('/');
  await signUplinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign up');
});

test('2. Sign up positive process ', async ({page}) => {
  let username = '4SamSmith';
  let email = '4inmymind@gmail.com' ;
  let password = '4Password';
  const signUplinkLoc = page.locator('[href="/register"]');
  const userNameFieldLoc = page.locator('[placeholder="Username"]');
  const emailFieldLoc = page.locator('[placeholder="Email"]');
  const passwordFieldLoc = page.locator('[type="password"]');
  const signUpButtonLoc = page.locator('.btn:has-text("Sign up")');


  await page.goto('/');
  await signUplinkLoc.click();
  await userNameFieldLoc.fill(username);
  await emailFieldLoc.fill(email);
  await passwordFieldLoc.fill(password);
  await signUpButtonLoc.click();
  await expect(page.locator('//p[text()="A place to share your knowledge."]')).toBeVisible();

});

test('3. Sign out process', async ({page}) => {
  await page.goto('/');
  let username = '2SamSmith';
  let email = '2inmymind@gmail.com' ;
  let password = '2Password';
  const signUplinkLoc = page.locator('[href="/register"]');
  const userNameFieldLoc = page.locator('[placeholder="Username"]');
  const emailFieldLoc = page.locator('[placeholder="Email"]');
  const passwordFieldLoc = page.locator('[type="password"]');
  const signUpButtonLoc = page.locator('.btn:has-text("Sign up")');


  await page.goto('/');
  await signUplinkLoc.click();
  await userNameFieldLoc.fill(username);
  await emailFieldLoc.fill(email);
  await passwordFieldLoc.fill(password);
  await signUpButtonLoc.click();
  await expect(page.locator('//p[text()="A place to share your knowledge."]')).toBeVisible();
  await page.locator('[href="/settings"]').click();
  await page.locator('.btn-outline-danger').click();
  await signUplinkLoc.isVisible();

 });
