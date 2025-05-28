'use client';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [opacity, setOpacity] = useState(0.5); // 1 = 100%

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpacity(0.9); // animate to 30%
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
    className="absolute top-0 left-0 w-full h-full bg-neutral-100 transition-opacity duration-[6000ms] ease-out z-10"
    style={{ opacity }}
  />

  {/* 📍 Content Wrapper */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center space-y-6">
    {/* Title */}
    <h1 className="relative font-black leading-none
      text-[18vw]
      sm:text-[14vw]
      md:text-[10vw]
      lg:text-[8vw]
      xl:text-[250px]
    ">
      {/* Shadow Layer - Now responsive */}
      <span className="absolute -z-10 select-none text-[#153b62]
        left-[1.8vw] top-[1.2vw]
        sm:left-[1.4vw] sm:top-[0.9vw]
        md:left-[1vw] md:top-[0.6vw]
        lg:left-[0.8vw] lg:top-[0.5vw]
        xl:left-5 xl:top-3
      ">
        CHASE
      </span>
      
      {/* Main Text Layer */}
      <span className="text-[#B0FE00] select-none">CHASE</span>
    </h1>

    {/* Subtitle */}
    <p className="text-black 
      text-sm 
      sm:text-lg 
      md:text-xl 
      max-w-[90%] 
      sm:max-w-xl 
      xl:text-[30px]
    ">
      Empowering young Victorians through health education and community engagement
    </p>
  </div>
</section>

  );
  
};

export default Hero;
