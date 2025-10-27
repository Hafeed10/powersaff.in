import React from "react";
import image1 from "@/assets/images/house-heating-concept-modern-home-gas-fired-boiler-energy-cash-savings-3d-rendering_415584-33-CRXiDYSF.jpg";
import image2 from "@/assets/images/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577-DTCZpps5.jpg";
import image3 from "@/assets/images/sungrow-emea-ceTSHQ0qars-unsplash-C9YZkDef.jpg";
import image4 from "@/assets/images/thiru-n-n0gFDrIrTuU-unsplash-AVByb_xo.jpg";

function Gallery() {
  const images = [image1, image2, image3, image4];

  return (
    <section className="relative overflow-hidden py-20 text-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-900 via-sky-950 to-sky-800 animate-gradientMove opacity-90"></div>

      {/* Overlay to keep content readable */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-10 text-white">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto w-full max-w-6xl">
          {images.map((src, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-none md:rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-64 object-cover object-top saturate-[35%] transition-all duration-300 ease-in hover:scale-110 hover:saturate-100"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
