import { motion } from 'framer-motion';

const CREW_IMG = '/images/sections/ChatGPT_Image_Sep_9,_2026,_10_43_19_PM.png';

export default function StrawHatCrew() {
  return (
    <section id="crew" className="relative w-full overflow-hidden">
      {/* Wide cinematic crew image */}
      <div className="relative h-[75vh] lg:h-[85vh] w-full overflow-hidden">
        <motion.img
          src={CREW_IMG}
          alt="The Straw Hat Pirates standing together as a crew, silhouetted against a golden sky"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
          loading="lazy"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/35 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-charcoal/60" />

        {/* Centered text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto">
          <motion.p
            className="text-gold text-xs tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Straw Hat Crew
          </motion.p>
          <motion.h2
            className="font-display text-4xl lg:text-6xl text-cream leading-tight mb-6 text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            His Greatest Strength<br />
            <span className="text-gold">Sails Beside Him</span>
          </motion.h2>
          <motion.p
            className="text-cream/75 text-base lg:text-lg max-w-xl leading-relaxed text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luffy set out alone — a single boy on a tiny boat. But he did not
            stay that way. Across every sea and every island, he found people
            who had lost something: a dream, a home, a reason to keep going. He
            did not save them. He simply stood beside them until they were
            ready to save themselves.
          </motion.p>
          <motion.p
            className="text-cream/55 text-sm lg:text-base max-w-lg mt-4 leading-relaxed italic text-cinematic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            They are not his crew. They are his family. And a family that
            sails together can survive anything the Grand Line throws at them —
            because they will never face it alone.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
