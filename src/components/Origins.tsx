import { motion } from 'framer-motion';

const ORIGINS_IMG = '/images/sections/ChatGPT_Image_Sep_9,_2026,_10_51_39_PM.png';

export default function Origins() {
  return (
    <section
      id="origins"
      className="relative min-h-screen w-full section-gradient flex items-center py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image — left side */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
          >
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                src={ORIGINS_IMG}
                alt="A young boy with a straw hat gazing at the sea from Foosha Village"
                className="w-full h-[450px] sm:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: 'center 20%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-gold/20 rounded-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs tracking-[0.3em] uppercase mb-1">
                  Foosha Village
                </p>
                <p className="text-cream/60 text-sm">
                  "I'm gonna be King of the Pirates!"
                </p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gold/5 rounded-3xl -z-10 blur-2xl" />
          </motion.div>

          {/* Text — right side */}
          <motion.div
            className="order-1 lg:order-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase">
              Origins
            </p>
            <h2 className="font-display text-5xl lg:text-7xl text-cream leading-[0.9] tracking-wide">
              Where the<br />
              <span className="text-shimmer">Dream Began</span>
            </h2>
            <p className="text-cream/70 text-base lg:text-lg leading-relaxed max-w-lg">
              Before the world knew his name, there was only a boy in Foosha
              Village with a borrowed dream, a straw hat, and the courage to
              chase the impossible. He sat on the docks and stared at the sea —
              not because he had somewhere to go, but because he had somewhere
              he needed to be.
            </p>
            <p className="text-cream/60 text-base lg:text-lg leading-relaxed max-w-lg">
              Red-Haired Shanks showed him what a pirate could be — not a
              thief, but a man free enough to laugh in the face of the world.
              When Shanks sailed away, he left behind more than a hat. He left
              behind a promise. And Luffy swore he would return it — as a great
              pirate, or not at all.
            </p>
            <p className="text-cream/50 text-base leading-relaxed italic max-w-lg">
              The straw hat was never just a hat. It was a dream passed from
              one dreamer to the next — from the Pirate King's era to the boy
              who would carry it forward.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              {[
                { value: '17', label: 'Set Sail at Age' },
                { value: '1', label: 'Straw Hat. One Promise.' },
                { value: '\u221E', label: 'Dreams to Chase' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <p className="font-display text-3xl text-gold mb-1">{stat.value}</p>
                  <p className="text-cream/40 text-[10px] tracking-[0.15em] uppercase">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
