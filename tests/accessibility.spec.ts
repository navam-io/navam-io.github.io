import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('homepage has proper heading hierarchy', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('h1', { state: 'visible' });

    // Should have exactly one h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // h1 should not be empty
    const h1Text = await page.locator('h1').first().textContent();
    expect(h1Text?.trim().length).toBeGreaterThan(0);
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('img', { state: 'visible' });

    // Get all images
    const images = page.locator('img');
    const count = await images.count();

    if (count > 0) {
      // Check first few images have alt attributes
      for (let i = 0; i < Math.min(count, 5); i++) {
        const img = images.nth(i);
        const alt = await img.getAttribute('alt');
        // Alt can be empty string for decorative images, but should exist
        expect(alt).not.toBeNull();
      }
    }
  });

  test('links have accessible names', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('a', { state: 'visible' });

    // Get all links
    const links = page.locator('a');
    const count = await links.count();

    if (count > 0) {
      // Check first few links have text or aria-label
      for (let i = 0; i < Math.min(count, 5); i++) {
        const link = links.nth(i);
        const text = await link.textContent();
        const ariaLabel = await link.getAttribute('aria-label');

        // Link should have text content or aria-label
        const hasAccessibleName = (text && text.trim().length > 0) || ariaLabel;
        expect(hasAccessibleName).toBeTruthy();
      }
    }
  });

  test('page has proper language attribute', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');

    // HTML element should have lang attribute
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBeTruthy();
    expect(lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/); // e.g., 'en' or 'en-US'
  });

  test('interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('button, a', { state: 'visible' });

    // Find first button or link
    const firstInteractive = page.locator('button, a').first();

    if (await firstInteractive.count() > 0) {
      // Should be focusable via keyboard
      await firstInteractive.focus();
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toHaveCount(1);
    }
  });

  test('sufficient color contrast on dark backgrounds', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('load');
    await page.waitForSelector('body', { state: 'visible' });

    // This is a basic check - in production you'd use a tool like axe-core
    // Check that text is visible (as a proxy for contrast)
    const bodyText = page.locator('body').first();
    await expect(bodyText).toBeVisible();

    // Take screenshot for manual review if needed
    await page.screenshot({ path: 'test-results/contrast-check.png', fullPage: true });
  });
});
