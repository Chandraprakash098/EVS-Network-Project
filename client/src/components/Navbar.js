// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const toggleDropdown = (category) =>
//     setActiveDropdown(activeDropdown === category ? null : category);

//   const closeMenus = () => {
//     setActiveDropdown(null);
//     setIsOpen(false);
//   };

//   const categories = [
//     { name: "Hot Entertainment", path: "/hot-entertainment" },
//     { name: "Music", path: "/music" },
//     { name: "Traditional Art", path: "/traditional-art" },
//     { name: "Blog", path: "/blog" },
//     { name: "Careers", path: "/career" },
//   ];

//   const NavLink = ({ to, children, hasDropdown, category }) => (
//     <div className="relative group">
//       <Link
//         to={to}
//         className="text-black hover:text-gray-600 transition-colors px-3 py-1 flex items-center group text-sm tracking-wider"
//         onClick={() => toggleDropdown(category)}
//       >
//         <span className="relative uppercase font-light text-xs">
//           {children}
//           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-200 transition-all group-hover:w-full"></span>
//         </span>
//         {hasDropdown && (
//           <svg className="w-3 h-3 ml-1 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         )}
//       </Link>
//       {hasDropdown && (
//         <div
//           className={`absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-none shadow-lg z-50 ${
//             activeDropdown === category ? "block" : "hidden"
//           }`}
//         >
//           <Link
//             to={`${to}/bollywood`}
//             className="block px-4 py-1.5 text-xs text-black hover:bg-gray-100 hover:text-black transition-colors uppercase"
//             onClick={closeMenus}
//           >
//             Bollywood
//           </Link>
//           <Link
//             to={`${to}/hollywood`}
//             className="block px-4 py-1.5 text-xs text-black hover:bg-gray-100 hover:text-black transition-colors uppercase"
//             onClick={closeMenus}
//           >
//             Hollywood
//           </Link>
//         </div>
//       )}
//     </div>
//   );

//   const MobileNavLink = ({ to, children, hasDropdown, category }) => (
//     <div className="py-1">
//       <div className="flex items-center justify-between">
//         <Link
//           to={to}
//           className="flex-1 text-left text-black hover:text-gray-600 transition-colors py-1 uppercase text-xs"
//           onClick={closeMenus}
//         >
//           {children}
//         </Link>
//         {hasDropdown && (
//           <button
//             onClick={() => toggleDropdown(category)}
//             className="ml-2 p-1 text-black focus:outline-none"
//           >
//             <svg
//               className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === category ? 'rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//         )}
//       </div>
//       {hasDropdown && activeDropdown === category && (
//         <div className="pl-4 space-y-1 mt-1 border-l-2 border-gray-200">
//           <Link
//             to={`${to}/bollywood`}
//             className="block text-black hover:text-gray-600 py-1 transition-colors uppercase text-xs"
//             onClick={closeMenus}
//           >
//             Bollywood
//           </Link>
//           <Link
//             to={`${to}/hollywood`}
//             className="block text-black hover:text-gray-600 py-1 transition-colors uppercase text-xs"
//             onClick={closeMenus}
//           >
//             Hollywood
//           </Link>
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <div className="flex items-center space-x-2">
//             <Link to="/" className="flex items-center space-x-2 group">
//               <img
//                 src={logo}
//                 alt="EVS Network Logo"
//                 className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
//               />
//               <span className="text-black text-sm font-light tracking-wider uppercase group-hover:text-gray-600 transition-colors duration-300">
//                 Evosynchtech
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <NavLink to="/">Home</NavLink>
//             {categories.map((category) => (
//               <NavLink
//                 key={category.path}
//                 to={category.path}
//                 hasDropdown={["Hot Entertainment", "Music", "Traditional Art"].includes(category.name)}
//                 category={category.name}
//               >
//                 {category.name}
//               </NavLink>
//             ))}
//             <NavLink to="/about-us">About Us</NavLink>
//           </div>

//           {/* Hamburger Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-black focus:outline-none transition-transform duration-300 hover:scale-110"
//           >
//             <svg
//               className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-2 space-y-1 bg-white border-t border-gray-200 shadow-lg pb-2">
//             <MobileNavLink to="/" hasDropdown={false}>
//               Home
//             </MobileNavLink>
//             {categories.map((category) => (
//               <MobileNavLink
//                 key={category.path}
//                 to={category.path}
//                 hasDropdown={["Hot Entertainment", "Music", "Traditional Art"].includes(category.name)}
//                 category={category.name}
//               >
//                 {category.name}
//               </MobileNavLink>
//             ))}
//             <MobileNavLink to="/about-us" hasDropdown={false}>
//               About Us
//             </MobileNavLink>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Activity, ChevronDown, X, Menu } from "lucide-react";

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
            {["Bollywood", "Hollywood"].map((item) => (
              <Link
                key={item}
                to={`${to}/${item.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200"
                onClick={closeMenus}
              >
                {item}
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
          {["Bollywood", "Hollywood"].map((item) => (
            <Link
              key={item}
              to={`${to}/${item.toLowerCase()}`}
              className="block px-8 py-2 text-sm text-gray-600 hover:text-black transition-colors duration-200"
              onClick={closeMenus}
            >
              {item}
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
        <div className="flex items-center justify-between h-16 ">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            onClick={closeMenus}
          >
            <Activity className="w-8 h-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-lg font-bold tracking-wide text-gray-900">
              Evs-Network
            </span>
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
          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6  text-red-500" />}
          </button> */}

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
