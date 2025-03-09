import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(textRef, { once: false, amount: 0.3 });
  
  return (
    <div className="relative py-16 md:py-24 bg-[#18181A] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">About <span className="font-['Pacifico'] text-[#DDFCAD]">Sara's</span> Marketing</h2>
          <p className="text-[#BDBDBD] max-w-2xl mx-auto px-4">
            We're your dedicated partner in growth. Founded on the belief that every business has a unique story to tell.
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative w-full max-w-[350px] md:max-w-[500px] mx-auto">
              <div className="absolute -inset-4 bg-[#DDFCAD]/30 rounded-full blur-lg"></div>
              <div className="bg-[#F1F1EF] rounded-[20px] overflow-hidden relative z-10" style={{ aspectRatio: "1/1" }}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" 
                  alt="Sara Carla Kader - Founder" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 md:px-6 py-3 md:py-4 rounded-lg z-20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-lg md:text-xl font-bold">Sara Carla Kader</h4>
                  <p className="text-[#DDFCAD] text-sm md:text-base">Founder & CEO</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mt-8 md:mt-0 px-4 md:px-0"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-white">Our Story</h3>
            <p className="text-[#BDBDBD] mb-4 text-sm md:text-base">
              Sara Carla Kader founded this agency with a vision to transform how businesses connect with their audiences. 
              With a background in digital marketing and a passion for innovative strategies, Sara has built a team of experts 
              who share her commitment to excellence.
            </p>
            <p className="text-[#BDBDBD] mb-4 text-sm md:text-base">
              We personalize strategy and execution for each business project to aim for high growth.
              From startups to established enterprises, we've helped clients achieve lasting success through 
              tailored marketing solutions that resonate with their unique brand voice.
            </p>
            <p className="text-[#BDBDBD] text-sm md:text-base">
              Our approach combines creativity with data-driven insights, ensuring that every campaign
              not only captures attention but also delivers measurable results that impact your bottom line.
              We believe in building long-term partnerships with our clients, becoming an extension of their team.
            </p>
          </motion.div>
        </div>

        {/* Story with Highlighted Text */}
        <div ref={textRef} className="max-w-4xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white"
          >
            What makes us different?
          </motion.h3>

          <div className="space-y-6 md:space-y-8 text-base md:text-lg text-[#BDBDBD]">
            <HighlightedParagraph delay={0.1}>
              Yes, there are hundreds of marketing agencies, and you're wondering why to choose us from every other agency.. It's understandable.
              We focus on <HighlightedSpan>measurable outcomes</HighlightedSpan>, not just empty promises. From boosting brand awareness to driving leads. We align our efforts with your goals.
            </HighlightedParagraph>

            <HighlightedParagraph delay={0.3}>
              The digital marketing landscape changes quickly, and we're always <HighlightedSpan>ahead of the curve</HighlightedSpan>. Our team stays on top of the latest trends and technologies, ensuring your business remains competitive and innovative.
            </HighlightedParagraph>

            <HighlightedParagraph delay={0.5}>
              No two businesses are the same, so we don't believe in cookie-cutter solutions. We takes the time to <HighlightedSpan>understand your industry</HighlightedSpan>, audience, and objectives to craft marketing campaigns that speak directly to your target market.
            </HighlightedParagraph>

            <HighlightedParagraph delay={0.7}>
              Keep in mind that <HighlightedSpan>Your success is our success</HighlightedSpan> so We're genuinely invested in helping your business thrive.
            </HighlightedParagraph>
          </div>
        </div>

        {/* Bento Grid - Just Two Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4 md:px-0">
          {/* Green Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#DDFCAD] rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center hover:shadow-xl transition-all"
            whileHover={{ y: -10 }}
          >
            <div className="bg-[#18181A] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <Users size={24} className="text-[#DDFCAD]" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-[#18181A]">21+</h3>
            <p className="text-[#18181A]/80 font-medium text-base md:text-lg">Happy Clients</p>
            <p className="mt-3 md:mt-4 text-[#18181A]/70 text-sm md:text-base">
              We've helped over 21 businesses transform their digital presence and achieve remarkable growth.
            </p>
          </motion.div>
          
          {/* Dark Box with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center text-center hover:bg-white/10 transition-all overflow-hidden"
            whileHover={{ y: -10 }}
          >
            {/* Glow effect */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] md:w-[200px] h-[150px] md:h-[200px] bg-[#DDFCAD]/20 rounded-full opacity-50 blur-[50px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="bg-[#DDFCAD]/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 border border-[#DDFCAD]/30 relative z-10">
              <TrendingUp size={24} className="text-[#DDFCAD]" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 text-white relative z-10">30+</h3>
            <p className="text-[#DDFCAD] font-medium text-base md:text-lg relative z-10">Successful Projects</p>
            <p className="mt-3 md:mt-4 text-[#BDBDBD] text-sm md:text-base relative z-10">
              We've delivered over 30 successful marketing campaigns across various industries with measurable results.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Highlighted text components
const HighlightedParagraph = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="leading-relaxed"
    >
      {children}
    </motion.p>
  );
};

const HighlightedSpan = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <motion.span
      ref={ref}
      initial={{ backgroundColor: "rgba(221, 252, 173, 0)" }}
      animate={isInView ? { backgroundColor: "rgba(221, 252, 173, 0.3)" } : { backgroundColor: "rgba(221, 252, 173, 0)" }}
      transition={{ duration: 0.3 }}
      className="font-semibold px-1 rounded text-white"
    >
      {children}
    </motion.span>
  );
};

export default AboutSection;