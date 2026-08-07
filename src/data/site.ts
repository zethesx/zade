export const site = {
  brand: 'Zade Studios',
  shortMark: 'ZS',
  email: 'hello@zadestudios.com',
  location: 'Independent studio · Europe / everywhere',
  availability: 'Taking on a few loud ideas for 2026',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com/zadestudios' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/zadestudios' },
  ],
  nav: [
    { label: 'Selected work', href: '#work' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

export const capabilities = [
  { name: 'Creative direction', detail: 'The point of view, before the pixels.' },
  { name: 'Web design', detail: 'Interfaces with rhythm, not filler.' },
  { name: 'Development', detail: 'Fast, precise, built to keep moving.' },
  { name: 'Motion & interaction', detail: 'The details that make the click feel good.' },
  { name: 'Launch support', detail: 'A cleaner handoff and a sharper first day.' },
] as const
