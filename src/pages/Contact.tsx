import React, { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const service_id = "service_abctus9";
  const template_id = "template_84o37ni";
  const public_key = "j6YahqNZoebTYlmcn";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
    };

    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-sky-950 mb-2">Contact Us</h2>
        <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We’d love to hear from you! Whether you have a question or need a custom solution, 
          our team is ready to help.
        </p>
      </div>

      {/* Contact Content */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <div>
            <p className="uppercase text-sm text-gray-500 font-medium tracking-wide">
              We’re here to help you
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-sky-950 mt-2 leading-snug">
              <span className="text-sky-900">Discuss</span>{" "}
              <span className="text-sky-950">Your Powersaff Solution Needs</span>
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed max-w-md">
            Are you looking for top-quality Powersaff solutions tailored to your needs? 
            Reach out to us.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Mail className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-medium text-sky-950">powersaffpkn@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-sky-950">Phone number</p>
                <p className="font-medium text-sky-950">+91 94461 80100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sky-950">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sky-950">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-sky-950">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 text-gray-900"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-sky-950">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type your message..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-3 text-gray-900"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full md:w-auto flex items-center justify-center gap-2 rounded-full bg-sky-950 hover:bg-sky-900 text-white font-semibold px-6 py-3 transition-all"
            >
              <ArrowRight className="w-5 h-5" />
              Get a Solution
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
