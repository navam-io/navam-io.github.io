#!/usr/bin/env python3
"""Fix product cards for blogs without standard Conclusion sections"""

from pathlib import Path

MANUAL_FIXES = {
    "moments-ai-intelligence-research-teams.mdx": {
        "product": "moments",
        "position": "right",
        "section_title": "Transform Your Team's Intelligence Workflow",
        "intro": "Transform your team's intelligence workflow with Moments. See how multi-agent AI processes business content into actionable insights:",
        "insert_before": "## Getting Started with Moments"
    },
    "ai-powered-business-intelligence-end-users.mdx": {
        "product": "moments",
        "position": "left",
        "section_title": "Experience AI-Powered Business Intelligence",
        "intro": "Experience AI-powered business intelligence designed for decision-makers, not data scientists. Moments delivers insights without the complexity:",
        "insert_before": "---"  # Insert before final separator
    },
    "trenddit-memo-multi-ai-providers.mdx": {
        "product": "memo",
        "position": "left",
        "section_title": "Experience Multi-Provider AI",
        "intro": "Experience the freedom of multi-provider AI in your browser. Memo gives you Claude, GPT, Gemini, and local Ollama in one extension:",
        "insert_before": "---"
    },
    "trenddit-memo-youtube-integration.mdx": {
        "product": "memo",
        "position": "right",
        "section_title": "Chat with YouTube Videos Today",
        "intro": "Start chatting with YouTube videos today. Memo automatically captures transcripts and lets you ask questions:",
        "insert_before": "---"
    },
    "trenddit-memo-ollama-local-ai.mdx": {
        "product": "memo",
        "position": "left",
        "section_title": "Complete Privacy with Local AI",
        "intro": "Take control of your data with complete local AI processing. Memo + Ollama keeps everything on your machine:",
        "insert_before": "---"
    },
    "trenddit-memo-privacy-first-design.mdx": {
        "product": "memo",
        "position": "right",
        "section_title": "Experience Privacy-First Knowledge Management",
        "intro": "Experience privacy-first knowledge management. Memo encrypts your data, stores locally, and puts you in control:",
        "insert_before": "---"
    },
    "command-workflows-markdown-obsidian-vscode.mdx": {
        "product": "command",
        "position": "right",
        "section_title": "Automate Your Content Workflows",
        "intro": "Automate your content workflows with AI in your terminal. Command integrates seamlessly with Markdown, Obsidian, and VS Code:",
        "insert_before": "---"
    },
    "vibeflow-mcp-automation.mdx": {
        "product": "command",
        "position": "left",
        "section_title": "Build Powerful CLI Automation",
        "intro": "Build powerful CLI automation with AI assistance. Command provides the foundation for tools like VibeFlow:",
        "insert_before": "---"
    },
}

IMPORTS = """import ProductCard from '@/components/blog/ProductCard.vue';
import BreakoutSection from '@/components/blog/BreakoutSection.vue';
"""

def add_product_card(filepath: Path, config: dict):
    """Add product card to a blog post"""
    content = filepath.read_text()

    # Check if already has product card
    if "ProductCard client:load" in content:
        print(f"✓ {filepath.name} - Already has product card")
        return

    # Add imports after frontmatter if not present
    if "import ProductCard" not in content:
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

    # Insert before specified marker
    insert_marker = config['insert_before']

    # Find the marker (handle both with and without newlines)
    if insert_marker in content:
        content = content.replace(insert_marker, product_section + insert_marker, 1)
        filepath.write_text(content)
        print(f"✓ {filepath.name} - Product card added")
    else:
        print(f"⚠ {filepath.name} - Marker '{insert_marker}' not found")

def main():
    blog_dir = Path("/Users/manavsehgal/Developer/navam-io.github.io/src/content/blog")

    print("Fixing remaining product cards...\n")

    for filename, config in MANUAL_FIXES.items():
        filepath = blog_dir / filename
        if filepath.exists():
            add_product_card(filepath, config)
        else:
            print(f"✗ {filename} - File not found")

    print("\n✅ Done!")

if __name__ == "__main__":
    main()
