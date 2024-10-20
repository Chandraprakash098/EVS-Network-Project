// import React from "react";

// const TraditionalArtBollywood = () => {
//   const articles = [
//     {
//       title: "Classical Dance in Modern Bollywood",
//       excerpt:
//         "How Bollywood is incorporating traditional dance forms like Kathak and Bharatanatyam into mainstream cinema. A blend of the old and the new.",
//     },
//     {
//       title: "The Art of Bollywood Poster Making",
//       excerpt:
//         "Exploring the rich history and evolution of Bollywood poster art. From hand-painted masterpieces to digital designs.",
//     },
//     {
//       title: "Reviving Folk Music in Hindi Cinema",
//       excerpt:
//         "Bollywood's renewed interest in folk music is bringing forgotten tunes back into the limelight. We look at some recent examples.",
//     },
//     {
//       title: "The Influence of Sufi Music in Bollywood",
//       excerpt:
//         "Tracing the rise of Sufi-inspired tracks in Bollywood and how they connect with audiences emotionally.",
//     },
//     {
//       title: "Handicrafts in Bollywood Set Design",
//       excerpt:
//         "A look at how traditional Indian handicrafts are influencing the design and aesthetics of Bollywood film sets.",
//     },
//   ];

//   return (
//     <div className="bg-blackBg min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-24 text-center bg-blackBg overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-neonGreen to-black opacity-70"></div>
//         <div className="relative z-10">
//           <h1 className="text-5xl sm:text-6xl font-extrabold text-Green  mb-6">
//             Traditional Art in Bollywood
//           </h1>
//           <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
//             Discover the rich legacy of traditional arts and crafts that shape Bollywood’s cinematic brilliance.
//           </p>
//         </div>
//       </section>

//       {/* Articles Section */}
//       <section className="container mx-auto px-6 py-5">
//         <h2 className="text-4xl sm:text-5xl font-bold text-neonGreen text-center mb-12">
//           Articles
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-gray-800 to-black border border-neonGreen rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
//             >
//               <h3 className="text-2xl font-semibold text-neonGreen mb-3">
//                 {article.title}
//               </h3>
//               <p className="text-gray-300 text-base mb-4">
//                 {article.excerpt}
//               </p>
//               <a
//                 href="#"
//                 className="text-white underline hover:text-neonGreen"
//               >
//                 Read More &rarr;
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default TraditionalArtBollywood;




import React, { useState, useEffect } from "react";
import { Palette, Star, Heart, Share2, Eye, TrendingUp, Bookmark } from 'lucide-react';

const TraditionalArtBollywood = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likes, setLikes] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const articles = [
    {
      title: "Classical Dance in Modern Bollywood",
      excerpt: "How Bollywood is incorporating traditional dance forms like Kathak and Bharatanatyam into mainstream cinema. A blend of the old and the new.",
      views: "3.2k",
      rating: "4.9"
    },
    {
      title: "The Art of Bollywood Poster Making",
      excerpt: "Exploring the rich history and evolution of Bollywood poster art. From hand-painted masterpieces to digital designs.",
      views: "2.8k",
      rating: "4.7"
    },
    {
      title: "Reviving Folk Music in Hindi Cinema",
      excerpt: "Bollywood's renewed interest in folk music is bringing forgotten tunes back into the limelight. We look at some recent examples.",
      views: "2.5k",
      rating: "4.8"
    },
    {
      title: "The Influence of Sufi Music in Bollywood",
      excerpt: "Tracing the rise of Sufi-inspired tracks in Bollywood and how they connect with audiences emotionally.",
      views: "3.1k",
      rating: "4.9"
    },
    {
      title: "Handicrafts in Bollywood Set Design",
      excerpt: "A look at how traditional Indian handicrafts are influencing the design and aesthetics of Bollywood film sets.",
      views: "2.3k",
      rating: "4.6"
    }
  ];

  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 min-h-screen text-white">
      {/* Enhanced Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <Palette className="w-20 h-20 text-purple-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient">
            Traditional Art in Bollywood
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Discover the rich legacy of traditional arts and crafts that shape Bollywood's cinematic brilliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" /> Explore Articles
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Bookmark className="w-5 h-5" /> Popular Content
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Articles Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <TrendingUp className="w-8 h-8 text-purple-500" />
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Featured Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-pink-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500 p-6"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleLike(index)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        likes[index] ? 'text-red-500 fill-red-500' : 'text-white'
                      }`}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                    <Share2 className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <p className="text-gray-300 text-base mb-6">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Eye className="w-4 h-4" /> {article.views}
                  </div>
                  <div className="flex items-center gap-2 text-white/80">
                    <Star className="w-4 h-4 text-yellow-400" /> {article.rating}
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
              >
                Read More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TraditionalArtBollywood;
