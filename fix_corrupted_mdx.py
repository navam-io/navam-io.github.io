#!/usr/bin/env python3
"""Fix MDX files where product card was inserted before frontmatter"""

from pathlib import Path
import re

def fix_mdx_file(filepath: Path):
    """Fix MDX file with misplaced product card"""
    content = filepath.read_text()

    # Check if frontmatter is NOT at the beginning
    if not content.startswith('---'):
        print(f"Fixing {filepath.name}...")

        # Find the frontmatter block (it's somewhere in the middle)
        frontmatter_pattern = r'---\n(.*?)\n---'
        match = re.search(frontmatter_pattern, content, re.DOTALL)

        if match:
            frontmatter_content = match.group(1)

            # Remove layout field if present
            frontmatter_lines = []
            for line in frontmatter_content.split('\n'):
                if not line.startswith('layout:'):
                    frontmatter_lines.append(line)
            clean_frontmatter = '\n'.join(frontmatter_lines)

            # Remove the misplaced frontmatter from content
            content_without_frontmatter = content.replace(match.group(0), '', 1)

            # Add imports if not present
            imports = """import ProductCard from '@/components/blog/ProductCard.vue';
import BreakoutSection from '@/components/blog/BreakoutSection.vue';
"""
            if 'import ProductCard' not in content_without_frontmatter:
                after_imports = imports
            else:
                after_imports = ""

            # Reconstruct file with frontmatter at top
            fixed_content = f"---\n{clean_frontmatter}\n---\n{after_imports}\n{content_without_frontmatter.strip()}\n"

            filepath.write_text(fixed_content)
            print(f"✓ Fixed {filepath.name}")
            return True
        else:
            print(f"⚠ Could not find frontmatter in {filepath.name}")
            return False
    else:
        print(f"✓ {filepath.name} already correct")
        return True

def main():
    blog_dir = Path("/Users/manavsehgal/Developer/navam-io.github.io/src/content/blog")

    # Files that might be corrupted
    mdx_files = list(blog_dir.glob("*.mdx"))

    print(f"Checking {len(mdx_files)} MDX files...\n")

    fixed = 0
    for filepath in mdx_files:
        if fix_mdx_file(filepath):
            fixed += 1

    print(f"\n✅ Checked {len(mdx_files)} files, fixed/verified {fixed}")

if __name__ == "__main__":
    main()
