import React from "react";
import { motion } from "framer-motion";
import EmailSubscribe from "./EmailSubscribe";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-5">
      <motion.div 
        className="w-full md:w-6/12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col mt-10 md:mt-[54px]">
          <motion.h1 
            className="text-white text-4xl md:text-[55px] leading-tight text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Grow{" "}
            <motion.span 
              className="font-['Pacifico'] text-[#DDFCAD]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
            >
              faster
            </motion.span>{" "}
            with our all-in-one marketing platform
          </motion.h1>
          <motion.p 
            className="text-[#BDBDBD] text-[15px] mt-6 md:mt-10 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Agency that builds and helps you grow your business to next level
          </motion.p>
          <motion.div 
            className="mt-8 md:mt-[58px] mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <EmailSubscribe />
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="w-full md:w-6/12 mb-8 md:mb-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative h-[300px] md:h-[700px]">
          {/* Glow Effects */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/20 rounded-full opacity-20 blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[55%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#DDFCAD]/20 rounded-full opacity-20 blur-[90px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Content Card */}
          <motion.div 
            className="bg-[#F1F1EF] relative z-10 flex grow flex-col w-full h-[250px] md:h-auto pt-[34px] pb-[100px] md:pb-[554px] px-[30px] rounded-[20px]"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.div 
              className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[100px] md:w-[141px] h-[40px] md:h-[45px] rounded-[100px] relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div 
                className="bg-[#DDFCAD] absolute top-[-5px] w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full"
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;