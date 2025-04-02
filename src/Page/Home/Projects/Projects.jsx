import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "MedlinePlus 🛒",
    description: "A medicine e-commerce platform for buying and selling medicines seamlessly.",
    image: "https://i.ibb.co.com/WWRX97xB/Screenshot-2025-04-01-235028.png",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js", "MongoDB", "Stripe", "JWT Authentication"],
    keyFeatures: [
      "Users can buy and sell products.",
      "User, Admin & Seller Dashboards added.",
      "Integrated Stripe payment system.",
      "Fully responsive with pagination.",
    ],
    liveLink: "https://medicine-client.web.app/",
    serverLink: "https://github.com/BD-Arfat/medicine-server",
    livesiteLink: "https://github.com/BD-Arfat/medicine-client",
    isFullStack: true,
  },
];

const Projects = () => {
  return (
    <section className="mt-32 mb-24">
      <div className="text-center mb-12">
        <HeaderSection name={"PROJECTS"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0, 128, 0, 0.2)" }}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Image */}
            <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>

              {/* Technologies */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-700">Technologies:</h4>
                <ul className="flex flex-wrap gap-1 mt-1">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-gray-700">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-600 text-xs">
                  {project.keyFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[45%] text-center bg-green-400 text-xs text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-green-600"
                >
                  Live Demo
                </a>

                {project.isFullStack && (
                  <>
                    <a
                      href={project.livesiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[24%] text-center text-xs bg-gray-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-gray-800"
                    >
                      Client
                    </a>
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[24%] text-center text-xs bg-gray-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-gray-800"
                    >
                      Server
                    </a>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
