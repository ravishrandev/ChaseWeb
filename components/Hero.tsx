'use client';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [opacity, setOpacity] = useState(0.8); // 1 = 100%

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(0.3); // animate to 30%
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 📍 Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/chase_hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 📍 blue Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-blue-700 transition-opacity duration-[5000ms] ease-out z-10"
        style={{ opacity }}
      />

      {/* 📍 Content (Hero Text) */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center"> 
        {/* 📍 Added `px-4` for horizontal padding on small screens */}
        <h1 className="relative font-black leading-none
          text-[18vw]      // 📍 Default: scales well on very small screens
          sm:text-[14vw]   // 📍 Small screens
          md:text-[10vw]   // 📍 Medium screens
          lg:text-[8vw]    // 📍 Large screens
          xl:text-[200px]  // 📍 Extra large: back to original
        ">
          {/* Shadow Layer */}
          <span className="absolute font-family:var (--font-arial)  left-2 top-2 text-[#153b62] -z-10 select-none">
            CHASE
          </span>
          {/* Main Text Layer */}
          <span className="text-[#a3d283] font-family:var (--font-arial) select-none">CHASE</span>
        </h1>
      </div>
      
    {/* scroll down button */}
    <div className="absolute bottom-6 w-full flex justify-center z-50">
      <a href="#about" className="animate bounce">
        <img
          src="/arrow_icon.png"
          alt="Scroll Down"
          className="w-20 h-20 sm:w-28 sm:h-28 cursor-pointer rotate-180"
          />
      </a>
    </div>    
    </section>
  );
};

export default Hero;
