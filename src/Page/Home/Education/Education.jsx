import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Class Ten",
    subject: "Commerce",
    description: "Class 10 subject-wise syllabus and board exam preparation information.",
    year: "(2016–2021)",
    institution: "Machjidda High School",
  },
  {
    title: "HSC",
    subject: "Commerce",
    description: "HSC level subject-wise syllabus, board exam preparation, and university entrance exam guidance.",
    year: "(2022–2023)",
    institution: "Vijay Smarani College",
  },
];

const Education = () => {
  return (
    <section className="mt-40">
      <div className="text-center mb-10">
        <HeaderSection name={'EDUCATION'}></HeaderSection>
      </div>
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-8 justify-center">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 128, 0, 0.3)" }}
            className="relative bg-green-500 py-10 border-2 border-green-400 text-white p-8 rounded-xl shadow-lg w-full md:w-1/2 transition-all duration-300"
          >
            <h3 className="text-6xl font-roboto font-bold mb-3">{edu.title}</h3>
            <p className="text-lg leading-relaxed font-lora">{edu.description}</p>
            <p className="text-xl font-semibold mt-3 font-roboto">Subject: {edu.subject}</p>
            <p className="font-bold  text-xl  font-roboto">{edu.year}</p>
            <p className="italic font-semibold text-lg font-roboto">{edu.institution}</p>
            <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-bl-full transition-transform duration-300 ease-in-out group-hover:scale-125"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
