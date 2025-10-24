# Browser Tests

Playwright end-to-end tests for navam.io static site.

## Test Coverage

### Homepage Tests (`homepage.spec.ts`)
- Page loads successfully with correct title
- Hero section displays properly
- Navigation menu is visible
- Branding is consistent
- Mobile responsive design
- No console errors

### Blog Tests (`blog.spec.ts`)
- Blog index page loads
- Blog posts are displayed
- Post titles and links work
- Individual posts are accessible
- Mobile responsive blog layout

### Accessibility Tests (`accessibility.spec.ts`)
- Proper heading hierarchy (single h1)
- Images have alt text
- Links have accessible names
- Language attribute is set
- Keyboard navigation works
- Color contrast checks

### Performance Tests (`performance.spec.ts`)
- Page load time under 5 seconds
- Image optimization (lazy loading)
- No layout shifts on load
- CSS/JS assets load successfully
- No memory leaks on navigation
- Fonts load correctly

## Running Tests

### Quick Start

```bash
# Install Playwright (first time only)
npm install -D @playwright/test
npx playwright install

# Run all tests
npx playwright test

# Run tests in UI mode (interactive)
npx playwright test --ui

# Run specific test file
npx playwright test tests/homepage.spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed

# Debug a specific test
npx playwright test --debug tests/homepage.spec.ts
```

### Using Custom Slash Command

```bash
# In Claude Code
/code/browser
```

This command will:
1. Run the full test suite
2. Analyze failures
3. Report bugs and issues
4. Offer to fix identified problems

## Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## Configuration

Tests are configured in `playwright.config.ts`:
- Runs against production build (`npm run preview`)
- Port: 4321
- Screenshots on failure
- Video recording on failure
- Traces on retry

## CI/CD Integration

Tests can run in GitHub Actions:

```yaml
- name: Install Playwright
  run: npx playwright install --with-deps

- name: Run tests
  run: npx playwright test

- name: Upload test results
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: playwright-report/
```

## Writing New Tests

Follow these patterns:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something specific', async ({ page }) => {
    await page.goto('/your-page');

    // Arrange: Set up test state
    const element = page.locator('selector');

    // Act: Perform action
    await element.click();

    // Assert: Verify outcome
    await expect(page.locator('result')).toBeVisible();
  });
});
```

## Best Practices

1. **Use semantic selectors**: Prefer `getByRole`, `getByText` over CSS selectors
2. **Wait for elements**: Always wait for async operations with `await`
3. **Test user flows**: Test real user scenarios, not implementation details
4. **Keep tests independent**: Each test should run in isolation
5. **Use descriptive names**: Test names should explain what they verify
6. **Group related tests**: Use `test.describe` for organization

## Troubleshooting

### Tests failing locally

```bash
# Update browsers
npx playwright install

# Clear cache
rm -rf test-results playwright-report

# Run with debug logs
DEBUG=pw:api npx playwright test
```

### Flaky tests

- Add explicit waits: `await page.waitForLoadState('networkidle')`
- Use `toHaveCount()` before accessing nth element
- Increase timeout for slow operations

### Port conflicts

If port 4321 is in use:
1. Stop existing dev server
2. Or modify `playwright.config.ts` to use different port
