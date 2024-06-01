import { test, expect } from '@playwright/test';

test('1. Sign in page availability ', async ({ page }) => {

    let email = '4inmymind@gmail.com';
    let password = '4Password';
    const signInLinkLoc = page.locator('[href="/login"]');
    const emailFieldLoc = page.locator('//input[@type="email"]');
    const passwordFieldLoc = page.locator('[placeholder="Password"]');
    const newArticeLoc = page.locator('//a[@href="/editor"]');

    await page.goto('/');
    await signInLinkLoc.click();
    await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
    await page.goto('/');
    await signInLinkLoc.click();
    await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInLinkLoc.click();
    await newArticeLoc.click();

  });
  