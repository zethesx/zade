import { useEffect, useRef } from 'react'
import { site } from '../data/site'

export function StatementPlayground() {
  const playgroundRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = playgroundRef.current
    if (!node) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0

    const resetPointer = () => {
      if (frame) window.cancelAnimationFrame(frame)
      node.dataset.pointer = 'idle'
      node.style.setProperty('--play-shift-x', '0px')
      node.style.setProperty('--play-shift-y', '0px')
      node.style.setProperty('--play-tilt', '0deg')
      node.style.setProperty('--play-x', '50%')
      node.style.setProperty('--play-y', '50%')
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || motionQuery.matches) return
      if (frame) window.cancelAnimationFrame(frame)

      frame = window.requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect()
        const x = Math.max(0, Math.min(rect.width, event.clientX - rect.left))
        const y = Math.max(0, Math.min(rect.height, event.clientY - rect.top))
        const offsetX = x - rect.width / 2
        const offsetY = y - rect.height / 2

        node.dataset.pointer = 'active'
        node.style.setProperty('--play-x', `${(x / rect.width) * 100}%`)
        node.style.setProperty('--play-y', `${(y / rect.height) * 100}%`)
        node.style.setProperty('--play-shift-x', `${Math.round(offsetX * 0.055)}px`)
        node.style.setProperty('--play-shift-y', `${Math.round(offsetY * 0.055)}px`)
        node.style.setProperty('--play-tilt', `${(offsetX / rect.width) * 4}deg`)
      })
    }

    resetPointer()
    node.addEventListener('pointermove', handlePointerMove, { passive: true })
    node.addEventListener('pointerleave', resetPointer)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      node.removeEventListener('pointermove', handlePointerMove)
      node.removeEventListener('pointerleave', resetPointer)
    }
  }, [])

  return (
    <div ref={playgroundRef} className="manifesto__playground" aria-hidden="true">
      <div className="manifesto__playground-topline">
        <span>Motion field / 03</span>
        <span>Live / detail engine</span>
      </div>
      <div className="manifesto__playground-field">
        <svg className="manifesto__playground-svg" viewBox="0 0 520 520" focusable="false">
          <rect className="playground__grid-fill" x="0" y="0" width="520" height="520" />
          <path className="playground__grid-line" d="M42 0v520M130 0v520M218 0v520M306 0v520M394 0v520M482 0v520M0 42h520M0 130h520M0 218h520M0 306h520M0 394h520M0 482h520" />
          <path className="playground__path playground__path--one" d="M32 426C94 334 96 194 188 164S332 208 486 76" />
          <path className="playground__path playground__path--two" d="M30 116C128 166 160 348 292 360s132-104 198-52" />
          <path className="playground__path playground__path--three" d="M60 474c116-32 164-124 258-96s126 98 184 52" />
          <path className="playground__path playground__path--accent" d="M32 426C94 334 96 194 188 164S332 208 486 76" />
          <circle className="playground__node playground__node--coral" cx="188" cy="164" r="6" />
          <circle className="playground__node playground__node--yellow" cx="292" cy="360" r="5" />
          <circle className="playground__node playground__node--blue" cx="486" cy="76" r="5" />
          <circle className="playground__node playground__node--paper" cx="60" cy="474" r="3" />
        </svg>
        <div className="playground__cursor" />
        <div className="playground__core">
          <img className="playground__core-mark" src={site.brandMark} alt="" />
          <span className="playground__core-label">Move / with intent</span>
        </div>
        <span className="playground__label playground__label--top">06° / 52° / 01</span>
        <span className="playground__label playground__label--side">Interaction active</span>
        <span className="playground__label playground__label--bottom">Signal / live</span>
        <span className="playground__label playground__label--pointer">Pointer / react</span>
        <span className="playground__tick playground__tick--one" />
        <span className="playground__tick playground__tick--two" />
      </div>
      <div className="manifesto__playground-footer">
        <span>Detail engine</span>
        <span><b>01</b> / 03</span>
      </div>
    </div>
  )
}
