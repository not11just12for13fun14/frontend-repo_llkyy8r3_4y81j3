export default function Hero({ onAdoptClick }){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-100 via-amber-50 to-white"/>
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-pink-300/30 blur-3xl"/>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-300/30 blur-3xl"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Give every fur-baby a loving home
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            We rescue, rehabilitate, and rehome animals. Join us in creating a world where every pet is safe, loved, and cared for.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#adopt" onClick={onAdoptClick} className="px-5 py-3 rounded-lg bg-pink-600 text-white font-semibold hover:bg-pink-700 transition-colors">Adopt Now</a>
            <a href="/get-involved" className="px-5 py-3 rounded-lg bg-white text-pink-700 ring-1 ring-pink-200 font-semibold hover:bg-pink-50 transition-colors">Volunteer</a>
            <a href="#donate" className="px-5 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-500 transition-colors">Donate</a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 text-center">
            <div className="bg-white/70 rounded-xl p-4 shadow ring-1 ring-pink-100">
              <div className="text-2xl font-bold text-pink-600">2,300+</div>
              <div className="text-xs text-slate-600">Pets Rescued</div>
            </div>
            <div className="bg-white/70 rounded-xl p-4 shadow ring-1 ring-pink-100">
              <div className="text-2xl font-bold text-pink-600">1,200+</div>
              <div className="text-xs text-slate-600">Successful Adoptions</div>
            </div>
            <div className="bg-white/70 rounded-xl p-4 shadow ring-1 ring-pink-100">
              <div className="text-2xl font-bold text-pink-600">50+</div>
              <div className="text-xs text-slate-600">Partner Shelters</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop" alt="Happy dog and cat" className="rounded-2xl shadow-xl ring-1 ring-black/10"/>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 ring-1 ring-black/5">
            <div className="text-sm font-semibold text-slate-900">This month's rescues</div>
            <div className="text-xs text-slate-600">37 pets saved</div>
          </div>
        </div>
      </div>
    </section>
  )
}
