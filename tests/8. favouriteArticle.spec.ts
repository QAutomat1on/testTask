import { test, expect } from '@playwright/test';
  
test('1. Favorite the article ', async ({ page }) => {
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
  const publishArticleButtonLoc = page.locator('[data-qa-id="editor-publish"]');
  const favoriteArticleLoc = page.locator('[data-qa-type="article-favorite"]');
  
  await page.goto('/');
  await signInLinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
  await emailFieldLoc.fill(email);
  await passwordFieldLoc.fill(password);
  await signInButtonLoc.click();
  await newArticleLoc.click();
  let articleNameText = 'Eniacoc';
  await articleTitleLoc.fill(articleNameText);
  await articleDescriptionLoc.fill('Obrigado amigo!');
  await articleTextAreaLoc.fill("DEA is coming! Watch out!");
  await publishArticleButtonLoc.click();
  await expect(page.locator(`[data-qa-id="article-title"]:has-text("${articleNameText}")`)).toBeVisible();
  await page.locator('.nav-item [href="/@2samsmith/"]').click();
  await favoriteArticleLoc.first().click();
  await expect(page.locator('[data-qa-type="article-favorite-count"]:has-text("1")')).toBeVisible();
});

test('2. Unfavorite the article ', async ({ page }) => {
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
  const publishArticleButtonLoc = page.locator('[data-qa-id="editor-publish"]');
  const favoriteArticleLoc = page.locator('[data-qa-type="article-favorite"]');

  
  await page.goto('/');
  await signInLinkLoc.click();
  await expect(page.locator("h1.text-xs-center")).toContainText('Sign in');
  await emailFieldLoc.fill(email);
  await passwordFieldLoc.fill(password);
  await signInButtonLoc.click();
  await newArticleLoc.click();
  let articleNameText = 'Eniacoc';
  await articleTitleLoc.fill(articleNameText);
  await articleDescriptionLoc.fill('Obrigado amigo!');
  await articleTextAreaLoc.fill("DEA is coming! Watch out!");
  await publishArticleButtonLoc.click();
  await expect(page.locator(`[data-qa-id="article-title"]:has-text("${articleNameText}")`)).toBeVisible();
  await page.locator('.nav-item [href="/@2samsmith/"]').click();
  await favoriteArticleLoc.first().click();
  await expect(page.locator('[data-qa-type="article-favorite-count"]:has-text("1")')).toBeVisible();
  await page.locator('[href="/@2samsmith/favorites"]').first().click();
  await page.locator('[data-qa-type="article-favorite-count"]:has-text("1")').click();
  await page.locator('.nav-item [href="/@2samsmith/"]').first().click();
  await expect(page.locator('.article-preview:has-text("No articles are here... yet.")')).toBeVisible;
});


