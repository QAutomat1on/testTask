import { test, expect } from '@playwright/test';

test('1. Sign out process positive', async ({page}) => {
    await page.goto('/');
    let email = '2inmymind@gmail.com' ;
    let password = '2Password';
    const signInLinkLoc = page.locator('[href="/login"]');
    const emailFieldLoc = page.locator('[placeholder="Email"]');
    const passwordFieldLoc = page.locator('[type="password"]');
    const signInButtonLoc = page.locator('.btn:has-text("Sign in")');
    const signUpLinkLoc =  page.locator('[href="/register"]')
  
    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await expect(page.locator('//p[text()="A place to share your knowledge."]')).toBeVisible();
    await page.locator('[href="/settings"]').click();
    await page.locator('.btn-outline-danger').click();
    await signUpLinkLoc.isVisible();
   });