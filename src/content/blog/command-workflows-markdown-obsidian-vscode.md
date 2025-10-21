---
layout: '@layouts/BlogPost.astro'
title: "Command Workflows: Supercharge Your Content Creation with Markdown, Obsidian, and VS Code"
date: "2025-10-19"
author: "Navam Team"
excerpt: "Learn how Command transforms partial ideas into polished content through intent-driven workflows that integrate seamlessly with your favorite markdown tools."
featuredImage: "/images/blog/command-workflows.png"
tags: ['AI Tools', 'Productivity', 'Workflows', 'Content Creation']
relatedPosts: ["introducing-command-ai-productivity-terminal", "writing", "vibe-coding"]
---

## Transform Partial Ideas into Complete Content

One of Command's most powerful features is its ability to expand partial content into complete, well-researched material. Write partial blog posts, seed ideas, intent lists, or incomplete notes—then use Command to expand them into finished content.

This workflow transforms how knowledge workers create content, turning hours of writing into minutes while maintaining quality and consistency.

## The `refer` Command: Your Content Expansion Engine

The `refer` command works with custom `refer-section` configs in `command.yml` to transform partial content into complete posts, notes, articles, or research papers. You can:

- Experiment with different models
- Tune settings by document type
- Define custom folders for organization
- Specify document-specific system prompts

### Example: Expanding Blog Posts

Let's say you have a partially written blog post on startup growth strategies in your `Posts` folder. Here's the related config section using Claude Opus 4.1 for creative writing:

```yaml
refer-post-to-update:
  lookup-folder: Posts
  max-tokens: 4000
  model: opus4-1          # Optimized: Opus 4.1 excels at creative writing
  provider: claude
  save: true
  save-folder: Posts
  system: You will be given a partially written blog post on a topic.
    Your job as an expert blog writer is to expand the post
    with well-researched content, engaging examples, and actionable insights.
    Maintain the author's voice and style while adding depth and polish.
  temperature: 0.5
```

Run the command and watch as the model streams its response:

```bash
refer post-to-update "startup-growth-hacking"
```

The expanded post saves to the `Posts` folder with an `updated` prefix, preserving your original.

## Create Custom Document Types

Want to process research papers, class notes, or cooking recipes? Just copy and customize a `refer-*` section:

### Research Paper Summaries

```yaml
refer-paper-to-summarize:
  lookup-folder: Papers
  max-tokens: 2000
  model: sonnet4-5      # Sonnet 4.5 for technical analysis
  provider: claude
  save: true
  save-folder: Summaries
  system: Summarize this research paper, focusing on methodology,
    key findings, and implications. Include citations and limitations.
  temperature: 0.3
```

### Meeting Notes Expansion

```yaml
refer-notes-to-expand:
  lookup-folder: Notes
  max-tokens: 4000
  model: haiku4-5      # Haiku 4.5 is fast and cost-effective
  provider: claude
  save: true
  save-folder: Notes/Expanded
  system: Transform these raw meeting notes into a structured document
    with clear action items, decisions made, and follow-up tasks.
  temperature: 0.3
```

Then run your custom command:
```bash
refer notes-to-expand "weekly-standup-2025-10-15"
```

## Model Selection Best Practices

Different content types benefit from different models:

- **Haiku 4.5**: Simple extraction, templates, summaries (fast, 40% cheaper)
- **Sonnet 4.5**: Complex analysis, technical writing, code generation
- **Opus 4.1**: Creative writing, deep research synthesis, content expansion

## Combining Commands for Powerful Workflows

Command becomes even more powerful when you combine multiple commands. Here's a complete workflow for generating comprehensive content:

### Step 1: Define Your Document Template

Create a markdown template for a set of intents. For example, `Financial Analysis.md` or `Product Management.md`. Add a few intents as headings:

```markdown
# Financial Analysis

## Macro Factors Impact Stocks
[Prompts to analyze macro economic factors]

## Top Companies by ROCE
[Prompts to identify high-return companies]

## Tech Sector Valuation
[Prompts to analyze tech valuations]
```

### Step 2: Expand Intents

Use Command to brainstorm more related intents and prompts:

```bash
refer intents-to-expand "Financial Analysis"
```

The model will add more relevant intents and prompts to your template.

### Step 3: Generate Content Embeds

Now run the intents command and choose which intents to generate:

```bash
cmnd intents "Financial Analysis"
```

You'll see a list of intents. Choose the ones you want to expand, and Command will:
1. Generate content for each selected intent
2. Save responses under the `Embeds` folder automatically
3. Link embeds in your document template instantly

### Step 4: Visualize in Obsidian

If you're using Obsidian, the Graph view shows all your linked embeds, creating a beautiful knowledge network. You can:
- Link related templates
- Enhance generated embeds with more intents
- Use Obsidian plugins to generate websites, PDFs, and more

Your creativity + Obsidian + Command = Magic!

## Obsidian Integration

Command's markdown-first approach makes it perfect for Obsidian users. Here's how to set it up:

### 1. Initialize Command in Your Vault

```bash
cd /path/to/your/obsidian/vault
cmnd init
```

This creates:
- `command.yml` configuration file
- Sample `Intents` and `Embeds` folders
- `.env.local.example` for API keys

### 2. Configure Your Workflow

