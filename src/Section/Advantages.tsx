import React from "react";
import { Truck, ShieldCheck, Tag, CreditCard } from "lucide-react";

const advantages = [
  {
    icon: <Truck className="w-10 h-10 text-white" />,
    title: "Express Delivery",
    subtitle: "Ships in 24 Hours",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-white" />,
    title: "Brand Warranty",
    subtitle: "100% Original products",
  },
  {
    icon: <Tag className="w-10 h-10 text-white" />,
    title: "Exciting Deals",
    subtitle: "On all prepaid orders",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-white" />,
    title: "Secure Payments",
    subtitle: "SSL / Secure certificate",
  },
];

function Advantages() {
  return (
    <section className="py-20 bg-transparent">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Our{" "}
          <span className=" text-sky-950 px-2 py-1 rounded">Advantages</span>
        </h2>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="bg-sky-950 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center space-y-3 p-8 transition-transform duration-300 hover:scale-105 hover:shadow-sky-800/50"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advantages;
