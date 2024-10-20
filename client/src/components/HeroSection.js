// import React, { useEffect, useRef, useState } from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
// import img1 from '../images/pexels-fotios-photos-9869981.jpg'
// import img2 from '../images/pexels-adrien-olichon-1257089-3709369.jpg'
// import img3 from '../images/pexels-benjamin-dominguez-3363409-16725692.jpg'
// import img4 from '../images/pexels-cedric-fauntleroy-7221517.jpg'
// import img5 from '../images/pexels-suissounet-1200450.jpg'
// import img6 from '../images/pexels-thatguycraig000-1670057.jpg'


// const HeroSection = () => {
//   const buttonRef = useRef(null);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const backgroundImages = [
//     img1,
//     img2,
//     img3,
//   ];

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         (prevIndex + 1) % backgroundImages.length
//       );
//     }, 3000);

//     return () => clearInterval(intervalId);
//   }, []);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = button.getBoundingClientRect();
//       const x = (e.clientX - left) / width;
//       const y = (e.clientY - top) / height;
//       button.style.setProperty("--x", x);
//       button.style.setProperty("--y", y);
//     };
//     button.addEventListener("mousemove", handleMouseMove);
//     return () => button.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
//       {/* Background Image Carousel */}
//       {backgroundImages.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//             index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{ backgroundImage: `url(${image})` }}
//         ></div>
//       ))}
      
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Floating Background Elements */}
//       <div className="absolute w-48 h-48 bg-electricBlue rounded-full opacity-30 animate-float blur-lg top-10 left-10 md:w-64 md:h-64 lg:w-80 lg:h-80"></div>
//       <div className="absolute w-32 h-32 bg-neonGreen rounded-full opacity-40 animate-float-delay blur-xl bottom-16 right-20 md:w-48 md:h-48 lg:w-56 lg:h-56"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 mt-16 sm:mt-0">
//         <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neonGreen to-electricBlue animate-pulse">
//           Welcome to EVS Network
//         </h1>
//         <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeIn delay-100 leading-relaxed">
//           Stay Updated with the Latest Trends in Entertainment, Music, and Art!
//         </p>

//         {/* Call to Action Button */}
//         <a
//           href="/hot-entertainment"
//           ref={buttonRef}
//           className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 rounded-full text-lg font-medium hover:bg-neonGreen hover:text-black transition-all duration-300 transform hover:-translate-y-1 overflow-hidden shadow-lg hover:shadow-neonGreen/50"
//         >
//           <span className="relative z-10">Explore Entertainment</span>
//           <span
//             className="absolute inset-0 bg-gradient-to-r from-neonGreen to-electricBlue opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//             style={{
//               transform:
//                 "translate(calc(var(--x, 0) * 100%), calc(var(--y, 0) * 100%))",
//             }}
//           ></span>
//         </a>

//         {/* Tagline Section */}
//         <div className="mt-16 animate-fadeIn delay-200">
//           <h3 className="text-2xl md:text-3xl font-semibold text-electricBlue mb-4 animate-bounce">
//             Your All-in-One Entertainment Hub
//           </h3>
//           <p className="font-body text-gray-300 max-w-md mx-auto text-lg leading-relaxed">
//             Discover what's trending in Bollywood, Hollywood, and Traditional Art. 
//             Your journey into glamour starts here!
//           </p>
//         </div>
//       </div>

//       {/* Additional Content Section */}
//       <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neonGreen mb-12 animate-pulse">What We Offer</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
//             <h4 className="font-semibold text-xl mb-3 text-electricBlue">Latest News</h4>
//             <p className="text-gray-300 leading-relaxed">
//               Get the latest updates from the entertainment industry, including movie releases, music launches, and art exhibitions.
//             </p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
//             <h4 className="font-semibold text-xl mb-3 text-electricBlue">Expert Reviews</h4>
//             <p className="text-gray-300 leading-relaxed">
//               Our expert reviewers bring you in-depth analysis and reviews of the latest movies, music, and artistic trends.
//             </p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
//             <h4 className="font-semibold text-xl mb-3 text-electricBlue">Community Engagement</h4>
//             <p className="text-gray-300 leading-relaxed">
//               Join a vibrant community of entertainment enthusiasts, share your opinions, and participate in exciting discussions.
//             </p>
//           </div>
//         </div>

