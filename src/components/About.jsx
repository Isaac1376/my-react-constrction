const ICONS = {
  building: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v18M9 9v.01M9 13v.01M9 17v.01" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  clipboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  blueprint: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
}

export default function About({ company }) {
  return (
    <section id="about" className="about section">
      <div className="container about__grid">
        <div className="about__images">
          <div className="about__img-main">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
              alt="Construction team reviewing blueprints"
            />
          </div>
          <div className="about__img-secondary">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
              alt="Modern building under construction"
            />
          </div>
          <div className="about__experience-badge">
            <strong>{company?.years_experience || 28}+</strong>
            <span>Years of Excellence</span>
          </div>
        </div>

        <div className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            A Legacy of Building Excellence Across Texas
          </h2>
          <p className="about__text">
            {company?.name || 'BuildPro Construction'} is a full-service general contractor
            specializing in commercial, residential, and industrial projects. With nearly
            three decades of experience, we've earned a reputation for delivering complex
            projects on time and within budget.
          </p>
          <p className="about__text">
            Our team of {company?.team_members || 120}+ skilled professionals combines
            cutting-edge technology with time-tested construction methods to bring your
            vision to life — safely, sustainably, and spectacularly.
          </p>

          <ul className="about__features">
            <li>
              <span className="about__check">✓</span>
              Licensed & fully insured in all 50 states
            </li>
            <li>
              <span className="about__check">✓</span>
              OSHA-certified safety program — zero tolerance policy
            </li>
            <li>
              <span className="about__check">✓</span>
              LEED-accredited professionals on every project
            </li>
            <li>
              <span className="about__check">✓</span>
              24/7 project support and transparent reporting
            </li>
          </ul>

          <a href="#contact" className="btn btn--primary">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  )
}

export { ICONS }
