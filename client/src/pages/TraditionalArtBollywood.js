
import React, { useState, useEffect } from "react";
import {  Star, Heart, Share2, Eye, TrendingUp} from 'lucide-react';
import { API_URL } from "../config";
import axios from "axios";
import { Link } from "react-router-dom";

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
      console.log("Fetching from:", `${API_URL}/api/traditional-art-bollywood`);
      const response = await axios.get(`${API_URL}/api/traditional-art-bollywood`);
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

  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-500">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 py-12">
            {/* Main Featured Article */}
            <div className="relative h-[70vh] lg:h-[85vh] rounded-2xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/api/placeholder/800/1200')`,
                  transform: `translateY(${scrollY * 0.2}px)`
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight">
                    National Traditional Art
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 max-w-xl">
                    Explore the timeless beauty of traditional art forms across cultures and generations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 flex items-center gap-2">
                      <Star className="w-5 h-5" /> Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Categories Preview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-center">
              {categoryData.slice(0, 4).map((category, index) => (
                <div key={index} className="group relative aspect-square rounded-xl overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                      <div className="flex items-center gap-3 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" /> 2.5k
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" /> 4.8
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              Featured Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryData.map((category, index) => (
              <article 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button 
                      onClick={() => toggleLike(index)}
                      className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-300 shadow-lg"
                    >
                      <Heart 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          likes[index] ? 'text-red-500 fill-red-500' : 'text-gray-600'
                        }`}
                      />
                    </button>
                    <button className="p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-300 shadow-lg">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> 2.5k views
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" /> 4.8
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {category.description}
                  </p>

                  <Link
                    to={`/traditional-art/bollywood/article/${category._id}`}
                    className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors group"
                  >
                    Read More
                    <svg 
                      className="w-5 h-5 transform transition-transform group-hover:translate-x-1" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M5 12H19M19 12L12 5M19 12L12 19" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Bollywood Art Trends
            </h2>
            <p className="text-purple-100 mb-8">
              Subscribe to our newsletter for the latest updates on Bollywood traditional art and cultural events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-lg flex-1 max-w-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default TraditionalArt;