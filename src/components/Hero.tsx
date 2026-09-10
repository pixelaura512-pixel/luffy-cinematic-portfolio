import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HERO_VIDEO_URL = '/hero-video.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener('canplaythrough', handleCanPlay);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen h-[100dvh] w-full overflow-hidden bg-charcoal flex items-center justify-center"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
          willChange: 'opacity',
        }}
      />

      {/* Refined cinematic gradient overlays — lighter to reveal video */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-charcoal/30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at center, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 50%, transparent 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.p
          className="text-[#FF8C00] text-xs sm:text-sm tracking-[0.5em] uppercase mb-6 text-cinematic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          The Straw Hat's Journey
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(80px,18vw,220px)] leading-[0.85] tracking-[0.05em] mb-8"
          style={{
            background: 'linear-gradient(180deg, #FFD96A 0%, #FFB627 30%, #DC2626 70%, #991B1B 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 20px rgba(10,10,10,0.9)) drop-shadow(0 0 40px rgba(255,182,39,0.3))',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          LUFFY
        </motion.h1>

        <motion.p
          className="text-[#FFF0D0] text-base sm:text-lg max-w-xl leading-relaxed font-light text-cinematic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Chasing freedom beyond the horizon, Monkey D. Luffy sails toward a
          dream that no ocean can contain.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Explore the Journey
          </button>
          <button
            onClick={() => document.querySelector('#origins')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-secondary group"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-gold-light">
              Discover the Story
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-5 h-5 text-gold" style={{ filter: 'drop-shadow(0 2px 6px rgba(10,10,10,0.8))' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
