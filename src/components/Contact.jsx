import { useState } from 'react'

const SERVICE_OPTIONS = [
  'Commercial Construction',
  'Residential Projects',
  'Industrial & Infrastructure',
  'Renovation & Remodeling',
  'Project Management',
  'Pre-Construction',
]

export default function Contact({ company, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })
    try {
      const result = await onSubmit(form)
      setStatus({ type: 'success', message: result.message })
      setForm({ name: '', email: '', phone: '', service: SERVICE_OPTIONS[0], message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Build Something Great Together</h2>
          <p className="contact__desc">
            Ready to start your next project? Fill out the form and our team
            will respond within 24 hours with a personalized consultation.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <strong>Visit Us</strong>
                <span>{company?.address}</span>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <strong>Call Us</strong>
                <a href={`tel:${company?.phone}`}>{company?.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <strong>Email Us</strong>
                <a href={`mailto:${company?.email}`}>{company?.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </span>
              <div>
                <strong>Portfolio</strong>
                <a href={company?.portfolio} target="_blank" rel="noopener noreferrer">
                  isaac1376.github.io/Portfolio
                </a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <div>
                <strong>X (Twitter)</strong>
                <a href={company?.twitter} target="_blank" rel="noopener noreferrer">
                  @Dhivagar1376
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 73584 04880"
              />
            </div>
            <div className="form-group">
              <label htmlFor="service">Service Needed *</label>
              <select
                id="service"
                name="service"
                required
                value={form.service}
                onChange={handleChange}
              >
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project scope, timeline, and budget..."
            />
          </div>

          {status.message && (
            <div className={`form-status form-status--${status.type}`}>
              {status.message}
            </div>
          )}

          <button type="submit" className="btn btn--primary btn--lg btn--full" disabled={loading}>
            {loading ? 'Sending...' : 'Request Free Consultation'}
          </button>
        </form>
      </div>
    </section>
  )
}
