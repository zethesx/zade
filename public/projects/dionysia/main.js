

const productions = [
  { slug: "medea", number: "01", title: "Medea", source: "Euripides", date: "09 — 28 Oct", tag: "A love that learned to burn.", image: "/projects/dionysia/media/hero-sculpture.png" },
  { slug: "orpheus", number: "02", title: "Orpheus", source: "After the descent", date: "18 Oct — 12 Nov", tag: "Do not turn around.", image: "/projects/dionysia/media/orpheus-stage.png" },
  { slug: "antigone", number: "03", title: "Antigone", source: "Sophocles", date: "04 — 21 Dec", tag: "The law has a sister.", image: "/projects/dionysia/media/archive-letter.png" }
];

const journal = [
  ["01", "The costume that remembers", "Notes on red, mourning, and the hand that fastens a collar before the house opens.", "Studio notes · 06.08.26"],
  ["02", "A brief history of looking back", "Orpheus is not the first person to mistake longing for a map.", "Essay · 29.07.26"],
  ["03", "Three roses, one stage", "A prop list from the room where Antigone became possible.", "Archive · 14.07.26"]
];

const nav = () => `
  <header class="programme-header" data-reveal>
    <div class="programme-header__line"><span>Dionysia · Berlin</span><span>Season 26 / 27</span><span>Est. MMXXVI</span></div>
    <a class="programme-header__name" href="/" aria-label="Dionysia home">Dionysia</a>
    <nav class="programme-header__nav" aria-label="Primary navigation">
      <a href="#season">Season</a><a href="#house">The House</a><a href="#journal">Journal</a><a href="#tickets">Tickets</a>
    </nav>
    <button class="programme-header__menu" type="button" aria-expanded="false" aria-controls="programme-menu">Open programme</button>
    <div class="programme-header__rule" aria-hidden="true"></div>
  </header>`;

const footer = () => `
  <footer class="footer">
    <p class="footer__line">Some stories deserve velvet.</p><p class="footer__flourish"><span>Experience these in</span><em>Dionysia</em></p>
    <div class="footer__meta"><span>Dionysia · Berlin</span><span>MMXXVI — MMXXVII</span><span>Red curtain, open door.</span></div>
    <div class="footer__links"><a href="#season">Season</a><a href="#tickets">Tickets</a><a href="#journal">Journal</a><a href="mailto:letters@dionysia.house">Contact</a><a href="#newsletter">Letters from the stage</a></div>
  </footer>`;

const menu = () => `
  <div class="menu-overlay" id="programme-menu" aria-hidden="true">
    <div class="menu-overlay__panel">
      <nav class="menu-overlay__links" aria-label="Programme navigation"><a href="#season">The season</a><a href="#house">The house</a><a href="#journal">The journal</a><a href="#tickets">Your night</a></nav>
      <p class="menu-overlay__note">Keep the programme. It may be useful later, when the night becomes difficult to explain.</p>
    </div>
  </div>`;

const productionRows = () => productions.map((item) => `
  <a class="production-row" data-reveal href="#season" data-preview-href="/production/${item.slug}">
    <span class="production-row__number">${item.number}</span><h3 class="production-row__title">${item.title}</h3><span class="production-row__tagline">${item.tag}</span><span class="production-row__meta">${item.date}<br>${item.source}</span><span class="production-row__arrow" aria-hidden="true">↗</span>
  </a>`).join("");

const journalCards = () => journal.map(([num, title, copy, meta]) => `
  <a class="journal-card" data-reveal href="#journal" data-preview-href="/journal#${title.toLowerCase().replaceAll(" ", "-")}"><span class="journal-card__number">${num}</span><h3>${title}</h3><p>${copy}</p><span class="journal-card__meta"><span>${meta}</span><span>Read ↗</span></span></a>`).join("");

