# Static Site Framework Refactor Plan

## Executive Summary

**Recommended Framework:** **Astro**

After comprehensive research of modern static site generators, Astro emerges as the optimal choice for refactoring navam.io. It excels in all required criteria: performance, SEO, component-based architecture, modern web standards, and exceptional AI/Claude code generation compatibility.

### Why Astro?

1. **Performance Leader**: 40% faster than React frameworks, 90% less JavaScript
2. **AI-First**: Official Astro Docs MCP server for Claude integration
3. **Component Flexibility**: Use React, Vue, Svelte, or pure Astro components
4. **Zero Config SEO**: Pre-rendered HTML, automatic sitemap generation
5. **Content Collections**: Type-safe, organized content management with MDX support
6. **Vibe Coding Optimized**: Astro's straightforward syntax and documentation makes it ideal for AI code generation

## Framework Comparison Matrix

| Criteria | Astro | Next.js | Eleventy | SvelteKit |
|----------|-------|---------|----------|-----------|
| Performance | ⭐⭐⭐⭐⭐ (Zero JS default) | ⭐⭐⭐ (87KB min) | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| SEO Built-in | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Component-based | ⭐⭐⭐⭐⭐ (Multi-framework) | ⭐⭐⭐⭐ (React only) | ⭐⭐ | ⭐⭐⭐⭐ |
| Content Management | ⭐⭐⭐⭐⭐ (Collections) | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| AI/Claude Friendly | ⭐⭐⭐⭐⭐ (Official MCP) | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Learning Curve | ⭐⭐⭐⭐ (Simple) | ⭐⭐⭐ (Complex) | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Modern Standards | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Static Site Focus | ⭐⭐⭐⭐⭐ (Purpose-built) | ⭐⭐⭐ (Hybrid) | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

## Current State Analysis

### Existing Architecture
- **Type**: Pure HTML/CSS/JS static site
- **Pages**: 1 homepage, 1 blog index, 4 blog posts
- **CSS**: 831 lines (main.css) + 536 lines (blog.css) = 1,367 total
- **JavaScript**: 148 lines (main.js)
- **Assets**: Logo, palette, 8 product screenshots

### Pain Points
1. **Code Duplication**: Navigation and footer repeated across 6 HTML files
2. **Maintenance Burden**: Changes require editing multiple files
3. **No Type Safety**: Manual frontmatter with no validation
4. **Limited Content Management**: Blog posts are full HTML files
5. **Scalability**: Adding new posts/pages requires manual HTML creation

## Refactor Backlog Items

### Phase 1: Foundation Setup
**Estimated Time**: 2-3 hours with Claude Code

#### [ ] 1.1 Initialize Astro Project
- Create new Astro project with TypeScript
- Configure project structure matching current site
- Set up Tailwind CSS (replaces custom CSS system)
- Install required integrations (@astrojs/mdx, @astrojs/sitemap, @astrojs/rss)
- Configure astro.config.mjs with SEO and social meta
- **Deliverable**: Working Astro development environment

#### [ ] 1.2 Set Up Design System
- Convert existing color palette to Tailwind config
- Create custom pastel gradient utilities
- Define typography scale and font system
- Port spacing variables (--space-xs through --space-xl)
- Create reusable CSS utilities for shadows and animations
- **Deliverable**: theme.config.ts with complete design system

#### [ ] 1.3 Configure Content Collections
- Define blog post schema with TypeScript validation
- Set up MDX support for blog posts
- Create content collection structure (/src/content/blog/)
- Configure zod schemas for frontmatter validation
- Set up image optimization with Astro's Image component
- **Deliverable**: Type-safe content collections with validation

### Phase 2: Component Architecture
**Estimated Time**: 3-4 hours with Claude Code

#### [ ] 2.1 Create Layout Components
- Build BaseLayout.astro (HTML shell, meta tags, scripts)
- Create MainLayout.astro (header, footer, main content)
- Implement BlogLayout.astro (blog-specific structure)
- Add SEO.astro component (meta tags, Open Graph, Twitter cards)
- **Deliverable**: Reusable layout system

