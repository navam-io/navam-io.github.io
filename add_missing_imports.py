#!/usr/bin/env python3
"""Add missing imports to MDX files"""

from pathlib import Path

FILES_TO_FIX = [
    "ai-powered-business-intelligence-end-users.mdx",
    "trenddit-memo-multi-ai-providers.mdx",
    "trenddit-memo-youtube-integration.mdx",
    "trenddit-memo-ollama-local-ai.mdx",
    "trenddit-memo-privacy-first-design.mdx",
    "command-workflows-markdown-obsidian-vscode.mdx",
    "vibeflow-mcp-automation.mdx"
]

IMPORTS = """
import ProductCard from '@/components/blog/ProductCard.vue';
import BreakoutSection from '@/components/blog/BreakoutSection.vue';
"""

def add_imports(filepath: Path):
    """Add imports after frontmatter"""
    content = filepath.read_text()

    # Check if already has imports
    if "import ProductCard" in content:
        print(f"✓ {filepath.name} - Already has imports")
        return

    # Find end of frontmatter
    lines = content.split('\n')
    frontmatter_end_idx = -1

    # Find second --- (end of frontmatter)
    dash_count = 0
    for i, line in enumerate(lines):
        if line.strip() == '---':
            dash_count += 1
            if dash_count == 2:
                frontmatter_end_idx = i
                break

    if frontmatter_end_idx == -1:
        print(f"⚠ {filepath.name} - Could not find frontmatter")
        return

    # Insert imports after frontmatter
    lines.insert(frontmatter_end_idx + 1, IMPORTS)

    # Write back
    filepath.write_text('\n'.join(lines))
    print(f"✓ {filepath.name} - Imports added")

def main():
    blog_dir = Path("/Users/manavsehgal/Developer/navam-io.github.io/src/content/blog")

    print("Adding missing imports...\n")

    for filename in FILES_TO_FIX:
        filepath = blog_dir / filename
        if filepath.exists():
            add_imports(filepath)
        else:
            print(f"✗ {filename} - Not found")

    print("\n✅ Done!")

if __name__ == "__main__":
    main()
