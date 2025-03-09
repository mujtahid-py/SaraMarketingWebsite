import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Settings, Users, DollarSign, Send, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#", icon: Home },
    { label: "Services", href: "#services", icon: Settings },
    { label: "About Us", href: "#about", icon: Users },
    { label: "Pricing", href: "#pricing", icon: DollarSign },
    { label: "Contact Us", href: "#contact", icon: Send },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between h-16 px-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
        <span className="text-xl font-['Pacifico'] text-white">Sara's Marketing</span>
        
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="text-[#DDFCAD] hover:text-white transition-colors text-sm flex items-center gap-2"
              >
                <Icon size={18} className="stroke-current" />
                {item.label}
              </a>
            );
          })}
          
          <Button
            variant="outline"
            className="ml-4 text-[#DDFCAD] px-6 py-2 h-9 rounded-full border border-white/40 [border-width:0.5px] bg-transparent hover:bg-[#DDFCAD] hover:text-black transition-colors"
          >
            Book a Call Now
          </Button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between h-16 px-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-full">
        <span className="text-xl font-['Pacifico'] text-white">Sara's Marketing</span>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="text-white hover:bg-white/10"
        >
          <Menu size={24} />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#18181A]/95 backdrop-blur-md z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-white hover:bg-white/10"
              >
                <X size={24} />
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-[#DDFCAD] hover:text-white transition-colors text-xl flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    onClick={toggleMenu}
                  >
                    <Icon size={24} className="stroke-current" />
                    {item.label}
                  </motion.a>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  className="mt-6 text-[#DDFCAD] px-8 py-6 h-auto rounded-full border border-white/40 [border-width:0.5px] bg-transparent hover:bg-[#DDFCAD] hover:text-black transition-colors text-lg"
                  onClick={toggleMenu}
                >
                  Book a Call Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;