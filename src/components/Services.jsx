import { ICONS } from './About'

export default function Services({ services }) {
  return (
    <section id="services" className="services section section--dark">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label section-label--light">Our Services</span>
          <h2 className="section-title section-title--light">
            Comprehensive Construction Solutions
          </h2>
          <p className="section-desc section-desc--light">
            From groundbreaking to ribbon-cutting, we handle every phase
            of your project with expertise and dedication.
          </p>
        </div>

        <div className="services__grid">
          {(services || []).map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-card__icon">
                {ICONS[service.icon] || ICONS.building}
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="service-card__link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
