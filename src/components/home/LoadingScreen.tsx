import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageSquare, Disc as Discord } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const socialIcons = [
  { Icon: Linkedin, href: "#", delay: 0.3 },
  { Icon: MessageSquare, href: "#", delay: 0.4 },
  { Icon: Instagram, href: "#", delay: 0.5 },
  { Icon: Discord, href: "#", delay: 0.6 }
];

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 0.4;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-[#18181A] flex items-center justify-center"
      initial={{ clipPath: 'circle(100%)' }}
      animate={{ 
        clipPath: progress === 100 ? 'circle(0% at 50% 50%)' : 'circle(100%)',
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: progress === 100 ? 0.2 : 0
      }}
    >
      {/* Social Icons */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8">
        {socialIcons.map(({ Icon, href, delay }, index) => (
          <motion.a
            key={index}
            href={href}
            className="text-white hover:text-[#DDFCAD] transition-colors"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.2 }}
          >
            <Icon size={28} />
          </motion.a>
        ))}
      </div>

      {/* Center Logo */}
      <div className="relative">
        <motion.div
          className="text-[#DDFCAD] text-6xl font-['Pacifico']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sara's Marketing
        </motion.div>
        
        {/* Animated Circle */}
        <motion.div
          className="absolute -inset-8 border-2 border-[#DDFCAD] rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Progress Counter */}
      <div className="fixed bottom-12 left-12">
        <div className="font-['Inter'] text-white text-8xl tracking-tighter" style={{ fontWeight: 200 }}>
          {Math.floor(progress).toString().padStart(3, '0')}
          <span className="text-[#DDFCAD]">%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;