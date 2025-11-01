import React from "react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/images/Why-is-customer-loyalty-important.png";

const animationVariants = {
  top: { opacity: 0, y: -50 },
  left: { opacity: 0, x: -50 },
  right: { opacity: 0, x: 50 },
  bottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
};

function AboutSection() {
  const infoItems = [
    {
      icon: "🚚",
      title: "Free and Fast Delivery",
      desc: "Free delivery for all orders over ₹15000",
      from: "top",
    },
    {
      icon: "🎧",
      title: "24/7 Customer Service",
      desc: "Friendly 24/7 customer support",
      from: "left",
    },
    {
      icon: "💸",
      title: "Money Back Guarantee",
      desc: "We return money within 30 days",
      from: "right",
    },
  ];

  return (
    <section className="text-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={animationVariants.top}
          whileInView={animationVariants.visible}
          viewport={{ once: true }}
          className=" p-4 "
        >
          <h2 className="text-3xl font-bold text-black mb-2">
            Abdul Jabbar Ak
          </h2>
          <p className="text-lime-400 font-semibold mb-4">Founder & Chairman</p>
          <p className=" text-gray-600 text-base sm:text-lg md:text-base lg:text-lg text-justify md:text-left">
            Powersaff, founded by Mr. Abdul Jabbar, has been in the industry for
            the past 25 years. With over three decades of experience, our team
            has immense expertise in inverter solutions. Pallikkunnu, now
            housing state-of-the-art inverter manufacturing facilities. Our
            latest plant produces high-quality lithium and tubularbatters .
            At Powersaff, we offer solar power solutions, including MPPT/PWM
            controllers, UPS systems, and premium solar panels with grid
            inverters, making residential and commercial solar installations
            easier.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={animationVariants.right}
          whileInView={animationVariants.visible}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About Team"
            className="w-full md:w-[85%] max-w-md object-cover "
          />
        </motion.div>
      </div>

      {/* Bottom Info Icons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto items-center text-center mt-16">
        {infoItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={animationVariants[item.from]}
            whileInView={animationVariants.visible}
            viewport={{ once: true }}
            className="hover:scale-105 bg-sky-950 p-8 transition-transform duration-300 bg-sky-100/20 rounded-xl"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h4 className="font-semibold text-white uppercase text-sm">
              {item.title}
            </h4>
            <p className="text-white text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