const home = () => `
  <div class="page">
    ${nav()}
    <section class="hero" data-hero>
      <div class="hero__scene"><img class="hero__image" src="/projects/dionysia/media/hero-sculpture.png" alt="Fractured marble torso emerging from burgundy theatre curtains" fetchpriority="high"></div>
      <div class="hero__content" data-reveal><div class="hero__kicker"><span>House of theatre / Berlin</span><span>Tonight, we misbehave.</span></div><h1 class="hero__title"><span>Dion</span><span>ysia</span></h1><div class="hero__foot"><p class="hero__dek">A stage for beautiful disasters, old myths, and the people who still believe in an entrance.</p><span class="scroll-cue">Enter slowly</span></div></div>
    </section>
    <section class="section season" id="season"><div class="section__inner"><div class="season__intro" data-reveal><div><span class="act-mark">Act I · The season</span><h2>What we<br>risk tonight.</h2></div><p>Three plays. No safe seats. Our 26/27 programme is a study in longing, consequence, and the pleasure of staying until the lights return.</p></div><div class="production-list">${productionRows()}</div></div></section>
    <section class="statement"><div class="statement__inner" data-reveal><span class="statement__ghost" aria-hidden="true">DESIRE</span><h2 class="statement__title"><span>Desire</span><span>needs</span><span>an audience.</span></h2><p class="statement__note">If it were easy to say, it would not need a stage.</p></div></section>
    <section class="feature" id="orpheus"><div class="section__inner"><div class="feature__visual" data-reveal><img class="feature__image" src="/projects/dionysia/media/orpheus-stage.png" alt="Empty grand theatre stage with red velvet curtains opening onto moonlight" loading="lazy"><div class="feature__content"><div><span class="act-mark">Featured performance · 18 Oct</span><h2>Orpheus</h2></div><div class="feature__meta"><small>After the descent</small>A play about looking back, staged for one very long night.<br><a class="text-link" href="#tickets" data-preview-href="/production/orpheus">View the production</a></div></div></div></div></section>
    <section class="section house" id="house"><div class="section__inner house__grid"><div class="house__copy" data-reveal><span class="act-mark">Act II · The house</span><h2>We built a house for beautiful disasters.</h2><p>Dionysia is a fictional theatre with real doors, 312 red velvet seats, and a very low tolerance for polite applause.</p><div class="house__details"><div class="house__detail"><strong>312</strong><span>Red velvet seats</span></div><div class="house__detail"><strong>27</strong><span>Nights of misbehaviour</span></div><div class="house__detail"><strong>1</strong><span>Grand stage</span></div><div class="house__detail"><strong>∞</strong><span>Reasons to return</span></div></div></div><div class="house__mark" data-reveal><img class="house__image" src="/projects/dionysia/media/house-performer.png" alt="Performer emerging from burgundy velvet backstage" loading="lazy"></div></div></section>
    <div class="marquee" aria-label="Dionysia themes"><div class="marquee__track"><span>Desire</span><span>Tragedy</span><span>Ecstasy</span><span>Applause</span><span>Blood</span><span>Roses</span><span>Curtain</span><span>Desire</span><span>Tragedy</span><span>Ecstasy</span><span>Applause</span><span>Blood</span><span>Roses</span><span>Curtain</span></div></div>
    <section class="section archive"><div class="section__inner archive__grid"><div class="archive__image-wrap" data-reveal><img class="archive__image" src="/projects/dionysia/media/archive-letter.png" alt="Theatre programme, handwritten letter, wine glass and dark rose on a dressing-room table" loading="lazy"></div><div class="archive__copy" data-reveal><span class="act-mark">Interlude · The archive</span><h2>Keep the scraps.</h2><p>Programmes, ticket stubs, costume notes, the line that nearly made it into the final scene.</p><div class="archive__list"><div class="archive__item"><span>Orpheus / rehearsal book</span><span>2026</span></div><div class="archive__item"><span>Letter from the balcony</span><span>03:14</span></div><div class="archive__item"><span>Rose study / red pigment</span><span>Plate 07</span></div></div><a class="text-link" href="#journal">Enter the archive</a></div></div></section>
    <section class="letter"><div class="letter__body" data-reveal><p class="letter__quote">“To enter a theatre is to agree, for a few hours, that longing is real.”</p><p class="letter__sign">— found in the house programme, unsigned</p><span class="letter__date">Berlin · after midnight</span></div></section>
    ${tickets()}
    <section class="section journal" id="journal"><div class="section__inner"><div class="journal__head" data-reveal><div><span class="act-mark">Act III · Notes from the stage</span><h2>From the wings.</h2></div><a href="#journal">Read the whole journal ↗</a></div><div class="journal__grid">${journalCards()}</div></div></section>
    ${newsletter()}
    ${footer()}
    ${menu()}
  </div>`;

