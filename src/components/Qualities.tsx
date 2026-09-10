import { motion } from 'framer-motion';
import { Flame, Heart, Shield, Wind, Compass, Sparkles } from 'lucide-react';

const qualities = [
  { icon: Wind, title: 'Freedom', desc: 'Above all else, Luffy is free. He goes where he wants, when he wants, and lets no one — not the Navy, not the world — tell him otherwise.' },
  { icon: Heart, title: 'Loyalty', desc: 'Hurt his friend and you have made an enemy of the sea itself. His crew is his family — no exceptions, no compromise, no end.' },
  { icon: Flame, title: 'Courage', desc: 'He walks toward what the world runs from. Fear is not something he lacks — it is something he refuses to obey.' },
  { icon: Compass, title: 'Dreams', desc: 'He does not chase the title of Pirate King for power. He chases it because it is his dream — and a dream is worth everything.' },
  { icon: Shield, title: 'Friendship', desc: 'He declared war on the entire world to save a single crewmate. He broke into the most fortified prison in history for a brother. He would do it again tomorrow.' },
  { icon: Sparkles, title: 'Determination', desc: 'Defeat is not the end of a fight for Luffy. It is the beginning of getting back up. And he always gets back up.' },
];

export default function Qualities() {
  return (
    <section
      id="qualities"
      className="relative min-h-screen w-full bg-charcoal py-20 lg:py-28 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-crimson/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
            What Defines Him
          </p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream leading-[0.9]">
            The Heart of a<br />
            <span className="text-shimmer">King</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {qualities.map((q, i) => {
            const Icon = q.icon;
            return (
              <motion.div
                key={q.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <div className="glass-card rounded-2xl p-6 lg:p-8 h-full hover:border-gold/40 transition-all duration-500 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl text-cream tracking-wide mb-2">
                    {q.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
