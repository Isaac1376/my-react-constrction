const API_BASE = import.meta.env.VITE_API_URL || '/api'

// Mock data for fallback (when backend is not available)
const mockData = {
  company: {
    name: "BuildPro Construction",
    tagline: "Building Tomorrow's Landmarks Today",
    phone: "+1 (555) 234-8900",
    email: "info@buildpro.com",
    address: "1200 Industrial Parkway, Suite 400, Houston, TX 77002",
    years_experience: 28,
    projects_completed: 450,
    team_members: 120,
    client_satisfaction: 98
  },
  services: [
    {
      id: 1,
      title: "Commercial Construction",
      description: "Office towers, retail complexes, and mixed-use developments built to the highest commercial standards.",
      icon: "building",
      features: ["Design-build delivery", "LEED certification", "Fast-track scheduling"]
    },
    {
      id: 2,
      title: "Residential Projects",
      description: "Luxury homes, multi-family housing, and custom residential builds with premium finishes.",
      icon: "home",
      features: ["Custom architecture", "Smart home integration", "Energy-efficient design"]
    },
    {
      id: 3,
      title: "Industrial & Infrastructure",
      description: "Warehouses, manufacturing plants, bridges, and large-scale infrastructure projects.",
      icon: "factory",
      features: ["Heavy civil works", "Turnkey solutions", "Safety-first approach"]
    },
    {
      id: 4,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with expert renovation, restoration, and adaptive reuse.",
      icon: "tools",
      features: ["Historic preservation", "Tenant improvements", "Phased construction"]
    },
    {
      id: 5,
      title: "Project Management",
      description: "End-to-end project oversight ensuring on-time, on-budget delivery every time.",
      icon: "clipboard",
      features: ["Cost control", "Quality assurance", "Stakeholder reporting"]
    },
    {
      id: 6,
      title: "Pre-Construction",
      description: "Feasibility studies, budgeting, scheduling, and value engineering before ground breaks.",
      icon: "blueprint",
      features: ["Cost estimation", "Risk analysis", "Permit coordination"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Skyline Tower",
      category: "Commercial",
      location: "Downtown Houston, TX",
      year: 2025,
      area: "850,000 sq ft",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
    },
    {
      id: 2,
      title: "Harbor View Residences",
      category: "Residential",
      location: "Galveston, TX",
      year: 2024,
      area: "320 units",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
    },
    {
      id: 3,
      title: "Gulf Logistics Hub",
      category: "Industrial",
      location: "Baytown, TX",
      year: 2024,
      area: "1.2M sq ft",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
    },
    {
      id: 4,
      title: "Heritage Hotel Restoration",
      category: "Renovation",
      location: "San Antonio, TX",
      year: 2023,
      area: "180 rooms",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
    },
    {
      id: 5,
      title: "Tech Campus Phase II",
      category: "Commercial",
      location: "Austin, TX",
      year: 2023,
      area: "500,000 sq ft",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
    },
    {
      id: 6,
      title: "Riverside Bridge Expansion",
      category: "Infrastructure",
      location: "Dallas, TX",
      year: 2022,
      area: "2.4 mile span",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "CEO, Mitchell Properties",
      quote: "BuildPro delivered our 40-story office tower two months ahead of schedule. Their professionalism and attention to detail are unmatched in the industry.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
    },
    {
      id: 2,
      name: "James Rodriguez",
      role: "Director of Operations, Gulf Energy",
      quote: "From pre-construction planning to final handover, BuildPro managed our industrial facility with zero safety incidents and came in 8% under budget.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "VP Development, Urban Living Co.",
      quote: "We've partnered with BuildPro on three residential projects. Their craftsmanship and client communication set the gold standard for construction partners.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
    }
  ],
  stats: {
    years_experience: 28,
    projects_completed: 450,
    team_members: 120,
    client_satisfaction: 98
  }
}

async function fetchJSON(endpoint) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`)
    if (!res.ok) throw new Error(`API error: ${res.status}`)
    return res.json()
  } catch (error) {
    console.warn(`API call failed for ${endpoint}, using mock data:`, error)
    // Return mock data as fallback
    if (endpoint === '/company') return mockData.company
    if (endpoint === '/services') return mockData.services
    if (endpoint === '/projects') return mockData.projects
    if (endpoint.startsWith('/projects?')) return mockData.projects
    if (endpoint === '/testimonials') return mockData.testimonials
    if (endpoint === '/stats') return mockData.stats
    throw error
  }
}

export const api = {
  getCompany: () => fetchJSON('/company'),
  getServices: () => fetchJSON('/services'),
  getProjects: (category) =>
    fetchJSON(category ? `/projects?category=${encodeURIComponent(category)}` : '/projects').then(projects =>
      category ? projects.filter(p => p.category === category) : projects
    ),
  getTestimonials: () => fetchJSON('/testimonials'),
  getStats: () => fetchJSON('/stats'),
  submitContact: async (data) => {
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.detail?.[0]?.msg || 'Submission failed')
      return json
    } catch (error) {
      console.warn('Contact submission failed:', error)
      return { status: 'offline', message: 'Contact form unavailable offline. Please try again later.' }
    }
  },
}
