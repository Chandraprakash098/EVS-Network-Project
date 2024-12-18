// import React, { useState,useEffect } from "react";
// import axios from 'axios'
// import { API_URL } from "../config";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Music, Headphones, Heart, Share2, Eye, Star, TrendingUp, PlayCircle } from 'lucide-react';

// const MusicHollywood = () => {
//   const [categoryData, setCategoryData] = useState([]);

//   useEffect(() => {
//     fetchHollywoodMusic();
//   }, []);

//   const fetchHollywoodMusic = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/music-hollywood`);
//       setCategoryData(response.data);
//     } catch (error) {
//       console.error("Error fetching entertainment data:", error);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray via-black-950 to-gray min-h-screen">
//       {/* Enhanced Hero Section */}
//       <section className="relative min-h-[60vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden px-4">
//         {/* Animated background elements */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
//           <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
//         </div>

//         <div className="relative z-10 text-center">
//           {/* Decorative musical notes animation */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {[...Array(5)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute animate-float"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   animationDelay: `${i * 0.5}s`,
//                   opacity: 0.3
//                 }}
//               >
//                 ♪
//               </div>
//             ))}
//           </div>

//           <div className="mb-6 sm:mb-8 flex justify-center">
//             <Music className="w-16 h-16 sm:w-20 sm:h-30 text-green-400 animate-bounce" />
//           </div>

//           <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
//             Hollywood Music
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed px-4">
//             Explore the heart and soul of Bollywood's music, from trending hits to classic melodies.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
//             <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-green-400 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
//               <PlayCircle className="w-5 h-5" /> Start Listening
//             </button>
//             <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
//               <Headphones className="w-5 h-5" /> Browse Playlists
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Articles Section */}
//       <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
//         <div className="flex items-center justify-center gap-4 mb-10 sm:mb-16">
//           <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
//           <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-pink-500 text-transparent bg-clip-text">
//             Trending Articles
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           {categoryData.map((article, index) => (
//             <div
//               key={index}
//               className="group relative bg-gradient-to-br from-gray-900 via-pink-900/50 to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-green-500/20 transition-all duration-500"

//             >
//               <div className="relative h-48 sm:h-64 overflow-hidden">
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
//                   <div className="absolute bottom-4 left-4 flex items-center gap-4">
//                     <div className="flex items-center gap-2 text-white/80">
//                       <Eye className="w-4 h-4" /> 2.5k
//                     </div>
//                     <div className="flex items-center gap-2 text-white/80">
//                       <Star className="w-4 h-4 text-yellow-400" /> 4.8
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="p-6 sm:p-8">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-green-400 to-pink-500 text-transparent bg-clip-text">
//                     {article.title}
//                   </h3>
//                   <div className="flex gap-2">
//                     <button
//                       // onClick={() => toggleLike(index)}
//                       className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
//                     >

//                     </button>
//                     <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
//                       <Share2 className="w-5 h-5 text-white" />
//                     </button>
//                   </div>
//                 </div>

//                 <p className="text-gray-300 text-sm sm:text-base mb-6">
//                   {article.excerpt}
//                 </p>

//                 <Link
//                     to={`/music/hollywood/article/${article._id}`}
//                     className="inline-flex items-center gap-2 text-neonGreen hover:text-white transition-colors"
//                   >
//                     Read More
//                     <motion.span
//                       animate={{ x: [0, 5, 0] }}
//                       transition={{ duration: 1, repeat: Infinity }}
//                     >
//                       →
//                     </motion.span>
//                   </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* New Featured Artists Section */}
//       <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 border-t border-white/10">
//         <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-green-400 to-pink-500 text-transparent bg-clip-text">
//           Featured Artists
//         </h3>
//         <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
//           {['A.R. Rahman', 'Arijit Singh', 'Shreya Ghoshal', 'Amit Trivedi'].map((artist, index) => (
//             <div key={index} className="text-center group cursor-pointer">
//               <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-green-400 to-pink-500 p-1 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
//                 <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
//                   {artist[0]}
//                 </div>
//               </div>
//               <p className="text-sm sm:text-base text-white group-hover:text-green-400 transition-colors duration-300">{artist}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MusicHollywood;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Music,
  Headphones,
  Heart,
  Share2,
  Eye,
  Star,
  TrendingUp,
  PlayCircle,
} from "lucide-react";

const MusicHollywood = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchHollywoodMusic();
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fetchHollywoodMusic = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/music-hollywood`);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching entertainment data:", error);
    }
  };

  return (
    <div className="bg-slate-500 min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-purple-900/30 to-black"></div>
        </div>

        {/* Large music icon on the right side */}
        <Music
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-glamPink opacity-25 z-0 animate-pulse"
          style={{ width: "300px", height: "300px" }}
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2 text-white pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-green-400 mb-8 border border-pink-400/30 rounded-full px-4 py-2"
            >
              <Music className="w-4 h-4" />
              <span className="text-sm text-green-400 font-medium">Trending Now</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-bold text-slate-800 mb-8 leading-tight"
            >
              The Heart of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r text-white">
                Hollywood
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-xl leading-relaxed"
            >
              Discover the magical world of Hollywood music, where innovation
              meets entertainment in a symphony of cinematic excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-3">
                <Headphones className="w-5 h-5" />
                <span className="font-semibold">Explore</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Magazine-style Articles Grid */}
      <section className="container mx-auto bg-white px-6 py-24">
        <div className="flex flex-col items-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-black font-medium mb-4"
          >
            Latest Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold text-center mb-6 text-black"
          >
            Trending in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              {" "}
              Hollywood{" "}
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((article, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl hover:shadow-pink-500/20 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent">
                  <div className="absolute bottom-4 left-4 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <Eye className="w-4 h-4" /> 2.5k
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Star className="w-4 h-4 text-yellow-400" /> 4.8
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                <p className="text-gray-400 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <Link
                  to={`/music/hollywood/article/${article._id}`}
                  className="inline-flex items-center gap-2 text-white hover:text-green-300 transition-colors"
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
            </motion.div>
          ))}
        </div>
      </section>

      {/* Magazine-style Featured Artists */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-black"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
          >
            Featured Artists
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-12">
            {[
              "A.R. Rahman",
              "Arijit Singh",
              "Shreya Ghoshal",
              "Amit Trivedi",
            ].map((artist, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-1 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-3xl font-bold">
                    {artist[0]}
                  </div>
                </div>
                <p className="text-lg text-white group-hover:text-pink-400 transition-colors duration-300">
                  {artist}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MusicHollywood;
