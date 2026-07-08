import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export function SceneBrandIntro() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 150),  // icon + wordmark enter
      setTimeout(() => setPhase(2), 1100), // tagline enters
      setTimeout(() => setPhase(3), 4300), // exit begins
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex flex-col items-center justify-center z-10"
      exit={{ opacity: 0, scale: 1.06, filter: 'blur(14px)' }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center" style={{ gap: '4vh' }}>
        {/* Clock icon with crisp glow ring */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.35, filter: 'blur(24px)' }}
          animate={
            phase >= 1
              ? { opacity: phase >= 3 ? 0 : 1, scale: 1, filter: 'blur(0px)' }
              : { opacity: 0, scale: 0.35, filter: 'blur(24px)' }
          }
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <Clock
            className="text-primary relative z-10"
            style={{ width: '9vw', height: '9vw' }}
            strokeWidth={1.5}
          />
          {/* tight inner glow */}
          <motion.div
            className="absolute rounded-full bg-primary/25"
            style={{ inset: '-30%', filter: 'blur(2.5vw)' }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Wordmark — big, tight, high-contrast */}
        <motion.div
          initial={{ opacity: 0, y: '3vh', filter: 'blur(8px)' }}
          animate={
            phase >= 1
              ? { opacity: phase >= 3 ? 0 : 1, y: phase >= 3 ? '-3vh' : 0, filter: 'blur(0px)' }
              : { opacity: 0, y: '3vh', filter: 'blur(8px)' }
          }
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
          className="font-display font-extrabold leading-none"
          style={{ fontSize: '10vw', letterSpacing: '-0.045em' }}
        >
          <span className="text-white">Costco</span>
          <span className="text-primary text-glow">Watch</span>
        </motion.div>

        {/* Accent line */}
        <motion.div
          className="bg-primary origin-center"
          style={{ height: '2px', width: '22vw' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={
            phase >= 2
              ? { scaleX: phase >= 3 ? 0 : 1, opacity: phase >= 3 ? 0 : 1 }
              : { scaleX: 0, opacity: 0 }
          }
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: '2.5vh' }}
          animate={
            phase >= 2
              ? { opacity: phase >= 3 ? 0 : 0.82, y: phase >= 3 ? '-2.5vh' : 0 }
              : { opacity: 0, y: '2.5vh' }
          }
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="font-display font-medium text-center text-white"
          style={{ fontSize: '2.6vw', letterSpacing: '0.005em' }}
        >
          Never miss a Costco price drop again.
        </motion.div>
      </div>
    </motion.div>
  );
}
