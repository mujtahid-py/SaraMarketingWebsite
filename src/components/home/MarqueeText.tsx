import { motion } from "framer-motion";
import React from "react";

const MarqueeText = () => {
  const baseText = "SARA'S MARKETING ← ";
  // Calculate the number of repetitions needed based on viewport width
  const repeatedText = Array(8).fill(baseText).join("");

  return (
    <div className="relative w-full overflow-hidden bg-white py-8">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"]
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* First copy of the text */}
          <span className="inline-block text-[32px] tracking-wider font-['Inter']">
            {repeatedText.split("").map((char, i) => (
              <span
                key={i}
                className={char === "←" ? "text-[#DDFCAD] mx-4" : "text-black"}
              >
                {char}
              </span>
            ))}
          </span>
          {/* Duplicate text to create seamless loop */}
          <span className="inline-block text-[32px] tracking-wider font-['Inter']">
            {repeatedText.split("").map((char, i) => (
              <span
                key={`duplicate-${i}`}
                className={char === "←" ? "text-[#DDFCAD] mx-4" : "text-black"}
              >
                {char}
              </span>
            ))}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeText;