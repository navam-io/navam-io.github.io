# Product Card Integration Guide

## Completed ✅

### Navam Invest (4 blogs)
1. ✅ `multi-agent-ai-systems-business-intelligence.mdx` - Before conclusion, after "Enterprise Business Intelligence Impact"
2. ✅ `introducing-navam-invest.mdx` - After "Fully Open Source", before "Join the Beta"
3. ✅ `multi-agent-architecture-langgraph.mdx` - Before conclusion, after "Getting Started"
4. ✅ `smart-api-caching-performance.mdx` - Before conclusion, after "Future Enhancements"

## Remaining Tasks

### Moments (Next.js BI Dashboard) - 6 blogs

**Template to add at the top of each .mdx file:**
```mdx
import ProductCard from '@/components/blog/ProductCard.vue';
import BreakoutSection from '@/components/blog/BreakoutSection.vue';
```

**Template to insert strategically in content:**
```mdx
## See Moments in Action

[Context-specific intro sentence about how the blog content relates to Moments]

<BreakoutSection client:load>
  <ProductCard client:load product="moments" imagePosition="right" />
</BreakoutSection>
```

#### 5. `moments-dashboard-three-tier-analytics.md` → `.mdx`
- **Convert to:** .mdx
- **Strategic placement:** After "Implementation Advisory" section, before "Future-Proofing Your Analytics Strategy"
- **Context intro:** "The three-tier analytics architecture described above is live in production. Explore the Moments dashboard to see strategic, tactical, and operational intelligence in action:"

#### 6. `moments-knowledge-graph-network-visualization.md` → `.mdx`
- **Convert to:** .mdx
- **Strategic placement:** After the knowledge graph visualization section, before conclusion
- **Context intro:** "Experience interactive knowledge graph visualization with real AI industry data. Explore relationships across 237+ entities in the live Moments platform:"

#### 7. `moments-ai-intelligence-research-teams.md` → `.mdx`
- **Convert to:** .mdx
- **Strategic placement:** After business value section, before conclusion
- **Context intro:** "Transform your team's intelligence workflow with Moments. See how multi-agent AI processes business content into actionable insights:"

#### 8. `moments-correlation-matrix-analytics.md` → `.mdx`
- **Convert to:** .mdx
- **Strategic placement:** After correlation analytics explanation, before conclusion
- **Context intro:** "See correlation matrix analytics in production. The Moments platform automatically discovers hidden relationships across business events:"

#### 9. `moments-factor-analytics-sunburst-visualization.md` → `.mdx`
- **Convert to:** .mdx
- **Strategic placement:** After sunburst chart explanation, before conclusion
- **Context intro:** "Explore factor distribution analytics with interactive sunburst visualizations. Moments makes it easy to understand micro/macro factor relationships:"

#### 10. `ai-powered-business-intelligence-end-users.md` → `.mdx`
- **Convert to:** .mdx
- **Strategic placement:** After use cases, before conclusion
- **Context intro:** "Experience AI-powered business intelligence designed for decision-makers, not data scientists. Moments delivers insights without the complexity:"

---

### Memo (Chrome Extension) - 5 blogs

**Template for Memo product cards:**
```mdx
## Get Memo for Your Browser

[Context-specific intro]

<BreakoutSection client:load>
  <ProductCard client:load product="memo" imagePosition="right" />
</BreakoutSection>
```

#### 11. `introducing-trenddit-memo-ai-browsing.md` → `.mdx`
- **Strategic placement:** After "The Technical Foundation", before "What's Next"
- **Context intro:** "Transform your browsing workflow today. Install Memo and start having intelligent conversations with everything you find online:"
- **Image position:** right

#### 12. `trenddit-memo-multi-ai-providers.md` → `.mdx`
- **Strategic placement:** After provider comparison section, before conclusion
- **Context intro:** "Experience the freedom of multi-provider AI in your browser. Memo gives you Claude, GPT, Gemini, and local Ollama in one extension:"
- **Image position:** left

#### 13. `trenddit-memo-youtube-integration.md` → `.mdx`
- **Strategic placement:** After YouTube integration examples, before conclusion
- **Context intro:** "Start chatting with YouTube videos today. Memo automatically captures transcripts and lets you ask questions:"
- **Image position:** right

#### 14. `trenddit-memo-ollama-local-ai.md` → `.mdx`
- **Strategic placement:** After privacy/local processing explanation, before conclusion
- **Context intro:** "Take control of your data with complete local AI processing. Memo + Ollama keeps everything on your machine:"
- **Image position:** left

#### 15. `trenddit-memo-privacy-first-design.md` → `.mdx`
- **Strategic placement:** After security features section, before conclusion
- **Context intro:** "Experience privacy-first knowledge management. Memo encrypts your data, stores locally, and puts you in control:"
- **Image position:** right

---

### Command (Python CLI Tool) - 3 blogs

**Template for Command product cards:**
```mdx
## Supercharge Your Terminal

[Context-specific intro]

<BreakoutSection client:load>
  <ProductCard client:load product="command" imagePosition="left" />
</BreakoutSection>
```

