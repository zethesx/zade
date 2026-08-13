export type Project = {
  id: string
  index: string
  title: string
  type: string
  year: string
  description: string
  preview: string
  previewPosition: string
  href: string
  external: boolean
  accent: string
  alt: string
}

// Project destinations stay centralized so internal and external links share one rendering contract.
export const projects: Project[] = [
  {
    id: 'sauberei',
    index: '01',
    title: 'Sauberei',
    type: 'Cleaning service website',
    year: '2026',
    description: 'A clear, local experience for homes, offices, and the small things in between.',
    preview: '/media/sauberei-hero.webp',
    previewPosition: 'center',
    href: 'https://www.sauberei.eu',
    external: true,
    accent: 'var(--color-cobalt)',
    alt: 'Sauberei cleaning service website hero with dark video imagery, oversized German typography, and a clear call to action.',
  },
  {
    id: 'dionysia',
    index: '02',
    title: 'Dionysia',
    type: 'Theatre / cultural website',
    year: '2026',
    description: 'A stage for beautiful disasters, old myths, and the people who still believe in an entrance.',
    preview: '/media/project-dionysia.webp',
    previewPosition: 'center',
    href: '/projects/dionysia',
    external: false,
    accent: 'var(--color-coral)',
    alt: 'Dionysia theatre website hero with a fractured marble sculpture, burgundy curtains and oversized editorial typography.',
  },
  {
    id: 'malu-atelier',
    index: '03',
    title: 'MALU Atelier',
    type: 'Fashion and culture website',
    year: '2026',
    description: 'A tactile launch for a label that refuses to whisper.',
    preview: '/media/project-malu-atelier.svg',
    previewPosition: 'center 24%',
    href: 'https://example.com/zade-malu-atelier',
    external: true,
    accent: 'var(--color-coral)',
    alt: 'Fashion website hero for MALU Atelier with a coral field, tailored silhouette and editorial labels.',
  },
  {
    id: 'kite-intelligence',
    index: '04',
    title: 'Kite Intelligence',
    type: 'AI product website',
    year: '2025',
    description: 'A live system map for teams making better calls, faster.',
    preview: '/media/project-kite-intelligence.svg',
    previewPosition: 'center 22%',
    href: 'https://example.com/zade-kite-intelligence',
    external: true,
    accent: 'var(--color-citrus)',
    alt: 'AI product website hero for Kite Intelligence with signal lines, a lime field and a live system panel.',
  },
  {
    id: 'rove-field-notes',
    index: '05',
    title: 'Rove Field Notes',
    type: 'Travel editorial website',
    year: '2026',
    description: 'A tactile guide to the places hiding in plain sight.',
    preview: '/media/project-rove-field-notes.svg',
    previewPosition: 'center',
    href: 'https://example.com/zade-rove-field-notes',
    external: true,
    accent: 'var(--color-cobalt)',
    alt: 'Travel editorial website hero for Rove Field Notes with cobalt topography, destination type and a compass mark.',
  },
  {
    id: 'supper-club-29',
    index: '06',
    title: 'Supper Club 29',
    type: 'Hospitality website',
    year: '2025',
    description: 'A late-night reservation experience with a pulse under the table.',
    preview: '/media/project-supper-club.svg',
    previewPosition: 'center 62%',
    href: 'https://example.com/zade-supper-club-29',
    external: true,
    accent: 'var(--color-pink)',
    alt: 'Hospitality website hero for Supper Club 29 with a pink room, menu typography and a graphic dining object.',
  },
  {
    id: 'reverb-ledger',
    index: '07',
    title: 'Reverb Ledger',
    type: 'Fintech product website',
    year: '2026',
    description: 'A new financial interface for people who want more from a number.',
    preview: '/media/project-reverb-ledger.svg',
    previewPosition: 'center',
    href: 'https://example.com/zade-reverb-ledger',
    external: true,
    accent: 'var(--color-yellow)',
    alt: 'Fintech product website hero for Reverb Ledger with a yellow field, ledger linework and a large product number.',
  },
]
