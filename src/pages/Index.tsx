import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import MarqueeText from "@/components/home/MarqueeText";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import AboutSection from "@/components/home/AboutSection";
import HorizontalTimeline from "@/components/home/HorizontalTimeline";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactSection from "@/components/home/ContactSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <main className="bg-white min-h-screen overflow-hidden">
      <div className="relative min-h-[868px] w-full pt-6 pb-[67px] px-6 rounded-b-[20px] bg-[#18181A]">
        <div className="container mx-auto relative z-10">
          <Navbar />
          <div className="mt-[73px] max-w-[1283px] mx-auto max-md:mt-10">
            <Hero />
          </div>
        </div>
      </div>
      <MarqueeText />
      <HorizontalScroll />
      <AboutSection />
      <HorizontalTimeline />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;