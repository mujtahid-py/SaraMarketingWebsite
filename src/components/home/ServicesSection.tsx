import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  Instagram, 
  Globe, 
  Code, 
  Search, 
  LineChart, 
  BarChart4,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const services: Service[] = [
  {
    title: "Social Media Management",
    description: "Strategic content creation, scheduling, and community engagement to build your brand presence across all major platforms.",
    icon: <Instagram size={24} />,
    features: ["Content Creation", "Community Management", "Growth Strategy", "Analytics Reporting"]
  },
  {
    title: "Ads Marketing",
    description: "Data-driven paid advertising campaigns on social media and search engines to reach your target audience and drive conversions.",
    icon: <Globe size={24} />,
    features: ["PPC Campaigns", "Audience Targeting", "A/B Testing", "ROI Optimization"]
  },
  {
    title: "Web Development",
    description: "Custom website design and development that reflects your brand identity and provides seamless user experience.",
    icon: <Code size={24} />,
    features: ["Responsive Design", "SEO Optimization", "CMS Integration", "Performance Tuning"]
  },
  {
    title: "SEO",
    description: "Search engine optimization strategies to improve your website's visibility and drive organic traffic to your business.",
    icon: <Search size={24} />,
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"]
  },
  {
    title: "Marketing Strategy",
    description: "Comprehensive marketing plans tailored to your business goals, target audience, and industry landscape.",
    icon: <LineChart size={24} />,
    features: ["Market Research", "Competitor Analysis", "Campaign Planning", "Budget Allocation"]
  },
  {
    title: "Analytics Tracking",
    description: "In-depth data analysis and reporting to measure campaign performance and optimize your marketing efforts.",
    icon: <BarChart4 size={24} />,
    features: ["Custom Dashboards", "Performance Metrics", "Conversion Tracking", "Insight Generation"]
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
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

  // Mobile navigation handlers
  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev === services.length - 1 ? 0 : prev + 1
    );
  };

  // Calculate scroll position for mobile
  useEffect(() => {
    if (isMobile && servicesRef.current) {
      const cardWidth = servicesRef.current.querySelector('.service-card')?.clientWidth || 300;
      const gap = 16; // gap between cards
      const scrollPosition = currentIndex * (cardWidth + gap);
      
      servicesRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, isMobile]);

  return (
    <div 
      ref={sectionRef}
      className="relative py-20 bg-[#18181A] overflow-hidden"
      id="services"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#DDFCAD 1px, transparent 1px), linear-gradient(to right, #DDFCAD 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}></div>
      </div>

      {/* Green Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#DDFCAD] opacity-20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DDFCAD] opacity-20 rounded-full blur-[128px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our <span className="font-['Pacifico'] text-[#DDFCAD]">Services</span></h2>
          <p className="text-[#BDBDBD] text-lg">
            Comprehensive digital solutions to transform your business and drive growth
          </p>
        </div>

        {/* Mobile Navigation Controls */}
        {isMobile && (
          <div className="flex justify-between items-center px-4 mb-6">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full bg-[#DDFCAD]/10 border border-[#DDFCAD]/30 flex items-center justify-center text-[#DDFCAD]"
              aria-label="Previous service"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-white text-sm">
              {currentIndex + 1} / {services.length}
            </div>
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-[#DDFCAD]/10 border border-[#DDFCAD]/30 flex items-center justify-center text-[#DDFCAD]"
              aria-label="Next service"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Services Grid/Carousel */}
        {!isMobile ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#18181A]/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#DDFCAD]/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#DDFCAD]/10 rounded-xl text-[#DDFCAD] group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-[#BDBDBD] mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-[#BDBDBD] group-hover:translate-x-2 transition-transform duration-300 ease-out"
                      >
                        <div className="h-1 w-1 rounded-full bg-[#DDFCAD]"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div 
            ref={servicesRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="service-card min-w-[300px] max-w-[300px] snap-center group relative bg-[#18181A]/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#DDFCAD]/30 transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-[#DDFCAD]/10 rounded-xl text-[#DDFCAD] group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-[#BDBDBD] mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-[#BDBDBD] group-hover:translate-x-2 transition-transform duration-300 ease-out"
                      >
                        <div className="h-1 w-1 rounded-full bg-[#DDFCAD]"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Mobile pagination dots */}
        {isMobile && (
          <div className="flex justify-center mt-6">
            <div className="flex gap-1">
              {services.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-[#DDFCAD]' : 'bg-white/20'}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesSection;