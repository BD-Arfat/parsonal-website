import React from "react";
import { FaGithub, FaLink } from 'react-icons/fa';  // Importing GitHub icon from React Icons
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";

const projects = [
  {
    project_name: "liftguard solution",
    project_image: "https://i.ibb.co.com/S4PzF3nR/liftguard.png",
    project_description:
      "This website is basically for a company. I have created this project for a client whose name is (liftguard solution).",
    project_tags: ["ReactJs", "React Router Dom", "TailwindCss", "Frontend", "framer motion"],
    project_features: [
      "Responsive design",
      "Smooth scrolling",
      "Animated components",
    ],
    live_site_link: "https://liftguardsolution01.netlify.app",
    github_client_site_link: "https://github.com/BD-Arfat/lift-guard",
    github_server_site_link: "N/A",
    project_category: "React",
  },
  {
    project_name: "E-commerce Website",
    project_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DPeNYdcs-fI1fkjOG0oaVergA6tmnj5t1g&s",
    project_description:
      "A full-stack e-commerce platform with user authentication and payment integration.",
    project_tags: ["E-commerce", "Full Stack", "MERN"],
    project_features: [
      "User authentication with JWT",
      "Product management dashboard",
      "Payment integration with Stripe",
      "Add to cart and wishlist feature",
      "Order tracking system",
    ],
    live_site_link: "#",
    github_client_site_link: "#",
    github_server_site_link: "#",
    project_category: "Fullstack",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 transition transform hover:scale-105">
      <img
        src={project.project_image}
        alt={project.project_name}
        className="rounded-xl mb-4 w-full h-56 object-cover"
      />
      <div className="flex items-center mb-2">
        <h3 className="text-xl font-semibold">{project.project_name}</h3>
        {/* GitHub icon next to the project name */}
        <a
          href={project.github_client_site_link}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-gray-600 hover:text-black"
        >
          <FaGithub size={20} />
        </a>
      </div>
      <p className="text-gray-600 mb-3">{project.project_description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.project_tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-green-600 px-2 py-1 rounded-lg text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside mb-3 text-gray-700">
        {project.project_features.map((feature, index) => (
          <li key={index} className="text-sm">{feature}</li>
        ))}
      </ul>
      <a
        href={project.live_site_link} target="_blank"
        className="bg-green-600 text-white px-4 py-2 rounded-lg inline-block mt-2 hover:bg-blue-700"
      > 
        Live Site
      </a>
      <div className="flex justify-between mt-3">
        <a
          href={project.github_client_site_link} target="_blank"
          className="text-green-700 hover:underline flex items-center gap-1"
        ><FaGithub/>
          Client Code
        </a>
        {project.github_server_site_link !== "N/A" && (
          <a
            href={project.github_server_site_link} target="_blank"
            className="text-green-700 hover:underline flex items-center gap-1"
          ><FaGithub/>
            Server Code
          </a>
        )}
      </div>
    </div>
  );
};

const ProjectList = () => {
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="mt-36 mb-10">
      <HeaderSection name={'PROJECTS'}></HeaderSection>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
