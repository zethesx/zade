import { useEffect, useRef, useState } from 'react'
import { capabilities, site } from './data/site'
import { projects } from './data/projects'
import { CopyButton } from './components/CopyButton'
import { Icon } from './components/Icon'
import { Logo } from './components/Logo'
import { ProjectCard } from './components/ProjectCard'
import { StatementPlayground } from './components/StatementPlayground'

const marqueeWords = ['Web design', 'Development', 'Motion', 'Art direction', 'Creative coding', 'Digital experiences']
const INTRO_DURATION_MS = 3000
const INTRO_EXIT_DURATION_MS = 880
const INTRO_DOT_INTERVAL_MS = 480
const INTRO_RING_LENGTH = 2 * Math.PI * 132

type IntroPhase = 'loading' | 'exiting' | 'done'

function App() {
  const [introPhase, setIntroPhase] = useState<IntroPhase>('loading')
  const [initDots, setInitDots] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCapability, setActiveCapability] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const introRef = useRef<HTMLDivElement | null>(null)
  const introPercentRef = useRef<HTMLSpanElement | null>(null)
  const pointerFrame = useRef<number | null>(null)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotion = () => {
      const reduced = motionQuery.matches
      setReducedMotion(reduced)
      document.documentElement.dataset.motionFallback = 'true'
      document.documentElement.dataset.motionIntent = 'authored'
      document.documentElement.dataset.motionState = reduced ? 'static fallback with visible content' : 'animated'
      document.documentElement.dataset.adaptation = 'stack'
      document.documentElement.dataset.authoritySource = 'user-brief + supplied-asset + approved-project-direction'
    }
    updateMotion()
    motionQuery.addEventListener('change', updateMotion)

    return () => {
      motionQuery.removeEventListener('change', updateMotion)
    }
  }, [])

  useEffect(() => {
    let progressFrame = 0
    let exitTimer = 0
    let dotTimer = 0
    let mounted = true
    let exitStarted = false

    const updateProgress = (progress: number) => {
      const boundedProgress = Math.min(1, Math.max(0, progress))
      introRef.current?.style.setProperty('--entry-progress', boundedProgress.toFixed(4))
      if (introPercentRef.current) {
        introPercentRef.current.textContent = `${String(Math.round(boundedProgress * 100)).padStart(3, '0')}%`
      }
    }

    const beginExit = () => {
      if (!mounted || exitStarted) return
      exitStarted = true
      updateProgress(1)
      setIntroPhase('exiting')
      exitTimer = window.setTimeout(() => {
        if (mounted) setIntroPhase('done')
      }, INTRO_EXIT_DURATION_MS)
    }

    if (reducedMotion) {
      updateProgress(1)
      setInitDots(3)
      exitTimer = window.setTimeout(beginExit, INTRO_DURATION_MS)
    } else {
      setInitDots(1)
      const startedAt = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / INTRO_DURATION_MS)
        updateProgress(progress)
        if (progress >= 1) {
          beginExit()
          return
        }
        progressFrame = window.requestAnimationFrame(tick)
      }

      progressFrame = window.requestAnimationFrame(tick)
      dotTimer = window.setInterval(() => {
        setInitDots((dots) => dots === 3 ? 1 : dots + 1)
      }, INTRO_DOT_INTERVAL_MS)
    }

    return () => {
      mounted = false
      window.cancelAnimationFrame(progressFrame)
      window.clearTimeout(exitTimer)
      window.clearInterval(dotTimer)
    }
  }, [reducedMotion])

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse' || reducedMotion) return
      if (pointerFrame.current) window.cancelAnimationFrame(pointerFrame.current)
      pointerFrame.current = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`)
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`)
      })
    }

    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      if (pointerFrame.current) window.cancelAnimationFrame(pointerFrame.current)
    }
  }, [reducedMotion])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`site ${introPhase === 'done' ? 'is-ready' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      <div className="site__grain" aria-hidden="true" />
      <div
        ref={introRef}
        className={`entry entry--${introPhase}`}
        style={{ '--entry-ring-length': INTRO_RING_LENGTH } as React.CSSProperties}
        aria-hidden={introPhase !== 'loading'}
        aria-label="Zade Studios is initializing"
      >
        <div className="entry__inner">
          <div className="entry__topline" aria-hidden="true">
            <span>Zade Studios / system 01</span>
            <span>Entry signal</span>
          </div>
          <div className="entry__progress-stage" aria-hidden="true">
            <svg className="entry__ring" viewBox="0 0 320 320" role="presentation">
              <circle className="entry__ring-track" cx="160" cy="160" r="132" />
              <circle className="entry__ring-progress" cx="160" cy="160" r="132" />
              <circle className="entry__ring-detail" cx="160" cy="160" r="145" />
            </svg>
            <img className="entry__word" src={site.brandMark} alt="" />
            <span className="entry__ring-index">/ 04</span>
          </div>
          <div
            className="entry__status"
            aria-live={introPhase === 'loading' ? 'polite' : 'off'}
            aria-label={`Initializing${'.'.repeat(initDots)}`}
          >
            <span>Initializing</span><span className="entry__status-dots" aria-hidden="true">{'.'.repeat(initDots)}</span>
          </div>
          <div className="entry__footer" aria-hidden="true">
            <span>Signal found</span>
            <span ref={introPercentRef}>000%</span>
          </div>
        </div>
      </div>

      <header className="site-header">
        <a className="site-header__logo" href="#top" aria-label="Zade Studios home" onClick={closeMenu}>
          <Logo compact />
        </a>
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {site.nav.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span className="site-nav__index">0{index + 1}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <a className="header-contact" href={`mailto:${site.email}`}>
          <span className="status-dot" aria-hidden="true" />
          <span>Start a project</span>
          <Icon name="arrowUp" size={16} />
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <span className="menu-toggle__label">{menuOpen ? 'Close' : 'Menu'}</span>
          <span className="menu-toggle__mark"><i /><i /></span>
        </button>
      </header>

      <main id="top" data-critical-content>
        <section className="hero" data-section="hero" data-hero aria-labelledby="hero-title">
          <div className="hero__field">
            {/* Two static gestures: one teal, one pink. Foreground windows reuse the same continuous paths. */}
            <div className="hero__paint hero__paint--back" aria-hidden="true">
              <svg className="hero__paint-svg" viewBox="0 0 1200 720" preserveAspectRatio="none" focusable="false">
                <defs>
                  <path id="hero-paint-teal-lower" d="M-80 532 C 32 446 122 586 238 506 S 382 430 506 522 S 654 596 786 492 S 924 424 1048 512 S 1162 582 1280 458" />
                  <path id="hero-paint-pink-make" d="M-40 144 C 105 95 230 166 354 126 S 520 92 690 136" />
                </defs>
                <use href="#hero-paint-teal-lower" className="hero__paint-stroke hero__paint-stroke--teal hero__paint-stroke--lower" />
                <use href="#hero-paint-pink-make" className="hero__paint-stroke hero__paint-stroke--pink hero__paint-stroke--make" />
              </svg>
            </div>
            <div className="hero__copy">
              <h1 id="hero-title" className="hero__title" data-headline>
                <span className="hero__line hero__line--one" data-headline-segment>WE MAKE</span>
                <span className="hero__line hero__line--two" data-headline-segment><span className="hero__accent-word">LOUD</span> <span>WEB</span></span>
                <span className="hero__line hero__line--three" data-headline-segment>EXPERIENCES<span className="hero__period">.</span></span>
              </h1>
              <div className="hero__under">
                <p className="hero__lede" data-body>Zade Studios creates websites with a pulse — expressive design, precise code and the little moves people remember.</p>
                <a className="button button--dark" data-primary-cta href="#work">
                  <span>See the work</span>
                  <span className="button__icon"><Icon name="arrow" size={17} /></span>
                </a>
              </div>
            </div>
            <div className="hero__paint hero__paint--front" aria-hidden="true">
              <svg className="hero__paint-svg" viewBox="0 0 1200 720" preserveAspectRatio="none" focusable="false">
                <defs>
                  <linearGradient id="hero-paint-mask-pink-gradient" gradientUnits="userSpaceOnUse" x1="-60" y1="0" x2="760" y2="0">
                    <stop offset="0%" stopColor="#000" /><stop offset="8%" stopColor="#000" /><stop offset="13%" stopColor="#fff" /><stop offset="27%" stopColor="#fff" /><stop offset="32%" stopColor="#000" /><stop offset="52%" stopColor="#000" /><stop offset="57%" stopColor="#fff" /><stop offset="69%" stopColor="#fff" /><stop offset="74%" stopColor="#000" /><stop offset="100%" stopColor="#000" />
                  </linearGradient>
                  <linearGradient id="hero-paint-mask-lower-gradient" gradientUnits="userSpaceOnUse" x1="-80" y1="0" x2="1280" y2="0">
                    <stop offset="0%" stopColor="#000" /><stop offset="6%" stopColor="#000" /><stop offset="12%" stopColor="#fff" /><stop offset="22%" stopColor="#fff" /><stop offset="28%" stopColor="#000" /><stop offset="42%" stopColor="#000" /><stop offset="48%" stopColor="#fff" /><stop offset="58%" stopColor="#fff" /><stop offset="64%" stopColor="#000" /><stop offset="76%" stopColor="#000" /><stop offset="82%" stopColor="#fff" /><stop offset="92%" stopColor="#fff" /><stop offset="98%" stopColor="#000" /><stop offset="100%" stopColor="#000" />
                  </linearGradient>
                  <mask id="hero-paint-mask-pink" maskUnits="userSpaceOnUse" mask-type="luminance" x="-60" y="0" width="820" height="720"><rect x="-60" y="0" width="820" height="720" fill="url(#hero-paint-mask-pink-gradient)" /></mask>
                  <mask id="hero-paint-mask-lower" maskUnits="userSpaceOnUse" mask-type="luminance" x="-80" y="0" width="1360" height="720"><rect x="-80" y="0" width="1360" height="720" fill="url(#hero-paint-mask-lower-gradient)" /></mask>
                </defs>
                <use href="#hero-paint-pink-make" mask="url(#hero-paint-mask-pink)" className="hero__paint-front-stroke hero__paint-front-stroke--pink hero__paint-front-stroke--make" />
                <use href="#hero-paint-teal-lower" mask="url(#hero-paint-mask-lower)" className="hero__paint-front-stroke hero__paint-front-stroke--teal hero__paint-front-stroke--lower" />
              </svg>
            </div>
            <div className="hero__signal" data-hero-visual aria-hidden="true">
              <div className="hero__signal-ring hero__signal-ring--outer" />
              <div className="hero__signal-ring hero__signal-ring--inner" />
              <div className="hero__signal-orbit hero__signal-orbit--one"><span /></div>
              <div className="hero__signal-orbit hero__signal-orbit--two"><span /></div>
              <div className="hero__signal-core"><img className="hero__signal-mark" src={site.brandMark} alt="" /></div>
              <span className="hero__signal-label hero__signal-label--top">signal / 01</span>
            </div>
          </div>
          <div className="hero__bottomline">
            <span>Scroll to explore</span>
            <span className="hero__availability"><span className="status-dot" aria-hidden="true" />{site.availability}</span>
          </div>
        </section>

        <section className="energy-strip" data-section="energy-strip" aria-label="Studio capabilities">
          <div className="energy-strip__rail">
            <div className="energy-strip__track">
              {[...marqueeWords, ...marqueeWords].map((word, index) => (
                <span key={`${word}-${index}`} className="energy-strip__word">{word}<span className="energy-strip__burst" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2.75v18.5M2.75 12h18.5M5.45 5.45l13.1 13.1M18.55 5.45 5.45 18.55" /></svg></span></span>
              ))}
            </div>
          </div>
          <div className="energy-strip__stamp">ZS / 26</div>
        </section>

        <section className="work-section" id="work" data-section="work" aria-labelledby="work-title">
          <div className="section-intro section-intro--work">
            <div>
              <p className="eyebrow">Selected work / 01—07</p>
              <h2 id="work-title">Websites with<br /><span>a point of view.</span></h2>
            </div>
            <p className="section-intro__note">Seven website worlds. One consistent way to see them.</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="work-section__tail">
            <span className="work-section__tail-mark">+</span>
            <p>Have a project that needs more than a nice interface?</p>
            <a href={`mailto:${site.email}`}>Let’s talk <Icon name="arrowUp" size={15} /></a>
          </div>
        </section>

        <section className="capabilities" id="capabilities" data-section="capabilities" aria-labelledby="capabilities-title">
          <div className="capabilities__side-note">WHAT WE DO / ON PURPOSE</div>
          <div className="capabilities__heading">
            <p className="eyebrow">The studio</p>
            <h2 id="capabilities-title">Clean systems.<br /><span>Loud ideas.</span></h2>
            <p className="capabilities__intro">We design and build digital experiences with character, motion and a reason to exist.</p>
          </div>
          <div className="capabilities__list" role="list" aria-label="Capabilities">
            {capabilities.map((capability, index) => (
              <button
                key={capability.name}
                type="button"
                className={`capability ${activeCapability === index ? 'is-active' : ''}`}
                aria-pressed={activeCapability === index}
                onClick={() => setActiveCapability(index)}
                onMouseEnter={() => setActiveCapability(index)}
              >
                <span className="capability__number">0{index + 1}</span>
                <span className="capability__name">{capability.name}</span>
                <span className="capability__detail">{capability.detail}</span>
                <span className="capability__arrow"><Icon name="arrowUp" size={17} /></span>
              </button>
            ))}
          </div>
          <div className="capabilities__signal" aria-hidden="true">
            <span className="capabilities__signal-word">{String(activeCapability + 1).padStart(2, '0')}</span>
            <span className="capabilities__signal-dot" />
          </div>
        </section>

        <section className="manifesto" data-section="manifesto" aria-labelledby="manifesto-title">
          <div className="manifesto__topline"><span>Somewhere between</span><span>the blueprint</span><span>and the plot twist.</span></div>
          <div className="manifesto__stage">
            <div className="manifesto__copy">
              <h2 id="manifesto-title">We like<br /><span>details</span> most<br />people miss<span className="manifesto__period">.</span></h2>
              <p>Because the internet has enough websites that behave. Ours should have a point of view.</p>
            </div>
            <StatementPlayground />
          </div>
        </section>

        <section className="contact" id="contact" data-section="contact" aria-labelledby="contact-title">
          <div className="contact__media" aria-hidden="true">
            <video className="contact__video" autoPlay muted loop playsInline preload="metadata" poster="/media/lumen-poster.svg">
              <source src="/media/lumen.mp4" type="video/mp4" />
            </video>
            <div className="contact__fallback" />
          </div>
          <div className="contact__overlay" aria-hidden="true" />
          <div className="contact__inner">
            <div className="contact__topline"><span>Final signal</span><span>Open for selected projects</span></div>
            <div className="contact__main">
              <p className="eyebrow">Have a project?</p>
              <h2 id="contact-title">Make it<br /><span>hard to forget.</span></h2>
              <p className="contact__lede">Tell us the good part. The strange part. The part you can’t stop thinking about.</p>
              <div className="contact__actions">
                <a className="button button--light" href={`mailto:${site.email}`}>
                  <span>{site.email}</span>
                  <span className="button__icon"><Icon name="arrowUp" size={17} /></span>
                </a>
                <CopyButton />
              </div>
            </div>
            <footer className="site-footer">
              <div className="site-footer__brand"><img className="site-footer__wordmark" src="/media/zade-studios-wordmark.png" alt="Zade Studios" /></div>
              <div className="site-footer__links">
                {site.socials.map((social) => <span key={social.label} className="site-footer__social-status"><span>{social.label}</span><span> — Coming soon</span></span>)}
                <a href="#top">Back to top <Icon name="arrowUp" size={13} /></a>
              </div>
              <div className="site-footer__meta"><span>© {new Date().getFullYear()} Zade Studios</span><span>{site.location}</span></div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
