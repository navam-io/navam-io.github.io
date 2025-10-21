#!/usr/bin/env python3
"""
Batch add product cards to blog posts
"""

import re
from pathlib import Path

# Define blog posts and their product card configurations
BLOG_CONFIGS = {
    # Remaining Moments blogs
    "moments-ai-intelligence-research-teams.mdx": {
        "product": "moments",
        "position": "right",
        "section_title": "Transform Your Team's Intelligence Workflow",
        "intro": "Transform your team's intelligence workflow with Moments. See how multi-agent AI processes business content into actionable insights:",
        "insert_before": "## Conclusion"
    },
    "moments-correlation-matrix-analytics.mdx": {
        "product": "moments",
        "position": "left",
        "section_title": "See Correlation Analytics in Production",
        "intro": "See correlation matrix analytics in production. The Moments platform automatically discovers hidden relationships across business events:",
        "insert_before": "## Conclusion"
    },
    "moments-factor-analytics-sunburst-visualization.mdx": {
        "product": "moments",
        "position": "right",
        "section_title": "Explore Factor Distribution Analytics",
        "intro": "Explore factor distribution analytics with interactive sunburst visualizations. Moments makes it easy to understand micro/macro factor relationships:",
        "insert_before": "## Conclusion"
    },
    "ai-powered-business-intelligence-end-users.mdx": {
        "product": "moments",
        "position": "left",
        "section_title": "Experience AI-Powered Business Intelligence",
        "intro": "Experience AI-powered business intelligence designed for decision-makers, not data scientists. Moments delivers insights without the complexity:",
        "insert_before": "## Conclusion"
    },

    # Memo blogs
    "introducing-trenddit-memo-ai-browsing.mdx": {
        "product": "memo",
        "position": "right",
        "section_title": "Get Memo for Your Browser",
        "intro": "Transform your browsing workflow today. Install Memo and start having intelligent conversations with everything you find online:",
        "insert_before": "## Join Our Community"
    },
    "trenddit-memo-multi-ai-providers.mdx": {
        "product": "memo",
        "position": "left",
        "section_title": "Experience Multi-Provider AI",
        "intro": "Experience the freedom of multi-provider AI in your browser. Memo gives you Claude, GPT, Gemini, and local Ollama in one extension:",
        "insert_before": "## Conclusion"
    },
    "trenddit-memo-youtube-integration.mdx": {
        "product": "memo",
        "position": "right",
        "section_title": "Chat with YouTube Videos Today",
        "intro": "Start chatting with YouTube videos today. Memo automatically captures transcripts and lets you ask questions:",
        "insert_before": "## Conclusion"
    },
    "trenddit-memo-ollama-local-ai.mdx": {
        "product": "memo",
        "position": "left",
        "section_title": "Complete Privacy with Local AI",
        "intro": "Take control of your data with complete local AI processing. Memo + Ollama keeps everything on your machine:",
        "insert_before": "## Conclusion"
    },
    "trenddit-memo-privacy-first-design.mdx": {
        "product": "memo",
        "position": "right",
        "section_title": "Experience Privacy-First Knowledge Management",
        "intro": "Experience privacy-first knowledge management. Memo encrypts your data, stores locally, and puts you in control:",
        "insert_before": "## Conclusion"
    },

    # Command blogs
    "introducing-command-ai-productivity-terminal.mdx": {
        "product": "command",
        "position": "left",
        "section_title": "Supercharge Your Terminal",
        "intro": "Turn your terminal into an AI powerhouse. Command gives you 15+ models, 7 providers, and complete workflow freedom:",
        "insert_before": "## Command Reference"
    },
    "command-workflows-markdown-obsidian-vscode.mdx": {
        "product": "command",
        "position": "right",
        "section_title": "Automate Your Content Workflows",
        "intro": "Automate your content workflows with AI in your terminal. Command integrates seamlessly with Markdown, Obsidian, and VS Code:",
        "insert_before": "## Conclusion"
    },
    "vibeflow-mcp-automation.mdx": {
        "product": "command",
        "position": "left",
        "section_title": "Build Powerful CLI Automation",
        "intro": "Build powerful CLI automation with AI assistance. Command provides the foundation for tools like VibeFlow:",
        "insert_before": "## Conclusion"
    },

    # Trends blogs
    "getting-started-trenddit-client-enterprise-intelligence.mdx": {
        "product": "trends",
        "position": "left",
        "section_title": "Start Tracking Enterprise Intelligence",
        "intro": "Start tracking enterprise intelligence with AI-powered trend analysis. Trends helps you make data-driven technology decisions:",
        "insert_before": "## Conclusion"
    },
    "ai-driven-trend-analysis-enterprise-intelligence.mdx": {
        "product": "trends",
        "position": "right",
        "section_title": "Experience AI-Driven Trend Analysis",
        "intro": "Experience AI-driven trend analysis for your enterprise. Trends transforms market signals into strategic insights:",
        "insert_before": "## Conclusion"
    },
}

IMPORTS = """import ProductCard from '@/components/blog/ProductCard.vue';
import BreakoutSection from '@/components/blog/BreakoutSection.vue';
"""

def add_product_card(filepath: Path, config: dict):
    """Add product card to a blog post"""
    content = filepath.read_text()

    # Check if already has imports
    if "import ProductCard" in content:
        print(f"✓ {filepath.name} - Already has product card")
        return

    # Add imports after frontmatter
    frontmatter_end = content.find("---", 3) + 3
    if frontmatter_end > 2:
        content = content[:frontmatter_end] + "\n" + IMPORTS + content[frontmatter_end:]

    # Create product card section
    product_section = f"""
## {config['section_title']}

{config['intro']}

<BreakoutSection client:load>
  <ProductCard client:load product="{config['product']}" imagePosition="{config['position']}" />
</BreakoutSection>

"""

    # Insert before specified section
    insert_marker = config['insert_before']
    if insert_marker in content:
        content = content.replace(insert_marker, product_section + insert_marker)
    else:
        print(f"⚠ {filepath.name} - Marker '{insert_marker}' not found")
        return

    # Write back
    filepath.write_text(content)
    print(f"✓ {filepath.name} - Product card added")

def main():
    blog_dir = Path("/Users/manavsehgal/Developer/navam-io.github.io/src/content/blog")

    print("Adding product cards to blog posts...\n")

    for filename, config in BLOG_CONFIGS.items():
        filepath = blog_dir / filename
        if filepath.exists():
            add_product_card(filepath, config)
        else:
            print(f"✗ {filename} - File not found")

    print("\n✅ Done!")

if __name__ == "__main__":
    main()
