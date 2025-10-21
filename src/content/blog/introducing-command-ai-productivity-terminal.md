---
layout: '@layouts/BlogPost.astro'
title: "Introducing Command: Supercharge Your Terminal with AI"
date: "2025-10-19"
author: "Navam Team"
excerpt: "Turn your Terminal into a configurable, interactive AI workspace with 15+ LLMs and 7 providers at your fingertips. Command is all you need."
featuredImage: "/images/blog/command-hero.png"
tags: ['AI Tools', 'Productivity', 'CLI', 'Development Acceleration']
relatedPosts: ["command-workflows-markdown-obsidian-vscode", "coding-with-claude-code", "vibe-coding"]
---

## Command Is All You Need

A play on the famous "Attention is all you need" paper that introduced Transformers. With Command, a simple terminal command is all you need to harness the power of frontier and local LLMs. No browser tabs, no apps, no context switching—just pure, fast workflow.

Try `ask "create a table of planets"` and watch your Terminal come alive with streaming responses, markdown-formatted tables, and syntax-highlighted code blocks!

## Why Command?

In the rapidly evolving landscape of AI-powered productivity tools, Command stands out as a refreshingly simple yet powerful solution. Here's why developers and knowledge workers are making it their go-to AI assistant:

### 1. Latest Claude Models Built-in

Command includes **Claude 4.5 Sonnet, Claude 4.5 Haiku, and Claude 4.1 Opus**—the newest, most capable models from Anthropic. Easy-to-use aliases like `sonnet4-5`, `haiku4-5`, and `opus4-1` let you switch models instantly.

Model configurations are intelligently optimized:
- **Haiku 4.5** for fast, simple tasks (40% cost savings)
- **Sonnet 4.5** for complex reasoning and code generation
- **Opus 4.1** for deep creative writing and validation

### 2. Effortless Setup

New `.env.local` support makes API key configuration a breeze. Just copy `.env.local.example`, add your keys, and go. No shell configuration needed. Command auto-loads your keys from the current directory or home directory. Only configure the providers you actually use.

### 3. Top Models and Providers

Switch between private or hosted frontier LLMs with ease. Command supports **15+ leading models** including:

- **Claude**: Sonnet 4.5, Haiku 4.5, Opus 4.1, Sonnet 3.5, Opus 3, Haiku 3
- **OpenAI**: GPT-4o, GPT-4o Mini, DALL-E 3
- **Google**: Gemini 1.5 Pro, Gemini 1.5 Flash
- **Local**: Llama 3.1, Mistral NeMo, Gemma 2, Qwen 2 via Ollama
- **Groq, Perplexity, Bedrock** and more

## Quick Start

Get started in under 60 seconds:

```bash
pip install command
cmnd init
cmnd id  # identifies active provider and model
ask "How old is the oldest pyramid?"
```

That's it! You're now prompting frontier AI models directly from your terminal.

## Intent-Driven Workflow

Command transforms your intents—tasks, goals, questions—into actionable results. Save your intents as simple markdown outlines, recall them when needed, run models on them, and save results based on your workflow.

Your intents are:
- Tasks you want to execute
- Goals you want to accomplish
- Plans you want to realize
- Decisions you want to make
- Questions you want to answer

You control your entire Command experience with your intents.

## Markdown Workflows

Command works seamlessly with markdown content, integrating perfectly with VS Code, Obsidian, and other markdown tools. Design custom workflows that enhance your craft without leaving your favorite environment.

Want to expand blog posts? Research papers? Meeting notes? Just create a custom `refer-*` section in your `command.yml`:

```yaml
refer-post-to-update:
  lookup-folder: Posts
  max-tokens: 4000
  model: opus4-1  # Opus 4.1 excels at creative writing
  provider: claude
  save: true
  save-folder: Posts
  system: You will be given a partially written blog post...
  temperature: 0.5
```

Then run:
```bash
refer post-to-update "startup-growth-hacking"
```

Watch as the model streams its response and saves the expanded post automatically.

## Test and Evaluate Models

Command makes it effortless to compare **15+ leading models** from 7 providers. The `cmnd test` command runs your prompts across all configured provider-model combinations and generates a comprehensive evaluation summary.

