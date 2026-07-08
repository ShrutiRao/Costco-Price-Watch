import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Activity, CalendarDays } from 'lucide-react';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 3000),
      setTimeout(() => setPhase(4), 6500), // exit
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const mockItems = [
    { name: 'Kirkland Paper Towels', price: '$22.99', delay: 0 },
    { name: 'Samsung 65" 4K TV', price: '$899.99', delay: 0.2 },
    { name: 'Organic Olive Oil', price: '$14.99', delay: 0.4 },
    { name: 'Vitamix Blender', price: '$399.99', delay: 0.6 },
    { name: 'Mixed Nuts', price: '$17.99', delay: 0.8 },
  ];

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[75vw] flex flex-col items-center gap-[6vh]">
        
        {/* Header Text */}
        <div className="flex flex-col items-center text-center gap-[2vh]">
          <motion.div
            initial={{ opacity: 0, y: '3vh' }}
            animate={phase >= 1 ? { opacity: phase >= 4 ? 0 : 1, y: phase >= 4 ? '-3vh' : 0 } : { opacity: 0, y: '3vh' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-display font-bold text-[4.5vw] leading-[1.1] tracking-tight"
          >
            We track <span className="text-white/40">every</span> price.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: '3vh' }}
            animate={phase >= 2 ? { opacity: phase >= 4 ? 0 : 1, y: phase >= 4 ? '-3vh' : 0 } : { opacity: 0, y: '3vh' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-primary font-mono text-[1.8vw] flex items-center gap-3 bg-primary/10 px-6 py-2 rounded-full border border-primary/20 box-glow"
          >
            <CalendarDays className="w-6 h-6" />
            For the full 30-day price-match window
          </motion.div>
        </div>

        {/* Visual: Data Tracking List */}
        <div className="w-[50vw] flex flex-col gap-4 relative">
          {mockItems.map((item, i) => (
            <motion.div
              key={i}
              className="w-full bg-bg-card border border-white/5 rounded-xl p-5 flex justify-between items-center relative overflow-hidden"
              initial={{ opacity: 0, x: '5vw' }}
              animate={phase >= 3 ? { opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '5vw' : 0 } : { opacity: 0, x: '5vw' }}
              transition={{ duration: 0.6, delay: item.delay, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Scanning highlight effect */}
              <motion.div 
                className="absolute top-0 bottom-0 left-0 w-[20%] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg]"
                animate={phase >= 3 ? { left: ['-20%', '120%'] } : { left: '-20%' }}
                transition={{ duration: 2, repeat: Infinity, delay: item.delay + 1, ease: 'linear' }}
              />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white/40" />
                </div>
                <div className="font-body font-medium text-white/80 text-[1.5vw]">{item.name}</div>
              </div>
              <div className="font-mono text-[1.5vw] text-white font-bold">{item.price}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}