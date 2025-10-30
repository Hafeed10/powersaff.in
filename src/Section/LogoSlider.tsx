import React from "react";
import "./LogoSlider.css"; // Import the CSS for animations
import images1 from "../assets/Logos/image 4.png";
import images2 from "../assets/Logos/image.png";
import images3 from "../assets/Logos/image3.png";
import images4 from "../assets/Logos/output-onlinepngtools.png";

const logos = [
  images1,
  images2,
  images3,
  images4,
  images1,
  images2,
  images3,
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
