export type Project = {
  id: string
  index: string
  title: string
  type: string
  year: string
  description: string
  preview: string
  previewPosition: string
  url: string
  accent: string
  alt: string
}

// Replace preview paths and URLs here when the real project destinations are ready.
export const projects: Project[] = [
  {
    id: 'nor-house',
    index: '01',
    title: 'NØR House',
    type: 'Architecture website',
    year: '2026',
    description: 'A sun-cut digital home for rooms with a point of view.',
    preview: '/media/project-nor-house.svg',
    previewPosition: 'left center',
    url: 'https://example.com/zade-nor-house',
    accent: 'var(--color-sand)',
    alt: 'Architecture website hero for NØR House with oversized typography, warm rooms and geometric light.',
  },
  {
    id: 'malu-atelier',
    index: '02',
    title: 'MALU Atelier',
    type: 'Fashion and culture website',
    year: '2026',
    description: 'A tactile launch for a label that refuses to whisper.',
    preview: '/media/project-malu-atelier.svg',
    previewPosition: 'center 24%',
    url: 'https://example.com/zade-malu-atelier',
    accent: 'var(--color-coral)',
    alt: 'Fashion website hero for MALU Atelier with a coral field, tailored silhouette and editorial labels.',
  },
  {
    id: 'kite-intelligence',
    index: '03',
    title: 'Kite Intelligence',
    type: 'AI product website',
    year: '2025',
    description: 'A live system map for teams making better calls, faster.',
    preview: '/media/project-kite-intelligence.svg',
    previewPosition: 'center 22%',
    url: 'https://example.com/zade-kite-intelligence',
    accent: 'var(--color-citrus)',
    alt: 'AI product website hero for Kite Intelligence with signal lines, a lime field and a live system panel.',
  },
  {
    id: 'rove-field-notes',
    index: '04',
    title: 'Rove Field Notes',
    type: 'Travel editorial website',
    year: '2026',
    description: 'A tactile guide to the places hiding in plain sight.',
    preview: '/media/project-rove-field-notes.svg',
    previewPosition: 'center',
    url: 'https://example.com/zade-rove-field-notes',
    accent: 'var(--color-cobalt)',
    alt: 'Travel editorial website hero for Rove Field Notes with cobalt topography, destination type and a compass mark.',
  },
  {
    id: 'supper-club-29',
    index: '05',
    title: 'Supper Club 29',
    type: 'Hospitality website',
    year: '2025',
    description: 'A late-night reservation experience with a pulse under the table.',
    preview: '/media/project-supper-club.svg',
    previewPosition: 'center 62%',
    url: 'https://example.com/zade-supper-club-29',
    accent: 'var(--color-pink)',
    alt: 'Hospitality website hero for Supper Club 29 with a pink room, menu typography and a graphic dining object.',
  },
  {
    id: 'reverb-ledger',
    index: '06',
    title: 'Reverb Ledger',
    type: 'Fintech product website',
    year: '2026',
    description: 'A new financial interface for people who want more from a number.',
    preview: '/media/project-reverb-ledger.svg',
    previewPosition: 'center',
    url: 'https://example.com/zade-reverb-ledger',
    accent: 'var(--color-yellow)',
    alt: 'Fintech product website hero for Reverb Ledger with a yellow field, ledger linework and a large product number.',
  },
]
