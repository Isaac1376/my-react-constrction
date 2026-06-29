export default function Hero({ company, stats }) {
  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site at sunset"
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Trusted Since 1996 — {stats?.projects_completed || 450}+ Projects Delivered
        </div>

        <h1 className="hero__title">
          {company?.tagline || "Building Tomorrow's Landmarks Today"}
        </h1>

        <p className="hero__subtitle">
          Award-winning commercial, residential, and industrial construction.
          We transform blueprints into iconic structures with precision,
          safety, and unmatched craftsmanship.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn--primary btn--lg">
            Start Your Project
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#projects" className="btn btn--outline btn--lg">
            View Our Work
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <strong>{stats?.years_experience || 28}+</strong>
            <span>Years Experience</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>{stats?.team_members || 120}+</strong>
            <span>Expert Team</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <strong>{stats?.client_satisfaction || 98}%</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll to explore</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
