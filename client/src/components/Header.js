import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="relative bg-blackBg min-h-screen flex flex-col justify-between text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blackBg to-neonGreen opacity-60"></div>

      <nav className="w-full px-4 sm:px-6 py-4 flex justify-between items-center text-white bg-blackBg">
        <h1 className="neon-text text-4xl sm:text-6xl font-bold">
          EVS Network
        </h1>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-neonGreen focus:outline-none transition-transform duration-300 ease-in-out"
          >
            <svg
              className={`w-6 h-6 sm:w-8 sm:h-8 transform ${isOpen ? 'rotate-90' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-4 sm:space-x-6">
          <Link to="/" className="hover:text-neonGreen transition-colors duration-300">
            Home
          </Link>
          <Link to="/hot-entertainment" className="hover:text-neonGreen transition-colors duration-300">
            Hot Entertainment
          </Link>
          <Link to="/music" className="hover:text-neonGreen transition-colors duration-300">
            Music
          </Link>
          <Link to="/traditional-art" className="hover:text-neonGreen transition-colors duration-300">
            Traditional Art
          </Link>
          <Link to="/about-us" className="hover:text-neonGreen transition-colors duration-300">
            About Us
          </Link>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-50 bg-blackBg bg-opacity-95 text-white overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-neonGreen">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-16">
          <Link to="/" className="text-2xl hover:text-neonGreen transition-colors duration-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/hot-entertainment" className="text-2xl hover:text-neonGreen transition-colors duration-300" onClick={toggleMenu}>
            Hot Entertainment
          </Link>
          <Link to="/music" className="text-2xl hover:text-neonGreen transition-colors duration-300" onClick={toggleMenu}>
            Music
          </Link>
          <Link to="/traditional-art" className="text-2xl hover:text-neonGreen transition-colors duration-300" onClick={toggleMenu}>
            Traditional Art
          </Link>
          <Link to="/about-us" className="text-2xl hover:text-neonGreen transition-colors duration-300" onClick={toggleMenu}>
            About Us
          </Link>
        </div>
      </div>

      <div className="z-10 flex-grow flex flex-col justify-center items-center px-4">
        <h1 className="text-neonGreen text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 animate-glow">
          EVS Network
        </h1>
        <p className="text-white text-lg sm:text-xl mb-6 sm:mb-10">
          The Premier Source for Glamour & Art Updates
        </p>
        <a
          href="/hot-entertainment"
          className="bg-neonGreen text-blackBg px-6 py-3 sm:px-10 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-neonGreen transition-all shadow-lg"
        >
          Discover Hot Entertainment
        </a>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="text-neonGreen text-2xl sm:text-3xl animate-bounce">
          ▼
        </div>
      </div>
    </header>
  );
};

export default Header;



