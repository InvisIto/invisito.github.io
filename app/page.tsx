const authors = [
  { name: "First Author", affiliation: "1" },
  { name: "Second Author", affiliation: "1" },
  { name: "Third Author", affiliation: "2" },
  { name: "Fourth Author", affiliation: "1" },
];

const resources = [
  { label: "Paper", icon: "↗", href: "#paper" },
  { label: "Video", icon: "▶", href: "#video" },
  { label: "Code", icon: "⌘", href: "#code" },
  { label: "BibTeX", icon: "{}", href: "#bibtex" },
];

export default function Home() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Invisito home">invisito</a>
        <a className="nav-paper" href="#paper">Research project · 2026</a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">ACM CHI · 2026</p>
        <h1>Invisito</h1>
        <p className="hero-subtitle">Making digital interactions disappear into the physical world.</p>
        <p className="hero-description">
          A research exploration of subtle, embodied interfaces that preserve the
          focus, materiality, and human presence of everyday experiences.
        </p>

        <div className="author-list">
          {authors.map((author, index) => (
            <span key={author.name}>
              <a href="#authors">{author.name}</a><sup>{author.affiliation}</sup>
              {index < authors.length - 1 && <i> · </i>}
            </span>
          ))}
        </div>
        <p className="affiliations" id="authors"><sup>1</sup>Your Lab &nbsp; <sup>2</sup>Your Institution</p>

        <div className="resource-links" aria-label="Project resources">
          {resources.map((resource) => (
            <a key={resource.label} href={resource.href}>
              <span>{resource.icon}</span>{resource.label}
            </a>
          ))}
        </div>

        <div className="field" aria-hidden="true">
          <div className="field-grid" />
          <div className="field-ring ring-one" />
          <div className="field-ring ring-two" />
          <div className="field-marker marker-one" />
          <div className="field-marker marker-two" />
          <p>present / unseen</p>
        </div>
      </section>

      <section className="abstract section" id="paper">
        <p className="section-index">01 / ABSTRACT</p>
        <div className="section-copy">
          <h2>Technology should feel less like a destination, and more like a material.</h2>
          <p>
            Digital systems often ask for attention before they offer assistance. Invisito
            investigates how interaction can become quieter: sensed through ordinary
            objects, expressed through peripheral cues, and shaped around people rather
            than screens. We introduce a design framework and a set of working prototypes
            for building interfaces that are useful without being visually demanding.
          </p>
        </div>
      </section>

      <section className="statement">
        <p>THE INTERFACE IS NOT GONE.</p>
        <p>IT HAS SIMPLY LEARNED WHEN TO STEP BACK.</p>
      </section>

      <section className="video-section section" id="video">
        <p className="section-index">02 / FILM</p>
        <div className="film-frame" role="img" aria-label="Invisito project film placeholder">
          <div className="play-button">▶</div>
          <span>INVISITO / PROJECT FILM</span>
          <small>Replace this frame with your YouTube or Vimeo embed</small>
        </div>
      </section>

      <section className="contributions section" id="code">
        <p className="section-index">03 / CONTRIBUTIONS</p>
        <div className="contribution-grid">
          <article><b>01</b><h3>A design language</h3><p>Principles for making computational behavior legible without turning it into visual noise.</p></article>
          <article><b>02</b><h3>Embodied prototypes</h3><p>Concrete studies of sensing, feedback, and interaction across familiar physical materials.</p></article>
          <article><b>03</b><h3>Human-centered evidence</h3><p>Findings on attention, trust, and how people recognize technology at the edge of awareness.</p></article>
        </div>
      </section>

      <section className="bibtex section" id="bibtex">
        <p className="section-index">04 / CITE</p>
        <pre>{`@inproceedings{invisito2026,
  title     = {Invisito: Making Digital Interactions
               Disappear into the Physical World},
  author    = {First Author and Second Author and
               Third Author and Fourth Author},
  booktitle = {Proceedings of the ACM CHI Conference},
  year      = {2026}
}`}</pre>
      </section>

      <footer>
        <span>INVISITO © 2026</span>
        <span>Built from the <a href="https://nerfies.github.io/">Nerfies project-page template</a></span>
      </footer>
    </main>
  );
}
