# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **navam.io** static website repository, intended for GitHub Pages deployment. The site serves as the marketing landing page and blog for Navam, a product studio exploring frontier interfaces for AI↔AI, AI↔Human, and AI↔World interactions.

The flagship product is **Navam Invest** - an AI-powered investment intelligence tool for retail investors with a Text User Interface (TUI).

## Repository Structure

- `refer/` - Reference materials including specs and visual assets
  - `refer/specs/brief.md` - Product and business specifications
  - `refer/images/` - Brand assets and product screenshots
    - `logo-circle.png` - Navam logo (750KB)
    - `palette.png` - Color palette reference (1.9MB)
    - `navam-invest/` - Product UI screenshots (7 images showing various app states)
  - `refer/astro-docs/` - Astro v5.14.5 documentation (244KB total, LLM-optimized)
    - `README.md` - Documentation map and usage guide
    - `getting-started.md` - Quick start and introduction
    - `develop-and-build.md` - Dev server, build process, workflow
    - `integration-vue.md` - Vue 3 integration (@astrojs/vue v5.1.1)
    - `integration-mdx.md` - MDX integration (@astrojs/mdx v4.3.7)
    - `integration-tailwind.md` - Tailwind CSS integration
    - `content-collections.md` - Type-safe content collections API
    - `markdown-content.md` - Working with markdown
    - `routing.md` - File-based routing and dynamic routes
    - `api-reference.md` - Complete Astro API reference
    - `configuration-reference.md` - astro.config.mjs options
    - `upgrade-to-v5.md` - v5 breaking changes and migration
- `backlog/` - Feature tracking and project management
  - `active.md` - Open backlog items
  - `release-semver.md` - Closed features organized by semantic version releases
- `.claude/` - Claude Code configuration
  - `commands/code/` - Custom slash commands for development workflow
- `tests/` - Playwright end-to-end browser tests
  - `homepage.spec.ts` - Homepage functionality and display tests
  - `blog.spec.ts` - Blog navigation and content tests
  - `accessibility.spec.ts` - WCAG compliance and a11y tests
  - `performance.spec.ts` - Load time and optimization tests
  - `README.md` - Testing documentation and best practices

## Development Workflow

### Custom Slash Commands

This project uses custom Claude Code commands for streamlined development:

1. **`/code/develop`** - Primary development workflow:
   - Reads `backlog/active.md` to understand next feature
   - Implements the feature
   - Marks complete and moves to appropriate `backlog/release-semver.md`

2. **`/code/refer [URL]`** - Documentation ingestion:
   - Browses external documentation websites
   - Converts to compact markdown without losing information
   - Saves to appropriate `refer/` subfolder
   - Updates CLAUDE.md with references

3. **`/code/backlog`** - Backlog cleanup:
   - Ensures `backlog/active.md` contains only open items
   - Moves closed features to `backlog/release-semver.md` files
   - Removes unnecessary backlog files

4. **`/code/commit`** - Standard git commit workflow

5. **`/code/browser`** - Browser testing workflow:
   - Runs Playwright end-to-end tests
   - Analyzes test results and failures
   - Reports bugs with error messages and screenshots
   - Offers to fix identified issues
   - See `tests/README.md` for detailed testing documentation

### Browser Testing

**Testing Stack:**
- **Framework:** Playwright (E2E browser testing)
- **Configuration:** `playwright.config.ts`
- **Tests:** `tests/` directory
- **Reports:** HTML reports with screenshots and videos on failure

**Test Coverage:**
- **Homepage:** Load time, hero section, navigation, branding, mobile responsive
- **Blog:** Index page, post listings, individual posts, mobile layout
- **Accessibility:** Heading hierarchy, alt text, keyboard navigation, ARIA labels
- **Performance:** Load times, asset optimization, layout shifts, memory leaks

**Quick Commands:**
```bash
# Run all tests
npx playwright test

# Interactive UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report

# Debug specific test
npx playwright test --debug tests/homepage.spec.ts
```

**Using `/code/browser` slash command:**
1. Automatically runs full test suite
2. Analyzes failures and groups by category
3. Provides detailed error messages with file locations
4. Captures screenshots for visual debugging
5. Suggests fixes for common issues

**First-time setup:**
```bash
npm install -D @playwright/test
npx playwright install
```

### Browser Testing Skill

**Skill location:** `.claude/skills/browser-testing/`

This project has a dedicated **Browser Testing Skill** that automatically provides:
- Project-specific Playwright patterns for Astro + Vue stack
- Vue component hydration testing strategies
- Debugging guidance for common test failures
- Selector best practices for this site structure
- WCAG accessibility testing patterns

The skill triggers automatically when working on tests in `tests/` directory and loads relevant guidance based on your specific task. It emphasizes:
- **Vue hydration patterns** - Critical `client:*` directive testing
- **Semantic selectors** - Role-based, accessibility-friendly
- **Content collections testing** - Blog post rendering from Astro collections
- **Design system verification** - Gradient and glass morphism testing

**Direct documentation access** (when needed outside skill context):
- Complete skill: `.claude/skills/browser-testing/`
- Skill overview: `.claude/skills/browser-testing/README.md`

### Website Development Guidelines

