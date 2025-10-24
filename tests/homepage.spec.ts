import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully and has correct title', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Check that page loaded
    await expect(page).toHaveTitle(/Navam/);

    // Verify page is visible and interactive
    await expect(page.locator('body')).toBeVisible();
  });

  test('displays hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Main heading should be visible
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();

    // Should have some call-to-action or description
    const heroContent = page.locator('main').first();
    await expect(heroContent).toBeVisible();
  });

  test('has navigation menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Navigation should exist
    const nav = page.locator('nav, header').first();
    await expect(nav).toBeVisible();
  });

  test('displays Navam branding', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Should have Navam mentioned in the page
    await expect(page.locator('text=/Navam/i').first()).toBeVisible();
  });

  test('is responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Page should still be functional on mobile
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('has no console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for console errors
    expect(errors).toHaveLength(0);
  });
});