//         {/* Trending Events Section */}
//         <div className="mt-20">
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neonGreen mb-12 animate-pulse">Trending Events</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
//               <img src={img4} alt="Event 1" className="w-full h-80 object-cover" />
//               <div className="p-4">
//                 <h4 className="font-semibold text-xl mb-2 text-electricBlue">Bollywood Music Festival</h4>
//                 <p className="text-gray-300 leading-relaxed">Join us for a night of spectacular performances and music!</p>
//               </div>
//             </div>
//             <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
//               <img src={img5} alt="Event 2" className="w-full h-80 object-cover" />
//               <div className="p-4">
//                 <h4 className="font-semibold text-xl mb-2 text-electricBlue">Hollywood Movie Premiere</h4>
//                 <p className="text-gray-300 leading-relaxed">Be the first to witness the latest blockbuster hit!</p>
//               </div>
//             </div>
//             <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-neonGreen/30 transition-shadow duration-300 transform hover:-translate-y-1">
//               <img src={img6} alt="Event 3" className="w-full h-80 object-cover" />
//               <div className="p-4">
//                 <h4 className="font-semibold text-xl mb-2 text-electricBlue">Art Exhibition Opening</h4>
//                 <p className="text-gray-300 leading-relaxed">Explore stunning artworks and meet the artists behind them.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Import images (assuming these are available in your project)
 import img1 from '../images/pexels-kalistro-1327867553-28827867_11zon.jpg'
import img2 from '../images/pexels-eser-tekin-184978706-19943722_11zon.jpg'
import img3 from '../images/pexels-cedric-fauntleroy-7221517.jpg'
import img4 from '../images/pexels-cottonbro-4009402.jpg'
import img5 from '../images/pexels-eduardo-hernandez-soto-1315528681-28925178.jpg'
import img6 from '../images/pexels-steve-28901841.jpg'

const HeroSection = () => {
  const buttonRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const button = buttonRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      button.style.setProperty("--x", x);
      button.style.setProperty("--y", y);
    };
    button.addEventListener("mousemove", handleMouseMove);
    return () => button.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {backgroundImages.map((image, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 bg-cover bg-center`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${image})` }}
        ></motion.div>
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Floating Background Elements */}
      <motion.div 
        className="absolute w-48 h-48 bg-pink-500 rounded-full opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-2xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-24 sm:py-24 lg:py-32">
        <motion.h1 
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EVS-Network
        </motion.h1>
        <motion.p 
          className="font-body text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stay Updated with the Latest Trends in Entertainment, Music, and Art!
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="/hot-entertainment"
          ref={buttonRef}
          className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-lg font-medium overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-1"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Explore Entertainment</span>
        </motion.a>

        {/* Featured Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-pink-400 mb-4">Celebrity Spotlight</h3>
            <p className="text-gray-300">Exclusive interviews, behind-the-scenes glimpses, and the latest star-studded events.</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Runway Revelations</h3>
            <p className="text-gray-300">Trend forecasts, designer showcases, and the hottest looks from global fashion weeks.</p>
          </motion.div>
          <motion.div 
            className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-4">Artistic Odyssey</h3>
            <p className="text-gray-300">Discover emerging talents, iconic masterpieces, and revolutionary art movements.</p>
          </motion.div>
        </div>

        {/* Latest Updates */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white mb-10">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Met Gala Extravaganza", image: img4, category: "Fashion" },
              { title: "Cannes Film Festival Highlights", image: img5, category: "Cinema" },
              { title: "Grammy Awards Recap", image: img6, category: "Music" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-500 mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">Read More →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
    <section className="container mx-auto px-4 py-20">
    <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neonGreen/10 to-transparent"></div>
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Stay Updated with Entertainment News
        </h3>
        <p className="text-gray-400 mb-8">
          Get the latest updates delivered straight to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 bg-black/50 rounded-full text-white border border-gray-700 focus:border-neonGreen outline-none"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-neonGreen text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </div>
  </section>
    </section>

  );
};

export default HeroSection;