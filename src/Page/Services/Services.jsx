import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "MERN Stack Project Creation",
    description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    icon: "🖥️"
  },
  {
    title: "CRUD Projects",
    description: "Create dynamic applications with full CRUD functionality for data management.",
    icon: "🗃️"
  },
  {
    title: "Responsive Projects",
    description: "Develop websites that are fully responsive on all screen sizes and devices.",
    icon: "📱"
  },
  {
    title: "Authentication System",
    description: "Implement secure authentication and authorization with JWT, Firebase, and OAuth.",
    icon: "🔒"
  },
  {
    title: "Admin Panel Development",
    description: "Build powerful admin panels to manage and control your platform with ease.",
    icon: "🎓"
  },
  {
    title: "Dashboard",
    description: "Create user-friendly dashboards with real-time data and interactive components.",
    icon: "📊"
  },
  {
    title: "Multi-Vendor Platform",
    description: "Develop platforms supporting multiple vendors for an e-commerce solution.",
    icon: "👥"
  },
  {
    title: "Payment Gateway Integration (Stripe)",
    description: "Integrate Stripe payment gateway for secure and reliable payment processing.",
    icon: "💳"
  },
  {
    title: "Performance Optimization",
    description: "Improve your website’s speed and performance using various optimization techniques.",
    icon: "⚡"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-r from-green-100 via-white to-green-100">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-4xl font-semibold text-center text-green-700 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="group relative bg-white shadow-lg rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:bg-green-500 hover:text-white hover:translate-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex justify-center mb-4 text-4xl group-hover:text-white transition-colors duration-300">
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-4 text-center group-hover:text-white transition-colors duration-300">{service.title}</h3>
            <p className="text-gray-700 text-center group-hover:text-white transition-colors duration-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Services;
