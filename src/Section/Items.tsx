import React, { useState } from "react";
import image1 from "@/assets/images/product1-removebg-preview-B9JUCw62.png";
import image2 from "@/assets/images/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577-DTCZpps5.jpg";
import image3 from "@/assets/images/sungrow-emea-ceTSHQ0qars-unsplash-C9YZkDef.jpg";
import image4 from "@/assets/images/thiru-n-n0gFDrIrTuU-unsplash-AVByb_xo.jpg";

export default function Items() {
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    {
      name: "Heating Boiler",
      category: "Home Energy",
      price: 140,
      desc: "High-efficiency gas boiler for modern homes. Save energy and money with smart heat control.",
      image: image1,
    },
    {
      name: "RO Water Filter",
      category: "Purified Water",
      price: 100,
      desc: "Crystal-clear, mineral-balanced water with our advanced RO filtration system.",
      image: image2,
    },
    {
      name: "Solar Inverter",
      category: "Clean Energy",
      price: 250,
      desc: "Smart solar inverter for residential and commercial energy management.",
      image: image3,
    },
    {
      name: "Modern Radiator",
      category: "Comfort Living",
      price: 190,
      desc: "Elegant and efficient radiator for warm, cozy spaces during winter.",
      image: image4,
    },
    {
      name: "Heating Boiler",
      category: "Home Energy",
      price: 140,
      desc: "High-efficiency gas boiler for modern homes. Save energy and money with smart heat control.",
      image: image1,
    },
    {
      name: "RO Water Filter",
      category: "Purified Water",
      price: 100,
      desc: "Crystal-clear, mineral-balanced water with our advanced RO filtration system.",
      image: image2,
    },
    {
      name: "Solar Inverter",
      category: "Clean Energy",
      price: 250,
      desc: "Smart solar inverter for residential and commercial energy management.",
      image: image3,
    },
    {
      name: "Modern Radiator",
      category: "Comfort Living",
      price: 190,
      desc: "Elegant and efficient radiator for warm, cozy spaces during winter.",
      image: image4,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-300 text-white flex flex-wrap justify-center items-center py-20 px-6 gap-10">
      {products.map((product, index) => (
        <div key={index} className="relative">
          {/* Product Card */}
          <div className="bg-white rounded-r-3xl border-t-2 border-sky-950 rounded-b-md w-72 h-[400px] shadow-lg relative overflow-hidden flex flex-col justify-end items-center group">
            <img
              src={product.image}
              alt={product.name}
              className="absolute top-10 w-[250px] h-[200px] object-cover  transition-transform duration-300 group-hover:scale-105"
            />
            <h2 className="text-lg font-semibold text-sky-950 mt-48">
              {product.name}
            </h2>
            <p className="text-gray-400">₹{product.price.toFixed(2)}</p>
            <button
              onClick={() => setActiveIndex(index)}
              className="mt-3 mb-6 bg-sky-950 hover:bg-sky-700 text-white text-sm uppercase px-5 py-2 rounded-full transition-all duration-300"
            >
              Quick View
            </button>
          </div>

          {/* Popup Modal */}
          {activeIndex === index && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">
              <div className="bg-white text-gray-900 rounded-sm w-[90%] max-w-4xl flex flex-col md:flex-row relative overflow-hidden">
                {/* Close Button */}
                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition text-3xl leading-none"
                >
                  &times;
                </button>

                {/* Image Side */}
                <div className="bg-sky-950 flex justify-center items-center md:w-1/2 p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[300px] h-[300px] object-cover "
                  />
                </div>

                {/* Info Side */}
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-2">
                    {product.name}
                    <br />
                    <span className="text-sky-600 uppercase text-sm tracking-wider font-medium">
                      {product.category}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <span className="text-3xl font-semibold text-sky-700 mb-5">
                    ₹{product.price.toFixed(2)}
                  </span>

                  <div className="flex gap-4">
                    <button className="bg-sky-700 text-white px-6 py-2 rounded-full hover:bg-sky-800 transition">
                      Review
                    </button>
                    <button className="text-sky-700 font-medium hover:underline">
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
