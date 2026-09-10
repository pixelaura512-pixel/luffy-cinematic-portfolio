import { motion } from 'framer-motion';
import { Flame, Zap, Shield, Brain, Anchor, Crown } from 'lucide-react';

const abilities = [
  {
    icon: Flame,
    title: 'Devil Fruit Powers',
    desc: 'Luffy ate the Gum-Gum Fruit before he even understood what it was. His body became rubber — and what the world called a weakness became one of the most versatile powers on the Grand Line.',
    color: 'from-crimson to-gold-deep',
  },
  {
    icon: Zap,
    title: 'Gear Transformations',
    desc: 'When rubber was not enough, Luffy pushed his own body past its limits — Gear Second, Third, Fourth, and beyond. Each form is a declaration: I will find a way.',
    color: 'from-gold to-gold-light',
  },
  {
    icon: Crown,
    title: 'Conqueror\'s Haki',
    desc: 'The willpower of a king flows through him. He can knock out armies without lifting a finger — a power one in a million are born with, and fewer still can wield.',
    color: 'from-crimson-dark to-gold',
  },
  {
    icon: Shield,
    title: 'Armament Haki',
    desc: 'When rubber is not enough, Luffy hardens his fists with will itself — striking through Devil Fruit users and shattering steel with bare hands.',
    color: 'from-gold-deep to-crimson-dark',
  },
  {
    icon: Brain,
    title: 'Combat Creativity',
    desc: 'He is not a strategist. He is an improviser. Luffy wins fights no one planned by doing the one thing his opponent never imagined — usually the dumbest, bravest thing possible.',
    color: 'from-gold to-crimson',
  },
  {
    icon: Anchor,
    title: 'Unbreakable Will',
    desc: 'Every enemy who has beaten Luffy down has watched him get back up. His body can break. His will does not. That is the difference between a pirate and a king.',
    color: 'from-gold-light to-gold-deep',
  },
];

export default function Abilities() {
  return (
    <section
      id="abilities"
      className="relative min-h-screen w-full bg-charcoal py-20 lg:py-28"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

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
            Abilities & Strengths
          </p>
          <h2 className="font-display text-5xl lg:text-7xl text-cream leading-[0.9]">
            Power Beyond<br />
            <span className="text-shimmer">Rubber</span>
          </h2>
          <p className="text-cream/50 text-base max-w-xl mx-auto mt-6">
            Luffy's true strength was never in his fists. It lives in the fire
            behind his eyes and the loyalty he inspires in everyone he meets.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {abilities.map((ability, i) => {
            const Icon = ability.icon;
            return (
              <motion.div
                key={ability.title}
                className="glass-card rounded-2xl p-7 group hover:border-gold/40 transition-all duration-500 cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ability.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 text-charcoal" strokeWidth={2.5} />
                </div>
                <h3 className="text-cream text-lg font-semibold mb-3">
                  {ability.title}
                </h3>
                <p className="text-cream/50 text-sm leading-relaxed">
                  {ability.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
