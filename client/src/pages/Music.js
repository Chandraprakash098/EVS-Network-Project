import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { Link } from "react-router-dom";
import {
  Play,
  Headphones,
  Music2,
  TrendingUp,
  Star,
  Heart,
} from "lucide-react";

const Music = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    fetchMusic();
    const timer = setInterval(() => {
      setFeaturedIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
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
      {/* Magazine-style Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-500">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br bg-slate-700"></div>
        </div>

        {/* Large music icon on the right side */}
        <Music2
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-glamPink opacity-25 z-0 animate-pulse"
          style={{ width: "300px", height: "300px" }}
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-white">
            <div className="inline-flex items-center gap-2 text-green-400 mb-6 border border-green-400/30 rounded-full px-4 py-2">
              <Music2 className="w-4 h-4" />
              <span className="text-sm font-medium">Featured This Week</span>
            </div>
            <h1 className="text-7xl font-bold mb-8 leading-tight">
              The New Era of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                Digital Music
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Experience the revolution in sound with our curated collection of
              trending artists, exclusive releases, and breakthrough genres.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300">
                Explore Genres
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
              </div>
              <img
                // src="/api/placeholder/600/600"
                src="/placeholder-image.jpg"
                alt="Featured Artist"
                className="absolute inset-0 w-full h-full object-cover rounded-full p-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial-style Category Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center mb-16">
          <span className="text-green-600 font-medium mb-4">
            Featured Categories
          </span>
          <h2 className="text-5xl font-bold text-center mb-6">
            Trending in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              {" "}
              Music{" "}
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((article, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-72 overflow-hidden">
                <img
                  src={article.image}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  alt={article.title}
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 rounded-full text-green-600 text-sm font-medium flex items-center gap-2">
                  {article.icon}
                  <span>{article.category}</span>
                </div>
              </div>

              <div className="relative p-8">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {article.title}
                  </h3>
                  <Heart className="w-6 h-6 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {article.description}
                </p>

                <Link
                  to={`/music/article/${article._id}`}
                  className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Read More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Magazine-style Stats Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Active Listeners", value: "2M+", icon: "👥" },
              { label: "Curated Tracks", value: "10M+", icon: "🎵" },
              { label: "Featured Artists", value: "50K+", icon: "🎤" },
              { label: "Daily Streams", value: "5M+", icon: "▶️" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Music;