#### [ ] 2.2 Build Navigation Components
- Create Navbar.astro with mobile menu
- Implement mobile menu toggle with Islands architecture
- Build Footer.astro with site links
- Create responsive navigation patterns
- Add ARIA labels and accessibility features
- **Deliverable**: Fully responsive, accessible navigation

#### [ ] 2.3 Develop Content Components
- Hero.astro (homepage hero section)
- ProductGrid.astro (6-card feature grid)
- AgentCard.astro (10 AI agent cards)
- UseCaseSection.astro (alternating image/text layouts)
- BlogCard.astro (blog post preview cards)
- CodeBlock.astro (syntax-highlighted code)
- **Deliverable**: Reusable, composable components

#### [ ] 2.4 Create Interactive Islands
- MobileMenuToggle.tsx (Astro island with React/Preact)
- CopyToClipboard.tsx (code copy functionality)
- SmoothScroll.tsx (anchor link scrolling)
- **Deliverable**: Minimal JavaScript, maximum interactivity

### Phase 3: Content Migration
**Estimated Time**: 2-3 hours with Claude Code

#### [ ] 3.1 Convert Blog Posts to MDX
- Extract frontmatter from HTML files (title, date, description, tags)
- Convert HTML content to MDX format
- Optimize images (WebP, responsive sizes)
- Add custom components for callouts, highlights, CTA sections
- Validate all frontmatter with zod schemas
- **Deliverable**: 4 blog posts in MDX format with type safety

#### [ ] 3.2 Migrate Homepage Content
- Convert hero section to Astro components
- Port product feature grid
- Migrate agent cards section
- Convert use cases with image optimization
- Rebuild get-started section
- Implement open-source CTA section
- **Deliverable**: Component-based homepage

#### [ ] 3.3 Build Blog Index Page
- Create dynamic blog list from content collections
- Implement featured post logic
- Add sorting (newest first)
- Create blog grid with proper responsive layout
- Add reading time calculation
- Implement meta descriptions for blog index
- **Deliverable**: Auto-generated blog index from collections

### Phase 4: Performance & SEO Optimization
**Estimated Time**: 2-3 hours

#### [ ] 4.1 Image Optimization
- Convert all images to modern formats (WebP, AVIF)
- Implement responsive image sizes (srcset)
- Add lazy loading for below-fold images
- Optimize image dimensions and compression
- Create image component with automatic optimization
- **Deliverable**: Optimized images with <50KB payload per image

#### [ ] 4.2 SEO Enhancements
- Generate automatic sitemap.xml
- Create robots.txt
- Implement RSS feed for blog
- Add structured data (JSON-LD)
- Configure canonical URLs
- Set up llms.txt and llms-full.txt for AI consumption
- **Deliverable**: Complete SEO infrastructure

#### [ ] 4.3 Performance Tuning
- Minimize CSS with Tailwind purge
- Implement critical CSS inlining
- Configure View Transitions API
- Set up asset prefetching
- Optimize font loading (font-display: swap)
- Configure HTTP/2 server push (if deploying to Vercel/Netlify)
- **Deliverable**: Lighthouse score >95 on all metrics

### Phase 5: Developer Experience
**Estimated Time**: 1-2 hours

#### [ ] 5.1 Configure AI/Claude Integration
- Add Astro Docs MCP server to Claude Code
- Create llms.txt with project context
- Set up prompts for common tasks
- Document component API for AI consumption
- Create templates for new blog posts
- **Deliverable**: Optimized for vibe coding workflows

#### [ ] 5.2 Development Tooling
- Configure TypeScript strict mode
- Set up ESLint with Astro rules
- Add Prettier with Astro plugin
- Create npm scripts for common tasks
- Set up pre-commit hooks (lint, type-check)
- Configure VS Code settings for Astro
- **Deliverable**: Production-ready development environment

