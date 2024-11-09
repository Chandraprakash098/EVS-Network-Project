import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, ChevronDown, X, Menu } from "lucide-react";
import logo from "../images/evslogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (category) =>
    setActiveDropdown(activeDropdown === category ? null : category);

  const closeMenus = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  const categories = [
    {
      name: "Hot Entertainment",
      path: "/hot-entertainment",
      hasDropdown: true,
    },
    { name: "Music", path: "/music", hasDropdown: true },
    { name: "Traditional Art", path: "/traditional-art", hasDropdown: true },
    { name: "Blog", path: "/blog", hasDropdown: false },
    { name: "Careers", path: "/career", hasDropdown: false },
  ];

  // Function to get dropdown items with their corresponding URLs
  const getDropdownItems = (category) => {
    if (category === "Traditional Art") {
      return [
        { display: "National", url: "bollywood" },
        { display: "International", url: "hollywood" },
      ];
    }
    return [
      { display: "Bollywood", url: "bollywood" },
      { display: "Hollywood", url: "hollywood" },
    ];
  };

  const NavLink = ({ to, children, hasDropdown, category }) => (
    <div className="relative group">
      <Link
        to={to}
        className="flex items-center px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg group"
        onClick={() => !hasDropdown && closeMenus()}
      >
        <span className="relative text-gray-700 group-hover:text-black">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </span>
        {hasDropdown && (
          <ChevronDown
            className={`w-4 h-4 ml-1 transition-transform duration-300 ${
              activeDropdown === category ? "rotate-180" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown(category);
            }}
          />
        )}
      </Link>
      {hasDropdown && (
        <div
          className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 transition-all duration-300 transform ${
            activeDropdown === category
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="py-2">
            {getDropdownItems(category).map((item) => (
              <Link
                key={item.display}
                to={`${to}/${item.url}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                onClick={closeMenus}
              >
                {item.display}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const MobileNavLink = ({ to, children, hasDropdown, category }) => (
    <div className="border-b border-gray-100 last:border-0">
      <div className="flex items-center justify-between">
        <Link
          to={to}
          className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200"
          onClick={() => !hasDropdown && closeMenus()}
        >
          {children}
        </Link>
        {hasDropdown && (
          <button
            onClick={() => toggleDropdown(category)}
            className="px-4 py-3 text-gray-500 hover:text-black focus:outline-none"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                activeDropdown === category ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
      {hasDropdown && (
        <div
          className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
            activeDropdown === category ? "max-h-40" : "max-h-0"
          }`}
        >
          {getDropdownItems(category).map((item) => (
            <Link
              key={item.display}
              to={`${to}/${item.url}`}
              className="block px-8 py-2 text-sm text-gray-600 hover:text-black transition-colors duration-200"
              onClick={closeMenus}
            >
              {item.display}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* <div className="flex items-center justify-between h-16 ">
          
          <Link
            to="/"
            className="flex items-center space-x-1 group"
            onClick={closeMenus}
          >
            <img
              src={logo}
              alt="Evs-Network Logo"
              className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-105 hover:shadow-lg rounded-sm"
            />
            <span className="text-lg font-bold  tracking-wide text-gray-900">
              Evs-Network
            </span>
          </Link> */}

<div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center space-x-1 group transform transition-all duration-300 hover:scale-105"
            onClick={closeMenus}
          >
            <div className="w-44 h-14 relative">
              <svg
                viewBox="0 0 260 60"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="evsPink"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#FF9999" />
                    <stop offset="100%" stopColor="#FF6B6B" />
                  </linearGradient>

                  <linearGradient
                    id="networkBlue"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#4A90E2" />
                    <stop offset="100%" stopColor="#357ABD" />
                  </linearGradient>
                </defs>

                {/* EVS Text */}
                <text
                  x="10"
                  y="35"
                  className="font-bold"
                  // fill="url(#evsPink)"
                  fill="#000000" 
                  fontSize="36"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="1"
                  stroke="#000"
  strokeWidth="0.5"
  filter="url(#textShadow)"
                >
                  EVS
                </text>

                {/* NETWORK Text */}
                <text
                  x="95"
                  y="35"
                  // fill="url(#networkBlue)"
                  fill="#000000"
                  fontSize="22"
                  fontFamily="Arial, sans-serif"
                  className="font-medium"
                  letterSpacing="0.5"
                >
                  NETWORK
                </text>

                {/* Curved Underline */}
                <path
                  d="M10,40 Q130,45 250,40"
                  fill="none"
                  stroke="url(#evsPink)"
                  strokeWidth="1"
                  opacity="0.6"
                  className="animate-pulse"
                />

                {/* Subtle dot decoration */}
                <circle
                  cx="85"
                  cy="35"
                  r="2"
                  fill="url(#evsPink)"
                  opacity="0.8"
                />
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 font-serif">
            <NavLink to="/">Home</NavLink>
            {categories.map((category) => (
              <NavLink
                key={category.path}
                to={category.path}
                hasDropdown={category.hasDropdown}
                category={category.name}
              >
                {category.name}
              </NavLink>
            ))}
            <NavLink to="/about-us">About Us</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none"
          >
            {/* Hamburger Menu */}
            <div className="relative w-8 h-8">
              {/* First Line */}
              <div
                className={`w-full h-1 bg-red-500 rounded transition-all duration-300 ease-in-out transform ${
                  isOpen ? "rotate-45 translate-y-3" : ""
                }`}
              ></div>
              {/* Second Line */}
              <div
                className={`w-full h-1 bg-red-500 rounded transition-all duration-300 ease-in-out mt-2 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></div>
              {/* Third Line */}
              <div
                className={`w-full h-1 bg-red-500 rounded transition-all duration-300 ease-in-out transform ${
                  isOpen ? "-rotate-45 -translate-y-3" : "mt-2"
                }`}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen border-t border-gray-100" : "max-h-0"
          }`}
        >
          <div className="py-2 font-serif">
            <MobileNavLink to="/">Home</MobileNavLink>
            {categories.map((category) => (
              <MobileNavLink
                key={category.path}
                to={category.path}
                hasDropdown={category.hasDropdown}
                category={category.name}
              >
                {category.name}
              </MobileNavLink>
            ))}
            <MobileNavLink to="/about-us">About Us</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
