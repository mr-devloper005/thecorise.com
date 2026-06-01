import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Article-first reading platform',
    primaryLinks: [
      { label: 'Home', href: '/' },
      { label: 'Articles', href: '/articles' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Read articles', href: '/articles' },
      secondary: { label: 'Pitch a story', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Independent articles, essays, and reader notes',
    description: 'A focused article publication for timely explainers, thoughtful essays, editorial guides, and conversations around what readers care about next.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Articles', href: '/articles' },
          { label: 'Search', href: '/search' },
          { label: 'Pitch a story', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for focused reading, useful discovery, and better article conversations.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
