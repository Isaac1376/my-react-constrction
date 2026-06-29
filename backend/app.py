from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

app = FastAPI(title="BuildPro Construction API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

COMPANY = {
    "name": "BuildPro Construction",
    "tagline": "Building Tomorrow's Landmarks Today",
    "phone": "+91 73584 04880",
    "email": "Dhivagar1376@gmail.com",
    "address": "1200 Industrial Parkway, Suite 400, Houston, TX 77002",
    "portfolio": "https://isaac1376.github.io/Portfolio/",
    "twitter": "https://x.com/Dhivagar1376",
    "years_experience": 28,
    "projects_completed": 450,
    "team_members": 120,
    "client_satisfaction": 98,
}

SERVICES = [
    {
        "id": 1,
        "title": "Commercial Construction",
        "description": "Office towers, retail complexes, and mixed-use developments built to the highest commercial standards.",
        "icon": "building",
        "features": ["Design-build delivery", "LEED certification", "Fast-track scheduling"],
    },
    {
        "id": 2,
        "title": "Residential Projects",
        "description": "Luxury homes, multi-family housing, and custom residential builds with premium finishes.",
        "icon": "home",
        "features": ["Custom architecture", "Smart home integration", "Energy-efficient design"],
    },
    {
        "id": 3,
        "title": "Industrial & Infrastructure",
        "description": "Warehouses, manufacturing plants, bridges, and large-scale infrastructure projects.",
        "icon": "factory",
        "features": ["Heavy civil works", "Turnkey solutions", "Safety-first approach"],
    },
    {
        "id": 4,
        "title": "Renovation & Remodeling",
        "description": "Transform existing spaces with expert renovation, restoration, and adaptive reuse.",
        "icon": "tools",
        "features": ["Historic preservation", "Tenant improvements", "Phased construction"],
    },
    {
        "id": 5,
        "title": "Project Management",
        "description": "End-to-end project oversight ensuring on-time, on-budget delivery every time.",
        "icon": "clipboard",
        "features": ["Cost control", "Quality assurance", "Stakeholder reporting"],
    },
    {
        "id": 6,
        "title": "Pre-Construction",
        "description": "Feasibility studies, budgeting, scheduling, and value engineering before ground breaks.",
        "icon": "blueprint",
        "features": ["Cost estimation", "Risk analysis", "Permit coordination"],
    },
]

PROJECTS = [
    {
        "id": 1,
        "title": "Skyline Tower",
        "category": "Commercial",
        "location": "Downtown Houston, TX",
        "year": 2025,
        "area": "850,000 sq ft",
        "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
        "id": 2,
        "title": "Harbor View Residences",
        "category": "Residential",
        "location": "Galveston, TX",
        "year": 2024,
        "area": "320 units",
        "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
        "id": 3,
        "title": "Gulf Logistics Hub",
        "category": "Industrial",
        "location": "Baytown, TX",
        "year": 2024,
        "area": "1.2M sq ft",
        "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    },
    {
        "id": 4,
        "title": "Heritage Hotel Restoration",
        "category": "Renovation",
        "location": "San Antonio, TX",
        "year": 2023,
        "area": "180 rooms",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    },
    {
        "id": 5,
        "title": "Tech Campus Phase II",
        "category": "Commercial",
        "location": "Austin, TX",
        "year": 2023,
        "area": "500,000 sq ft",
        "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    },
    {
        "id": 6,
        "title": "Riverside Bridge Expansion",
        "category": "Infrastructure",
        "location": "Dallas, TX",
        "year": 2022,
        "area": "2.4 mile span",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    },
]

TESTIMONIALS = [
    {
        "id": 1,
        "name": "Sarah Mitchell",
        "role": "CEO, Mitchell Properties",
        "quote": "BuildPro delivered our 40-story office tower two months ahead of schedule. Their professionalism and attention to detail are unmatched in the industry.",
        "rating": 5,
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80",
    },
    {
        "id": 2,
        "name": "James Rodriguez",
        "role": "Director of Operations, Gulf Energy",
        "quote": "From pre-construction planning to final handover, BuildPro managed our industrial facility with zero safety incidents and came in 8% under budget.",
        "rating": 5,
        "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    },
    {
        "id": 3,
        "name": "Emily Chen",
        "role": "VP Development, Urban Living Co.",
        "quote": "We've partnered with BuildPro on three residential projects. Their craftsmanship and client communication set the gold standard for construction partners.",
        "rating": 5,
        "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    },
]

contact_submissions: list[dict] = []


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$")
    phone: Optional[str] = Field(None, max_length=20)
    service: str = Field(..., min_length=2, max_length=100)
    message: str = Field(..., min_length=10, max_length=2000)


@app.get("/api/company")
def get_company():
    return COMPANY


@app.get("/api/services")
def get_services():
    return SERVICES


@app.get("/api/projects")
def get_projects(category: Optional[str] = None):
    if category and category != "All":
        return [p for p in PROJECTS if p["category"] == category]
    return PROJECTS


@app.get("/api/testimonials")
def get_testimonials():
    return TESTIMONIALS


@app.get("/api/stats")
def get_stats():
    return {
        "years_experience": COMPANY["years_experience"],
        "projects_completed": COMPANY["projects_completed"],
        "team_members": COMPANY["team_members"],
        "client_satisfaction": COMPANY["client_satisfaction"],
    }


@app.post("/api/contact")
def submit_contact(data: ContactRequest):
    submission = {
        "id": len(contact_submissions) + 1,
        "name": data.name,
        "email": data.email,
        "phone": data.phone,
        "service": data.service,
        "message": data.message,
        "submitted_at": datetime.now().isoformat(),
    }
    contact_submissions.append(submission)
    return {
        "success": True,
        "message": "Thank you! Our team will contact you within 24 hours.",
        "reference_id": f"BP-{submission['id']:04d}",
    }


@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "BuildPro API"}
