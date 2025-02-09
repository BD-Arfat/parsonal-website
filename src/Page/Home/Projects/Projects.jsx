import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "E-Commerce Website",
    description: "A fully responsive online shopping platform with payment integration.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
    liveLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio website with animations and dark mode.",
    image: "https://source.unsplash.com/400x250/?portfolio,website",
    liveLink: "#",
  },
  {
    title: "Quiz App",
    description: "An interactive quiz application with multiple categories and real-time scoring.",
    image: "https://source.unsplash.com/400x250/?quiz,app",
    liveLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="mt-48 mb-32">
      <div className="text-center mb-16">
        <HeaderSection name={"PROJECTS"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 40px rgba(0, 128, 0, 0.3)" }}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              className="w-full h-56 object-cover"
              src={project.image}
              alt={project.title}
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 font-roboto mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 font-lora">{project.description}</p>

              {/* Button */}
              <a
                href={project.liveLink}
                className="inline-block w-full bg-green-400 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-green-600 font-roboto text-center"
              >
                See Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
