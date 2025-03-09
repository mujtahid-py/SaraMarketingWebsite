import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800",
  "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800",
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=800"
];

const HorizontalScroll = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = gsap.to(sectionRef.current, {
      translateX: "-400vw",
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 0.6,
        pin: true,
      }
    });
     
    const images = gsap.utils.toArray<HTMLImageElement>('.floating-image');
    images.forEach((img, i) => {
      gsap.to(img, {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-10, 10)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="relative bg-[#18181A] overflow-hidden">
      <div ref={triggerRef} className="relative min-h-screen">
        <div ref={sectionRef} className="relative min-h-screen flex items-center">
          <div className="flex items-center whitespace-nowrap min-w-[500vw] relative">
            {/* First Section */}
            <div className="w-screen h-screen flex items-center justify-center relative px-20">
              <h2 className="horizontal-text text-[250px] text-white leading-none tracking-tighter z-10">
                New era
              </h2>
              <img src={images[0]} alt="Marketing 1" className="floating-image absolute w-64 h-64 object-cover rounded-2xl -top-20 right-[15%] shadow-lg" />
              <img src={images[1]} alt="Marketing 2" className="floating-image absolute w-72 h-72 object-cover rounded-2xl bottom-32 left-[15%] shadow-lg" />
            </div>

            {/* Second Section */}
            <div className="w-screen h-screen flex items-center justify-center relative px-20">
              <div className="flex flex-col items-center gap-8">
                <h2 className="horizontal-text text-[250px] text-white leading-none tracking-tighter z-10">
                  for
                </h2>
                <h2 className="horizontal-text text-[250px] text-[#DDFCAD] leading-none tracking-tighter z-10">
                  growth
                </h2>
              </div>
              <img src={images[2]} alt="Marketing 3" className="floating-image absolute w-80 h-80 object-cover rounded-2xl top-32 left-[20%] shadow-lg" />
              <img src={images[3]} alt="Marketing 4" className="floating-image absolute w-96 h-96 object-cover rounded-2xl -bottom-10 right-[25%] shadow-lg" />
            </div>

            {/* Spacer Section */}
            <div className="w-[20vw]" />

            {/* Third Section */}
            <div className="w-screen h-screen flex items-center justify-center relative px-20">
              <h2 className="horizontal-text text-[250px] text-white leading-none tracking-tighter z-10">
                we're more
              </h2>
              <img src={images[0]} alt="Marketing 5" className="floating-image absolute w-80 h-80 object-cover rounded-2xl -top-20 right-[20%] shadow-lg" />
              <img src={images[1]} alt="Marketing 6" className="floating-image absolute w-72 h-72 object-cover rounded-2xl bottom-40 left-[25%] shadow-lg" />
            </div>

            {/* Fourth Section */}
            <div className="w-screen h-screen flex items-center justify-center relative px-20">
              <div className="flex items-baseline gap-16">
                <h2 className="horizontal-text text-[250px] text-white leading-none tracking-tighter z-10">
                  than
                </h2>
                <h2 className="horizontal-text text-[250px] text-white leading-none tracking-tighter z-10">
                  a
                </h2>
              </div>
              <img src={images[2]} alt="Marketing 7" className="floating-image absolute w-80 h-80 object-cover rounded-2xl top-20 left-[15%] shadow-lg" />
              <img src={images[3]} alt="Marketing 8" className="floating-image absolute w-96 h-96 object-cover rounded-2xl -bottom-16 right-[20%] shadow-lg" />
            </div>

            {/* Fifth Section */}
            <div className="w-screen h-screen flex items-center justify-center relative px-20">
              <div className="flex flex-col items-center gap-8">
                <h2 className="horizontal-text text-[250px] text-[#DDFCAD] leading-none tracking-tighter z-10">
                  marketing
                </h2>
                <h2 className="horizontal-text text-[200px] text-white leading-none tracking-tighter z-10">
                  agency
                </h2>
              </div>
              <img src={images[0]} alt="Marketing 9" className="floating-image absolute w-80 h-80 object-cover rounded-2xl top-20 left-[20%] shadow-lg" />
              <img src={images[1]} alt="Marketing 10" className="floating-image absolute w-72 h-72 object-cover rounded-2xl -bottom-10 right-[15%] shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;