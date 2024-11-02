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
            EVS-NETWORK
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
            <nav className="space-y-2 sm:space-y-3 text-white">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/hot-entertainment">
                Hot Entertainment
              </FooterLink>
              <FooterLink href="/hot-entertainment/bollywood">
                Hot Bollywood Entertainment 
              </FooterLink>
              <FooterLink href="/hot-entertainment/hollywood">
                Hot Hollywood Entertainment 
              </FooterLink>
              <FooterLink href="/music">Music</FooterLink>
              <FooterLink href="/music/bollywood">Bollywood Music</FooterLink>
              <FooterLink href="/music/hollywood">Hollywood Music</FooterLink>
              <FooterLink href="/traditional-art">Traditional Art</FooterLink>
              <FooterLink href="/traditional-art/bollywood">National Traditional Art</FooterLink>
              <FooterLink href="/traditional-art/hollywood">International Traditional Art</FooterLink>
              <FooterLink href="/blog">Blogs</FooterLink>
              <FooterLink href="/career">Carrers</FooterLink>
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
        <div className="pt-6 sm:pt-8 border-t  border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-xs text-gray-400">
              {/* <FooterLink href="#">TERMS OF SERVICE</FooterLink>
              <FooterLink href="#">CONTACT</FooterLink>
              <FooterLink href="#">CAREERS</FooterLink>
              <FooterLink href="#">NEWSLETTER</FooterLink>
              <FooterLink href="#">SUBSCRIBE</FooterLink> */}
            </div>
            <div className="text-[10px] sm:text-xs text-white  font-bold text-center sm:text-left ">
              © 2024 EVS-NETWORK. All rights reserved.
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
    className="block text-[11px] sm:text-xs text-white hover:text-blue-500 transition-colors tracking-wider"
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
