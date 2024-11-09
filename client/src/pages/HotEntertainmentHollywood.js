
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Star, Film, Tv, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { API_URL } from '../config';
import axios from 'axios';

const HotEntertainmentHollywood = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchEntertainment();
  }, []);

  const fetchEntertainment = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/hot-hollywood-entertainment`);
      setCategoryData(response.data);
      if (response.data.length > 0) {
        setFeaturedArticle(response.data[0]);
      }
    } catch (error) {
      console.error("Error fetching entertainment data:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            <div className="text-sm hidden sm:block">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div className="hidden lg:flex gap-4">
              <span className="flex items-center gap-2">
                <TrendingUp size={16} /> Trending
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} /> Popular
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Magazine Title */}
      <div className="border-b border-gray-200 bg-slate-400">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl mt-8 sm:text-5xl md:text-6xl font-serif text-black text-center">
            HOLLYWOOD ENTERTAINMENT
          </h1>
          <p className="text-center text-gray-600 mt-2 text-sm sm:text-base">
            Your Daily Dose of Hollywood News & Updates
          </p>
        </div>
      </div>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative h-[300px] sm:h-[400px] lg:h-[600px]"
            >
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-teal-600 text-white px-4 py-1 rounded">
                FEATURED
              </div>
            </motion.div>
            <div className="space-y-4 md:space-y-6">
              <div className="text-teal-600 font-semibold tracking-wider text-sm md:text-base">
                TRENDING NOW
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed line-clamp-3">
                {featuredArticle.description}
              </p>
              <Link
                to={`/hot-entertainment/hollywood/article/${featuredArticle._id}`}
                className="inline-block bg-teal-600 text-white px-6 sm:px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Latest Stories Grid */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-2xl md:text-3xl text-slate-800 text-center font-bold font-serif">Latest Hollywood Stories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categoryData.slice(1).map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <span className="text-white text-sm">{article.category}</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black mb-2 group-hover:text-teal-500 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2 text-sm md:text-base">
                {article.description}
              </p>
              <Link
                to={`/hot-entertainment/hollywood/article/${article._id}`}
                className="text-teal-500 hover:text-teal-700 font-medium text-sm md:text-base"
              >
                Continue Reading →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      

      {/* Footer Quick Links - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden">
        <div className="flex justify-around">
          <button className="text-gray-600 hover:text-teal-600">
            <TrendingUp size={20} />
          </button>
          <button className="text-gray-600 hover:text-teal-600">
            <Film size={20} />
          </button>
          <button className="text-gray-600 hover:text-teal-600">
            <Star size={20} />
          </button>
          <button className="text-gray-600 hover:text-teal-600">
            <Tv size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotEntertainmentHollywood;
