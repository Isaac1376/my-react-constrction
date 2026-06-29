import { useState, useEffect } from 'react'

const CATEGORIES = ['All', 'Commercial', 'Residential', 'Industrial', 'Renovation', 'Infrastructure']

export default function Projects({ projects, onFilter }) {
  const [active, setActive] = useState('All')
  const [filtered, setFiltered] = useState(projects || [])

  useEffect(() => {
    if (active === 'All') setFiltered(projects || [])
  }, [projects, active])

  const handleFilter = async (cat) => {
    setActive(cat)
    if (onFilter) {
      const result = await onFilter(cat)
      setFiltered(result)
    } else {
      setFiltered(
        cat === 'All' ? projects : projects.filter((p) => p.category === cat)
      )
    }
  }

  const display = active === 'All' && filtered.length === 0 ? projects : filtered

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-desc">
            Explore our portfolio of landmark buildings and infrastructure
            that define skylines across the region.
          </p>
        </div>

        <div className="projects__filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${active === cat ? 'filter-btn--active' : ''}`}
              onClick={() => handleFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {(display || []).map((project, i) => (
            <article
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-card__img-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-card__overlay">
                  <span className="project-card__category">{project.category}</span>
                </div>
              </div>
              <div className="project-card__body">
                <h3>{project.title}</h3>
                <div className="project-card__meta">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <p className="project-card__area">{project.area}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
