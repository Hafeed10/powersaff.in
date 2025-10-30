import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import Logo from "@/assets/output-onlinepngtools.png";

const Footer = () => {
  return (
    <footer className="bg-sky-950 relative text-gray-300 mt-20">
      {/* Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div>
            <div className="mb-6">
              <a href="/">
                <img src={Logo} alt="logo" className="h-12 w-auto" />
              </a>
            </div>
            <p className="mb-4 text-gray-300 leading-7">
              Subscribe to our Email alerts to receive early discount offers,
              and new products info.
            </p>
            <div>
              <form className="relative">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full py-3 px-4 bg-gray-700 outline-none  text-white"
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 bg-[#d4690b] px-5 h-full flex items-center justify-center"
                >
                  <FaTelegramPlane className="text-white rotate-[-6deg]" />
                </button>
              </form>

              <span className="text-white bg-[#d4690b] px-5 p-3 w-12 cursor-pointer mt-10 font-bold block mb-4">
                Subscribe
              </span>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 border-b-2 border-[#827d7b] inline-block pb-1">
              Help
            </h3>
            <ul className="flex flex-wrap">
              {[
                " FAQs",
                "Track Order",
                "Cancel Order",
                "Return Order",
                "Warranty Info",
                " Return Policy",
                "Security",
                "Sitemap",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((link) => (
                <li key={link} className="w-1/2 mb-3">
                  <a href="#" className="hover:text-[#7c6c63] capitalize">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 border-b-2 border-[#8b8785] inline-block pb-1">
              Company
            </h3>
            <ul className="flex flex-wrap">
              {[
                "About Us",
                "Contact Us",
                "Service Centres",
                "Careers",
                "Press Info",
                "Affiliates",
                "Blog",
                "Testimonials",
                "Business Enquiries",
                "Corporate Information",
              ].map((link) => (
                <li key={link} className="w-1/2 mb-3">
                  <a href="#" className="hover:text-[#7c6c63] capitalize">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-black text-sm">
          <p className="mb-3 md:mb-0">
            © 2025, All Rights Reserved{" "}
            <a href="#" className="text-[#4b1906b1]">
              Jabbar
            </a>
          </p>
          <ul className="flex gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-[#2f2e2d]" />
            <FaWhatsapp className="cursor-pointer hover:text-[#363433]" />
            <FaInstagram className="cursor-pointer hover:text-[#2f2d2c]" />
            <FaTwitter className="cursor-pointer hover:text-[#363433]" />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
