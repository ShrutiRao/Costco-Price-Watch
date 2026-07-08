import { motion } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';

export function PersistentLayers({ currentScene }: { currentScene: number }) {
  // Background gradient that shifts based on scene
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      
      {/* Ambient glows */}
      <motion.div
        className="absolute w-[50vw] h-[50vw] rounded-full blur-[100px] bg-primary/10"
        animate={{
          x: currentScene === 0 ? '-20vw' : currentScene === 1 ? '50vw' : currentScene === 2 ? '10vw' : currentScene === 4 ? '40vw' : '10vw',
          y: currentScene === 0 ? '50vh' : currentScene === 1 ? '-10vh' : currentScene === 3 ? '40vh' : currentScene === 4 ? '-20vh' : '10vh',
          scale: currentScene === 3 ? 1.5 : 1,
          opacity: currentScene === 5 ? 0 : 1,
        }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      />

      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[120px] bg-accent/5"
        animate={{
          x: currentScene === 0 ? '70vw' : currentScene === 2 ? '60vw' : currentScene === 4 ? '10vw' : '80vw',
          y: currentScene === 0 ? '-10vh' : currentScene === 2 ? '60vh' : currentScene === 4 ? '60vh' : '80vh',
          opacity: currentScene === 5 ? 0 : 1,
        }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />
    </div>
  );
}