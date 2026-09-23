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
    id: 'hausmeister-gartenservice',
    index: '02',
    title: 'HAUSMEISTER & GARTENSERVICE',
    type: 'Property service website',
    year: '2026',
    description: 'A practical local service experience for garden care, maintenance, and everything in between.',
    preview: '/media/hausmeister-gartenservice-hero.webp',
    previewPosition: 'center',
    href: 'https://www.hausmeister-undgartenservice.de',
    external: true,
    accent: 'var(--color-yellow)',
    alt: 'Hausmeister and garden service website hero with hedge-care video, oversized German typography, and a clear call to action.',
  },
  {
    id: 'dionysia',
    index: '03',
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
    id: 'lichtwerft',
    index: '04',
    title: 'LICHTWERFT',
    type: 'Residential advisory website',
    year: '2026',
    description: 'A blue-hour property experience for selected homes and a new perspective on Hamburg.',
    preview: '/media/project-lichtwerft.webp',
    previewPosition: 'center',
    href: '/projects/lichtwerft',
    external: false,
    accent: 'var(--color-cobalt)',
    alt: 'LICHTWERFT residential advisory website hero with a blue-hour Hamburg tower, clouds and oversized editorial typography.',
  },
  {
    id: 'aurelle',
    index: '05',
    title: 'AURÉLLE',
    type: 'Editorial jewelry website',
    year: '2026',
    description: 'A quiet, sculptural jewelry experience shaped around skin, form, and light.',
    preview: '/media/project-aurelle.webp',
    previewPosition: 'center',
    href: '/projects/aurelle',
    external: false,
    accent: 'var(--color-coral)',
    alt: 'Aurélle jewelry website hero with a model wearing sculptural gold jewelry against a dark editorial backdrop.',
  },
  {
    id: 'rove-field-notes',
    index: '06',
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
    index: '07',
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
    index: '08',
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
