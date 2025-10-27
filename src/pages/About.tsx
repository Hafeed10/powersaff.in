import React from "react";
import { Briefcase, Smartphone, Layout, Workflow } from "lucide-react";
import aboutImg1 from "@/assets/images/5002932cc68a3b514dce6a299fd7c96e.jpg";
import aboutImg2 from "@/assets/images/solar.jpg";
import aboutImg3 from "@/assets/images/thiru-n-n0gFDrIrTuU-unsplash-AVByb_xo.jpg";
import AboutSection from "@/Section/AboutSection";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 overflow-hidden">
      {/* ========== Hero Section ========== */}
      <section className="py-14 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* Left Content */}
  <div className="text-center md:text-left">
    <span className="text-sm font-semibold text-sky-950 uppercase tracking-widest">
      About Us
    </span>
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-snug sm:leading-tight">
      Transforming <span className="text-sky-950">Ideas</span> into{" "}
      <span className="text-sky-950">Digital Reality</span>
    </h1>
    <p className="mt-5 text-gray-600 text-base sm:text-lg md:text-base lg:text-lg text-justify md:text-left">
      Electronics is at the heart of modern innovation, shaping the way we
      live, work, and connect with the world. It is the branch of science and
      technology dedicated to the design, development, and application of
      devices and systems that operate using electrical circuits. These
      circuits often incorporate active components such as transistors,
      diodes, and integrated circuits, which work together to control and
      process electrical signals.
    </p>

    {/* Stats */}
    <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-8">
      {[
        { value: "500+", label: "Product Sale" },
        { value: "1000+", label: "Happy Clients" },
        { value: "99%", label: "Positive Feedback" },
      ].map((item, idx) => (
        <div key={idx} className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-sky-950">{item.value}</h3>
          <p className="text-sm text-gray-500">{item.label}</p>
        </div>
      ))}
    </div>

    <div className="mt-6 text-center md:text-left">
      <p className="font-medium text-gray-700">
        <span className="italic">— Abdul Jabbar Ak</span>, CEO
      </p>
    </div>
  
</div>


          {/* Right Image Section */}
          <div className="relative flex justify-center md:justify-end max-w-7xl mx-auto mt-10 md:mt-0">
            <div className="w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg relative z-10">
              <img
                src={aboutImg1}
                alt="Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-10 -translate-x-6 sm:translate-y-14 sm:-translate-x-10 w-32 sm:w-36 h-32 sm:h-36 rounded-xl overflow-hidden border-4 border-white shadow-md">
              <img
                src={aboutImg2}
                alt="Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 right-0 -translate-y-10 translate-x-6 sm:-translate-y-12 sm:translate-x-10 w-28 sm:w-32 h-28 sm:h-32 rounded-xl overflow-hidden border-4 border-white shadow-md">
              <img
                src={aboutImg3}
                alt="Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
    </div>
  );
}
