type LogoProps = {
  compact?: boolean
  inverse?: boolean
  className?: string
}

export function Logo({ compact = false, inverse = false, className = '' }: LogoProps) {
  return (
    <span className={`logo ${inverse ? 'logo--inverse' : ''} ${className}`.trim()} aria-label="Zade Studios">
      <span className="logo__mark" aria-hidden="true">ZS</span>
      {!compact && <span className="logo__name"><span>Zade</span><span>Studios</span></span>}
    </span>
  )
}
