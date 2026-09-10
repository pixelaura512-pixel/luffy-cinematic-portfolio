import { motion } from 'framer-motion';

const GRAND_LINE_IMG = '/images/sections/ChatGPT_Image_Sep_9,_2026,_11_08_53_PM.png';

export default function GrandLine() {
  return (
    <section id="grandline" className="relative w-full overflow-hidden">
      {/* Wide cinematic image */}
      <div className="relative h-[80vh] lg:h-[90vh] w-full overflow-hidden">
        <motion.img
          src={GRAND_LINE_IMG}
          alt="A vast, dangerous ocean with dramatic skies — the Grand Line"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-charcoal/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-transparent to-charcoal/70" />

        {/* Centered immersive text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Into the Grand Line
          </motion.p>
          <motion.h2
            className="font-display text-4xl sm:text-5xl lg:text-7xl text-cream leading-tight mb-6 text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Where the World<br />
            <span className="text-shimmer">Breaks Its Own Rules</span>
          </motion.h2>
          <motion.p
            className="text-cream/75 text-base lg:text-lg max-w-xl leading-relaxed text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Grand Line is a sea where the wind lies, the compass spins, and
            the sky itself cannot be trusted. Luffy sailed straight into it —
            not because he was ready, but because the One Piece was on the
            other side, and he does not believe in turning back.
          </motion.p>
          <motion.p
            className="text-cream/55 text-sm lg:text-base max-w-lg mt-4 leading-relaxed italic text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Every island brought a new enemy, a new ally, a new impossible
            challenge — and a new reason to keep going.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
