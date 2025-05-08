import React, { useState } from "react";
import { FaGithub, FaServer, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";

// Sample Project Data
const projectsData = [
  {
    title: "MedlinePlus 🛒",
    description: "A medicine e-commerce platform for buying and selling medicines seamlessly.",
    image: "https://i.ibb.co.com/WWRX97xB/Screenshot-2025-04-01-235028.png",
    technologies: [
      "React.js", "Tailwind CSS", "Firebase", "Node.js", "Express.js",
      "MongoDB", "Stripe", "JWT Auth"
    ],
    liveLink: "https://medicine-client.web.app/",
    serverLink: "https://github.com/BD-Arfat/medicine-server",
    livesiteLink: "https://github.com/BD-Arfat/medicine-client",
    category: "fullstack"
  },
  {
    title: "LIFTGUARD SOLUTION",
    description: "Industry-level management system built using React, Tailwind CSS.",
    image: "https://i.ibb.co.com/HDWQf4C1/lift-guard.png",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://liftguardsolution01.netlify.app/",
    livesiteLink: "https://github.com/BD-Arfat/lift-guard",
    serverLink: null,
    category: "react-tailwind"
  },
  {
    title: "This is my first website and first project.",
    description: "I made this to see and know how much html and css I have learned. I made this with html and css",
    image: "https://i.ibb.co.com/x8jSV1Hk/Screenshot-2025-04-23-183806.png",
    technologies: ['html5', 'css3'],
    liveLink: "https://bd-arfat.github.io/Assignment-Project-one/",
    livesiteLink: "https://github.com/BD-Arfat/Assignment-Project-one",
    serverLink: null,
    category: "html-css"
  },
  {
    title: "This is my Seconds website and Seconds project.",
    description: "I made this to see and know how much html and css I have learned. I made this with html and css",
    image: "https://i.ibb.co.com/KjBbZ6N4/Screenshot-2025-04-23-184500.png",
    technologies: ['html5', 'css3'],
    liveLink: "https://bd-arfat.github.io/Assignment-two/",
    livesiteLink: "https://github.com/BD-Arfat/Assignment-two",
    serverLink: null,
    category: "html-css"
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(projectsData.map(p => p.category))];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="py-10 px-5 max-w-7xl mx-auto">
       <div className="text-center mb-16">
        <HeaderSection name={'MY PROJECTS'}></HeaderSection>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1 rounded-full border transition-all duration-200 ${
              selectedCategory === category
                ? "bg-green-600 text-white"
                : "border-green-600 text-green-600 hover:bg-blue-100"
            }`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-xl shadow-lg overflow-hidden border"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Hover Icon Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-green-400"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
              {project.livesiteLink && (
                <a
                  href={project.livesiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  <FaGithub />
                </a>
              )}
              {project.serverLink && (
                <a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-2xl hover:text-yellow-300 flex items-center gap-1"
                >
                  <FaServer /> <span className="text-sm">server</span>
                </a>
              )}
            </div>

            {/* Content */}
            <div className="p-5 bg-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>

              {/* Tech List */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-green-200 text-black px-2 py-0.5 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-16">
        <Link to={'/allProjects'} className="bg-green-600 py-4 px-6 text-xl  rounded-md text-white">See More Projects</Link>
      </div>
    </div>
  );
};

export default Projects;
