import React from 'react';
import heroPattern from '../assets/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg';
import Nav from './Nav'; 
import { FaArrowRight } from "react-icons/fa";


export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center bg-gradient-to-b"
     style={{ backgroundImage: `url(${heroPattern})`}}>
      <Nav />

      <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Fake School</h1>
        <p className="text-lg">
          Empowering students with the best learning experiences. Join us to explore various programs, campus life, and more.
        </p>
        <button className="bg-slate-800 text-white text-2xl px-4 py-2 rounded-full  h-11 flex items-center justify-center gap-2 h-16 w-56">
        
            <span>Explore more</span> <FaArrowRight />

          
        </button>
      </div>
    </div>
  );
}
