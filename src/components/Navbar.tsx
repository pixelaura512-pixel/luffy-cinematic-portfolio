import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Origins', href: '#origins' },
  { label: 'Journey', href: '#journey' },
  { label: 'Grand Line', href: '#grandline' },
  { label: 'Will', href: '#will' },
  { label: 'Crew', href: '#crew' },
  { label: 'Legacy', href: '#legacy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled ? 'glass-nav shadow-2xl' : 'bg-transparent'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center gap-2.5 group"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-gold group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 14c0-1 2-2 9-2s9 1 9 2-2 2-9 2-9-1-9-2z" fill="currentColor" fillOpacity="0.15" />
                <path d="M3 14c0 2 4 4 9 4s9-2 9-4" />
                <path d="M5 13c0-4 3-7 7-7s7 3 7 7" />
                <path d="M9 11c1-1 5-1 6 0" />
              </svg>
              <span className="font-display text-lg sm:text-xl tracking-[0.15em] text-cream">
                LUFFY
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="group relative px-3.5 py-2 text-sm font-medium transition-all duration-300"
                    style={{ color: isActive ? '#FFD96A' : 'rgba(255, 248, 231, 0.6)' }}
                  >
                    <span className="relative z-10 transition-all duration-300 group-hover:text-gold-light">
                      {item.label}
                    </span>
                    {/* Underline */}
                    <span
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-gold to-gold-deep transition-all duration-300 ${
                        isActive ? 'w-[70%]' : 'w-0 group-hover:w-[60%]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <button
              onClick={() => scrollToSection('#cta')}
              className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-deep text-charcoal font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{ boxShadow: '0 2px 10px rgba(255, 182, 39, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)' }}
            >
              <span className="hover:shadow-[0_4px_22px_rgba(255,182,39,0.3)] transition-shadow duration-300">Begin Voyage</span>
            </button>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden text-cream p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden flex items-center justify-center bg-charcoal/95 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-cream/80 hover:text-gold text-lg sm:text-xl font-display tracking-[0.15em] transition-colors relative group"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <span className="relative z-10 group-hover:[text-shadow:0_0_16px_rgba(255,182,39,0.5)] transition-all duration-300">
                    {item.label}
                  </span>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full bg-gradient-to-r from-gold to-crimson group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('#cta')}
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-gold to-gold-deep text-charcoal font-medium"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.06 }}
              >
                Begin Voyage
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