**What You Can Compare:**
- Response Time (Latency)
- Response Quality
- Response Accuracy
- Token Length (Cost)

```bash
cmnd test ask      # Test text generation models
cmnd test vision   # Test vision-capable models
```

## Visualize Trends

Every `cmnd test` run saves detailed metrics (latency, token counts) to the `Metrics` folder. Over time, these metrics reveal performance patterns and help you make informed decisions.

```bash
cmnd trends           # View trends for last 7 days (default)
cmnd trends --days 30 # View trends for last 30 days
```

You'll see sparkline visualizations showing:
- Latency patterns over time
- Token count trends
- Consistency metrics across models

## Privacy Controls

You control your data. Period. Choose models and providers you trust, or run LLMs entirely locally on your laptop with zero external API calls.

**Your Privacy Options:**

1. **Fully Local (Zero Cloud):** Use Ollama with Llama 3.1, Mistral NeMo, Gemma 2, or Qwen 2. Your data never leaves your machine.

2. **Trusted Cloud Providers:** Select from Anthropic (Claude), OpenAI, Google (Gemini), Groq, Perplexity, or AWS Bedrock based on your trust and compliance requirements.

3. **Hybrid Workflows:** Use local models for sensitive data, cloud models for general tasks.

Switch instantly:
```bash
cmnd config ask model llama      # Switch to local Llama 3.1
cmnd config ask provider ollama  # Ensure local provider
```

## Audit Trail

Command saves a trail of commands, prompts, templates, lookup folders, and saved files in `trail.yml`. Visualize this anytime using `cmnd audit` to gain insights of your Command usage over time.

The audit dashboard shows:
- Commands run over time
- Most used models and providers
- Token usage patterns
- Saved files and their locations

## Workflow Freedom

Your terminal, your rules. No behavioral marketing, no growth hacking, no forced workflows. Command puts you in complete control of your AI experience.

**Choose Your Path:**
- **Speed:** Groq with Llama 3.1 for ultra-fast responses
- **Capability:** Sonnet 4.5, Opus 4.1, or GPT-4o for frontier performance
- **Privacy:** Mistral NeMo, Llama 3.1, or Gemma 2 running locally via Ollama
- **Context:** Gemini 1.5 Pro/Flash for massive context windows (up to 2M tokens)
- **Cost:** Haiku 4.5 for 40% savings on simple tasks

Switch between any workflow with a simple config change or terminal command. Work online with fast WiFi or completely offline with local models. No constraints.

## Command Reference

Here are the main commands available:

| Command | Description |
|---------|-------------|
| `ask` | Prompt the LLM for fast, crisp responses |
| `audit` | Analyze your usage with an insightful dashboard |
| `config` | Edit `command.yml` file config from command line |
| `gather` | Cleanly scrape articles from webpages |
| `refer` | Browse text files and run custom prompts to extract structured content |
| `run` | Browse `Code` folder for markdown files with code blocks, create and run apps |
| `id` | Identify current provider and model |
| `image` | Generate images with AI |
| `init` | Initialize Command in any folder |
| `intents` | Interactively choose from intents to refer into content embeds |
| `merge` | Merge files with placeholder tags |
| `split` | Split large files into chunks |
| `test` | Test Command using all providers and models |
| `trends` | Visualize latency and token length trends |
| `validate` | Validate generated embeds with another model |
| `vision` | Run vision models on images |

## Get Started Today

Command is MIT licensed and free for both personal and commercial use. Install it today and transform your terminal into an AI powerhouse:

```bash
pip install command
cmnd init
ask "What can you help me with?"
```

Visit the [Command GitHub repository](https://github.com/navam-io/command) for full documentation, examples, and community support.

For detailed documentation and advanced workflows, check out [navamai.com](https://www.navamai.com).

---

Command is part of Navam's suite of production-ready AI tools. Explore our other products:
- **Navam Invest**: Multi-agent investment intelligence platform
- **Moments**: AI business intelligence with knowledge graphs
- **Trends**: Enterprise intelligence for strategic decisions
- **Memo**: Chrome extension for AI-powered knowledge management
