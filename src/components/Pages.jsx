import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function About(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
      <p className="mt-4 text-slate-700">We are a non-profit dedicated to rescuing animals, supporting shelters, and connecting loving families with pets.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Our Story</h3>
          <p className="mt-2 text-slate-700">Founded by animal lovers, our mission is to ensure every pet finds a safe, loving home.</p>
          <h3 className="mt-6 text-xl font-semibold text-slate-900">Implementation Partners</h3>
          <p className="mt-2 text-slate-700">We collaborate with shelters and local vets to provide care and adoption opportunities.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">Our Team</h3>
          <ul className="mt-2 space-y-2 text-slate-700 list-disc list-inside">
            <li>Board Members</li>
            <li>Executive Members</li>
            <li>Advisory Board</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function Projects(){
  const [projects, setProjects] = useState([])
  useEffect(()=>{ fetch(`${API}/api/projects`).then(r=>r.json()).then(setProjects).catch(()=>setProjects([])) },[])
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p,i)=> (
          <div key={i} className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-5">
            {p.cover_image && <img src={p.cover_image} className="rounded-lg mb-3"/>}
            <div className="font-semibold text-slate-900">{p.title}</div>
            <div className="text-sm text-slate-600 mt-1">{p.summary}</div>
          </div>
        ))}
        {projects.length===0 && <div className="text-slate-600">No projects yet. Coming soon.</div>}
      </div>
    </div>
  )
}

export function Gallery(){
  const [items, setItems] = useState([])
  useEffect(()=>{ fetch(`${API}/api/gallery`).then(r=>r.json()).then(setItems).catch(()=>setItems([])) },[])
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-900">Gallery</h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((m,i)=> (
          <div key={i} className="relative group overflow-hidden rounded-xl ring-1 ring-slate-200">
            <img src={m.thumbnail || m.url} className="w-full h-60 object-cover group-hover:scale-105 transition-transform"/>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">{m.title}</div>
          </div>
        ))}
        {items.length===0 && <div className="text-slate-600">No media yet. Coming soon.</div>}
      </div>
    </div>
  )
}

export function Stories(){
  const [stories, setStories] = useState([])
  useEffect(()=>{ fetch(`${API}/api/stories`).then(r=>r.json()).then(setStories).catch(()=>setStories([])) },[])
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-900">Story of Fur-babies</h2>
      <div className="mt-6 space-y-6">
        {stories.map((s,i)=> (
          <article key={i} className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-5">
            <h3 className="text-xl font-semibold text-slate-900">{s.title}{s.pet_name? ` — ${s.pet_name}`:''}</h3>
            <p className="mt-2 text-slate-700">{s.content}</p>
          </article>
        ))}
        {stories.length===0 && <div className="text-slate-600">No stories yet. Coming soon.</div>}
      </div>
    </div>
  )
}

export function GetInvolved(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-900">Get Involved</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <FormCard title="Volunteer Registration" action={`${API}/api/volunteers`} fields={[{n:'full_name',l:'Full Name'},{n:'email',l:'Email',t:'email'},{n:'phone',l:'Phone'},{n:'interests',l:'Interests'},{n:'availability',l:'Availability'}]}/>
        <FormCard title="Adoption Registration" action={`${API}/api/adoptions`} fields={[{n:'pet_id',l:'Pet ID'},{n:'full_name',l:'Full Name'},{n:'email',l:'Email',t:'email'},{n:'phone',l:'Phone'},{n:'address',l:'Address'}]}/>
        <FormCard title="Donate" action="#" disabled note="Integrate your payment provider" fields={[{n:'amount',l:'Amount (USD)'}]}/>
        <FormCard title="Newsletter Subscription" action={`${API}/api/subscribe`} fields={[{n:'email',l:'Email',t:'email'}]}/>
      </div>
    </div>
  )
}

function FormCard({ title, action, fields, disabled=false, note }){
  const [status, setStatus] = useState('')
  const submit = async (e)=>{
    e.preventDefault();
    if(disabled){ setStatus('This demo form is disabled.'); return }
    const form = new FormData(e.currentTarget)
    const payload = {}
    fields.forEach(f=> payload[f.n] = form.get(f.n))
    try{
      const res = await fetch(action,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if(!res.ok) throw new Error('Request failed')
      setStatus('Submitted successfully!')
      e.currentTarget.reset()
    }catch(err){ setStatus('Something went wrong. Please try again.') }
  }
  return (
    <div className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-5">
      <div className="font-semibold text-slate-900">{title}</div>
      {note && <div className="text-xs text-slate-500 mt-1">{note}</div>}
      <form onSubmit={submit} className="mt-4 space-y-3">
        {fields.map((f)=> (
          <div key={f.n}>
            <label className="block text-sm text-slate-700 mb-1">{f.l}</label>
            <input name={f.n} type={f.t||'text'} className="w-full rounded-lg border-slate-300 focus:ring-pink-500 focus:border-pink-500" required />
          </div>
        ))}
        <button className="px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700">Submit</button>
        {status && <div className="text-sm text-slate-600">{status}</div>}
      </form>
    </div>
  )
}

export function Contact(){
  const [status, setStatus] = useState('')
  const submit = async (e)=>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    try{
      const res = await fetch(`${API}/api/contact`,{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
      if(!res.ok) throw new Error('Failed')
      setStatus('Message sent!')
      e.currentTarget.reset()
    }catch(err){ setStatus('Could not send. Please try again.') }
  }
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <form onSubmit={submit} className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-5 space-y-3">
          <div>
            <label className="block text-sm text-slate-700 mb-1">Full Name</label>
            <input name="full_name" className="w-full rounded-lg border-slate-300 focus:ring-pink-500 focus:border-pink-500" required/>
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input name="email" type="email" className="w-full rounded-lg border-slate-300 focus:ring-pink-500 focus:border-pink-500" required/>
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Phone</label>
            <input name="phone" className="w-full rounded-lg border-slate-300 focus:ring-pink-500 focus:border-pink-500"/>
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Subject</label>
            <input name="subject" className="w-full rounded-lg border-slate-300 focus:ring-pink-500 focus:border-pink-500" required/>
          </div>
          <div>
            <label className="block text-sm text-slate-700 mb-1">Message</label>
            <textarea name="message" rows="4" className="w-full rounded-lg border-slate-300 focus:ring-pink-500 focus:border-pink-500" required/>
          </div>
          <button className="px-4 py-2 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700">Send</button>
          {status && <div className="text-sm text-slate-600">{status}</div>}
        </form>
        <div>
          <div className="bg-white rounded-xl shadow ring-1 ring-slate-200 p-5">
            <div className="font-semibold text-slate-900">Office</div>
            <p className="text-slate-700 mt-2">123 Paw Street, Petville</p>
            <p className="text-slate-700">Email: hello@pawsandhearts.org</p>
            <p className="text-slate-700">Phone: +1 (555) 123-4567</p>
            <div className="mt-4">
              <iframe title="map" className="w-full h-60 rounded-lg" src="https://www.openstreetmap.org/export/embed.html?bbox=90.358%2C23.780%2C90.420%2C23.820&amp;layer=mapnik"/>
            </div>
            <div className="mt-3 text-sm text-slate-600">Follow us: Facebook • Instagram • Twitter</div>
          </div>
        </div>
      </div>
    </div>
  )
}
