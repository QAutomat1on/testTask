import { test, expect } from '@playwright/test';

test('1. Sign in page availability ', async ({ page }) => {
  const signInLinkLoc = page.locator('[href="/login"]');
 
  await page.goto('/');
  await signInLinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
});

test('2. Sign in positive process ', async ({ page }) => {
  let email = '4inmymind@gmail.com';
  let password = '4Password';
  const signInLinkLoc = page.locator('[href="/login"]');
  const emailFieldLoc = page.locator('//input[@type="email"]');
  const passwordFieldLoc = page.locator('[placeholder="Password"]'); //  '//*[@type="password"]' I'd like to use this selector, but I decided not to waste time, since we had fixed amount of time to the big scope of work, to solve the problem with "//*" - comment symbol inside VSCode
  const signInButtonLoc = page.locator('.btn:has-text("Sign in")');

  await page.goto('/');
  await signInLinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
  await emailFieldLoc.fill(email);
  await passwordFieldLoc.fill(password);
  await signInButtonLoc.click();
  await expect(page.locator('.nav-item [href="/@4samsmith/"]')).toBeVisible(); //need to be handled selector is wrong
});