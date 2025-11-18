export default function Footer(){
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-amber-300 shadow ring-1 ring-black/5">🐾</span>
            <span className="font-semibold text-slate-900">Paws & Hearts</span>
          </div>
          <p className="text-slate-600">We rescue, rehabilitate, and rehome animals while empowering communities to care.</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Contact</div>
          <p>Email: hello@pawsandhearts.org</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>123 Paw Street, Petville</p>
        </div>
        <div>
          <div className="font-semibold text-slate-900 mb-2">Follow</div>
          <div className="flex gap-3">
            <a className="hover:text-pink-600" href="#">Facebook</a>
            <a className="hover:text-pink-600" href="#">Instagram</a>
            <a className="hover:text-pink-600" href="#">Twitter</a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 pb-8">© {new Date().getFullYear()} Paws & Hearts. All rights reserved.</div>
    </footer>
  )
}
