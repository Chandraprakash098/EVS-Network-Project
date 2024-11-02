// import React from "react";
// import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Footer = () => {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <footer className="bg-gradient-to-r from-black via-gray-900 to-black p-8 sm:p-16 text-neonGreen border-t-4 border-neonGreen">
//       <div className="max-w-7xl mx-auto">
//         {/* Top Section: Quick Links and Contact Form */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//           {/* Quick Links */}
//           <motion.div className="flex flex-col space-y-4" {...fadeInUp}>
//             <h2 className="text-2xl font-bold text-green-400 mb-6 underline decoration-2 underline-offset-8">Quick Links</h2>
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/hot-entertainment">Hot Entertainment</NavLink>
//             <NavLink href="/music">Music</NavLink>
//             <NavLink href="/about-us">About Us</NavLink>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
//             <h2 className="text-2xl font-bold text-green-400 mb-6 underline decoration-2 underline-offset-8">Contact Us</h2>
//             <form className="flex flex-col space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="p-3 bg-gray-800 text-white border-2 border-neonGreen/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonGreen transition-all duration-300"
//               />
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="p-3 bg-gray-800 text-white border-2 border-neonGreen/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-neonGreen transition-all duration-300"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="p-3 bg-gray-800 text-white border-2 border-neonGreen/50 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-neonGreen transition-all duration-300"
//               ></textarea>
//               <motion.button
//                 type="submit"
//                 className="p-3 bg-neonGreen text-black rounded-lg font-semibold hover:bg-electricBlue transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div className="space-y-6" {...fadeInUp} transition={{ delay: 0.4 }}>
//             <h2 className="text-2xl font-bold text-green-400 mb-6 underline decoration-2 underline-offset-8">Get in Touch</h2>
//             <ContactInfo icon={<FaEnvelope className="text-neonGreen" size={24} />} text="evosynchtech@gmail.com" />
//             <ContactInfo icon={<FaPhoneAlt className="text-neonGreen" size={24} />} text="+91 8957128328" />
//           </motion.div>
//         </div>

//         {/* Divider */}
//         <motion.div
//           className="border-t-2 border-neonGreen/50 my-12"
//           initial={{ scaleX: 0 }}
//           animate={{ scaleX: 1 }}
//           transition={{ duration: 0.8 }}
//         ></motion.div>

//         {/* Bottom Section: Social Links and Copyright */}
//         <div className="flex flex-col sm:flex-row justify-between items-center">
//           {/* Social Links */}
//           <motion.div
//             className="flex space-x-8 mb-6 sm:mb-0"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.6 }}
//           >
//             <SocialLink href="https://api.whatsapp.com/send?phone=8957128328" icon={<FaWhatsapp size={28} />} />
//             <SocialLink href="https://www.instagram.com/evosynchtech/?igsh=ZHBvNGE5anl1aDZq" icon={<FaInstagram size={28} />} />
//             <SocialLink href="https://www.linkedin.com/company/evosynchtech/" icon={<FaLinkedin size={28} />} />
//           </motion.div>

//           {/* Copyright Text */}
//           <motion.p
//             className="text-sm sm:text-base text-gray-400"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.8, duration: 0.6 }}
//           >
//             © 2024 EvoSynch Tech. All rights reserved.
//           </motion.p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const NavLink = ({ href, children }) => (
//   <motion.a
//     href={href}
//     className="hover:text-white transition-colors text-lg"
//     whileHover={{ x: 5 }}
//     transition={{ type: "spring", stiffness: 300 }}
//   >
//     {children}
//   </motion.a>
// );

// const ContactInfo = ({ icon, text }) => (
//   <motion.div
//     className="flex items-center space-x-4"
//     whileHover={{ scale: 1.05 }}
//   >
//     {icon}
//     <span className="text-lg">{text}</span>
//   </motion.div>
// );

// const SocialLink = ({ href, icon }) => (
//   <motion.a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="text-neonGreen hover:text-white transition-colors"
//     whileHover={{ scale: 1.2, rotate: 5 }}
//     whileTap={{ scale: 0.9 }}
//   >
//     {icon}
//   </motion.a>
// );

// export default Footer;

import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 sm:pt-16 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Logo Section */}
        <div className="mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl sm:text-4xl font-serif tracking-widest text-center sm:text-left"
          >
            EVOSYNCTECH
          </motion.div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start space-x-6 mb-10 sm:mb-16">
          <SocialIcon
            href="https://api.whatsapp.com/send?phone=8957128328"
            icon={<FaWhatsapp size={20} />}
          />
          <SocialIcon
            href="https://www.instagram.com/evosynchtech/?igsh=ZHBvNGE5anl1aDZq#"
            icon={<FaInstagram size={20} />}
          />
          <SocialIcon
            href="https://www.linkedin.com/company/evosynchtech/posts/?feedView=all"
            icon={<FaLinkedin size={20} />}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12 mb-10 sm:mb-16">
          {/* Quick Links Column */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold mb-4 sm:mb-6 tracking-wider text-green-500">
              QUICK LINKS
            </h3>
            <nav className="space-y-2 sm:space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/hot-entertainment">
                Hot Entertainment
              </FooterLink>
              <FooterLink href="/music">Music</FooterLink>
              <FooterLink href="/about-us">About Us</FooterLink>
            </nav>
          </div>

          {/* Contact Info Column */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-xs font-bold mb-4 sm:mb-6 tracking-wider text-green-500">
              GET IN TOUCH
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <ContactInfo
                icon={<FaEnvelope size={16} />}
                text="evosynchtech@gmail.com"
              />
              <ContactInfo
                icon={<FaPhoneAlt size={16} />}
                text="+91 8957128328"
              />
            </div>
          </div>

          {/* Services Column */}
          {/* <div>
            <h3 className="text-xs font-bold mb-4 sm:mb-6 tracking-wider text-green-500">
              SERVICES
            </h3>
            <nav className="space-y-2 sm:space-y-3">
              <FooterLink href="/services">Our Services</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/portfolio">Portfolio</FooterLink>
            </nav>
          </div> */}

          {/* Company Column */}
          {/* <div>
            <h3 className="text-xs font-bold mb-4 sm:mb-6 tracking-wider text-green-500">
              COMPANY
            </h3>
            <nav className="space-y-2 sm:space-y-3 ">
              <FooterLink  href="/about">About EvoSynch</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
            </nav>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className="pt-6 sm:pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-xs text-gray-400">
              {/* <FooterLink href="#">TERMS OF SERVICE</FooterLink>
              <FooterLink href="#">CONTACT</FooterLink>
              <FooterLink href="#">CAREERS</FooterLink>
              <FooterLink href="#">NEWSLETTER</FooterLink>
              <FooterLink href="#">SUBSCRIBE</FooterLink> */}
            </div>
            <div className="text-[10px] sm:text-xs text-gray-400 text-center sm:text-left">
              © 2024 EvoSynchtech Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="block text-[11px] sm:text-xs hover:text-gray-300 transition-colors tracking-wider"
    whileHover={{ x: 2 }}
  >
    {children}
  </motion.a>
);

const ContactInfo = ({ icon, text }) => (
  <motion.div
    className="flex items-center space-x-3 text-[11px] sm:text-xs tracking-wider"
    whileHover={{ scale: 1.02 }}
  >
    <span className="text-white/80">{icon}</span>
    <span>{text}</span>
  </motion.div>
);

const SocialIcon = ({ href, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white hover:opacity-70 transition-opacity"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
  </motion.a>
);

export default Footer;