const tickets = () => `
  <section class="section tickets" id="tickets"><div class="section__inner tickets__grid"><div class="tickets__copy" data-reveal><span class="act-mark">Invitation &middot; Your night</span><h2>An<br>invitation.</h2><p>Choose a night.<br>Take a seat.<br>Stay until the lights return.</p><span class="tickets__aside">The house opens one hour before the first scene.</span></div><div class="ticket-card" data-reveal><div class="ticket-card__masthead"><span>Dionysia</span><span>Admit one</span></div><div class="ticket-card__serial">Serial 001 / The Grand Stage</div><h3 class="ticket-card__title">Medea</h3><p class="ticket-card__sub">A love that learned to burn.</p><div class="ticket-card__details"><div><span>Production</span><strong>Medea</strong></div><div><span>Stage</span><strong>Grand Stage</strong></div><div><span>Date</span><strong>18 Oct</strong></div><div><span>Seats</span><strong>Choose below</strong></div></div><div class="ticket-options"><button class="ticket-option" type="button" aria-pressed="true"><span>I &middot; Friday / 18 October</span><span>20:00</span></button><button class="ticket-option" type="button" aria-pressed="false"><span>II &middot; Saturday / 19 October</span><span>20:00</span></button><button class="ticket-option" type="button" aria-pressed="false"><span>III &middot; Wednesday / 23 October</span><span>19:30</span></button></div><div class="ticket-card__action"><span class="ticket-status" aria-live="polite"></span><button class="book-button" type="button">Reserve &rarr;</button></div></div><aside class="tickets__marginalia" data-reveal><span class="tickets__marginalia-label">Season 26 / 27</span><p>Grand Stage<br>Berlin</p><span class="tickets__marginalia-rule"></span><span>Doors / 19:00<br>Curtain / 20:00</span><span class="tickets__marginalia-note">Dress code / desire</span></aside></div></section>`;

const newsletter = () => `
  <section class="section newsletter" id="newsletter"><div class="section__inner newsletter__grid"><div data-reveal><span class="act-mark">Afterthought · Letters from the stage</span><h2>Let us write to you.</h2></div><div data-reveal><p>Occasional notes from rehearsals, the archive, and the hour before the curtain rises. Never loud. Never daily.</p><form id="newsletter-form"><label class="sr-only" for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" placeholder="your email, discreetly" required><button type="submit">Send me letters</button></form><p class="form-status" aria-live="polite"></p></div></div></section>`;

const routePage = () => home();

const app = document.querySelector("#app");
app.innerHTML = `<div class="grain" aria-hidden="true"></div><div class="curtain" aria-hidden="true"><div class="curtain__panel"></div><div class="curtain__panel"></div></div><div class="site-shell">${routePage()}</div>`;


window.addEventListener("load", () => document.body.classList.add("loaded"));

const reveal = () => {
  const items = document.querySelectorAll("[data-reveal]");
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { items.forEach((item) => item.classList.add("is-visible")); return; }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
};
reveal();

const toggleMenu = (open) => {
  const overlay = document.querySelector("#programme-menu");
  const button = document.querySelector(".programme-header__menu");
  if (!overlay || !button) return;
  overlay.classList.toggle("is-open", open);
  overlay.setAttribute("aria-hidden", String(!open));
  button.setAttribute("aria-expanded", String(open));
  button.textContent = open ? "Close programme" : "Open programme";
  document.body.classList.toggle("is-locked", open);
  if (open) overlay.querySelector("a")?.focus(); else button.focus();
};
document.querySelector(".programme-header__menu")?.addEventListener("click", () => toggleMenu(!document.querySelector("#programme-menu")?.classList.contains("is-open")));
document.querySelector("#programme-menu")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) toggleMenu(false); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") toggleMenu(false); });

document.querySelectorAll("[data-preview-href]").forEach((link) => link.addEventListener("click", (event) => event.preventDefault()));

document.querySelectorAll(".ticket-option").forEach((option) => option.addEventListener("click", () => { document.querySelectorAll(".ticket-option").forEach((item) => item.setAttribute("aria-pressed", String(item === option))); }));
document.querySelector(".book-button")?.addEventListener("click", () => { const status = document.querySelector(".ticket-status"); if (status) status.textContent = "A seat is being held for you."; });
document.querySelector("#newsletter-form")?.addEventListener("submit", (event) => { event.preventDefault(); const status = event.currentTarget.parentElement?.querySelector(".form-status"); if (status) status.textContent = "The next letter will find you."; event.currentTarget.reset(); });

const hero = document.querySelector("[data-hero]");
if (hero && window.matchMedia("(hover: hover) and (pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  hero.addEventListener("pointermove", (event) => { const rect = hero.getBoundingClientRect(); hero.style.setProperty("--mx", ((event.clientX - rect.left) / rect.width - 0.5) * 12); hero.style.setProperty("--my", ((event.clientY - rect.top) / rect.height - 0.5) * 8); });
}
