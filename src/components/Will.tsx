import { motion } from 'framer-motion';

const WILL_IMG = '/images/sections/ChatGPT_Image_Sep_9,_2026,_10_38_35_PM.png';

export default function Will() {
  return (
    <section
      id="will"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Full-bleed dramatic image */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={WILL_IMG}
          alt="Luffy standing tall against overwhelming odds, embodying unbreakable will"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
          loading="lazy"
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        {/* Heavy cinematic darkening for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />
      </div>

      {/* Content — left-aligned for dramatic effect */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-xl">
          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Will to Never Fall
          </motion.p>
          <motion.h2
            className="font-display text-5xl sm:text-6xl lg:text-8xl text-cream leading-[0.9] mb-8 text-cinematic-strong"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            He Always<br />
            <span className="text-shimmer">Gets Back Up.</span>
          </motion.h2>
          <motion.p
            className="text-cream/80 text-base lg:text-lg leading-relaxed mb-6 text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            He has been beaten, broken, drowned, and left for dead. He has
            lost a brother he would have died for. He has watched his crew
            vanish in front of his eyes. And every single time, he stood back
            up. Not because he cannot be broken — because he refuses to stay
            down.
          </motion.p>
          <motion.p
            className="text-cream/65 text-base leading-relaxed mb-6 text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            That is the meaning of inherited will — the dreams of those who
            came before, carried forward by those who refuse to let them die.
            Luffy carries the will of a Pirate King, the hopes of a brother,
            and the trust of everyone who has ever believed in him.
          </motion.p>
          <motion.p
            className="text-cream/55 text-base leading-relaxed italic text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            His body can break. His will does not. That is the difference
            between a pirate and a king.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
