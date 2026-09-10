export default function Footer() {
  return (
    <footer className="relative bg-charcoal border-t border-gold/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 14c0-1 2-2 9-2s9 1 9 2-2 2-9 2-9-1-9-2z" fill="currentColor" fillOpacity="0.15" />
              <path d="M3 14c0 2 4 4 9 4s9-2 9-4" />
              <path d="M5 13c0-4 3-7 7-7s7 3 7 7" />
              <path d="M9 11c1-1 5-1 6 0" />
            </svg>
            <span className="font-display text-lg tracking-[0.15em] text-cream">
              LUFFY
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-3 sm:gap-5 text-sm text-cream/40 flex-wrap justify-center">
            <button onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Home</button>
            <button onClick={() => document.querySelector('#origins')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Origins</button>
            <button onClick={() => document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Journey</button>
            <button onClick={() => document.querySelector('#grandline')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Grand Line</button>
            <button onClick={() => document.querySelector('#will')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Will</button>
            <button onClick={() => document.querySelector('#crew')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Crew</button>
            <button onClick={() => document.querySelector('#legacy')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-gold transition-colors">Legacy</button>
          </div>

          {/* Copyright */}
          <p className="text-cream/30 text-xs tracking-[0.15em]">
            © 2026 — The Straw Hat's Journey
          </p>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-cream/5">
          <p className="text-cream/25 text-[11px] text-center leading-relaxed max-w-2xl mx-auto">
            Unofficial fan-made tribute. Monkey D. Luffy and One Piece belong to their respective rights holders.
          </p>
        </div>
      </div>
    </footer>
  );
}
