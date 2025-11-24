export interface HeroMessage {
  title: string;
  subtitle: string;
}

export const heroMessages: HeroMessage[] = [
  {
    title: 'Ship AI in Days, Not Months.',
    subtitle: 'Fork battle-tested multi-agent systems. Customize, deploy, and own everything you build.'
  },
  {
    title: 'AI That Works the First Time.',
    subtitle: 'Fork proven codebases with 90%+ test coverage, full documentation, and production patterns.'
  },
  {
    title: 'From Idea to Working AI in a Weekend.',
    subtitle: 'Skip 6 months of debugging. Start with reference implementations that handle the hard parts.'
  },
  {
    title: 'Turn Months into Days.',
    subtitle: 'Each Navam reference condenses 6+ months of AI engineering into fork-ready code you ship today.'
  },
  {
    title: 'Build Real AI Products, Fast.',
    subtitle: 'Fork agentic systems refined in production. Multi-agent workflows, streaming UIs, intelligent caching included.'
  },
  {
    title: 'Fork. Vibe. Ship.',
    subtitle: 'Battle-tested AI templates for fintech, BI, and research. Customize with your brand and ship to customers.'
  },
  {
    title: 'Build Like the Best AI Startups.',
    subtitle: 'Use complete, production-grade systems as your foundation. Save months of trial-and-error.'
  },
  {
    title: 'Production AI, Ready to Fork.',
    subtitle: 'Multi-agent systems with 90%+ test coverage, streaming workflows, and everything you need to ship.'
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
