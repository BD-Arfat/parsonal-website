import React from "react";
import image from '../../../assets/arfat.jpg';
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";

const AboutMe = () => {
    return (
        <>
            <HeaderSection name={'ABOUTS'}></HeaderSection>

            <div className="flex justify-center items-center mt-10">
                <div className="max-w-7xl w-full bg-gradient-to-r from-green-300 via-green-200 rounded-3xl shadow-lg flex flex-col md:flex-row overflow-hidden">
                    {/* Left Section with Image */}
                    <div className="md:w-1/3 bg-white flex items-center justify-center p-10 relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-300 rounded-full -z-10 w-72 h-72 md:w-96 md:h-96" />
                        <img
                            src={image}
                            alt="Ariful Islam"
                            className="rounded-full shadow-xl w-60 h-60 md:w-80 md:h-80 object-cover border-4 border-green-600"
                        />
                    </div>

                    {/* Right Section with Content */}
                    <div className="md:w-2/3 bg-white p-10 md:p-16 relative">
                        {/* Decorative Shapes */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-300 rounded-full -z-10"></div>

                        {/* Heading Section */}
                        <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-4 font-roboto">
                            Hello, I’m
                        </h1>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-green-600 mb-6 font-lora">
                            Ariful Islam
                        </h2>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-6 font-roboto">
                            Junior Frontend & MERN Stack Developer
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6 font-lora text-lg">
                            I’m a Junior Frontend & MERN Stack Developer who thrives on crafting scalable, high-performance, and user-centric web applications. From pixel-perfect frontend designs to robust backend architectures, I turn ideas into seamless digital experiences.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-6 font-lora text-lg">
                            💡 I believe in writing clean, efficient, and maintainable code that not only works but works exceptionally well. My goal? To bridge innovation with functionality—creating web solutions that are both intuitive and powerful.
                        </p>

                        {/* Contact Section */}
                        <div className="mt-6">
                            <a
                                href="mailto:arifulislam5162@gmail.com"
                                className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition font-roboto"
                            >
                                More Information
                            </a>
                            <p className="mt-4 text-gray-500 font-roboto">
                                Contact: arifulislam5162@gmail.com
                            </p>
                            <div className="flex items-center gap-4 mt-4">
                                <a href="#" className="text-green-600 hover:text-green-700">
                                    <i className="fab fa-facebook-f text-xl"></i>
                                </a>
                                <a href="#" className="text-green-600 hover:text-green-700">
                                    <i className="fab fa-youtube text-xl"></i>
                                </a>
                                <a href="#" className="text-green-600 hover:text-green-700">
                                    <i className="fab fa-linkedin-in text-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
