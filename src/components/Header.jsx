import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Header({ company }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo__icon">
            <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
              <path d="M4 28V12l12-8 12 8v16H4z" stroke="currentColor" strokeWidth="2" />
              <path d="M12 28V18h8v10" stroke="currentColor" strokeWidth="2" />
              <rect x="14" y="8" width="4" height="4" fill="currentColor" />
            </svg>
          </span>
          <span className="logo__text">
            <strong>{company?.name?.split(' ')[0] || 'BuildPro'}</strong>
            <small>Construction</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn--primary header__cta">
          Get a Quote
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
