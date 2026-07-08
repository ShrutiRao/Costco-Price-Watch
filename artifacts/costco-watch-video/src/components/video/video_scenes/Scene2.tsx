import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Camera, FileText, ScanLine } from 'lucide-react';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1200),
      setTimeout(() => setPhase(3), 2500),
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
        
        {/* Left: Text */}
        <div className="flex flex-col gap-[3vh]">
          <motion.div
            initial={{ opacity: 0, x: '-5vw' }}
            animate={phase >= 1 ? { opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '-5vw' : 0 } : { opacity: 0, x: '-5vw' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-display font-bold text-[5vw] leading-[1.1] tracking-tight"
          >
            Snap your <span className="text-primary">receipt.</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: '-5vw' }}
            animate={phase >= 2 ? { opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '-5vw' : 0 } : { opacity: 0, x: '-5vw' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/60 font-body text-[2vw] max-w-[30vw] leading-relaxed"
          >
            Upload a photo or PDF. We extract every item, price, and date automatically.
          </motion.div>
        </div>

        {/* Right: Visual */}
        <motion.div
          className="relative w-full aspect-[3/4] bg-bg-card rounded-2xl border-gradient box-glow flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: '10vh', rotateY: 20, rotateX: 10 }}
          animate={phase >= 2 ? { opacity: phase >= 4 ? 0 : 1, y: phase >= 4 ? '-10vh' : 0, rotateY: 0, rotateX: 0 } : { opacity: 0, y: '10vh', rotateY: 20, rotateX: 10 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformPerspective: 1000 }}
        >
          <div className="absolute inset-x-8 top-8 bottom-8 border-2 border-white/5 border-dashed rounded-lg flex flex-col items-center p-6 bg-black/40">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <div className="w-[80%] h-4 bg-white/10 rounded-full mb-4" />
            <div className="w-[60%] h-4 bg-white/10 rounded-full mb-8" />
            <div className="w-full h-[2px] bg-white/5 my-4" />
            <div className="flex justify-between w-full mb-2">
              <div className="w-[40%] h-3 bg-white/10 rounded-full" />
              <div className="w-[20%] h-3 bg-white/10 rounded-full" />
            </div>
            <div className="flex justify-between w-full mb-2">
              <div className="w-[50%] h-3 bg-white/10 rounded-full" />
              <div className="w-[15%] h-3 bg-white/10 rounded-full" />
            </div>
          </div>

          {/* Scanner Line */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-primary shadow-[0_0_15px_rgba(16,185,129,0.8)]"
            initial={{ top: '10%', opacity: 0 }}
            animate={phase >= 3 ? { top: ['10%', '90%', '10%'], opacity: [0, 1, 1, 1, 0] } : { top: '10%', opacity: 0 }}
            transition={{ top: { duration: 3, repeat: Infinity, ease: 'linear' }, opacity: { duration: 0.5 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/30 -top-8" />
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}