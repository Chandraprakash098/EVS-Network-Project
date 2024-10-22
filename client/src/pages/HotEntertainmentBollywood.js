
// import React, { useState, useEffect } from "react";
// import { Film, Star, Heart, Share2, Eye, TrendingUp, Calendar } from 'lucide-react';
// import img1 from '../images/pexels-leeloothefirst-5715251.jpg'
// import img2 from '../images/pexels-mikhail-nilov-8108569.jpg'
// import img3 from '../images/pexels-eduardo-hernandez-soto-1315528681-28925178.jpg'
// import img4 from '../images/pexels-kyleloftusstudios-2510430.jpg'
// import img5 from '../images/pexels-rdne-6224302.jpg'
// import img6 from '../images/pexels-tima-miroshnichenko-7991579.jpg'

// const HotEntertainmentBollywood = () => {
//   const [categoryData, setCategoryData] = useState([]);

//   useEffect(() => {
//     fetchEntertainment();
//   }, []);

//   const fetchEntertainment = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/hot-entertainment/bollywood`);
//       setCategoryData(response.data);
//     } catch (error) {
//       console.error("Error fetching entertainment data:", error);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // const articles = [
//   //   {
//   //     title: "Bollywood's Biggest Stars Shine at Filmfare Awards",
//   //     excerpt: "The 68th Filmfare Awards saw the cream of Bollywood talent gather for a night of glamour and celebration. Find out who took home the coveted Black Lady.",
//   //     image: img1,
//   //     link: "/hot-entertainment/bollywood/filmfare-awards",
//   //   },
//   //   {
//   //     title: "Upcoming Blockbuster: 'Mumbai Nights' Set to Dazzle",
//   //     excerpt: "Director Anurag Kashyap's latest project 'Mumbai Nights' promises to be a visual spectacle. We've got the inside scoop on this star-studded production.",
//   //     image: img2,
//   //     link: "/hot-entertainment/bollywood/mumbai-nights",
//   //   },
//   //   {
//   //     title: "Fashion Face-Off: Deepika vs Priyanka",
//   //     excerpt: "Two of Bollywood's biggest fashion icons go head-to-head. Who wore it better? Our style experts weigh in on their recent red carpet looks.",
//   //     image: img3,
//   //     link: "/hot-entertainment/bollywood/fashion-face-off",
//   //   },
//   //   {
//   //     title: "Behind the Scenes: Making of 'Kahaani 3'",
//   //     excerpt: "Go behind the camera and see how the magic happens in the making of 'Kahaani 3' with exclusive interviews from the cast and crew.",
//   //     image: img4,
//   //     link: "/hot-entertainment/bollywood/kahaani-3",
//   //   },
//   //   {
//   //     title: "A Celebration of Music: Top Bollywood Hits of 2024",
//   //     excerpt: "From romantic ballads to dance anthems, discover the top Bollywood songs that are making waves this year.",
//   //     image: img5,
//   //     link: "/hot-entertainment/bollywood/top-bollywood-hits",
//   //   },
//   //   {
//   //     title: "Upcoming Movie Releases You Can't Miss",
//   //     excerpt: "Mark your calendars! Here's a look at the most anticipated Bollywood movie releases coming soon to theaters.",
//   //     image: img6,
//   //     link: "/hot-entertainment/bollywood/upcoming-movies",
//   //   },
//   // ];

//   const toggleLike = (index) => {
//     setLikes(prev => ({
//       ...prev,
//       [index]: !prev[index]
//     }));
//   };

