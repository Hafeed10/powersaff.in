import React from "react";
import "./LogoSlider.css"; // Import the CSS for animations
import images4 from "../assets/Logos/image 4.png";

const logos = [
  images4,
  images4,
  images4,
  images4,
  images4,
  images4,
  images4,
  images4,
];

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-8 ">
      {/* Gradient overlays for fading edges */}
      <div className="absolute top-0 left-0 h-full w-32  pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-32  pointer-events-none"></div>
      {/* Sliding row */}
      <div className="flex animate-slide whitespace-nowrap gap-8">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="logo"
            className="h-12 w-auto hover:opacity-100 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
