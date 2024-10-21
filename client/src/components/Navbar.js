



import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (category) =>
    setActiveDropdown(activeDropdown === category ? null : category);

  const closeMenus = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const categories = [
    { name: "Hot Entertainment", path: "/hot-entertainment" },
    { name: "Music", path: "/music" },
    { name: "Traditional Art", path: "/traditional-art" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/career" },
  ];

  const NavLink = ({ to, children, hasDropdown, category }) => (
    <div className="relative group">
      <Link
        to={to}
        className="text-white hover:text-glamPink transition-colors px-4 py-2 flex items-center group"
        onClick={() => toggleDropdown(category)}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-glamPink transition-all group-hover:w-full"></span>
        </span>
        {hasDropdown && (
          <svg className="w-4 h-4 ml-1 text-glamPink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      {hasDropdown && (
        <div
          className={`absolute left-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-md border border-glamPink rounded-md shadow-glam z-50 ${
            activeDropdown === category ? "block" : "hidden"
          }`}
        >
          <Link
            to={`${to}/bollywood`}
            className="block px-4 py-2 text-sm text-white hover:bg-glamPink hover:text-black transition-colors"
            onClick={closeMenus}
          >
            Bollywood
          </Link>
          <Link
            to={`${to}/hollywood`}
            className="block px-4 py-2 text-sm text-white hover:bg-glamPink hover:text-black transition-colors"
            onClick={closeMenus}
          >
            Hollywood
          </Link>
        </div>
      )}
    </div>
  );

  const MobileNavLink = ({ to, children, hasDropdown, category }) => (
    <div className="py-2">
      <div className="flex items-center justify-between">
        <Link
          to={to}
          className="flex-1 text-left text-white hover:text-glamPink transition-colors py-2"
          onClick={closeMenus}
        >
          {children}
        </Link>
        {hasDropdown && (
          <button
            onClick={() => toggleDropdown(category)}
            className="ml-2 p-2 text-glamPink focus:outline-none"
          >
            <svg 
              className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === category ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {hasDropdown && activeDropdown === category && (
        <div className="pl-4 space-y-2 mt-2 border-l-2 border-glamPink">
          <Link
            to={`${to}/bollywood`}
            className="block text-white hover:text-glamPink py-2 transition-colors"
            onClick={closeMenus}
          >
            Bollywood
          </Link>
          <Link
            to={`${to}/hollywood`}
            className="block text-white hover:text-glamPink py-2 transition-colors"
            onClick={closeMenus}
          >
            Hollywood
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 border-b border-glamPink">
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 group">
              <img 
                src={logo} 
                alt="EVS Network Logo" 
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-110" 
              />
              <span className="text-white text-lg font-bold font-heading group-hover:text-glamPink transition-colors duration-300">
                Evosynchtech
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink to="/">Home</NavLink>
            {categories.map((category) => (
              <NavLink
                key={category.path}
                to={category.path}
                hasDropdown={["Hot Entertainment", "Music", "Traditional Art"].includes(category.name)}
                category={category.name}
              >
                {category.name}
              </NavLink>
            ))}
            <NavLink to="/about-us">About Us</NavLink>
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-glamPink focus:outline-none transition-transform duration-300 hover:scale-110"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-black border-t border-glamPink shadow-glam pb-4">
            <MobileNavLink to="/" hasDropdown={false}>
              Home
            </MobileNavLink>
            {categories.map((category) => (
              <MobileNavLink
                key={category.path}
                to={category.path}
                hasDropdown={["Hot Entertainment", "Music", "Traditional Art"].includes(category.name)}
                category={category.name}
              >
                {category.name}
              </MobileNavLink>
            ))}
            <MobileNavLink to="/about-us" hasDropdown={false}>
              About Us
            </MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;