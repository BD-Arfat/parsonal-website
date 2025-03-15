import React, { useState } from "react";
import { FaGithub, FaLink } from 'react-icons/fa';  // Importing GitHub icon from React Icons
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { Dialog } from "@headlessui/react";

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
    project_name: "MedlinePlus",
    project_image: "https://i.ibb.co.com/rfF2y15j/projects.png",
    project_description:
      "a medicine e-commerce platform that enables users to buy and sell medicines seamlessly. This platform ensures a secure and efficient buying experience, featuring online payment integration for hassle-free transactions.",
    project_tags: [
      "React.js",
      "Tailwind CSS",
      "Swiper",
      "Headless UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TanStack React Query",
      "React Router DOM",
      "TanStack React Router",
      "Stripe",
      "Firebase",
      "React Hook Form",
      "React Modal",
      "React Icons",
      "React Helmet Async",
      "Axios",
      "SweetAlert2",
      "ESLint",
      "ESLint React Hooks Plugin",
      "ESLint React Refresh Plugin",
      "Vite",
      "PostCSS",
      "Autoprefixer"
    ],
    project_features: [
      "User authentication with JWT",
      "Product management dashboard",
      "Payment integration with Stripe",
      "Add to cart and wishlist feature",
      "Order tracking system",
    ],
    live_site_link: "https://lnkd.in/gqCvKUd6",
    github_client_site_link: "https://lnkd.in/gpywiXVs",
    github_server_site_link: " https://lnkd.in/gc6QH5yu",
    project_category: "Fullstack",
  },
];

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Project Card */}
      <div className="bg-white shadow-lg rounded-2xl p-5 transition-transform hover:scale-105">
        <img
          src={project.project_image}
          alt={project.project_name}
          className="rounded-xl mb-4 w-full h-56 object-cover"
        />
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{project.project_name}</h3>
          <a
            href={project.github_client_site_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black flex items-center gap-1 font-bold"
          >
            <h1>{project.project_category}</h1>
            <FaGithub size={20} />
          </a>
        </div>
        <p className="text-gray-600 mb-3 line-clamp-2">{project.project_description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          <ul className="list-disc list-inside text-gray-700 mb-3">
            {project.project_features.map((feature, index) => (
              <li key={index} className="text-sm">{feature}</li>
            ))}
          </ul>

        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3">
          <a
            href={project.live_site_link}
            target="_blank"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Live Site
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="text-green-700 hover:underline px-3 py-1 rounded-lg border border-green-700"
          >
            View More
          </button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg max-w-lg">
            <Dialog.Title className="text-xl font-bold mb-2">{project.project_name}</Dialog.Title>
            <img
              src={project.project_image}
              alt={project.project_name}
              className="rounded-lg mb-4 w-full object-cover"
            />
            <p className="text-gray-700 mb-3">{project.project_description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.project_tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-blue-200 to-green-300 text-green-900 
      px-3 py-1 rounded-full text-sm font-semibold shadow-md 
      hover:scale-105 transition-transform duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-3">
              <a href={project.github_client_site_link} target="_blank" className="text-green-700 hover:underline flex items-center gap-1">
                <FaGithub />
                Client Code
              </a>
              {project.github_server_site_link !== "N/A" && (
                <a href={project.github_server_site_link} target="_blank" className="text-green-700 hover:underline flex items-center gap-1">
                  <FaGithub />
                  Server Code
                </a>
              )}
            </div>
            <button onClick={() => setIsOpen(false)} className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-lg">
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>

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
