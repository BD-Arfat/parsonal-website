import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";

const skills = [
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 85 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "GitHub", percentage: 95 },
    { name: "Figma", percentage: 80 },
    { name: "Pixso", percentage: 80 },
    { name: "Daisy UI", percentage: 90 },
    { name: "JavaScript", percentage: 75 },
    { name: "JavaScript DOM", percentage: 75 },
    { name: "JavaScript ES6", percentage: 70 },
    { name: "React js", percentage: 72 },
    { name: "Firebase", percentage: 50 },
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
                <HeaderSection name={'SKILLS'}></HeaderSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex justify-between font-semibold mb-2">
                                <span>{skill.name}</span>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-300 h-3 rounded-full">
                                <motion.div
                                    className="bg-green-400 h-3 rounded-full font-roboto"
                                    initial={{ width: 0 }}
                                    animate={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <a
                        href="mailto:arifulislam5162@gmail.com"
                        className="inline-block px-6 py-3 bg-green-600 font-roboto text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
                    >
                        See More Skills
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Skills;
