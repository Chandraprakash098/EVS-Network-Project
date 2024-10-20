
import React, { useState, useEffect } from "react";
import { Music, Headphones, Heart, Share2, Eye, Star, TrendingUp, PlayCircle } from 'lucide-react';
import img1 from '../images/pexels-tima-miroshnichenko-6021586.jpg'
import img2 from '../images/pexels-wwarby-19588319.jpg'
import img3 from '../images/pexels-vishnurnair-1105666.jpg'
import img4 from '../images/pexels-masbet-christianto-1412741-5246036.jpg'
import img5 from '../images/pexels-luna-lovegood-4087401.jpg'
import img6 from '../images/pexels-benjamin-dominguez-3363409-16725692.jpg'

const MusicHollywood = () => {
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
      title: "Grammy Nominations: Surprises and Snubs",
      excerpt: "The Grammy nominations are out! We analyze the biggest surprises, snubs, and predict the likely winners on music's biggest night.",
      image: img1,
      link: "/music-hollywood/grammy-nominations",
    },
    {
      title: "The Evolution of Pop: From Beatles to Billie",
      excerpt: "From The Beatles to Billie Eilish, we trace the evolution of pop and how it continues to shape music across generations.",
      image: img2,
      link: "/music-hollywood/pop-evolution",
    },
    {
      title: "Virtual Concerts: The Future of Live Music?",
      excerpt: "Are virtual concerts here to stay? We explore the rise of online performances and what it means for the future of live shows.",
      image: img3,
      link: "/music-hollywood/virtual-concerts",
    },
    {
      title: "Hollywood's Most Iconic Movie Soundtracks",
      excerpt: "From 'Titanic' to 'Interstellar', explore the most memorable soundtracks that define Hollywood's finest films.",
      image: img4,
      link: "/music-hollywood/movie-soundtracks",
    },
    {
      title: "Top 10 Artists to Watch in 2024",
      excerpt: "Who are the artists set to make waves in 2024? We bring you the most promising rising stars to keep on your radar.",
      image: img5,
      link: "/music-hollywood/artists-to-watch",
    },
    {
      title: "How Streaming Changed the Music Industry Forever",
      excerpt: "Streaming services have revolutionized the way we consume music. We dive into the impact of this shift on artists and listeners alike.",
      image: img6,
      link: "/music-hollywood/streaming-impact",
    },
  ];

  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black-900 to-gray-900 min-h-screen text-white">
      {/* Enhanced Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <Music className="w-20 h-20 text-pink-500 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradient">
            Hollywood Music
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Discover the latest trends, news, and insights into the evolving world of Hollywood's music.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" /> Explore Trends
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Headphones className="w-5 h-5" /> Listen Now
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Articles Section with Hover Effects */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <TrendingUp className="w-8 h-8 text-pink-500" />
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
            Trending Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-pink-900 rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
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
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors duration-300">
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
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  Read More
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Featured Artists Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20 border-t border-white/10">
        <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
          Featured Artists
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {['Lady Gaga', 'The Weeknd', 'Billie Eilish', 'Drake'].map((artist, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-red-500 p-1 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
                  {artist[0]}
                </div>
              </div>
              <p className="text-white group-hover:text-pink-400 transition-colors duration-300">{artist}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicHollywood;
