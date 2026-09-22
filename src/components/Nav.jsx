import './Nav.css'

export default function Nav({ sections, active }) {
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="nav">
      <button className="nav-logo" onClick={() => scroll('hero')}>
        <span className="nav-logo-t">T</span>
        <span className="nav-logo-name">MAHAJAN</span>
      </button>
      <nav aria-label="Sections">
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={active === id ? 'active' : ''}
                onClick={() => scroll(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="nav-links">
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/tmahajan90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
        <a
          className="nav-link"
          href="https://github.com/tmahajan90"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="nav-link nav-link-accent"
          href="/portfolio/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé ↗
        </a>
      </div>
    </header>
  )
}
