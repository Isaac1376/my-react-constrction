const API_BASE = import.meta.env.VITE_API_URL || '/api'

async function fetchJSON(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`)
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json()
}

export const api = {
  getCompany: () => fetchJSON('/company'),
  getServices: () => fetchJSON('/services'),
  getProjects: (category) =>
    fetchJSON(category ? `/projects?category=${encodeURIComponent(category)}` : '/projects'),
  getTestimonials: () => fetchJSON('/testimonials'),
  getStats: () => fetchJSON('/stats'),
  submitContact: async (data) => {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    const json = await res.json()
    if (!res.ok) throw new Error(json.detail?.[0]?.msg || 'Submission failed')
    return json
  },
}
