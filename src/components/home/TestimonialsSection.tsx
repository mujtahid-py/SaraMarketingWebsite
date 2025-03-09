import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "As a small business owner, I was initially overwhelmed by the idea of managing our online presence. Partnering with Sara's Marketing was a game-changer for us. They developed a tailored strategy that not only increased our website traffic but also significantly boosted our social media engagement."
  },
  {
    quote: "What I appreciate most is their responsiveness and dedication to our success. They're always available to answer questions and provide guidance. I feel like we have a true partner in our corner, and I couldn't be happier with the results. I would highly recommend them to any business looking to grow their online presence."
  },
  {
    quote: "The team at Sara's Marketing has transformed our social media presence completely. Their strategic approach and creative content have helped us connect with our target audience in ways we never thought possible. Our engagement rates have tripled since we started working with them."
  },
  {
    quote: "I've worked with several marketing agencies in the past, but none have delivered results like Sara's Marketing. Their data-driven approach ensures that every dollar spent generates real returns. They don't just promise results – they deliver them consistently."
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#18181A]/5 blur-[100px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#DDFCAD]/20 blur-[120px]"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05] 
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#18181A]">What <span className="font-['Pacifico'] text-[#18181A]">Clients</span> Say</h2>
          <p className="text-[#18181A]/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <motion.div 
                className="flex transition-all duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  x: `-${currentIndex * 100}%` 
                }}
                transition={{ duration: 0.5 }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-[#DDFCAD]/30">
                      <div className="flex flex-col items-center">
                        <div className="relative mb-6">
                          <div className="bg-[#DDFCAD] rounded-full p-3 md:p-4">
                            <Quote size={32} className="text-[#18181A]" />
                          </div>
                        </div>
                        <div className="w-full">
                          <p className="text-[#18181A] text-lg md:text-xl italic leading-relaxed text-center">
                            "{testimonial.quote}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#18181A] text-white flex items-center justify-center hover:bg-[#18181A]/80 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-[#DDFCAD]' : 'bg-[#18181A]/20'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#18181A] text-white flex items-center justify-center hover:bg-[#18181A]/80 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;