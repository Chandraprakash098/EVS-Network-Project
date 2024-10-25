
import React, { useState, useEffect } from "react";
import { Palette, Star, Heart, Share2, Eye, TrendingUp, Bookmark } from 'lucide-react';
import img1 from '../images/pexels-shiva-12165842-6214683.jpg'
import img2 from '../images/pexels-emtimmers-6541618.jpg'
import img3 from '../images/pexels-steve-28901841.jpg'
import img4 from '../images/pexels-cottonbro-9480465.jpg'
import { API_URL } from "../config";
import axios from "axios";

const TraditionalArt = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likes, setLikes] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [categoryData, setCategoryData] = useState([]);


  useEffect(() => {
    fetchArts();
  }, []);

  const fetchArts = async () => {
    try {
      console.log("Fetching from:", `${API_URL}/api/traditional-art`);
      const response = await axios.get(`${API_URL}/api/traditional-art`);
      console.log("Response:", response);
      console.log("Data:", response.data);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Full error:", error);
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
    }
  };
  

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const categoryData = [
  //   {
  //     title: "Bollywood Classics",
  //     image: img1,
  //     description:
  //       "Experience the traditional artistry behind Bollywood films, where vibrant colors and soulful music converge.",
  //     link: "/traditional-art/bollywood-classics",
  //   },
  //   {
  //     title: "Hollywood Heritage",
  //     image: img2,
  //     description:
  //       "Explore the historical influences that shaped Hollywood's golden era and timeless cinematic gems.",
  //     link: "/traditional-art/hollywood-heritage",
  //   },
  //   {
  //     title: "Global Art Forms",
  //     image: img3,
  //     description:
  //       "Discover cultural expressions from around the globe, showcasing diversity in visual and performing arts.",
  //     link: "/traditional-art/global-art-forms",
  //   },
  //   {
  //     title: "Folk and Tribal Art",
  //     image: img4,
  //     description:
  //       "Immerse yourself in the beauty of folk and tribal art, passed down through generations.",
  //     link: "/traditional-art/folk-and-tribal",
  //   },
  // ];

  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

return (
  <div className="bg-white min-h-screen text-gray-800">
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
        <Palette className="w-20 h-20 text-purple-600 mx-auto mb-6 animate-pulse" />
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 animate-gradient">
          Traditional Art
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-black">
          Explore the timeless beauty of traditional art forms across cultures and generations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
            <Star className="w-5 h-5" /> Explore Categories
          </button>
          <button className="px-8 py-4 rounded-full bg-black backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
            <Bookmark className="w-5 h-5" /> Popular Artworks
          </button>
        </div>
      </div>
    </section>

    {/* Enhanced Categories Section with Hover Effects */}
    <section className="container mx-auto px-4 sm:px-6 py-20">
      <div className="flex items-center justify-center gap-4 mb-12">
        <TrendingUp className="w-8 h-8 text-purple-600" />
        <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Art Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryData.map((category, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-500 border border-gray-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
                <div className="absolute bottom-4 left-4 flex items-center gap-4">
                  <div className="flex items-center gap-2 text-white">
                    <Eye className="w-4 h-4" /> 2.5k
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-4 h-4 text-yellow-400" /> 4.8
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => toggleLike(index)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  >
                    <Heart 
                      className={`w-5 h-5 transition-colors duration-300 ${
                        likes[index] ? 'text-red-500 fill-red-500' : 'text-gray-600'
                      }`}
                    />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
              <p className="text-gray-600 text-base mb-6">
                {category.description}
              </p>
              <a
                href={category.link}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:scale-105 transition-transform duration-300"
              >
                Explore More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
};

export default TraditionalArt;



