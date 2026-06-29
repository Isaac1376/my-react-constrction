function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="testimonials section section--gray">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-desc">
            Don't just take our word for it — hear from the leaders who trust us
            with their most important projects.
          </p>
        </div>

        <div className="testimonials__grid">
          {(testimonials || []).map((t) => (
            <article key={t.id} className="testimonial-card">
              <Stars count={t.rating} />
              <blockquote className="testimonial-card__quote">
                "{t.quote}"
              </blockquote>
              <div className="testimonial-card__author">
                <img src={t.image} alt={t.name} />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
