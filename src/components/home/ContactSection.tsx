import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@sarasmarketing.com", label: "Email" },
  ];

  return (
    <div 
      id="contact"
      ref={containerRef}
      className="relative py-20 bg-[#18181A] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#DDFCAD]/10 blur-[100px]"
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
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Let's <span className="font-['Pacifico'] text-[#DDFCAD]">Connect</span></h2>
          <p className="text-[#BDBDBD] max-w-2xl mx-auto">
            Ready to take your marketing to the next level? Get in touch with us today to discuss how we can help your business grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">I would like to engage in a conversation regarding your endeavor</h3>
            
            <form className="space-y-6">
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#DDFCAD] focus-visible:border-[#DDFCAD]"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-[#DDFCAD] focus-visible:border-[#DDFCAD]"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#DDFCAD] focus:border-[#DDFCAD]"
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-[#DDFCAD] text-[#18181A] hover:bg-[#DDFCAD]/80 transition-colors py-6 text-lg rounded-xl"
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Info & Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800" 
                alt="Sara Carla Kader" 
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#DDFCAD]/20 p-3 rounded-full">
                  <Phone className="text-[#DDFCAD]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-[#BDBDBD]">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#DDFCAD]/20 p-3 rounded-full">
                  <Mail className="text-[#DDFCAD]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-[#BDBDBD]">contact@sarasmarketing.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#DDFCAD]/20 p-3 rounded-full">
                  <MapPin className="text-[#DDFCAD]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-[#BDBDBD]">123 Marketing Street, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      aria-label={link.label}
                      className="bg-white/10 hover:bg-[#DDFCAD]/20 transition-colors p-3 rounded-full"
                    >
                      <Icon className="text-[#DDFCAD]" size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;