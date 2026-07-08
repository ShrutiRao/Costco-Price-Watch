import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BellRing, ArrowDown, ChevronRight } from 'lucide-react';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500), // Alert card appears
      setTimeout(() => setPhase(3), 3000), // Price drops
      setTimeout(() => setPhase(4), 6500), // exit
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-[70vw] grid grid-cols-2 items-center gap-[10vw]">
        
        {/* Left: Visual (Alert Card) */}
        <motion.div
          className="relative w-full aspect-square flex items-center justify-center"
          initial={{ opacity: 0, x: '-5vw' }}
          animate={phase >= 2 ? { opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '-5vw' : 0 } : { opacity: 0, x: '-5vw' }}
          transition={{ duration: 1, type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Pulsing background rings */}
          <motion.div 
            className="absolute inset-0 bg-primary/20 rounded-full"
            animate={phase >= 2 ? { scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute inset-[10%] bg-primary/30 rounded-full"
            animate={phase >= 2 ? { scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />

          {/* Alert Card */}
          <div className="relative z-10 bg-bg-card border-gradient box-glow rounded-2xl p-[3vw] flex flex-col gap-[2vw] w-[120%]">
            <div className="flex items-center gap-[1.5vw]">
              <div className="w-[4vw] h-[4vw] rounded-full bg-primary/20 flex items-center justify-center relative">
                <BellRing className="w-[2vw] h-[2vw] text-primary" />
                <motion.div 
                  className="absolute top-0 right-0 w-[1vw] h-[1vw] bg-primary rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <div className="flex-1">
                <div className="text-white font-display font-bold text-[1.8vw]">Price Drop Alert</div>
                <div className="text-white/60 font-body text-[1.2vw]">Vitamix Blender</div>
              </div>
            </div>
            
            <div className="bg-black/50 rounded-xl p-[2vw] flex justify-between items-center border border-white/5">
              <div className="flex flex-col">
                <span className="text-white/40 text-[1vw] mb-[0.5vh]">You paid</span>
                <span className="text-white font-mono text-[1.8vw] line-through opacity-60">$399.99</span>
              </div>
              <ChevronRight className="w-[2vw] h-[2vw] text-white/20" />
              <div className="flex flex-col items-end">
                <span className="text-primary/80 text-[1vw] mb-[0.5vh]">Current Price</span>
                <motion.div 
                  className="text-primary font-mono text-[2.2vw] font-bold flex items-center gap-[0.5vw]"
                  initial={{ scale: 1 }}
                  animate={phase >= 3 ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {phase >= 3 && <ArrowDown className="w-[1.5vw] h-[1.5vw]" />}
                  <motion.span>
                    {phase >= 3 ? '$299.99' : '$399.99'}
                  </motion.span>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="bg-primary/10 text-primary font-display font-bold text-[1.5vw] text-center py-[1.5vw] rounded-xl border border-primary/20"
              initial={{ opacity: 0, y: '2vh' }}
              animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: '2vh' }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              You're owed $100.00
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Text */}
        <div className="flex flex-col gap-[3vh]">
          <motion.div
            initial={{ opacity: 0, x: '5vw' }}
            animate={phase >= 1 ? { opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '5vw' : 0 } : { opacity: 0, x: '5vw' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-display font-bold text-[5vw] leading-[1.1] tracking-tight"
          >
            We tell you when to <span className="text-primary">get paid.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '5vw' }}
            animate={phase >= 1.5 ? { opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '5vw' : 0 } : { opacity: 0, x: '5vw' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 font-body text-[2vw] max-w-[30vw] leading-relaxed"
          >
            No more checking receipts manually. When a price drops, you get an alert.
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}