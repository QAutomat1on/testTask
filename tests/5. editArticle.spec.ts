import { test, expect } from '@playwright/test';

  test('1. Edit article name scenario ', async ({ page }) => {
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
    const bannerEditArticleLoc = page.locator('.banner [data-qa-id="article-edit"]');
    const publishArticleButtonLoc = page.locator('[data-qa-id="editor-publish"]');

    let articleName= 'Eniacoc';
    

    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill(articleName);
    await articleDescriptionLoc.fill('Obrigado amigo!');
    await articleTextAreaLoc.fill("DEA is coming! Watch out!");
    await page.locator('[data-qa-id="editor-publish"]').click();
    await bannerEditArticleLoc.click();
    await articleTitleLoc.fill(articleName='Eniacoc1');
    await publishArticleButtonLoc.click();
    await expect(page.locator(`[data-qa-id="article-title"]:has-text("${articleName}")`)).toBeVisible();

  });

  test('2. Edit article description scenario ', async ({ page }) => {
    let email = '2inmymind@gmail.com';
    let password = '2Password';
    const signInLinkLoc = page.locator('[href="/login"]');
    const emailFieldLoc = page.locator('//input[@type="email"]');
    const passwordFieldLoc = page.locator('[placeholder="Password"]');
    const signInButtonLoc = page.locator('.btn:has-text("Sign in")');
    const newArticleLoc = page.locator('//a[@href="/editor"]');
    const articleTitleLoc = page.locator('[data-qa-id="editor-title"]');
    const articleDescriptionLoc = page.locator('[data-qa-id="editor-description"]');
    const publishArticleButtonLoc = page.locator('[data-qa-id="editor-publish"]');
    const bannerEditArticleLoc = page.locator('.banner [data-qa-id="article-edit"]');

    let articleName= 'Eniacoc';
    let articleDescription = "Pumpkin"; 

    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill(articleName);
    await articleDescriptionLoc.fill(articleDescription);
    await publishArticleButtonLoc.click();
    await bannerEditArticleLoc.click();
    await articleDescriptionLoc.fill(articleDescription = "Pumpkin2");
    await publishArticleButtonLoc.click();
    await page.locator('.nav-link:has-text("Home")').click();
    const articleBlockLocator = page.locator('.preview-link');
    const descriptionListText = await page.locator('.preview-link [data-qa-type="preview-description"]').allTextContents();
    console.log(descriptionListText);
    const blockCount = await articleBlockLocator.count();
    console.log(blockCount);

    for ( let i = 0; i < blockCount; ++i)
      {
        if(await articleBlockLocator.nth(i).locator('p').textContent() === articleDescription)
          {
            await articleBlockLocator.nth(i).locator('[data-qa-type="article-favorite"]').click();
            break;
          }
      }
  await page.pause();
  });

  test('3. Edit article container scenario ', async ({ page }) => {
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
    const articleBodyLoc = page.locator('[data-qa-id="article-body"]');
    const bannerEditArticleLoc = page.locator('.banner [data-qa-id="article-edit"]');

    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill('StanLi');
    await articleTextAreaLoc.fill("DEA is coming! Watch out!");
    await publishArticleButtonLoc.click();
    await bannerEditArticleLoc.click();
    await articleDescriptionLoc.fill('Obrigado amigo!1');
    let bodyText = 'Youngster';
    await articleTextAreaLoc.fill(bodyText);
    await publishArticleButtonLoc.click();
    await expect(articleBodyLoc).toContainText(bodyText);
  });

  test('4. Edit article description scenario ', async ({ page }) => {
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
    const bannerEditArticleLoc = page.locator('.banner [data-qa-id="article-edit"]');

    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    await articleTitleLoc.fill('StanLi');
    await publishArticleButtonLoc.click();
    await bannerEditArticleLoc.click();
    await articleDescriptionLoc.fill('Obrigado amigo!1');
    await articleTextAreaLoc.fill("DEA is coming! Watch out!1");
    await publishArticleButtonLoc.click();
  });

  test('4. Edit article via another edit article button ', async ({ page }) => {
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
    const containerEditArticleLoc = page.locator('.container.page [data-qa-id="article-edit"]');
    const articleBodyLoc = page.locator('[data-qa-id="article-body"]');

    await page.goto('/');
    await signInLinkLoc.click();
    await emailFieldLoc.fill(email);
    await passwordFieldLoc.fill(password);
    await signInButtonLoc.click();
    await newArticleLoc.click();
    let articleNameText = 'StanLi';
    let articleDescriptionText = 'Young gun'; 
    let articleBodyText = 'Body check';
    await articleTitleLoc.fill(articleNameText);
    await articleDescriptionLoc.fill(articleDescriptionText);
    await articleTextAreaLoc.fill(articleBodyText);
    await publishArticleButtonLoc.click();
    await containerEditArticleLoc.click();
    await articleTitleLoc.fill(articleNameText = "StanLi 1");
    await articleDescriptionLoc.fill(articleDescriptionText = 'Young gun1');
    await articleTextAreaLoc.fill(articleBodyText = 'Body check1');
    await publishArticleButtonLoc.click();
    await expect(page.locator(`[data-qa-id="article-title"]:has-text("${articleNameText}")`)).toBeVisible();
    await expect(articleBodyLoc).toContainText(articleBodyText);
    await page.locator('.nav-item [href="/@2samsmith/"]').click();
    await expect(page.locator(`[data-qa-type="preview-description"]:has-text("${articleDescriptionText}")`)).toBeVisible();
  });





