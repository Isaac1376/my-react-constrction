export default function Stats({ stats }) {
  const items = [
    { value: stats?.years_experience || 28, suffix: '+', label: 'Years of Experience' },
    { value: stats?.projects_completed || 450, suffix: '+', label: 'Projects Completed' },
    { value: stats?.team_members || 120, suffix: '+', label: 'Skilled Professionals' },
    { value: stats?.client_satisfaction || 98, suffix: '%', label: 'Client Satisfaction' },
  ]

  return (
    <section className="stats">
      <div className="stats__bg">
        <img
          src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80"
          alt=""
          aria-hidden="true"
        />
        <div className="stats__overlay" />
      </div>
      <div className="container stats__grid">
        {items.map((item) => (
          <div key={item.label} className="stats__item">
            <strong className="stats__value">
              {item.value}{item.suffix}
            </strong>
            <span className="stats__label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
