import { test, expect } from '@playwright/test';
  
test('1. Commenting process for article ', async ({ page }) => {
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
  const commentAreaLoc = page.locator('.card-block [placeholder="Write a comment..."]');
  const postCommentButtonLoc = page.locator('.card-footer .btn');
  
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
  let comment = 'Discovery';
  await commentAreaLoc.fill(comment)
  await postCommentButtonLoc.click();
  await expect(page.locator('.card .card-text')).toContainText(comment);
});

test('2. Delete comment from article ', async ({ page }) => {
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
  const commentAreaLoc = page.locator('.card-block [placeholder="Write a comment..."]');
  const postCommentButtonLoc = page.locator('.card-footer .btn');

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
  let comment = 'Discovery';
  await commentAreaLoc.fill(comment)
  await postCommentButtonLoc.click();
  await expect(page.locator('.card .card-text')).toContainText(comment);
  await page.locator('.card-footer .ion-trash-a').click();
  await expect(page.locator('.card-footer .ion-trash-a')).toBeHidden();

});