Edit `command.yml` to match your Obsidian structure:

```yaml
ask:
  provider: claude
  model: sonnet4-5
  save: true
  save-folder: Notes/Quick

refer-note-to-expand:
  lookup-folder: Notes/Drafts
  save-folder: Notes/Complete
  model: opus4-1

intents:
  lookup-folder: Templates
  save-folder: Embeds
  model: sonnet4-5
```

### 3. Create Templates

Use Obsidian's template system alongside Command intents:

```markdown
# {{title}}
Date: {{date}}
Tags: #draft #ai-generated

## Overview
[Brief description]

## Key Points
- Point 1
- Point 2

## Analysis
[To be expanded by Command]
```

### 4. Expand and Link

Run Command to expand sections, then use Obsidian's linking features:

```bash
refer note-to-expand "market-analysis-draft"
```

The expanded note appears in your vault, ready for linking with `[[wiki-links]]`.

## VS Code Integration

Command works beautifully with VS Code for code-centric workflows:

### 1. Project Setup

Initialize Command in your project root:

```bash
cd /path/to/your/vscode/project
cmnd init
```

### 2. Code Documentation Workflow

Create a `refer-code-to-document` section in `command.yml`:

```yaml
refer-code-to-document:
  lookup-folder: src
  save-folder: docs
  model: sonnet4-5
  system: You are analyzing source code files.
    Generate comprehensive documentation including purpose,
    architecture, key functions, and usage examples.
  temperature: 0.3
```

### 3. Generate Documentation

```bash
refer code-to-document "api-handlers.py"
```

Command analyzes your code and generates detailed documentation in markdown format.

### 4. Test Case Generation

```yaml
refer-code-to-test:
  lookup-folder: src
  save-folder: tests
  model: sonnet4-5
  system: Generate comprehensive test cases for this code,
    including edge cases, error handling, and integration tests.
  temperature: 0.2
```

```bash
refer code-to-test "user-service.py"
```

## Advanced Workflow: Content Validation

Verify content generated by one LLM with validation from another model:

```yaml
validate:
  provider: claude
  model: opus4-1          # Use Opus 4.1 for deep validation
  max-tokens: 4000
  temperature: 0.0        # Deterministic for validation
  system: Validate the following content for accuracy,
    completeness, and coherence. Suggest improvements.
```

After generating embeds with `cmnd intents`, validate them:

```bash
cmnd validate "Financial Analysis"
```

The diff is calculated on original and validated text, removing newlines, whitespace, and markdown formatting for similarity scoring. Use this to automate quality validation of generated content.

## Practical Use Cases

### Blog Writing Workflow

1. Write brief outline in `Posts/drafts/`
2. Expand with `refer post-to-update "outline"`
3. Validate with `cmnd validate`
4. Review and publish

**Time saved:** 70% reduction in writing time while maintaining quality.

### Research Workflow

1. Collect sources in `Research/sources/`
2. Summarize with `refer paper-to-summarize`
3. Generate synthesis with `cmnd intents "Research Project"`
4. Create visualizations in Obsidian

**Result:** Comprehensive research synthesis in hours instead of days.

### Documentation Workflow

1. Write code with inline comments
2. Generate docs with `refer code-to-document`
3. Create API documentation with `cmnd intents "API Docs"`
4. Validate technical accuracy with different model

**Outcome:** Always up-to-date, comprehensive documentation.

## Privacy-First Workflows

For sensitive content, use local models:

```yaml
refer-confidential-note:
  lookup-folder: Private
  save-folder: Private/Expanded
  model: llama          # Local Llama 3.1 via Ollama
  provider: ollama      # Fully local, zero cloud
  system: Process this confidential information...
```

Your sensitive data never leaves your machine.

## Run Multiple Models Side by Side

Compare different models' output by running them in parallel terminal windows:

**Terminal 1 (Opus 4.1 - Creative):**
```bash
cmnd config refer-post model opus4-1
refer post-to-update "content-strategy"
```

**Terminal 2 (Sonnet 4.5 - Analytical):**
```bash
cmnd config refer-post model sonnet4-5
refer post-to-update "content-strategy"
```

**Terminal 3 (Local Llama - Fast Draft):**
```bash
cmnd config refer-post model llama
cmnd config refer-post provider ollama
refer post-to-update "content-strategy"
```

Compare outputs and choose the best result or combine insights from multiple models.

## Audit Your Workflow

Track your content generation over time:

```bash
cmnd audit
```

The audit dashboard shows:
- Most used templates and intents
- Model performance by content type
- Token usage and cost analysis
- Saved files and their locations

Use these insights to optimize your workflow and reduce costs.

## Get Started with Command Workflows

1. **Install Command:**
   ```bash
   pip install command
   ```

2. **Initialize in your workspace:**
   ```bash
   cd /path/to/your/workspace
   cmnd init
   ```

3. **Configure your first workflow:**
   Edit `command.yml` to match your needs

4. **Start creating:**
   ```bash
   ask "Help me create a blog post about AI workflows"
   ```

Visit [navamai.com](https://www.navamai.com) for comprehensive documentation, examples, and advanced workflow guides.

---

Command is part of Navam's production-ready AI toolkit. Explore our other products for complete AI-powered workflows across your entire development and knowledge management stack.
