import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import { Play, Headphones, Music2, TrendingUp, Star, Heart } from 'lucide-react';

const Music = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetchMusic();
  }, []);

  const fetchMusic = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/music`);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching entertainment data:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <Headphones className="w-20 h-20 text-green-600 animate-bounce" />
          </div>
          <h1 className="text-7xl sm:text-8xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-gradient">
            Music
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Dive into rhythms, beats, and trends shaping the world of Bollywood, Hollywood, and beyond.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" /> Start Listening
            </button>
            <button className="px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-all duration-300">
              Explore Genres
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Category Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <TrendingUp className="w-8 h-8 text-green-600" />
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Trending Music Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((article, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  alt={article.title}
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-green-600 text-sm flex items-center gap-2">
                  {article.icon}
                  <span>{article.category}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
              </div>

              <div className="relative p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 text-transparent bg-clip-text">
                    {article.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-base mb-6 line-clamp-3">
                  {article.description}
                </p>

                <Link
                  to={`/music/article/${article._id}`}
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New Stats Section */}
      <section className="container mx-auto px-6 py-20 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Users", value: "2M+", icon: "👥" },
            { label: "Songs Available", value: "10M+", icon: "🎵" },
            { label: "Artists", value: "50K+", icon: "🎤" },
            { label: "Daily Plays", value: "5M+", icon: "▶️" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;