**Design System Requirements (Apple-inspired, Bold, Professional):**
- Use **dark, vivid gradients** (600-900 range): `from-pink-900 to-purple-900`, `from-blue-600 to-indigo-600`
- Implement **glass morphism**: `backdrop-blur-xl` with transparency (`bg-white/10`)
- Apply **strong contrast**: Dark backgrounds, white text, bold CTAs
- Use **epic typography**: `font-black` for headings, tight letter-spacing
- Add **scale & shadow animations**: `hover:scale-105`, `shadow-2xl`, colored glows
- Reference existing components: `Card.vue`, `Hero.vue`, `Button.vue` for patterns
- **NOT pastel** - Bold, saturated, professional aesthetic

**Content Sources:**
- Product specs: `refer/specs/brief.md`
- Visual references: `refer/images/navam-invest/*.png` (7 UI screenshots)
- External product info: https://github.com/navam-io/navam-invest
- Installation command: `pip install navam-invest`

**Site Structure:**
- Marketing landing page (homepage)
- Blog section with posts about Navam Invest

## Local Development

**IMPORTANT: DO NOT spawn dev server automatically.**

The user manages their own build and preview process in a separate terminal. Only start the dev server if:
1. You need it for your own testing, OR
2. The user explicitly asks you to start it

### Astro Development Skill

**Skill location:** `.claude/skills/astro/`

This project has a dedicated **Astro Development Skill** that automatically provides:
- Project-specific Astro patterns with design system enforcement
- Progressive disclosure from `refer/astro-docs/` (244KB comprehensive documentation)
- Curated guidance for Vue 3 integration, content collections, routing, and styling
- Build configuration and deployment patterns

The skill triggers automatically when working on Astro code and loads relevant documentation based on your specific task. It enforces:
- **Pastel gradient** design system
- **Vue client directives** for proper hydration
- **Type-safe content collections** for blog posts
- **Static site generation** optimized for GitHub Pages

**Direct documentation access** (when needed outside skill context):
- Complete docs: `refer/astro-docs/`
- Documentation map: `refer/astro-docs/README.md`

### Astro Development Server

This project uses **Astro 5.14.5** with Vue 3 components. To run the development server (only when needed):

```bash
npm run dev
```

This starts the Astro dev server on `http://localhost:4321/` with:
- Hot module replacement (HMR)
- Vue component hydration
- Content collections validation
- Tailwind CSS processing
- Fast refresh on file changes

### Building for Production

```bash
npm run build
```

This creates optimized static files in `dist/` directory.

## Key Architecture Decisions

This is an **Astro static site** with the following stack:
- **Framework**: Astro 5.14.5 (Static Site Generator)
- **UI Components**: Vue 3 with client-side hydration
- **Styling**: Tailwind CSS + custom CSS properties
- **Content**: Astro content collections for type-safe blog management
- **Testing**: Playwright (E2E browser tests)
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Git Workflow & GitHub Pages Deployment

### 🚨 CRITICAL DEPLOYMENT POLICY 🚨

**DO NOT PUSH TO `main` BRANCH UNLESS EXPLICITLY INSTRUCTED BY USER.**

**Mandatory Workflow:**
1. Make code changes and commit locally
2. Build the site: `npm run build`
3. Preview locally (user will do this in separate terminal)
4. **WAIT for user to confirm "publish ready"**
5. Only then push to `main` to trigger deployment

**Reasoning:**
- Pushing to `main` immediately triggers GitHub Pages deployment
- User must verify changes locally before publishing to production
- Prevents publishing broken or unwanted changes to live site

### Standard Workflow for Local Development

**Step 1: Commit Changes Locally**
```bash
# Stage all changes
git add .

# Commit with descriptive message (but DO NOT push yet!)
git commit -m "Your commit message"
```

**Step 2: Build and Test Locally**
```bash
# Build the site
npm run build

# User will preview in separate terminal
# DO NOT spawn dev server automatically
```

**Step 3: Wait for User Approval**
- User will test the built site locally
- User will explicitly instruct: "publish" or "deploy" when ready

**Step 4: Deploy to Production (ONLY when instructed)**
```bash
# Only run this when user says "publish" or "deploy"
git push origin main
```

### GitHub Actions Deployment

- **Trigger:** Push to `main` branch
- **Workflow:** Deploy to GitHub Pages (automated)
- **Duration:** Typically 2-5 minutes
- **Monitor:** https://github.com/navam-io/navam-io.github.io/actions

### Branch Structure

- `main`: Production deployment branch (protected - only push when instructed)
- `master`: Not currently used (repository is on `main` branch)

### Important Reminders

- ✅ **DO**: Build locally, commit locally, test locally
- ✅ **DO**: Wait for explicit user instruction before deploying
- ❌ **DO NOT**: Push to `main` automatically after committing
- ❌ **DO NOT**: Deploy without user confirmation
- ❌ **DO NOT**: Assume changes are ready to publish

The repository has permissions preconfigured for: add, commit, push, checkout, log, reset, pull, rebase, merge, remote operations.

## Important Context

- **Target audience:** Retail investors interested in AI-powered investment tools
- **Product positioning:** Reference implementation showcasing TUI for sophisticated agentic AI applications
- **Documentation philosophy:** Fully documented, AI-generated products with prompts included
- **License:** MIT License (Copyright 2025 navam-io)
