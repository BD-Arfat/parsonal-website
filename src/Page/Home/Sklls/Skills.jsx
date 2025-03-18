import React, { useEffect, useState } from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { Link } from "react-router-dom";

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
    return (
        <section id="skills-section" className="md:mt-48">
            <div className="max-w-6xl mx-auto px-5">
                <HeaderSection name={'SKILLS'}></HeaderSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-green-200 via-green-100 to-white shadow-lg rounded-xl p-6 border border-gray-300 hover:shadow-xl transition-transform transform hover:-translate-y-2"
                        >
                            <div className="flex justify-between font-bold text-lg mb-4">
                                <span className="text-green-700">{skill.name}</span>
                                <span className="text-gray-700">{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-300 h-3 rounded-full overflow-hidden">
                                <div
                                    className="bg-green-500 h-3 rounded-full"
                                    style={{ width: `${skill.percentage}%` }}
                                ></div>
                            </div>
                        </div>
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
