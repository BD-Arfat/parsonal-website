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
    <section className="mt-10 px-6">
      <h1 className="text-4xl font-bold font-roboto text-center text-green-500">Service</h1>
      <div className="container mx-auto text-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
