export default function Footer({ company }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#home" className="logo logo--footer">
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
          <p className="footer__tagline">
            {company?.tagline || "Building Tomorrow's Landmarks Today"}
          </p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Commercial</a></li>
            <li><a href="#services">Residential</a></li>
            <li><a href="#services">Industrial</a></li>
            <li><a href="#services">Renovation</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact</h4>
          <p>{company?.phone}</p>
          <p>{company?.email}</p>
          <p>{company?.address}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} {company?.name || 'BuildPro Construction'}. All rights reserved.</p>
          <div className="footer__social">
            {company?.portfolio && (
              <a href={company.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
            )}
            {company?.twitter && (
              <a href={company.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  )
}
