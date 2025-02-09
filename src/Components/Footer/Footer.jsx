import React from "react";
import { FaYoutube, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r -mb-9 from-green-600 to-green-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-3xl font-semibold text-white">Ariful Islam</h2>
        <p className="mt-2 text-xl font-light uppercase">junior Full-stack Web Developer</p>
        <p className="mt-2 text-sm">Email: <a href="mailto:arfat1islam5162@gmail.com" className="underline">arfat1islam5162@gmail.com</a></p>
        <div className="mt-6 space-x-8 flex justify-center">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-green-400 transition-all duration-300"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-green-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-green-400 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-green-400 transition-all duration-300"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-300">© 2025 Ariful Islam. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
