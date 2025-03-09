import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

interface TimelineItem {
  period: string;
  title: string;
  description: string;
  image: string;
}

const timelineData: TimelineItem[] = [
  {
    period: "2022-2023",
    title: "Foundation",
    description: "Founded the company and started with Social media management and social media growth. Midway through 2023, we started to focus on advertisement on different platforms such as Instagram, Facebook and google ads.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800"
  },
  {
    period: "2023-2024",
    title: "Expansion",
    description: "Our services increased and we started creating different packages for our customers. We offered not only social media management but email marketing, website development with AI chatbots and also advertisement as well as creating a whole marketing strategy personally with the client.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800"
  },
  {
    period: "2024-Present",
    title: "Focus & Growth",
    description: "Now in 2025 the year has started with low services that our company has to offer due to focus. We want to focus on a few services which could make the magic even more powerful. Our services for now are marketing on social media and mainly on Instagram.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800"
  }
];

const CircularTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRingRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [rotation, setRotation] = React.useState(0);

  useEffect(() => {
    if (!containerRef.current || !textRingRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current!;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate angle between mouse and center
      const angle = Math.atan2(
        e.clientY - centerY,
        e.clientX - centerX
      ) * (180 / Math.PI);
      
      setRotation(angle);
      
      gsap.to(textRingRef.current, {
        rotation: angle,
        duration: 1,
        ease: "power2.out"
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#18181A] flex items-center justify-center overflow-hidden py-20">
      <div 
        ref={containerRef}
        className="relative w-[800px] h-[800px] flex items-center justify-center"
      >
        {/* Rotating text ring */}
        <div
          ref={textRingRef}
          className="absolute w-full h-full"
        >
          {timelineData.map((item, index) => {
            const angle = (index * 360) / timelineData.length;
            return (
              <div
                key={item.period}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
                style={{
                  transform: `rotate(${angle}deg) translateY(-300px) rotate(${-angle}deg)`,
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <motion.div
                  className="bg-transparent px-6 py-4 cursor-pointer relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  <h3 className="text-white text-4xl font-bold whitespace-nowrap tracking-wider"
                      style={{ transform: `rotate(${-rotation}deg)` }}>
                    {item.title}
                  </h3>
                  
                  {/* Hover image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      scale: activeIndex === index ? 1 : 0.8
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] pointer-events-none"
                  >
                    <div className="relative w-full h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">{item.period}</p>
                        <p className="text-xs opacity-80 mt-1 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Center content */}
        <div className="relative z-10 text-center bg-[#18181A]/80 backdrop-blur-lg rounded-full p-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
          <p className="text-[#DDFCAD] text-xl">Going high !!</p>
        </div>
      </div>
    </div>
  );
};

export default CircularTimeline;