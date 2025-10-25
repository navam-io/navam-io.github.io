export interface HeroMessage {
  title: string;
  subtitle: string;
}

export const heroMessages: HeroMessage[] = [
  {
    title: 'Stop Building AI from Scratch — Start Shipping in Days.',
    subtitle: 'Fork complete, battle-tested multi-agent systems. Customize, deploy, and own everything you build.'
  },
  {
    title: 'AI That Works the First Time.',
    subtitle: 'Fork proven codebases — 90%+ test coverage, full documentation, and production patterns you can trust.'
  },
  {
    title: 'From Idea to Working AI in a Weekend.',
    subtitle: 'Skip 6 months of debugging. Start with reference implementations that already handle the hard parts.'
  },
  {
    title: 'Turn Months of AI Engineering into a Few Clicks.',
    subtitle: 'Each Navam reference condenses 6+ months of AI engineering into fork-ready code you can ship in days.'
  },
  {
    title: 'The Fastest Way to Build Real AI Products.',
    subtitle: 'Fork agentic systems refined in production. Multi-agent workflows, streaming UIs, and intelligent caching — all included.'
  },
  {
    title: 'Fork. Vibe. Ship.',
    subtitle: 'Battle-tested AI templates for fintech, BI, and research. Customize with your brand and ship to customers.'
  },
  {
    title: 'Build Like the Best AI Startups Do.',
    subtitle: 'Use complete, production-grade systems as your foundation. Save months of trial-and-error.'
  },
  {
    title: 'Production AI, Ready to Fork.',
    subtitle: '10 agents. 32+ tools. Streaming workflows. Test coverage above 90%. Everything you need to ship AI products.'
  }
];

/**
 * Get a random hero message index
 */
export function getRandomMessageIndex(): number {
  return Math.floor(Math.random() * heroMessages.length);
}

/**
 * Get a random hero message that's different from the excluded index
 */
export function getRandomMessageExcluding(excludeIndex: number): number {
  let randomIndex: number;
  do {
    randomIndex = getRandomMessageIndex();
  } while (randomIndex === excludeIndex && heroMessages.length > 1);
  return randomIndex;
}
