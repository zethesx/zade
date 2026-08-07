import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { Icon } from './Icon'

export function CopyButton() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 2200)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <button className={`copy-button ${copied ? 'is-copied' : ''}`} onClick={copyEmail} type="button" aria-live="polite">
      <span>{copied ? 'Copied to clipboard' : 'Copy email'}</span>
      <Icon name={copied ? 'arrowUp' : 'copy'} size={17} />
    </button>
  )
}
