// import React from "react";

// const TraditionalArtHollywood = () => {
//   const articles = [
//     {
//       title: "Hollywood's Love Affair with Broadway",
//       excerpt:
//         "From 'West Side Story' to 'Hamilton', we explore Hollywood's ongoing fascination with bringing Broadway hits to the big screen.",
//     },
//     {
//       title: "The Renaissance of Practical Effects in Cinema",
//       excerpt:
//         "In an age of CGI, some filmmakers are returning to practical effects. We look at recent films championing this traditional art form.",
//     },
//     {
//       title: "Preserving Classic Hollywood: Film Restoration Projects",
//       excerpt:
//         "Inside the painstaking process of restoring classic Hollywood films. How modern technology is helping preserve cinematic history.",
//     },
//     {
//       title: "The Influence of Art Deco in Classic Hollywood",
//       excerpt:
//         "Discover how Art Deco architecture and design left a lasting impact on the Golden Age of Hollywood cinema.",
//     },
//     {
//       title: "Costume Design: The Unsung Heroes of Hollywood",
//       excerpt:
//         "A look into the intricate world of costume design and how it elevates storytelling in films.",
//     },
//   ];

//   return (
//     <div className="bg-blackBg min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-24 text-center bg-blackBg overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-black via-neonGreen to-black opacity-70"></div>
//         <div className="relative z-10">
//           <h1 className="text-5xl sm:text-6xl font-extrabold text-Green mb-3">
//             Traditional Art in Hollywood
//           </h1>
//           <p className="text-white text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
//             Dive into the rich heritage of Hollywood, where traditional arts and crafts continue to inspire modern filmmaking.
//           </p>
//         </div>
//       </section>

//       {/* Articles Section */}
//       <section className="container mx-auto px-6 py-5">
//         <h2 className="text-4xl sm:text-5xl font-bold text-Green text-center mb-12">
//           Articles
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-gray-800 to-black border border-Green rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300"
//             >
//               <h3 className="text-2xl font-semibold text-Green mb-3">
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

// export default TraditionalArtHollywood;





import React, { useState, useEffect } from "react";
import { Palette, Star, Heart, Share2, Eye, TrendingUp, Bookmark } from 'lucide-react';

const TraditionalArtHollywood = () => {
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
      title: "Hollywood's Love Affair with Broadway",
      excerpt: "From 'West Side Story' to 'Hamilton', we explore Hollywood's ongoing fascination with bringing Broadway hits to the big screen.",
      views: "3.5k",
      rating: "4.8"
    },
    {
      title: "The Renaissance of Practical Effects in Cinema",
      excerpt: "In an age of CGI, some filmmakers are returning to practical effects. We look at recent films championing this traditional art form.",
      views: "2.9k",
      rating: "4.7"
    },
    {
      title: "Preserving Classic Hollywood: Film Restoration Projects",
      excerpt: "Inside the painstaking process of restoring classic Hollywood films. How modern technology is helping preserve cinematic history.",
      views: "2.7k",
      rating: "4.9"
    },
    {
      title: "The Influence of Art Deco in Classic Hollywood",
      excerpt: "Discover how Art Deco architecture and design left a lasting impact on the Golden Age of Hollywood cinema.",
      views: "3.0k",
      rating: "4.6"
    },
    {
      title: "Costume Design: The Unsung Heroes of Hollywood",
      excerpt: "A look into the intricate world of costume design and how it elevates storytelling in films.",
      views: "2.8k",
      rating: "4.8"
    }
  ];

  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-white from-gray-900 via-pink-900 to-gray-900 min-h-screen text-white">
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
            Traditional Art in Hollywood
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Dive into the rich heritage of Hollywood, where traditional arts and crafts continue to inspire modern filmmaking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" /> Explore Articles
            </button>
            <button className="px-8 py-4 rounded-full bg-black backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
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

export default TraditionalArtHollywood;
