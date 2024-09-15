import React, { useState, useEffect } from 'react';
import fs from '../assets/Screenshot 2024-09-13 at 21.48.23.png';
import { FaBars } from "react-icons/fa";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ms:w-[85%] w-full p-0 md:pr-[120px] md:pl-[120px] mx-auto flex justify-between px-6 py-4 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} z-50`}
    >
      <div className='flex items-center'>
        <img src={fs} alt="FS" className="h-8 w-8 mr-4 mix-blend-multiply" />
        <h1 className="text-3xl font-bold text-black hidden md:block">Fake School</h1>
      </div>
      <div className='md-custom:hidden'>
        <button onClick={toggleMenu} className="p-2">
          <FaBars />
        </button>
      </div>
      <div className='hidden md:block'>
        <ul className="flex gap-7 h-[3rem] text-center text-black">
          {["Home", "Program", "About us",  "Testimonials"].map(item => (
            <li
              key={item}
              className="px-4 py-2 flex items-center justify-center"
            >
            <a href={`#${item}`}>{item}</a>

            </li>
          ))}
          <li className="bg-slate-800 text-white px-4 py-2 rounded-full flex items-center justify-center cursor-pointer">
            <a href="#Contact Us">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={`absolute top-full left-0 right-0 bg-white shadow-md mt-2 ${isMenuOpen ? 'block' : 'hidden'} md-custom:hidden z-50`}>
        <ul className="flex flex-col gap-2 p-4 text-center text-black">
          {["Home", "Program", "About us",  "Testimonials", "Contact Us"].map(item => (
            <li
              key={item}
              className="px-4 py-2 cursor-pointer"
              onClick={() => setIsMenuOpen(false)} 
            >
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
