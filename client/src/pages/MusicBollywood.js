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

const MusicBollywood = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetchBollywoodMusic();
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const fetchBollywoodMusic = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/music-bollywood`);
      setCategoryData(response.data);
    } catch (error) {
      console.error("Error fetching entertainment data:", error);
    }
  };

  return (
    <div className="bg-slate-500 min-h-screen">
      {/* Magazine-style Hero Section */}
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

        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="h-full w-full relative overflow-hidden">
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.2,
                }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <div className="lg:w-1/2 text-white pt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-green-400 mb-8 border border-pink-400/30 rounded-full px-4 py-2"
            >
              <Music className="w-4 h-4" />
              <span className="text-sm font-medium text-green-500">Trending Now</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight"
            >
              The Soul of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r text-white">
                Bollywood
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-green-200 mb-12 max-w-xl leading-relaxed"
            >
              Discover the magical world of Bollywood music, where tradition
              meets innovation in a symphony of emotions and rhythms.
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
              Bollywood{" "}
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
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

              <div className="p-8 ">
                <div className="flex justify-between  items-start mb-6">
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
                  to={`/music/bollywood/article/${article._id}`}
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

export default MusicBollywood;
