import { useState, useEffect } from 'react'
import { api } from './api/api'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [company, setCompany] = useState(null)
  const [services, setServices] = useState([])
  const [projects, setProjects] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      api.getCompany(),
      api.getServices(),
      api.getProjects(),
      api.getTestimonials(),
      api.getStats(),
    ])
      .then(([co, svc, proj, test, st]) => {
        setCompany(co)
        setServices(svc)
        setProjects(proj)
        setTestimonials(test)
        setStats(st)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const handleProjectFilter = (category) => api.getProjects(category)

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__spinner" />
        <p>Loading BuildPro...</p>
      </div>
    )
  }

  return (
    <>
      <Header company={company} />
      <main>
        <Hero company={company} stats={stats} />
        <About company={company} />
        <Services services={services} />
        <Stats stats={stats} />
        <Projects projects={projects} onFilter={handleProjectFilter} />
        <Testimonials testimonials={testimonials} />
        <Contact company={company} onSubmit={api.submitContact} />
      </main>
      <Footer company={company} />
    </>
  )
}

export default App
