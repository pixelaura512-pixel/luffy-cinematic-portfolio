import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 10 + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setExiting(true), 400);
        setTimeout(onComplete, 1000);
      }
      setProgress(Math.min(current, 100));
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-charcoal transition-opacity duration-700"
      style={{ opacity: exiting ? 0 : 1, pointerEvents: exiting ? 'none' : 'auto' }}
    >
      {/* Soft golden glow behind icon */}
      <div
        className="absolute w-32 h-32 rounded-full bg-gold/10 blur-[60px]"
        style={{ animation: 'softPulse 2.5s ease-in-out infinite' }}
      />

      {/* Straw hat icon — minimal, no spinning */}
      <div className="relative mb-8">
        <svg viewBox="0 0 24 24" className="w-12 h-12 text-gold relative z-10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 2px 8px rgba(255,182,39,0.3))' }}>
          <path d="M3 14c0-1 2-2 9-2s9 1 9 2-2 2-9 2-9-1-9-2z" fill="currentColor" fillOpacity="0.12" />
          <path d="M3 14c0 2 4 4 9 4s9-2 9-4" />
          <path d="M5 13c0-4 3-7 7-7s7 3 7 7" />
          <path d="M9 11c1-1 5-1 6 0" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="font-display text-xl sm:text-2xl tracking-[0.3em] text-cream/90 mb-2">
        LUFFY
      </h1>
      <p className="text-gold/50 text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-10">
        The Straw Hat's Journey
      </p>

      {/* Progress bar */}
      <div className="w-48 h-[2px] bg-charcoal-light rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold-deep via-gold to-gold-light transition-all duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-cream/25 text-[10px] tracking-[0.2em] mt-3 font-mono">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
