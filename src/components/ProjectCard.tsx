import { useLayoutEffect, useRef, type CSSProperties, type PointerEvent } from 'react'
import type { Project } from '../data/projects'
import { Icon } from './Icon'

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null)
  const isReverse = Number.parseInt(project.index, 10) % 2 === 0

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    card.dataset.revealReady = 'true'
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      card.classList.add('is-visible')
      observer.disconnect()
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' })

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  const updatePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return
    const preview = event.currentTarget
    const rect = preview.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    const localX = Math.min(rect.width, Math.max(0, event.clientX - rect.left))
    const localY = Math.min(rect.height, Math.max(0, event.clientY - rect.top))
    const visual = preview.querySelector<HTMLElement>('.project__visual')
    if (visual) {
      visual.dataset.pointerActive = 'true'
      visual.style.setProperty('--spot-x', `${localX}px`)
      visual.style.setProperty('--spot-y', `${localY}px`)
    }
    cardRef.current?.style.setProperty('--tilt-x', `${x * 0.65}deg`)
    cardRef.current?.style.setProperty('--tilt-y', `${y * -0.65}deg`)
  }

  const resetPointer = (event: PointerEvent<HTMLDivElement>) => {
    const visual = event.currentTarget.querySelector<HTMLElement>('.project__visual')
    if (visual) visual.dataset.pointerActive = 'false'
    cardRef.current?.style.setProperty('--tilt-x', '0deg')
    cardRef.current?.style.setProperty('--tilt-y', '0deg')
  }

  const linkAttributes = project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <article
      className={`project${isReverse ? ' project--reverse' : ''}`}
      ref={cardRef}
      data-project-row
      style={{
        '--project-accent': project.accent,
        '--project-preview-position': project.previewPosition,
      } as CSSProperties}
    >
      <div className="project__link">
        <div
          className="project__preview-shell"
          onPointerEnter={updatePointer}
          onPointerMove={updatePointer}
          onPointerLeave={resetPointer}
          onPointerCancel={resetPointer}
        >
          <a className="project__preview-link" href={project.href} {...linkAttributes} aria-label={`Visit ${project.title} website`}>
            <div className="project__visual" data-pointer-active="false">
              <img
                src={project.preview}
                alt={project.alt}
                loading={project.index === '01' ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          </a>
          <a className="project__visit" href={project.href} {...linkAttributes} aria-label={`Visit ${project.title} website`}>
            <span>Visit website</span><Icon name="arrowUp" size={16} />
          </a>
        </div>
        <div className="project__body">
          <div className="project__index">PROJECT {project.index}</div>
          <div className="project__title-wrap">
            <p className="project__type">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="project__descriptor">{project.description}</p>
            <a className="project__external" href={project.href} {...linkAttributes}>Visit website <Icon name="arrowUp" size={14} /></a>
          </div>
          <div className="project__meta">
            <div><span className="project__meta-label">Format</span><span>Website</span></div>
            <div><span className="project__meta-label">Year</span><span>{project.year}</span></div>
          </div>
        </div>
      </div>
    </article>
  )
}
