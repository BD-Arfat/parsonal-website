import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { motion } from "framer-motion";

const services = [
  {
    title: "Admin Panel Development",
    description: "Creating powerful and user-friendly admin panels to manage your business efficiently.",
    icon: "🛠️",
  },
  {
    title: "Seller Dashboard",
    description: "Developing feature-rich seller dashboards for smooth product management and analytics.",
    icon: "📊",
  },
  {
    title: "E-commerce Login System",
    description: "Implementing secure and seamless login systems for customers, sellers, and admins.",
    icon: "🔐",
  },
  {
    title: "Multi-Vendor Platform",
    description: "Building scalable multi-vendor platforms to connect buyers and sellers effectively.",
    icon: "🛒",
  },
  {
    title: "Payment Gateway Integration",
    description: "Integrating secure payment gateways to ensure smooth and reliable transactions.",
    icon: "💳",
  },
  {
    title: "Performance Optimization",
    description: "Enhancing website speed and performance for an improved user experience.",
    icon: "🚀",
  },
];

const Services = () => {
  return (
    <section className="mt-40 px-6">
      <div className="mb-5">
        <HeaderSection name={"Services"} />
      </div>
      <div className="container mx-auto text-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-10 rounded-xl shadow-xl bg-white border-2 border-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 transform hover:-translate-y-3 relative overflow-hidden flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4 animate-bounce">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-3 font-roboto leading-tight">{service.title}</h3>
              <p className="text-md leading-relaxed font-lora text-lg px-2">{service.description}</p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-400 transition-all duration-300 hover:h-3"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
