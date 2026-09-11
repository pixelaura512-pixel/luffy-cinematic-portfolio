import { motion } from 'framer-motion';

const LEGACY_IMG = `${import.meta.env.BASE_URL}images/sections/legacy.png`;

export default function Legacy() {
  return (
    <section
      id="legacy"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Full-width cinematic background image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={LEGACY_IMG}
          alt="Luffy standing at the edge of the sea, gazing toward an endless golden horizon"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          loading="lazy"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
        <motion.p
          className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Legacy — The Journey Continues
        </motion.p>
        <motion.h2
          className="font-display text-5xl sm:text-6xl lg:text-8xl text-cream leading-[0.9] mb-8 text-cinematic-strong"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          More Than a<br />
          <span className="text-shimmer">Pirate King</span>
        </motion.h2>
        <motion.p
          className="text-cream/75 text-base lg:text-lg leading-relaxed max-w-xl mx-auto mb-6 text-cinematic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Luffy is not chasing the title of Pirate King for power, or fame, or
          fear. He is chasing it because it means one thing — freedom. The
          freedom to go anywhere. The freedom to protect anyone. The freedom
          to live so loudly that the whole world remembers you were here.
        </motion.p>
        <motion.p
          className="text-cream/60 text-base leading-relaxed max-w-xl mx-auto mb-6 text-cinematic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          He shows us that the real treasure was never at the end of the
          Grand Line. It was the crew beside you. The storms you survived
          together. The version of yourself you became along the way — braver,
          kinder, freer than the boy who first pushed off from shore.
        </motion.p>
        <motion.div
          className="glass-card rounded-2xl p-6 mt-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-gold text-lg font-serif italic leading-relaxed">
            "The horizon was never the end of the journey. It was only the
            beginning."
          </p>
          <p className="text-cream/40 text-xs tracking-[0.2em] uppercase mt-3">
            — Monkey D. Luffy
          </p>
        </motion.div>
      </div>
    </section>
  );
}