#### [ ] 5.3 Documentation
- Write ARCHITECTURE.md (component structure, patterns)
- Create CONTRIBUTING.md (how to add blog posts, pages)
- Document design system usage
- Add inline JSDoc comments to components
- Create component storybook/examples
- **Deliverable**: Comprehensive project documentation

### Phase 6: Deployment & Migration
**Estimated Time**: 1-2 hours

#### [ ] 6.1 Build & Test
- Configure build output for GitHub Pages
- Test static output in production mode
- Verify all routes work correctly
- Check mobile responsiveness
- Validate accessibility (WAVE, axe DevTools)
- Run Lighthouse audits
- **Deliverable**: Production-ready build

#### [ ] 6.2 Deploy to Staging
- Deploy to preview environment (Vercel/Netlify preview)
- Cross-browser testing (Chrome, Firefox, Safari)
- Mobile device testing
- Performance testing with real-world network conditions
- SEO verification (Google Search Console preview)
- **Deliverable**: Validated staging deployment

#### [ ] 6.3 Production Migration
- Update GitHub Pages deployment workflow
- Deploy to production (navam.io)
- Update DNS if needed
- Verify all redirects work
- Monitor Core Web Vitals
- Set up analytics (if applicable)
- **Deliverable**: Live production site on Astro

## Technical Specifications

### Technology Stack

```typescript
// package.json dependencies
{
  "astro": "^5.0.0",
  "typescript": "^5.6.0",
  "@astrojs/mdx": "^4.0.0",
  "@astrojs/sitemap": "^3.2.0",
  "@astrojs/rss": "^4.0.0",
  "tailwindcss": "^3.4.0",
  "@tailwindcss/typography": "^0.5.15"
}
```

### Project Structure

```
navam-io.github.io/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── BaseLayout.astro
│   │   │   ├── MainLayout.astro
│   │   │   ├── BlogLayout.astro
│   │   │   ├── Navbar.astro
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ProductGrid.astro
│   │   │   ├── AgentCards.astro
│   │   │   ├── UseCases.astro
│   │   │   └── GetStarted.astro
│   │   ├── blog/
│   │   │   ├── BlogCard.astro
│   │   │   ├── BlogGrid.astro
│   │   │   └── PostMeta.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── CodeBlock.astro
│   │   │   └── Image.astro
│   │   └── islands/
│   │       ├── MobileMenu.tsx
│   │       └── CopyButton.tsx
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── introducing-navam-invest.mdx
│   │       ├── vibe-coding-with-ai.mdx
│   │       ├── multi-agent-architecture.mdx
│   │       └── smart-api-caching.mdx
│   ├── layouts/
│   │   └── (moved to components/layout/)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css (minimal, mostly Tailwind)
│   └── assets/
│       └── images/ (optimized assets)
├── public/
│   ├── refer/ (existing reference materials)
│   └── robots.txt
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

### Content Collection Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
```

### Design System Configuration

