import React from 'react';
import { Instagram, Linkedin, Mail, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Social Media Management", href: "#" },
        { label: "Ads Marketing", href: "#" },
        { label: "Web Development", href: "#" },
        { label: "SEO", href: "#" },
        { label: "Marketing Strategy", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Journey", href: "#journey" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" }
      ]
    }
  ];
  
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact@sarasmarketing.com", label: "Email" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-[#18181A] pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-2xl font-['Pacifico'] text-white">Sara's Marketing</span>
            </div>
            <p className="text-[#BDBDBD] mb-6 max-w-md">
              We help businesses grow through strategic digital marketing solutions. Our team of experts is dedicated to delivering measurable results that drive your success.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="bg-white/10 hover:bg-[#DDFCAD]/20 transition-colors p-2 rounded-full"
                  >
                    <Icon className="text-[#DDFCAD]" size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-[#BDBDBD] hover:text-[#DDFCAD] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#BDBDBD] text-sm mb-4 md:mb-0">
            © {currentYear} Sara's Marketing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#BDBDBD] hover:text-[#DDFCAD] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#BDBDBD] hover:text-[#DDFCAD] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-[#BDBDBD] hover:text-[#DDFCAD] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;