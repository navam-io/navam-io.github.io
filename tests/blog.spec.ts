import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('blog index page loads', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('load');
    // Wait for key element to confirm Vue hydration
    await page.waitForSelector('h1, h2', { state: 'visible' });

    // Should have a heading about blog or posts
    const heading = page.locator('h1, h2').first();
    await expect(heading).toBeVisible();

    // Page should be loaded
    await expect(page.locator('body')).toBeVisible();
  });

  test('displays blog posts', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('load');
    // Wait for blog posts to be visible (confirms Vue hydration)
    await page.waitForSelector('article, [class*="post"], [class*="card"]', { state: 'visible' });

    // Should have at least one blog post or article
    const posts = page.locator('article, [class*="post"], [class*="card"]');
    await expect(posts.first()).toBeVisible();
  });

  test('blog posts have titles and links', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('load');
    await page.waitForSelector('article, [class*="post"]', { state: 'visible' });

    // Each post should have a title (usually in h2-h4)
    const postTitles = page.locator('article h2, article h3, article h4, [class*="post"] h2, [class*="post"] h3');
    await expect(postTitles.first()).toBeVisible();

    // Posts should be clickable (have links)
    const postLinks = page.locator('article a, [class*="post"] a').first();
    await expect(postLinks).toBeVisible();
  });

  test('can navigate to individual blog post', async ({ page }) => {
    await page.goto('/blog');
    await page.waitForLoadState('load');
    await page.waitForSelector('article a, [class*="post"] a', { state: 'visible' });

    // Click on first blog post link
    const firstPostLink = page.locator('article a, [class*="post"] a').first();
    await firstPostLink.click();

    // Should navigate to post page
    await page.waitForLoadState('load');
    // Wait for post content to be visible
    await page.waitForSelector('article, main', { state: 'visible' });

    // Post page should have content (select first to handle multiple matches)
    const postContent = page.locator('article, main').first();
    await expect(postContent).toBeVisible();
  });

  test('blog posts are responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/blog');
    await page.waitForLoadState('load');
    await page.waitForSelector('article, [class*="post"]', { state: 'visible' });

    // Blog should be readable on mobile
    const posts = page.locator('article, [class*="post"]').first();
    await expect(posts).toBeVisible();
  });
});
