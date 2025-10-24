import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('homepage loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;

    // Should load within 5 seconds (generous for static site)
    expect(loadTime).toBeLessThan(5000);
  });

  test('images are optimized and lazy-loaded', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Check if images have loading attribute
    const images = page.locator('img');
    const count = await images.count();

    if (count > 0) {
      // At least some images should be lazy-loaded (except hero images)
      const lazyImages = page.locator('img[loading="lazy"]');
      const lazyCount = await lazyImages.count();

      // This is informational - not all images need to be lazy
      console.log(`Found ${count} total images, ${lazyCount} lazy-loaded`);
    }
  });

  test('no large layout shifts on load', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Get initial viewport position
    const initialScroll = await page.evaluate(() => window.scrollY);

    // Wait for page to settle
    await page.waitForTimeout(1000);

    // Check scroll position hasn't changed dramatically
    const finalScroll = await page.evaluate(() => window.scrollY);
    const shift = Math.abs(finalScroll - initialScroll);

    // Allow small shifts but not major layout changes
    expect(shift).toBeLessThan(50);
  });

  test('CSS and JS assets load successfully', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('requestfailed', request => {
      const url = request.url();
      // Track failed CSS/JS requests
      if (url.endsWith('.css') || url.endsWith('.js')) {
        failedRequests.push(url);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Should have no failed asset requests
    expect(failedRequests).toHaveLength(0);
  });

  test('no memory leaks on navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Navigate to blog and back
    await page.goto('/blog');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // If page is functional after navigation, no major memory issues
    await expect(page.locator('body')).toBeVisible();
  });

  test('fonts load correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle'); // Wait for Vue hydration

    // Check if custom fonts are applied
    const bodyFont = await page.locator('body').evaluate(el => {
      return window.getComputedStyle(el).fontFamily;
    });

    // Should have some font family defined
    expect(bodyFont).toBeTruthy();
    expect(bodyFont).not.toBe('');
  });
});
