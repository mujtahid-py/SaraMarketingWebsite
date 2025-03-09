import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Why is digital marketing important for my business?",
    answer: "Digital marketing allows businesses to reach and engage with a wider audience, generate leads, drive website traffic, and increase brand visibility. It provides measurable results, allows for targeted marketing efforts, and enables businesses to adapt and optimize their strategies based on data and insights."
  },
  {
    question: "How can digital marketing help improve my website's visibility?",
    answer: "Digital marketing improves your website's visibility through various strategies including search engine optimization (SEO), content marketing, social media marketing, and paid advertising. These approaches help your website rank higher in search results, increase organic traffic, and build brand awareness across multiple platforms."
  },
  {
    question: "How long does it take to see results from digital marketing efforts?",
    answer: "The timeline for seeing results varies depending on the strategies implemented. Paid advertising can generate immediate traffic, while SEO typically takes 3-6 months to show significant improvements. Social media marketing results can be seen within weeks to months. We provide regular reports and updates so you can track progress throughout your campaign."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer: "We measure success through various metrics including website traffic, conversion rates, engagement rates, click-through rates, return on investment (ROI), and more. We use advanced analytics tools to track these metrics and provide comprehensive reports that demonstrate the impact of our marketing efforts on your business goals."
  },
  {
    question: "What social media platforms should my business be on?",
    answer: "The ideal social media platforms for your business depend on your target audience, industry, and marketing goals. We conduct thorough research to identify where your audience is most active and develop a tailored strategy for those platforms. Rather than spreading yourself thin across all platforms, we focus on those that will deliver the best results for your specific business."
  },
  {
    question: "How much should I budget for digital marketing?",
    answer: "Your digital marketing budget should align with your business goals, industry, and competitive landscape. We offer flexible packages to accommodate different budget levels and work with you to develop a strategy that maximizes your return on investment. Our transparent pricing ensures you know exactly what you're getting for your investment."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-20 bg-[#F8F8F8] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#DDFCAD]/10 blur-[150px]"
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
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#18181A]">Digital Marketing <span className="font-['Pacifico'] text-[#18181A]">FAQs</span></h2>
            <p className="text-[#18181A]/70 mb-8">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact" 
                className="px-8 py-3 bg-[#18181A] text-white rounded-full hover:bg-[#18181A]/80 transition-colors text-center"
              >
                More Questions?
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-transparent border border-[#18181A] text-[#18181A] rounded-full hover:bg-[#18181A]/5 transition-colors text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full text-left p-6 flex justify-between items-center transition-colors ${
                    openIndex === index 
                      ? 'bg-[#18181A] text-white rounded-t-2xl' 
                      : 'bg-white hover:bg-[#18181A]/5 text-[#18181A] rounded-2xl'
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-semibold pr-8">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    openIndex === index ? 'bg-[#DDFCAD] text-[#18181A]' : 'bg-[#DDFCAD]/20 text-[#18181A]'
                  }`}>
                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border border-t-0 border-[#DDFCAD]/30 rounded-b-2xl">
                        <p className="text-[#18181A]/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;