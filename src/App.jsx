import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { About, Projects, Gallery, Stories, GetInvolved, Contact } from './components/Pages'
import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Home(){
  const navigate = useNavigate()
  const onAdoptClick = (e)=>{ e?.preventDefault(); navigate('/stories#adopt') }
  const [stats,setStats] = useState({rescued:0, adopted:0, available:0})
  useEffect(()=>{ fetch(`${API}/api/stats`).then(r=>r.json()).then(setStats).catch(()=>{}) },[])
  return (
    <>
      <Hero onAdoptClick={onAdoptClick} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-slate-900">Our Impact</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <StatCard kpi={stats.rescued} label="Rescue Stories"/>
          <StatCard kpi={stats.adopted} label="Adoptions"/>
          <StatCard kpi={stats.available} label="Available for Adoption"/>
        </div>
      </section>
    </>
  )
}

function StatCard({kpi,label}){
  return (
    <div className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-6 text-center">
      <div className="text-3xl font-extrabold text-pink-600">{kpi}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  )
}

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-amber-50 to-white text-slate-800">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
