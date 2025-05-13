import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { Link } from "react-router-dom";

// Icons
import {
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaFigma,
    FaJs,
    FaReact,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiFirebase,
    SiJavascript,
} from "react-icons/si";

// Skills with icons
const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 text-5xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-5xl" /> },
    { name: "Pixso", icon: <FaFigma className="text-purple-500 text-5xl" /> }, // Pixso alternative
    { name: "Daisy UI", icon: <SiTailwindcss className="text-purple-400 text-5xl" /> }, // DaisyUI alternative
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "JavaScript DOM", icon: <SiJavascript className="text-yellow-500 text-5xl" /> },
    { name: "JavaScript ES6", icon: <SiJavascript className="text-yellow-600 text-5xl" /> },
    { name: "React js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-orange-400 text-5xl" /> },
];

const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("skills-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    setIsVisible(true);
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills-section" className="md:mt-48">
            <div className="max-w-6xl mx-auto px-5">
                <HeaderSection name={'SKILLS'} />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-gradient-to-r from-green-200 via-green-50 to-green-200 shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-xl transition-transform transform hover:-translate-y-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex flex-col items-center justify-center gap-4">
                                <div className="">{skill.icon}</div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-green-700">{skill.name}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link
                        to={'/skills'}
                        className="inline-block px-8 py-3 bg-green-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-green-700 transition-transform transform hover:scale-110"
                    >
                        See More Skills
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Skills;
