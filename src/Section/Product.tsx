import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "@/assets/images/solar.jpg";
import image2 from "@/assets/images/0184168ce4ac390b061822162b5f222a.jpg";
import image3 from "@/assets/images/5002932cc68a3b514dce6a299fd7c96e.jpg";

// Replace with your own images
const IMAGES = [image1, image2, image3];

const KutsurogiHero = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % IMAGES.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="min-h-screen bg-sky-950 text-white relative overflow-hidden font-['Plus Jakarta Sans']">
      <section
        className="
          grid grid-cols-1 md:grid-cols-[4fr_6fr]
          gap-8 px-6 sm:px-10 md:px-16 lg:px-20
          py-20 md:py-28 lg:py-32
          items-center
          
        "
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-5 text-center md:text-left">
          <motion.h1
            initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 300%)" }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.6, 0.04, 0.98, 0.335],
            }}
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-['Libre Baskerville'] font-bold leading-tight
            "
          >
            The Charge{" "}
            <span className="bg-sky-900 px-2 rounded">The Power</span>.
          </motion.h1>

          <motion.p
            initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 300%)" }}
            transition={{
              duration: 1,
              delay: 1.5,
              ease: [0.6, 0.04, 0.98, 0.335],
            }}
            className="
              text-base sm:text-lg md:text-xl
              text-gray-300 max-w-lg mx-auto md:mx-0
            "
          >
            From the smallest microchip to complex computing systems,
            electronics powers countless functions including communication,
            computation, automation, and entertainment.
          </motion.p>
        </div>

        {/* Right Image Grid */}
        <div
          className="
            grid grid-cols-[3fr_1fr_1fr] sm:grid-cols-3
            gap-2 sm:gap-3 relative justify-center
          "
        >
          {IMAGES.map((src, i) => (
            <motion.figure
              key={src}
              initial={{ opacity: 0, y: 100, x: 200 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 2 + i * 0.4, duration: 0.8 }}
              className={`
                h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]
                border-2 sm:border-4 border-white
                overflow-hidden rounded-xl
                ${
                  i === 1
                    ? "mt-8 sm:mt-12 md:mt-16"
                    : i === 2
                    ? "mt-16 sm:mt-24 md:mt-32"
                    : ""
                }
              `}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={IMAGES[(index + i) % IMAGES.length]}
                  alt={`slide-${i}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: -100, y: -100 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </motion.figure>
          ))}

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="
              absolute -bottom-10 sm:-bottom-12 md:-bottom-14
              left-1/2 -translate-x-1/2
              flex gap-3 sm:gap-4
            "
          >
            <button
              onClick={prevSlide}
              className="
                bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-full
                hover:bg-transparent hover:text-white border border-white transition-all
              "
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="
                bg-white text-black font-semibold px-4 sm:px-5 py-2 rounded-full
                hover:bg-transparent hover:text-white border border-white transition-all
              "
            >
              Next
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default KutsurogiHero;
