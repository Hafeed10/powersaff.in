import React from "react";

const logos = Array(10).fill("https://navneetdwivedi.github.io/Logo_Slider/logo.png");

const LogoSlider = () => {
  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-l from-white via-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-r from-white via-transparent z-10 pointer-events-none"></div>

      {/* Logo rows */}
      {[0].map((_, i) => (
        <div
          key={i}
          className="flex animate-slide whitespace-nowrap gap-4 hover:animation-paused"
          style={{ animationDuration: "35s" }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="logo"
              className="h-24 flex-shrink-0"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default LogoSlider;
