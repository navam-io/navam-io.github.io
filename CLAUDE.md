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

To test the website locally, use the built-in development server:

```bash
python3 server.py
```

This starts a server on `http://localhost:8000` with:
- Automatic directory index serving
- CORS headers for testing
- No caching (always fresh content)
- Clear logging output

Alternative: Use Python's built-in server with `python3 -m http.server 8000`

## Key Architecture Decisions

This is a **static website** project with no build tools or complex frameworks:
- Pure HTML/CSS/JS stack
- GitHub Pages deployment ready
- Python development server for local testing

## Git Workflow

The repository uses:
- Main branch: `main`
- Permissions preconfigured for git operations (add, commit, push, checkout, log, reset, pull, rebase)

## Important Context

- **Target audience:** Retail investors interested in AI-powered investment tools
- **Product positioning:** Reference implementation showcasing TUI for sophisticated agentic AI applications
- **Documentation philosophy:** Fully documented, AI-generated products with prompts included
- **License:** MIT License (Copyright 2025 navam-io)
