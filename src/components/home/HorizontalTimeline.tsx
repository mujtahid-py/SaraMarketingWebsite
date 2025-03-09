import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

// Added more timeline events to improve scrolling experience
const timelineData: TimelineEvent[] = [
  {
    year: "2023",
    title: "Foundation",
    description: "Founded the company and started with Social media management and social media growth. Midway through 2023, we started to focus on advertisement on different platforms such as Instagram, Facebook and google ads."
  },
  {
    year: "2023 Q3",
    title: "First Clients",
    description: "Secured our first major clients and began building our reputation for excellence in social media management. Established our core team of marketing specialists."
  },
  {
    year: "2023 Q4",
    title: "Service Expansion",
    description: "Expanded our service offerings to include paid advertising campaigns across multiple platforms, helping clients reach wider audiences with targeted messaging."
  },
  {
    year: "2024 Q1",
    title: "Growth Phase",
    description: "Our services increased and we started creating different packages for our customers. We offered not only social media management but email marketing and website development."
  },
  {
    year: "2024 Q3",
    title: "AI Integration",
    description: "Began incorporating AI chatbots and advanced analytics into our service offerings, providing clients with cutting-edge marketing solutions and deeper customer insights."
  },
  {
    year: "2025",
    title: "Focus & Growth",
    description: "Now in 2025 the year has started with low services that our company has to offer due to focus. We want to focus on a few services which could make the magic even more powerful. Our services for now are marketing on social media and mainly on Instagram."
  }
];

const HorizontalTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    // Only apply GSAP scrolling on non-mobile devices
    if (isMobile || !timelineRef.current || !containerRef.current) return;

    // Improved scrolling configuration for desktop
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom", // Start earlier
        end: "bottom top", // End later
        scrub: 0.8, // Smoother scrubbing
        pin: false, // Don't pin the container
      }
    });

    // Calculate the total distance to scroll
    const timelineWidth = timelineRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const scrollDistance = timelineWidth - containerWidth;

    // Only apply the animation if there's content to scroll
    if (scrollDistance > 0) {
      timeline.to(timelineRef.current, {
        x: -scrollDistance,
        ease: "power1.inOut", // Smoother easing
        duration: 1
      });
    }

    return () => {
      timeline.kill();
    };
  }, [isMobile]);

  // Mobile navigation handlers
  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? timelineData.length : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === timelineData.length ? 0 : prev + 1
    );
  };

  // Calculate scroll position for mobile
  useEffect(() => {
    if (isMobile && timelineRef.current) {
      const cardWidth = 280 + 16; // card width + gap
      const scrollPosition = currentIndex * cardWidth;
      
      timelineRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMobile]);

  return (
    <div 
      ref={containerRef}
      className="relative py-16 md:py-20 bg-[#18181A] overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white">Our <span className="font-['Pacifico'] text-[#DDFCAD]">Journey</span></h2>
          <p className="text-[#BDBDBD] max-w-2xl mx-auto px-4">
            From our humble beginnings to where we are today, we've been on an incredible journey of growth and innovation.
          </p>
        </motion.div>
      </div>

      {/* Timeline Progress Bar */}
      <div className="relative w-full h-1 bg-white/10 mb-6 md:mb-8">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-[#DDFCAD]"
          initial={{ width: "0%" }}
          animate={controls}
          variants={{
            visible: { width: "100%", transition: { duration: 2, ease: "easeOut" } }
          }}
        />
      </div>

      {/* Mobile Timeline Navigation */}
      {isMobile && (
        <div className="flex justify-between items-center px-4 mb-4">
          <button 
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full bg-[#DDFCAD]/10 border border-[#DDFCAD]/30 flex items-center justify-center text-[#DDFCAD]"
            aria-label="Previous timeline event"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="text-white text-sm">
            {currentIndex + 1} / {timelineData.length + 1}
          </div>
          <button 
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-[#DDFCAD]/10 border border-[#DDFCAD]/30 flex items-center justify-center text-[#DDFCAD]"
            aria-label="Next timeline event"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Horizontal Timeline */}
      <div className="relative overflow-hidden">
        <div 
          ref={timelineRef} 
          className={`flex gap-4 md:gap-6 px-4 md:px-6 pb-8 md:pb-12 ${isMobile ? 'overflow-x-auto snap-x snap-mandatory hide-scrollbar' : ''}`}
          style={{ width: isMobile ? "100%" : "fit-content" }}
        >
          {timelineData.map((event, index) => (
            <TimelineCard 
              key={index}
              event={event}
              index={index}
              isMobile={isMobile}
            />
          ))}

          {/* Final Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { 
                  duration: 0.8, 
                  delay: 0.5 + timelineData.length * 0.1 
                } 
              }
            }}
            className={`flex flex-col items-center justify-center ${isMobile ? 'min-w-[280px] max-w-[280px] snap-center' : 'min-w-[250px] md:min-w-[300px]'} h-[300px] md:h-[350px]`}
          >
            <div className="bg-[#DDFCAD]/20 backdrop-blur-md border border-[#DDFCAD]/30 rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-4 md:mb-6">
              <span className="text-[#DDFCAD] text-3xl md:text-4xl font-bold">∞</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#DDFCAD] text-center">Going high !!</h3>
            <p className="text-white/70 text-center mt-3 md:mt-4 max-w-[200px] md:max-w-[250px] text-sm md:text-base">
              The future is bright as we continue to innovate and grow
            </p>
          </motion.div>
        </div>
      </div>

      {/* Timeline Navigation Hints - Only on desktop */}
      {!isMobile && (
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 flex items-center gap-2 md:gap-4">
          <div className="text-white/80 text-xs md:text-sm font-medium hidden md:block">Scroll to explore our journey</div>
          <div className="flex gap-2">
            <motion.div 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#DDFCAD]/30 flex items-center justify-center text-[#DDFCAD]"
              animate={{ x: [-5, 0, -5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ←
            </motion.div>
            <motion.div 
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#DDFCAD]/30 flex items-center justify-center text-[#DDFCAD]"
              animate={{ x: [5, 0, 5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </div>
      )}

      {/* Mobile swipe indicator */}
      {isMobile && (
        <div className="flex justify-center mt-4">
          <motion.div 
            className="flex gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {Array.from({ length: timelineData.length + 1 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-[#DDFCAD]' : 'bg-white/20'}`}
              />
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
};

interface TimelineCardProps {
  event: TimelineEvent;
  index: number;
  isMobile: boolean;
}

const TimelineCard = ({ event, index, isMobile }: TimelineCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.8, 
            delay: 0.1 * index 
          } 
        }
      }}
      className={`relative ${isMobile ? 'min-w-[280px] max-w-[280px] snap-center' : 'min-w-[280px] md:min-w-[350px] max-w-[280px] md:max-w-[350px]'}`}
    >
      {/* Year Marker */}
      <motion.div 
        className="absolute -top-[20px] md:-top-[25px] left-0 bg-[#DDFCAD] text-[#18181A] font-bold text-base md:text-xl px-4 md:px-6 py-1 md:py-2 rounded-full"
        initial={{ scale: 0 }}
        animate={controls}
        variants={{
          visible: { 
            scale: 1, 
            transition: { 
              type: "spring", 
              stiffness: 300, 
              delay: 0.2 + 0.1 * index 
            } 
          }
        }}
      >
        {event.year}
      </motion.div>

      {/* Card Content */}
      <motion.div 
        className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 h-[300px] md:h-[350px] overflow-hidden"
        whileHover={{ 
          y: -10,
          boxShadow: "0 20px 25px -5px rgba(221, 252, 173, 0.1), 0 10px 10px -5px rgba(221, 252, 173, 0.04)",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderColor: "rgba(221, 252, 173, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Glassmorphism Effects */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#DDFCAD]/10 to-transparent rounded-2xl blur opacity-30"></div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-[#DDFCAD]/10 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">{event.title}</h3>
          <div className="w-12 md:w-16 h-1 bg-[#DDFCAD] mb-4 md:mb-6"></div>
          <p className="text-[#BDBDBD] leading-relaxed text-sm md:text-base">{event.description}</p>
          
          {/* Decorative Elements */}
          <div className="absolute bottom-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center">
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#DDFCAD]/20"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HorizontalTimeline;