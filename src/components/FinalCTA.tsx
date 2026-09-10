import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative w-full bg-charcoal py-24 lg:py-32 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.p
          className="text-gold text-xs tracking-[0.5em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          The Journey Is Far From Over
        </motion.p>

        <motion.h2
          className="font-display text-4xl sm:text-5xl lg:text-7xl text-cream leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          The Horizon<br />
          <span className="text-shimmer">Still Waits.</span>
        </motion.h2>

        <motion.p
          className="text-cream/60 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The sea is endless. The dream moves forward. And somewhere beyond
          the edge of the map, a boy with a straw hat is still chasing the
          freedom that no one could give him — and no one can take away.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button
            onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary group"
          >
            Begin the Voyage
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.querySelector('#origins')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary"
          >
            Discover the Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}