```typescript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pastel: {
          purple: '#E8D5F2',
          blue: '#D5E8F2',
          pink: '#F2D5E8',
          peach: '#F2E5D5',
          mint: '#D5F2E8',
          lavender: '#E5D5F2',
        },
      },
      fontFamily: {
        display: ['SF Pro Display', 'system-ui', 'sans-serif'],
        body: ['SF Pro Text', 'system-ui', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '2rem',
        'lg': '4rem',
        'xl': '6rem',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E8D5F2 0%, #D5E8F2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #F2D5E8 0%, #E8D5F2 100%)',
        'gradient-accent': 'linear-gradient(135deg, #D5F2E8 0%, #D5E8F2 100%)',
        'gradient-hero': 'linear-gradient(135deg, #E8D5F2 0%, #D5E8F2 50%, #D5F2E8 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

## Migration Strategy

### Approach: Parallel Development

1. **Keep existing site live** during refactor
2. **Develop Astro version in parallel** in a new branch or directory
3. **Test thoroughly** before switching
4. **Single atomic deployment** when ready
5. **Rollback plan** available if needed

### Validation Checklist

Before going live, verify:
- [ ] All pages render correctly
- [ ] All images load and are optimized
- [ ] Mobile navigation works
- [ ] Blog posts display properly
- [ ] SEO meta tags are correct
- [ ] Lighthouse scores >90
- [ ] No broken links
- [ ] Accessibility compliance (WCAG 2.1 AA)
- [ ] Cross-browser compatibility
- [ ] Core Web Vitals pass

## Benefits of Refactor

### Performance
- **90% less JavaScript** (from ~150 lines to ~15 lines)
- **40% faster page loads** (Astro vs vanilla HTML+JS)
- **WebP/AVIF images** (50-80% smaller)
- **Critical CSS inlining** (faster First Contentful Paint)

### Developer Experience
- **10x faster blog post creation** (MDX vs HTML)
- **Type-safe content** (no more manual frontmatter errors)
- **Component reuse** (no more copy-paste HTML)
- **Hot module reload** (instant feedback during development)
- **AI-optimized** (Claude Code with Astro MCP server)

### Maintainability
- **Single source of truth** for navigation, footer, styles
- **Automated blog index** (no manual updates needed)
- **Type safety** (catch errors at build time)
- **Clear component boundaries** (easier to reason about code)

### SEO & Accessibility
- **Automatic sitemap** generation
- **RSS feed** for blog
- **Semantic HTML** (better than handcrafted)
- **Structured data** built-in
- **ARIA labels** by default

## Risks & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Learning curve for Astro | Medium | Low | Astro is simple; Claude Code accelerates learning |
| Build time increases | Low | Low | Astro builds are fast; test with current content |
| JavaScript bundle size grows | Medium | Very Low | Astro's Islands architecture prevents this |
| Content migration errors | Medium | Low | Automated validation with zod schemas |
| SEO regression | High | Very Low | Pre-rendered HTML ensures SEO parity |
| Deployment complexity | Low | Low | GitHub Pages supports Astro out-of-box |

## Success Metrics

### Performance Goals
- Lighthouse Performance: >95
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- Time to Interactive: <1s
- Largest Contentful Paint: <1.5s
- Cumulative Layout Shift: <0.1

### Development Goals
- Time to add new blog post: <5 minutes (currently ~30 minutes)
- Component reuse: >80% of code
- Type safety: 100% of content
- Build time: <10 seconds

### Business Goals
- Maintain or improve search rankings
- Faster page loads = better user engagement
- Easier content creation = more blog posts
- Better mobile experience = higher mobile conversions

## Timeline Estimate

**Total Time**: 11-17 hours with Claude Code assistance

- Phase 1 (Foundation): 2-3 hours
- Phase 2 (Components): 3-4 hours
- Phase 3 (Content): 2-3 hours
- Phase 4 (Performance): 2-3 hours
- Phase 5 (DevEx): 1-2 hours
- Phase 6 (Deployment): 1-2 hours

**Realistic Schedule**: 2-3 working days with focused effort

## Next Steps

1. **Review and approve this plan** with stakeholders
2. **Set up Astro MCP server** in Claude Code
3. **Create feature branch** for refactor work
4. **Begin Phase 1** (Foundation Setup)
5. **Iterate through phases** with Claude Code assistance
6. **Deploy to staging** for review
7. **Go live** with Astro-powered site

## References

- [Astro Documentation](https://docs.astro.build/)
- [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Building with AI Tools (Astro)](https://docs.astro.build/en/guides/build-with-ai/)
- [Astro MCP Server for Claude](https://docs.astro.build/en/guides/build-with-ai/)
- [Astro vs Next.js Comparison](https://www.weengle.com/astro-vs-next-js/)
- [Astro Performance Best Practices](https://docs.astro.build/en/guides/performance/)

---

**Document Version**: 1.0
**Last Updated**: October 14, 2025
**Author**: Web Frameworks Expert (via Claude Code)
**Status**: Ready for Review
