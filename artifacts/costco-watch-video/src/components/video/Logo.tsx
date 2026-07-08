import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-[1vw] ${className}`}>
      <div className="relative flex items-center justify-center">
        <Clock className="w-[3vw] h-[3vw] text-primary relative z-10" strokeWidth={2.5} />
        <motion.div 
          className="absolute inset-0 bg-primary/30 blur-[1vw] rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="flex flex-col leading-[1.1] font-display font-extrabold tracking-tight">
        <span className="text-white text-[1.5vw]">Costco</span>
        <span className="text-primary text-[1.5vw]">Watch</span>
      </div>
    </div>
  );
}
