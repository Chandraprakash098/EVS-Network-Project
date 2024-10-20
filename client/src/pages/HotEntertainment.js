import React from "react";
import CategorySection from "../components/CategorySection";
import img1 from '../images/pexels-felicity-tai-7964353.jpg'
import img2 from '../images/pexels-you-know-what-blog-822152095-20294181.jpg'
import img3 from '../images/pexels-cottonbro-3843284.jpg'
import img4 from '../images/pexels-followingnyc-19698926.jpg'
import img5 from '../images/pexels-jdgromov-4662303.jpg'
import img6 from '../images/pexels-cottonbro-4009402.jpg'
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Play, Star, Film, Tv } from 'lucide-react';

const HotEntertainment = () => {
  const categoryData = [
    {
      title: "Bollywood Gossip",
      image: img1,
      description: "The juiciest gossip from Bollywood's most talked-about stars.",
      link: "/hot-entertainment/bollywood-gossip",
      icon: <Star className="w-6 h-6" />,
      category: "Trending"
    },
    {
      title: "Hollywood Drama",
      image: img2,
      description: "All the latest Hollywood news, gossip, and behind-the-scenes drama.",
      link: "/hot-entertainment/hollywood-drama",
      icon: <Film className="w-6 h-6" />,
      category: "Featured"
    },
    {
      title: "Upcoming Blockbusters",
      image: img3,
      description: "Exciting trailers and first looks at the most anticipated movies.",
      link: "/hot-entertainment/upcoming-blockbusters",
      icon: <Play className="w-6 h-6" />,
      category: "New Release"
    },
    {
      title: "Celebrity Fashion Trends",
      image: img4,
      description: "Discover the latest fashion trends from your favorite celebrities.",
      link: "/hot-entertainment/celebrity-fashion",
      icon: <Sparkles className="w-6 h-6" />,
      category: "Fashion"
    },
    {
      title: "Music Awards Highlights",
      image: img5,
      description: "Recap of the most glamorous moments from recent music awards.",
      link: "/hot-entertainment/music-awards",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "Awards"
    },
    {
      title: "OTT Series to Binge",
      image: img6,
      description: "Top picks from Netflix, Amazon Prime, and other streaming platforms.",
      link: "/hot-entertainment/ott-series",
      icon: <Tv className="w-6 h-6" />,
      category: "Streaming"
    },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-90 z-10"></div>
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            className="w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 opacity-50"></div>
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neonGreen via-emerald-400 to-teal-300">
              Hot Entertainment
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay updated on the latest glamour, fashion, and entertainment from Bollywood and Hollywood.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-neonGreen text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
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
            className="w-6 h-10 border-2 border-neonGreen rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-neonGreen rounded-full mt-2"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neonGreen to-emerald-400">
              What's Trending
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the hottest stories and latest updates from the entertainment world
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
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-neonGreen/20 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    alt={article.title}
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 rounded-full text-neonGreen text-sm flex items-center gap-2">
                    {article.icon}
                    <span>{article.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neonGreen transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <a
                    href={article.link}
                    className="inline-flex items-center gap-2 text-neonGreen hover:text-white transition-colors"
                  >
                    Read More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neonGreen/10 to-transparent"></div>
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Updated with Entertainment News
            </h3>
            <p className="text-gray-400 mb-8">
              Get the latest updates delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-black/50 rounded-full text-white border border-gray-700 focus:border-neonGreen outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-neonGreen text-black rounded-full font-semibold hover:bg-opacity-90 transition-all"
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

export default HotEntertainment;
