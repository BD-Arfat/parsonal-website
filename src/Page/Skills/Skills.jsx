import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeaderSection from "../../Sheard/HeaderSection/HeaderSection";

const skills = {
    Frontend: [
        { name: "HTML5", percentage: 90 },
        { name: "CSS3", percentage: 85 },
        { name: "Tailwind CSS", percentage: 90 },
        { name: "React js", percentage: 70 },
        { name: "JavaScript", percentage: 50 },
        { name: "JavaScript DOM", percentage:45 },
        { name: "JavaScript ES6", percentage: 45 },
        { name: "React Router DOM", percentage: 55 },
    ],
    Backend: [
        { name: "Node.js", percentage: 40 },
        { name: "Express.js", percentage: 40 },
        { name: "MongoDB", percentage: 45 },
        { name: "Firebase", percentage: 50 },
    ],
    DeveloperTools: [
        { name: "GitHub", percentage: 95 },
        { name: "VSCode", percentage: 90 },
        { name: "CORS", percentage: 45 },
        { name: "Helmet", percentage: 70 },
        { name: "Vercel", percentage: 70 },
        { name: "Netlify", percentage: 70 },
        { name: "Firebase Hosting", percentage: 70 },
        { name: "Stripe", percentage: 40 },
    ],
    ReactSpecificTools: [
        { name: "React Form Hooks", percentage: 60 },
        { name: "Custom Hooks in React", percentage: 59 },
    ]
};

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
        <section id="skills-section" className="md:mt-10  bg-gradient-to-r from-green-50 via-white to-green-50">
            <div className="max-w-6xl mx-auto px-5">
                <HeaderSection name={'SKILLS'} />
                <div className="mt-10">
                    {Object.keys(skills).map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">{category}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                                {skills[category].map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-white shadow-xl rounded-lg p-6 border border-gray-300 hover:shadow-2xl transition-transform transform hover:scale-105"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <div className="flex justify-between font-semibold text-lg mb-4">
                                            <span className="text-green-600">{skill.name}</span>
                                            <span className="text-gray-700">{skill.percentage}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                                            <motion.div
                                                className="bg-green-500 h-3 rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: isVisible ? `${skill.percentage}%` : "0%" }}
                                                transition={{ duration: 1, ease: "easeInOut" }}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
