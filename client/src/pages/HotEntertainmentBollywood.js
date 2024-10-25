
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
      console.error("Error response:", error.response);
      console.error("Error message:", error.message);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90 z-10"></div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-red-50 opacity-50"></div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
              Bollywood Entertainment
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay updated on the latest glamour, fashion, and entertainment
              from Bollywood and Hollywood.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all"
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
            className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-emerald-500 rounded-full mt-2"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">
              What's Trending
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-200 transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    alt={article.title}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-emerald-600 text-sm flex items-center gap-2">
                    {article.icon}
                    <span>{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <Link
                    to={`/hot-entertainment/bollywood/article/${article._id}`}
                    className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
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
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 relative overflow-hidden border border-gray-100">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Stay Updated with Entertainment News
            </h3>
            <p className="text-gray-600 mb-8">
              Get the latest updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-white rounded-full text-gray-800 border border-gray-200 focus:border-emerald-500 outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all"
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
