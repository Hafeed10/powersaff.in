import React, { useState } from "react";
import image1 from "@/assets/images/product1-removebg-preview-B9JUCw62.png";
import image2 from "@/assets/images/solar-battery-charger-500x500-removebg-preview.png";
import image3 from "@/assets/images/dc-ac-power-inverter-1-removebg-preview-4cJz1OeJ.png";
import image4 from "@/assets/images/product4-removebg-preview-BiEgiAnL.png";
import image5 from "@/assets/images/product6-removebg-preview-DAC2mlE5.png";
import image6 from "@/assets/images/ChatGPT Image Jul 17, 2025, 05_27_47 PM.png";
import image7 from "@/assets/images/POWER_SAFF_Tubular_Deep-Cycle_Battery-removebg-preview.png";
import image8 from "@/assets/images/camera-removebg-preview.png";

export default function Items() {
  const [activeIndex, setActiveIndex] = useState(null);

  const products = [
    {
      name: "Zero Drop Solar Charge",
      category: "Electronics",
      desc: "Zero Drop Solar Charge",
      image: image1,
    },
    {
      name: "Solar Battery-Charger",
      category: "Solar Battery-Charger",
      desc: "Solar Battery-Charger",
      image: image2,
    },
    {
      name: "Solar Charger",
      category: "Solar Charger",
      desc: "High-efficiency solar charger for all your devices on the go.",
      image: image3,
    },
    {
      name: "Solar Charge Controller",
      category: "Electronics",
      desc: "Solar Charge Controller",
      image: image4,
    },
    {
      name: "CPU Model Inverter",
      category: "Inverter",
      desc: "CPU Model Inverter",
      image: image5,
    },
    {
      name: "Inverter Battery",
      category: "Purified Water",
      desc: "Next-gen inverter for seamless power backup and energy efficiency.",
      image: image6,
    },
    {
      name: "Battery Tubular Deep-Cycle",
      category: "Battery",
      desc: "High-capacity tubular deep-cycle battery for long-lasting energy storage.",
      image: image7,
    },
    {
      name: "Solar Camera",
      category: "Camera",
      desc: "Solar Camera",
      image: image8,
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