//   return (
//     <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
//       {/* Enhanced Hero Section with Parallax Effect */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url(${img1})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             filter: 'brightness(0.3)',
//             transform: `translateY(${scrollY * 0.5}px)`,
//           }}
//         ></div>
//         <div className="relative z-10 text-center px-4">
//           <Film className="w-20 h-20 text-yellow-500 mx-auto mb-6 animate-pulse" />
//           <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 animate-gradient">
//             Bollywood Highlights
//           </h1>
//           <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
//             Dive into the latest news, gossip, and trends from the glamorous world of Bollywood.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
//               <Star className="w-5 h-5" /> Top Stories
//             </button>
//             <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
//               <Calendar className="w-5 h-5" /> Upcoming Events
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Articles Section with Hover Effects */}
//       <section className="container mx-auto px-4 sm:px-6 py-20">
//         <div className="flex items-center justify-center gap-4 mb-12">
//           <TrendingUp className="w-8 h-8 text-yellow-500" />
//           <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500">
//             Latest Articles
//           </h2>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-gray-800 to-pink-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-500"
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
//                   <div className="absolute bottom-4 left-4 flex items-center gap-4">
//                     <div className="flex items-center gap-2 text-white/80">
//                       <Eye className="w-4 h-4" /> 3.2k
//                     </div>
//                     <div className="flex items-center gap-2 text-white/80">
//                       <Star className="w-4 h-4 text-yellow-400" /> 4.9
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
//                     {article.title}
//                   </h3>
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => toggleLike(index)}
//                       className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
//                     >
//                       <Heart 
//                         className={`w-5 h-5 transition-colors duration-300 ${
//                           likes[index] ? 'text-red-500 fill-red-500' : 'text-white'
//                         }`}
//                       />
//                     </button>
//                     <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
//                       <Share2 className="w-5 h-5 text-white" />
//                     </button>
//                   </div>
//                 </div>
//                 <p className="text-gray-300 text-base mb-6">
//                   {article.excerpt}
//                 </p>
//                 <a
//                   href={article.link}
//                   className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
//                 >
//                   Read More
//                   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* New Featured Celebrities Section */}
//       <section className="container mx-auto px-4 sm:px-6 py-20 border-t border-white/10">
//         <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500">
//           Featured Celebrities
//         </h3>
//         <div className="flex flex-wrap justify-center gap-8">
//           {['Shah Rukh Khan', 'Deepika Padukone', 'Ranveer Singh', 'Alia Bhatt'].map((celebrity, index) => (
//             <div key={index} className="text-center group cursor-pointer">
//               <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 p-1 mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
//                   {celebrity[0]}
//                 </div>
//               </div>
//               <p className="text-white group-hover:text-yellow-400 transition-colors duration-300">{celebrity}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HotEntertainmentBollywood;




import React, { useState, useEffect } from "react";
import axios from "axios";
import CategorySection from "../components/CategorySection";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Play, Star, Film, Tv } from "lucide-react";
import { API_URL } from "../config";
import { Link } from "react-router-dom";


const HotEntertainmentBollywood = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetchEntertainment();
  }, []);

  const fetchEntertainment = async () => {
    try {
      console.log("Fetching from:", `${API_URL}/api/hot-bollywood-entertainment`);
      const response = await axios.get(`${API_URL}/api/hot-bollywood-entertainment`);
      console.log("Response:", response);
      console.log("Data:", response.data);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Full error:", error);
    console.error("Error response:", error.response); // This will show the server's error response if any
    console.error("Error message:", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90 z-10"></div>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 opacity-50"></div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neonGreen via-emerald-400 to-teal-300">
              Bollywood Entertainment
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay updated on the latest glamour, fashion, and entertainment
              from Bollywood and Hollywood.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-neonGreen text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
              >
                Explore Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neonGreen rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-neonGreen rounded-full mt-2"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neonGreen to-emerald-400">
              What's Trending
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the hottest stories and latest updates from the
              entertainment world
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((article, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-neonGreen/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    alt={article.title}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 rounded-full text-neonGreen text-sm flex items-center gap-2">
                    {article.icon}
                    <span>{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neonGreen transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  {/* <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-neonGreen hover:text-white transition-colors"
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a> */}

                  <Link
                    to={`/hot-entertainment/bollywood/article/${article._id}`}
                    className="inline-flex items-center gap-2 text-neonGreen hover:text-white transition-colors"
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
    </div>
  );
};

export default HotEntertainmentBollywood;
