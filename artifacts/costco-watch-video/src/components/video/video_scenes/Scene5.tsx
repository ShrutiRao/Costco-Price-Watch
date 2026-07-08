import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Logo } from '../Logo';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => setPhase(4), 4000), // final lockup
      setTimeout(() => setPhase(5), 7500), // exit
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const stats = [
    { label: 'Receipts', value: '142' },
    { label: 'Items Scanned', value: '3,841' },
    { label: 'Alerts Found', value: '28' },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[80vw] flex flex-col items-center gap-[8vh]">
        
        {/* Dashboard Preview */}
        <motion.div
          className="w-[60vw] bg-bg-card border-gradient box-glow rounded-3xl p-8 flex flex-col gap-8 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: '10vh' }}
          animate={phase >= 1 ? { opacity: phase >= 5 ? 0 : 1, scale: phase >= 4 ? 0.8 : 1, y: phase >= 4 ? '-10vh' : 0 } : { opacity: 0, scale: 0.9, y: '10vh' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center pb-6 border-b border-white/5">
            <Logo className="scale-75 origin-left" />
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
              <div className="w-3 h-3 rounded-full bg-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                className="bg-black/40 rounded-2xl p-6 border border-white/5 flex flex-col gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-white/40 font-display text-sm uppercase tracking-wider">{stat.label}</div>
                <div className="text-white font-mono text-3xl font-bold">{stat.value}</div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-primary/10 rounded-2xl p-8 border border-primary/20 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={phase >= 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-[-20deg]"
              animate={phase >= 3 ? { left: ['-100%', '200%'] } : { left: '-100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <div className="text-primary font-display text-lg tracking-widest uppercase">Total Estimated Savings</div>
            <div className="text-primary font-mono text-6xl font-black text-glow tracking-tighter">
              $2,482.50
            </div>
          </motion.div>

        </motion.div>

        {/* Final Lockup */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-bg-light/90 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: phase >= 5 ? 0 : 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ pointerEvents: phase >= 4 ? 'auto' : 'none' }}
        >
          <div className="flex flex-col items-center gap-[4vh]">
            <Logo className="scale-150 transform-gpu mb-4" />
            <div className="text-white/60 font-display text-[2vw] tracking-wider font-light">
              Stop leaving money on the table.
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}