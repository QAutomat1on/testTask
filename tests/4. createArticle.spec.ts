import { test, expect } from '@playwright/test';

test('1. Create article scenario ', async ({ page }) => {
    let email = '2inmymind@gmail.com';
    let password = '2Password';
    const signInLinkLoc = page.locator('[href="/login"]');
    const emailFieldLoc = page.locator('//input[@type="email"]');
    const passwordFieldLoc = page.locator('[placeholder="Password"]');
    const signInButtonLoc = page.locator('.btn:has-text("Sign in")');
    const newArticleLoc = page.locator('a[href="/editor"]');
    const articleTitleLoc = page.locator('[data-qa-id="editor-title"]');
    const articleDescriptionLoc = page.locator('[data-qa-id="editor-description"]');
    const articleTextAreaLoc = page.locator('[placeholder="Write your article (in markdown)"]');

    await page.goto('/');
    await signInLinkLoc.click();
    await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill('Eniacoc');
    await articleDescriptionLoc.fill('Obrigado amigo!');
    await articleTextAreaLoc.fill("DEA is coming! Watch out!");
    await page.locator('[data-qa-id="editor-publish"]').click();
    await expect(page.locator('[data-qa-id="article-title"]:has-text("Eniacoc")')).toBeVisible();
  });

  test('2. Create tag for article', async ({ page }) => {
    let email = '2inmymind@gmail.com';
    let password = '2Password';
    const signInLinkLoc = page.locator('[href="/login"]');
    const emailFieldLoc = page.locator('//input[@type="email"]');
    const passwordFieldLoc = page.locator('[placeholder="Password"]');
    const signInButtonLoc = page.locator('.btn:has-text("Sign in")');
    const newArticleLoc = page.locator('a[href="/editor"]');
    const articleTitleLoc = page.locator('[data-qa-id="editor-title"]');
    const articleDescriptionLoc = page.locator('[data-qa-id="editor-description"]');
    const articleTextAreaLoc = page.locator('[placeholder="Write your article (in markdown)"]');
    const enterTagLoc = page.locator('[data-qa-id="editor-tags"]');

    let tagName = "Nosebleed" ;

    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill('Eniacoc');
    await articleDescriptionLoc.fill('Obrigado amigo!');
    await articleTextAreaLoc.fill("DEA is coming! Watch out!");
    await enterTagLoc.fill(tagName);
    await page.keyboard.press('Enter');
    await page.locator('[data-qa-id="editor-publish"]').click();
    await expect(page.locator(`[data-qa-type="article-tag"]:has-text("${tagName}")`)).toBeVisible();
  });

  