import { motion } from 'framer-motion';

const SETTING_SAIL_IMG = `${import.meta.env.BASE_URL}images/sections/ChatGPT_Image_Sep_9,_2026,_10_33_43_PM.png`;

export default function SettingSail() {
  return (
    <section
      id="journey"
      className="relative min-h-screen w-full section-gradient flex items-center py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text — left side */}
          <motion.div
            className="order-1 flex flex-col gap-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase">
              Setting Sail
            </p>
            <h2 className="font-display text-5xl lg:text-7xl text-cream leading-[0.9] tracking-wide">
              The First<br />
              <span className="text-shimmer">Step</span>
            </h2>
            <p className="text-cream/70 text-base lg:text-lg leading-relaxed max-w-lg">
              At seventeen, Luffy pushed off from the docks of Foosha Village
              in a tiny boat with nothing but a straw hat and a grin. No map.
              No plan. No fear. Only a promise made to a man who believed in
              him — and that was enough to sail the entire world.
            </p>
            <p className="text-cream/60 text-base lg:text-lg leading-relaxed max-w-lg">
              One by one, they came. A swordsman with nowhere to go. A
              navigator who trusted no one. A cook, a doctor, an archaeologist,
              a shipwright, a musician, a helmsman. Luffy did not recruit them.
              He simply showed up at the worst moment of their lives and said,
              "Come with me." And they did.
            </p>
            <p className="text-cream/50 text-base leading-relaxed italic max-w-lg">
              He was not looking for the strongest. He was looking for the ones
              who dreamed — and had forgotten how.
            </p>
          </motion.div>

          {/* Image — right side */}
          <motion.div
            className="relative order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={SETTING_SAIL_IMG}
                alt="Luffy standing on the deck of a small ship, facing the open sea"
                className="w-full h-[450px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold/20 rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                  Chapter 01
                </p>
                <p className="text-cream/60 text-sm">
                  The journey of a thousand miles begins with a single sail.
                </p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gold/5 rounded-3xl -z-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
