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
- `backlog/` - Feature tracking and project management
  - `active.md` - Open backlog items
  - `release-semver.md` - Closed features organized by semantic version releases
- `.claude/` - Claude Code configuration
  - `commands/code/` - Custom slash commands for development workflow

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

### Website Development Guidelines

**Design System Requirements:**
- Use **pastel gradients** throughout the design
- Implement a **modern type system**
- Apply appropriate **whitespace** for clean layouts
- Add **subtle CSS animations** for interactivity
- Reference `refer/images/palette.png` for color palette (pastel tones)
- Integrate `refer/images/logo-circle.png` as the brand logo

**Content Sources:**
- Product specs: `refer/specs/brief.md`
- Visual references: `refer/images/navam-invest/*.png` (7 UI screenshots)
- External product info: https://github.com/navam-io/navam-invest
- Installation command: `pip install navam-invest`

**Site Structure:**
- Marketing landing page (homepage)
- Blog section with posts about Navam Invest

## Local Development

### Astro Development Server

This project uses **Astro 5.14.5** with Vue 3 components. To run the development server:

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
- **Deployment**: GitHub Pages (automated via GitHub Actions)

## Git Workflow & GitHub Pages Deployment

**CRITICAL: GitHub Pages deploys from the `main` branch only.**

### Standard Workflow for Commits

When committing and deploying changes:

```bash
# 1. Stage all changes
git add .

# 2. Commit with descriptive message
git commit -m "Your commit message"

# 3. Push to BOTH master and main branches
git push origin master
git push origin master:main
```

**Why push to both branches?**
- `master`: Development branch for local work
- `main`: Deployment branch monitored by GitHub Actions
- GitHub Pages only deploys from `main`

### Important Notes

- **Always push to `main`** to trigger GitHub Pages deployment
- GitHub Actions workflow (`Deploy to GitHub Pages`) runs on push to `main`
- Deployment typically takes 2-5 minutes
- Monitor deployment: https://github.com/navam-io/navam-io.github.io/actions

### Branch Synchronization

Both `main` and `master` should stay in sync. If they diverge:

```bash
# Force sync master to main
git checkout master
git push origin master:main --force

# Update local main
git checkout main
git reset --hard origin/main
```

### Custom Commit Command

Use `/code/commit` slash command which automatically:
1. Runs `git add .`
2. Creates an appropriate commit message
3. Commits changes
4. **Pushes to BOTH master and main branches** (ensuring deployment)

The repository has permissions preconfigured for: add, commit, push, checkout, log, reset, pull, rebase, merge, remote operations.

## Important Context

- **Target audience:** Retail investors interested in AI-powered investment tools
- **Product positioning:** Reference implementation showcasing TUI for sophisticated agentic AI applications
- **Documentation philosophy:** Fully documented, AI-generated products with prompts included
- **License:** MIT License (Copyright 2025 navam-io)
