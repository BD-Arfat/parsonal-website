import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`lg:px-16 px-4 bg-gradient-to-r from-green-500 to-green-700 text-white flex items-center justify-between font-lora py-4 shadow-lg transition-all duration-300 ${active ? 'shadow-xl' : ''}`}
    >
      <div className="flex-1 flex justify-between items-center">
        <Link to={'/'} href="#" className="md:text-4xl text-xl font-roboto font-bold text-white hover:text-gray-300 transition-all">Ariful Islam Arfat</Link>
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden block text-white">
        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <title>menu</title>
          <path d="M0 3h24v2H0V3zm0 6h24v2H0V9zm0 6h24v2H0v-2z"></path>
        </svg>
      </button>

      <div className={`md:flex md:items-center md:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-2xl text-slate-100 pt-4 md:pt-0">
            <li><NavLink to={'/'} className="md:p-4 py-3 px-0 block hover:text-blue-400 transition-all duration-300">Home</NavLink></li>
            <li><NavLink to="/treatments" className="md:p-4 py-3 px-0 block hover:text-blue-400 transition-all duration-300">Abouts</NavLink></li>
            <li><NavLink to={'/skills'} className="md:p-4 py-3 px-0 block hover:text-blue-400 transition-all duration-300">Skills</NavLink></li>
            <li><NavLink to={'/services'} className="md:p-4 py-3 px-0 block hover:text-blue-400 transition-all duration-300">Services</NavLink></li>
            <li><NavLink to="/contact" className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-blue-400 transition-all duration-300">All Projects</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
