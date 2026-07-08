import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Logo } from '../Logo';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 2000),
      setTimeout(() => setPhase(3), 4000), // exit
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center gap-[8vh]">
        <motion.div
          initial={{ opacity: 0, y: '5vh', scale: 0.8 }}
          animate={phase >= 1 ? { opacity: phase >= 3 ? 0 : 1, y: phase >= 3 ? '-5vh' : 0, scale: 1 } : { opacity: 0, y: '5vh', scale: 0.8 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-white/60 font-display font-medium text-[3vw] mb-[4vh] tracking-widest uppercase text-center">
            NOT ANYMORE
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={phase >= 2 ? { opacity: phase >= 3 ? 0 : 1, filter: phase >= 3 ? 'blur(20px)' : 'blur(0px)' } : { opacity: 0, filter: 'blur(20px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Logo className="scale-150 transform-gpu" />
        </motion.div>
      </div>
    </motion.div>
  );
}