import { test, expect } from '@playwright/test';

test('1. Create article scenario ', async ({ page }) => {
    let email = '4inmymind@gmail.com';
    let password = '4Password';
    const signInLinkLoc = page.locator('[href="/login"]');
    const emailFieldLoc = page.locator('//input[@type="email"]');
    const passwordFieldLoc = page.locator('[placeholder="Password"]');
    const signInButtonLoc = page.locator('.btn:has-text("Sign in")');
    const newArticleLoc = page.locator('a[href="/editor"]');
    const articleTitleLoc = page.locator('[data-qa-id="editor-title"]');
    const articleDescriptionLoc = page.locator('[data-qa-id="editor-description"]');
    const articleTextAreaLoc = page.locator('[placeholder="Write your article (in markdown)"]');
    const enterTagLoc = page.locator('[data-qa-id="editor-tags"]');

    await page.goto('/');
    await signInLinkLoc.click();
    await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill('What do you know about dark matter? ');
    await articleDescriptionLoc.fill('Shout out Pavlo!');
    await articleTextAreaLoc.fill("Test text !$");
    await enterTagLoc.fill("Pipeline");
    await page.keyboard.press('Enter');
    await page.locator('[data-qa-id="editor-publish"]').click();
    await page.locator('.navbar-brand').click();
    await expect(page.locator('//h1[text() ="What do you know about dark matter?"]')).toBeVisible(); //it doesn't work I didn't have time to solve this sh*t. So, it would be a busy weekend.

    //have a good one, Tutor.
    
  });
  