import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Plus,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import Features from "@/Section/Features";
import Gallery from "@/Section/Gallery";
import Product from "@/Section/Product";
import Items from "@/Section/Items";
import LogoSlider from "@/Section/LogoSlider";
import Advantages from "@/Section/Advantages";
import { FaWhatsapp } from "react-icons/fa";
const slides = [
  {
    title: "Welcome To POWER SAFF",
    subtitle: "Your Modern eCommerce Product Management Platform",
  },
  {
    title: "Showcase Products Beautifully",
    subtitle: "Manage, Track, and Grow Your Online Business with Ease",
  },
  {
    title: "Smart. Fast. Scalable.",
    subtitle: "Empowering Your Next eCommerce Innovation",
  },
];

const Index = ({ productCount }) => {
  const heroRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+91 94461 80100"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-accent text-primary-foreground p-4 rounded-full shadow-[var(--shadow-hover)] hover:opacity-90 transition-opacity"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          {/* Background gradient animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-950 opacity-80"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Animated floating orbs (grid balls) */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-sky-400/10 blur-3xl"
              style={{
                width: 200 + Math.random() * 200,
                height: 200 + Math.random() * 200,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 80 - 40],
                y: [0, Math.random() * 80 - 40],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Overlay gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>

          {/* Zoom-in background effect */}
          <motion.div
            className="absolute inset-0 bg-[url('/banner-pattern.svg')] bg-cover bg-center opacity-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Text content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].title}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -30 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r text-white bg-clip-text text-transparent uppercase">
                  {slides[index].title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-300 font-medium">
                  {slides[index].subtitle}
                </p>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Link to="/products">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-sky-950 to-sky-900 hover:scale-105 transition-transform text-lg px-8"
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Browse Products
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 border-2 border-sky-400  text-black hover:bg-sky-900 hover:text-white hover:scale-105 transition-transform"
                    >
                      <Plus className="mr-2 h-5 w-5" />
                      All Products
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        <LogoSlider />
        <Features />
        <Gallery />
        <Items />
        <Product />
        <Advantages />
        {/* Products Grid */}
      </main>

      {/* Footer */}
    </div>
  );
};

export default Index;
