import React from "react";
import image2 from "@/assets/images/servis1.jpg";
import image3 from "@/assets/images/servis2.jpg";
import image4 from "@/assets/images/servis3.jpg";
import { FaBatteryThreeQuarters, FaInbox, FaMobile } from "react-icons/fa";
const HomePage = () => {
  return (
    <div className="text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] md:h-[85vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507209696998-3c532be9b2b1?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-sky-900 font-bold mb-4 leading-tight">
            Welcome <span className="text-sky-950">To Services</span>
          </h1>
          <p className="text-sky-950 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Our journey in the world of electronics began with a passion for
            innovation and problem-solving. By understanding how electronic
            circuits interact, we strive to create solutions that simplify
            lives, enhance efficiency, and open new possibilities in technology.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-12 bg-sky-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image2}
              alt="about-1"
              className="rounded-xl object-cover w-full h-48 sm:h-56"
            />
            <img
              src={image3}
              alt="about-2"
              className="rounded-xl object-cover w-full h-48 sm:h-56  "
            />
            <img
              src={image4}
              alt="about-3"
              className="rounded-xl object-cover w-full h-48 sm:h-56 col-span-2"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-sky-400 text-sm uppercase mb-2 tracking-wide">
              About Us
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Powersaff Services.
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-base lg:text-lg text-justify md:text-left">
              To a user, a service is very simple. A service to a user is
              something that helps them to do something. That 'something' can be
              short and straightforward, like buying a short-term bar, or it can
              be long and multi-parted, like moving room.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h4 className="text-md font-semibold">Phone Service</h4>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h4 className="text-md font-semibold">Inverter Service</h4>
              </div>
              <div className="bg-gray-800 p-4 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                <h4 className="text-md font-semibold">Battery Service</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-sky-100">
        <div className="text-center mb-12">
          <h3 className="text-sky-900 uppercase tracking-wide mb-2">
            Best Features
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-sky-950">
            Our Services
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMobile size={40} />,
              title: "Phone Service",
              desc: "Stay connected with fast and secure phone services.",
            },
            {
              icon: <FaInbox size={40} />,
              title: "Inverter Service",
              desc: "Inverter service is essential for maintaining uninterrupted power supply by ensuring the inverter operates efficiently and reliably .",
            },
            {
              icon: <FaBatteryThreeQuarters size={40} />,
              title: "Battery Service",
              desc: "Battery service involves checking, cleaning, and maintaining battery health.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-sky-950 hover:bg-sky-900 transition p-8 rounded-xl text-center shadow-xl"
            >
              <div className="flex justify-center mb-4 text-white">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-300 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6 text-center bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "1000+", label: "Happy Clients" },
            { number: "500+", label: "Product Sales" },
            { number: "99%", label: "Client Retention" },
            { number: "2+", label: "Awards Won" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-sky-50 p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-sky-950">
                {item.number}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
