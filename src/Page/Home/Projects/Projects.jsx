import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "E-Commerce Website",
    description: "A fully responsive online shopping platform with payment integration.",
    image: "https://source.unsplash.com/400x250/?ecommerce,website",
    frontEnd: ["React", "Tailwind CSS"],
    backEnd: ["Node.js", "Express.js", "MongoDB"],
    others: ["Stripe Payment", "JWT Authentication"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio website with animations and dark mode.",
    image: "https://source.unsplash.com/400x250/?portfolio,website",
    frontEnd: ["Next.js", "Framer Motion", "Tailwind CSS"],
    backEnd: [],
    others: ["Dark Mode", "SEO Optimization"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Quiz App",
    description: "An interactive quiz application with multiple categories and real-time scoring.",
    image: "https://source.unsplash.com/400x250/?quiz,app",
    frontEnd: ["React", "Bootstrap"],
    backEnd: ["Firebase"],
    others: ["Real-time Scoring", "Leaderboard"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section className="mt-48 mb-32">
      <div className="text-center mb-16">
        <HeaderSection name={"PROJECTS"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
          projectsData.map((product) => (
            <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
              {/* Image */}
              <img
                className="w-full h-56 object-cover"
                src={product.image}
                alt="Product"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 font-roboto">{product.title}</h3>
                <p className="text-gray-600 mt-2 font-lora">
                  {product.description}
                </p>

                {/* Button */}
                <div className="mt-4">
                  <button className="w-full bg-green-400 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-green-600 font-roboto">
                    See Details
                  </button>
                </div>
              </div>

            </div>
          ))
        }
        
      </div>
      <div className="text-center mt-10">
          <button className="w-96 font-roboto bg-green-400 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-green-600">
            See All Products
          </button>
        </div>
    </section>
  );
};

export default Projects;
