type IconName = 'arrow' | 'arrowUp' | 'plus' | 'down' | 'copy' | 'close'

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true as const }
  if (name === 'arrow' || name === 'arrowUp') {
    return <svg {...common}><path d={name === 'arrow' ? 'M4 12h15M13 6l6 6-6 6' : 'M6 18 18 6M8 6h10v10'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  }
  if (name === 'down') return <svg {...common}><path d="M12 4v15M6 13l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  if (name === 'copy') return <svg {...common}><rect x="8" y="8" width="10" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M16 8V6.5A1.5 1.5 0 0 0 14.5 5h-8A1.5 1.5 0 0 0 5 6.5v9A1.5 1.5 0 0 0 6.5 17H8" stroke="currentColor" strokeWidth="1.6" /></svg>
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
  return <svg {...common}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
}