#### 16. `introducing-command-ai-productivity-terminal.md` → `.mdx`
- **Strategic placement:** After "Workflow Freedom", before "Command Reference"
- **Context intro:** "Turn your terminal into an AI powerhouse. Command gives you 15+ models, 7 providers, and complete workflow freedom:"
- **Image position:** left

#### 17. `command-workflows-markdown-obsidian-vscode.md` → `.mdx`
- **Strategic placement:** After workflow examples, before conclusion
- **Context intro:** "Automate your content workflows with AI in your terminal. Command integrates seamlessly with Markdown, Obsidian, and VS Code:"
- **Image position:** right

#### 18. `vibeflow-mcp-automation.md` → `.mdx`
- **Strategic placement:** After MCP automation explanation, before conclusion
- **Context intro:** "Build powerful CLI automation with AI assistance. Command provides the foundation for tools like VibeFlow:"
- **Image position:** left

---

### Trends (Next.js Enterprise Intelligence) - 2 blogs

**Template for Trends product cards:**
```mdx
## Explore Trends Platform

[Context-specific intro]

<BreakoutSection client:load>
  <ProductCard client:load product="trends" imagePosition="left" />
</BreakoutSection>
```

#### 19. `getting-started-trenddit-client-enterprise-intelligence.md` → `.mdx`
- **Strategic placement:** After feature walkthrough, before advanced tips
- **Context intro:** "Start tracking enterprise intelligence with AI-powered trend analysis. Trends helps you make data-driven technology decisions:"
- **Image position:** left

#### 20. `ai-driven-trend-analysis-enterprise-intelligence.md` → `.mdx`
- **Strategic placement:** After trend analysis methodology, before conclusion
- **Context intro:** "Experience AI-driven trend analysis for your enterprise. Trends transforms market signals into strategic insights:"
- **Image position:** right

---

## Quick Reference Commands

### Batch convert Memo blogs:
```bash
cd /Users/manavsehgal/Developer/navam-io.github.io/src/content/blog
cp introducing-trenddit-memo-ai-browsing.md introducing-trenddit-memo-ai-browsing.mdx
cp trenddit-memo-multi-ai-providers.md trenddit-memo-multi-ai-providers.mdx
cp trenddit-memo-youtube-integration.md trenddit-memo-youtube-integration.mdx
cp trenddit-memo-ollama-local-ai.md trenddit-memo-ollama-local-ai.mdx
cp trenddit-memo-privacy-first-design.md trenddit-memo-privacy-first-design.mdx
```

### Batch convert Command blogs:
```bash
cd /Users/manavsehgal/Developer/navam-io.github.io/src/content/blog
cp introducing-command-ai-productivity-terminal.md introducing-command-ai-productivity-terminal.mdx
cp command-workflows-markdown-obsidian-vscode.md command-workflows-markdown-obsidian-vscode.mdx
cp vibeflow-mcp-automation.md vibeflow-mcp-automation.mdx
```

### Batch convert Trends blogs:
```bash
cd /Users/manavsehgal/Developer/navam-io.github.io/src/content/blog
cp getting-started-trenddit-client-enterprise-intelligence.md getting-started-trenddit-client-enterprise-intelligence.mdx
cp ai-driven-trend-analysis-enterprise-intelligence.md ai-driven-trend-analysis-enterprise-intelligence.mdx
```

### Batch convert remaining Moments blogs:
```bash
cd /Users/manavsehgal/Developer/navam-io.github.io/src/content/blog
cp moments-correlation-matrix-analytics.md moments-correlation-matrix-analytics.mdx
cp moments-factor-analytics-sunburst-visualization.md moments-factor-analytics-sunburst-visualization.mdx
cp ai-powered-business-intelligence-end-users.md ai-powered-business-intelligence-end-users.mdx
```

## Implementation Pattern

For each blog post:

1. **Convert to MDX:** `cp filename.md filename.mdx`

2. **Add imports at top** (after frontmatter):
```mdx
import ProductCard from '@/components/blog/ProductCard.vue';
import BreakoutSection from '@/components/blog/BreakoutSection.vue';
```

3. **Insert product card** at strategic location:
```mdx
## [Section Header]

[Context-specific intro sentence]

<BreakoutSection client:load>
  <ProductCard client:load product="[invest|moments|trends|memo|command]" imagePosition="[left|right]" />
</BreakoutSection>
```

## Strategic Placement Guidelines

- **After value proposition, before CTA** - Maximum conversion moment
- **After technical explanation, before conclusion** - Show working implementation
- **After feature list, before next steps** - Natural transition to product
- **Use alternating image positions** - Visual variety (left/right/left/right pattern)
- **Context-specific intro** - Connect blog content directly to product value

## Testing

After implementation, verify:
1. No recursive layout errors (removed `layout:` from frontmatter)
2. Product card breaks out of centered blog layout (full-width)
3. Rest of blog content stays in readable centered container
4. Mobile responsive on all screen sizes
5. Images load properly with browser window mockups
