'use client';
import { useState } from 'react';

const Navbar = () => {
  // Step 1: State to track if mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Step 2: Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Step 3: Function to close menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-neutral-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Step 4: Logo */}
          <div className="flex-shrink-0">
            <span className="text-black text-xl font-bold">CHASE</span>
          </div>

          {/* Step 5: Desktop Menu (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#home" 
                className="text-black hover:text-[#B0FE00] transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-black hover:text-[#B0FE00] transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-black hover:text-[#B0FE00] transition-colors duration-200 font-medium"
              >
                Contact
              </a>
              <a 
                href="#people" 
                className="text-black hover:text-[#B0FE00] transition-colors duration-200 font-medium"
              >
                Our people
              </a>
              <a 
                href="#program" 
                className="text-black hover:text-[#B0FE00] transition-colors duration-200 font-medium"
              >
                Our program
              </a>
              <a 
                href="#involved" 
                className="text-black hover:text-[#B0FE00] transition-colors duration-200 font-medium"
              >
                Get involved
              </a>
              
              {/* Step 6: Desktop Donate Button */}
              <a 
                href="#donate" 
                className="bg-[#B0FE00] text-black px-6 py-2 rounded-full font-semibold hover:bg-[#9DE600] transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Donate
              </a>
            </div>
          </div>

          {/* Step 7: Mobile menu button (hamburger) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#B0FE00] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B0FE00] transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon - changes based on menu state */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* X icon when menu is open */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Step 8: Mobile menu dropdown */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-neutral-100 border-t border-gray-200">
          <a
            href="#home"
            onClick={closeMenu}
            className="text-black hover:text-[#B0FE00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="text-black hover:text-[#B0FE00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-black hover:text-[#B0FE00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Contact
          </a>
          <a
            href="#people"
            onClick={closeMenu}
            className="text-black hover:text-[#B0FE00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Our people
          </a>
          <a
            href="#program"
            onClick={closeMenu}
            className="text-black hover:text-[#B0FE00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Our program
          </a>
          <a
            href="#involved"
            onClick={closeMenu}
            className="text-black hover:text-[#B0FE00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
          >
            Get involved
          </a>
          
          {/* Step 9: Mobile Donate Button */}
          <a
            href="#donate"
            onClick={closeMenu}
            className="bg-[#B0FE00] text-black hover:bg-[#9DE600] block px-3 py-2 rounded-full text-base font-semibold transition-colors duration-200 text-center mx-3 mt-4 shadow-md"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;