import { test, expect } from '@playwright/test';

test('1. Sign in page availability ', async ({ page }) => {
  const signInLinkLoc = page.locator('[href="/login"]');
 
  await page.goto('/');
  await signInLinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
});

test('2. Sign in positive process ', async ({ page }) => {
  let email = '55inmymind@gmail.com';
  let password = '55Password';
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
  await expect(page.locator('.nav-item [href="/@2samsmith/"]')).toBeVisible(); //need to be handled selector is wrong
});

test('3. Sign in process negative', async ({page}) => {
  await page.goto('/');
  let email = '33inmymind@gmail.com' ;
  let password = '98Password';
  const signInLinkLoc = page.locator('[href="/login"]');
  const emailFieldLoc = page.locator('[placeholder="Email"]');
  const passwordFieldLoc = page.locator('[type="password"]');
  const signInButtonLoc = page.locator('.btn:has-text("Sign in")');

  await page.goto('/');
  await signInLinkLoc.click();
  await emailFieldLoc.fill(email);
  await passwordFieldLoc.fill(password);
  await signInButtonLoc.click();
  await expect(page.locator('//li[text()= "email or password is invalid"]')).toBeVisible();
 });

 test('4. Blank email field', async ({page}) => {
  const signInLinkLoc = page.locator('[href="/login"]');
  const signInButtonLoc = page.locator('.btn:has-text("Sign in")');

  await page.goto('/');
  await signInLinkLoc.click();
  await signInButtonLoc.click();
  await expect(page.locator('//li[contains(text(), "email can")]')).toBeVisible();
 });

 test('5. Blank password field', async ({page}) => {
  const signInLinkLoc = page.locator('[href="/login"]');
  const signInButtonLoc = page.locator('.btn:has-text("Sign in")');
  const emailFieldLoc = page.locator('[placeholder="Email"]');

  await page.goto('/');
  await signInLinkLoc.click();
  await emailFieldLoc.fill("asdsa@gmail.com");
  await signInButtonLoc.click();
  await expect(page.locator('//li[contains(text(), "password can")]')).toBeVisible();
 });
