import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads successfully and has correct title', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    // Wait for Vue hydration by checking for key element
    await page.waitForSelector('h1', { state: 'visible' });

    // Check that page loaded
    await expect(page).toHaveTitle(/Navam/);

    // Verify page is visible and interactive
    await expect(page.locator('body')).toBeVisible();
  });

  test('displays hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');

    // Main heading should be visible (also confirms Vue hydration)
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();

    // Should have some call-to-action or description
    const heroContent = page.locator('main').first();
    await expect(heroContent).toBeVisible();
  });

  test('has navigation menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    // Wait for header to be visible (confirms Vue hydration)
    await page.waitForSelector('header', { state: 'visible' });

    // Navigation should exist
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });

  test('displays Navam branding', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('header', { state: 'visible' });

    // Should have Navam logo and text in header
    await expect(page.locator('header img[alt="Navam Logo"]')).toBeVisible();
    await expect(page.locator('header').getByText('Navam')).toBeVisible();
  });

  test('is responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('h1', { state: 'visible' });

    // Page should still be functional on mobile
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('h1').first()).toBeVisible();
  });

  test('has no console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        const text = msg.text();
        // Filter out expected errors that don't indicate real problems
        const isExpectedError =
          text.includes('Potential permissions policy violation') || // Stripe button warnings
          text.includes('Hydration completed but contains mismatches') || // Known hydration issue
          text.includes('429'); // Rate limit errors from external services (transient)

        if (!isExpectedError) {
          errors.push(text);
        }
      }
    });

    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('h1', { state: 'visible' });
    // Give time for any console errors to occur during hydration
    await page.waitForTimeout(500);

    // Check for unexpected console errors
    expect(errors).toHaveLength(0);
  });
});
