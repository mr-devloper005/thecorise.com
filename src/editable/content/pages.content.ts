import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Independent articles for curious readers',
      description: 'Explore timely articles, thoughtful essays, practical explainers, and reader conversations through a polished publication layout.',
      openGraphTitle: 'Independent articles for curious readers',
      openGraphDescription: 'Read articles, essays, guides, and editorial notes through a cleaner publication experience.',
      keywords: ['article website', 'editorial publication', 'online magazine', 'reader community'],
    },
    hero: {
      badge: 'Editorial desk',
      title: ['Read sharper articles', 'without the noise.'],
      description: 'A clean publication experience for essays, explainers, opinion pieces, and practical guides. Browse the latest stories, search the archive, and follow the threads that matter.',
      primaryCta: { label: 'Read latest articles', href: '/articles' },
      secondaryCta: { label: 'Pitch an article', href: '/contact' },
      searchPlaceholder: 'Search articles, topics, and authors',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
      featureCardDescription: 'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for people who come to read, think, and return.',
      paragraphs: [
        'This site puts article discovery first: strong headlines, clean summaries, useful sections, and enough breathing room for long-form content.',
        'Readers can move from featured stories to topic collections, search results, and comment conversations without feeling dropped into a generic feed.',
        'Every layout is tuned for editorial browsing, from compact article cards to focused detail pages and quieter support pages.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with strong article hierarchy.',
        'Editorial cards for features, latest posts, and topic collections.',
        'Cleaner browsing rhythm with normal-width sections.',
        'Local member access for testing reader sessions.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Search archive', href: '/search' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Explore articles through one focused publication experience.',
      description: 'Move between latest stories, featured reads, comments, and search through a calmer visual system.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'An article publication built for depth, clarity, and return visits.',
    description: `${slot4BrandConfig.siteName} is an editorial article platform for explainers, essays, guides, opinion pieces, and reader conversations.`,
    paragraphs: [
      'The experience is intentionally narrow, readable, and paced like a modern magazine: clear sections, confident headings, compact metadata, and cards that help readers decide what to open next.',
      'The publication keeps articles at the center. Supporting pages such as about, contact, search, login, and comments exist to strengthen reading and contribution, not distract from it.',
      'Writers get a polished surface for thoughtful work, and readers get a calmer way to find stories worth their time.',
    ],
    values: [
      {
        title: 'Reading-first experience',
        description: 'We prioritize clear headlines, helpful excerpts, and comfortable article widths so reading never feels stretched across the screen.',
      },
      {
        title: 'Editorial discovery',
        description: 'Featured stories, topic filters, search, comments, and related reads work together so visitors always know where to go next.',
      },
      {
        title: 'Simple and trustworthy',
        description: 'We keep navigation, account access, and contact flows simple so the publication feels dependable and easy to return to.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch a story, ask about publishing, or reach the editorial desk.',
    description: 'Send article ideas, contributor questions, correction notes, partnership requests, or reader feedback. Every message is shaped around making the publication stronger.',
    formTitle: 'Send the editorial desk a note',
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related posts',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related posts',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
