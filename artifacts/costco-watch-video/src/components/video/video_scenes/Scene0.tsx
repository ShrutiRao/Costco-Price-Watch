import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Scene0() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 600),
      setTimeout(() => setPhase(2), 2200),
      setTimeout(() => setPhase(3), 3800),
      setTimeout(() => setPhase(4), 5200), // start exit
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center gap-[4vh] text-center font-display font-bold text-[6vw] tracking-tight leading-none">
        <motion.div
          initial={{ opacity: 0, y: '4vh' }}
          animate={phase >= 1 ? { opacity: phase === 4 ? 0 : 1, y: phase === 4 ? '-4vh' : 0 } : { opacity: 0, y: '4vh' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white"
        >
          You shop.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: '4vh' }}
          animate={phase >= 2 ? { opacity: phase === 4 ? 0 : 1, y: phase === 4 ? '-4vh' : 0 } : { opacity: 0, y: '4vh' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/60"
        >
          Prices drop.
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={phase >= 3 ? { opacity: phase === 4 ? 0 : 1, scale: phase === 4 ? 1.1 : 1, filter: phase === 4 ? 'blur(10px)' : 'blur(0px)' } : { opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary text-glow"
        >
          You miss the refund.
        </motion.div>
      </div>
    </motion.div>
  );
}