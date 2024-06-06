import { test, expect } from '@playwright/test';

test('1. Sign up screen availability', async ({ page }) => {
  const signUplinkLoc = page.locator('[href="/register"]');
  
  await page.goto('/');
  await signUplinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign up');
});

test('2. Sign up positive process ', async ({page}) => {
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
});

test('3.Sign up, blank username and email fields', async ({page}) => {
  const signUplinkLoc = page.locator('[href="/register"]');
  const signUpButtonLoc = page.locator('.btn:has-text("Sign up")');

  await page.goto('/');
  await signUplinkLoc.click();
  await signUpButtonLoc.click();
  await expect(page.locator('//li[contains(text(), "email can")]')).toBeVisible();
  await expect (page.locator('//li[contains(text(), "username can")]')).toBeVisible();
});

test('4. Sign up, email already taken ', async ({page}) => {
  let email = '2inmymind@gmail.com' ;
  const signUplinkLoc = page.locator('[href="/register"]');
  const userNameFieldLoc = page.locator('[placeholder="Username"]');
  const emailFieldLoc = page.locator('[placeholder="Email"]');
  const passwordFieldLoc = page.locator('[type="password"]');
  const signUpButtonLoc = page.locator('.btn:has-text("Sign up")');

  await page.goto('/');
  await signUplinkLoc.click();
  await userNameFieldLoc.fill('asdtest');
  await emailFieldLoc.fill(email);
  await signUpButtonLoc.click();
  await expect(page.locator('//li[contains(text(), "email is already taken.")]')).toBeVisible();
});