import React,{useState} from "react";
import CategorySection from "../components/CategorySection";
import { Play, Headphones, Music2, TrendingUp, Star, Heart } from 'lucide-react';
import img1 from '../images/pexels-joshsorenson-995301.jpg'
import img2 from '../images/pexels-abhinna-28939990.jpg'
import img3 from '../images/pexels-olly-3769118.jpg'
import img4 from '../images/pexels-ninauhlikova-725255.jpg'
import img5 from '../images/pexels-cottonbro-5082566.jpg'
 import img6 from '../images/pexels-wendywei-1190297.jpg'


const Music = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likes, setLikes] = useState({});

  const categoryData = [
    {
      title: "Bollywood Beats",
      image: img1,
      description:
        "Explore the latest music hits from Bollywood’s top artists, with beats that make you groove.",
      link: "/music/bollywood",
    },
    {
      title: "Hollywood Tracks",
      image: img2,
      description:
        "Stay up-to-date with the latest music releases from Hollywood's biggest names and freshest talents.",
      link: "/music/hollywood",
    },
    {
      title: "Global Artists",
      image: img3,
      description:
        "Discover the global music scene that connects cultures, with tracks from international sensations.",
      link: "/music/global",
    },
    {
      title: "Top Playlists",
      image: img4,
      description:
        "Listen to the most popular playlists of the season, curated for every mood and occasion.",
      link: "/music/playlists",
    },
    {
      title: "Live Performances",
      image: img5,
      description:
        "Experience the energy of live music with performances from the world's biggest artists.",
      link: "/music/live",
    },
    {
      title: "Music Festivals",
      image: img6,
      description:
        "Get the scoop on the most happening music festivals from Coachella to Sunburn.",
      link: "/music/festivals",
    },
  ];
  
  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
return (
  <div className="bg-gradient-to-br from-gray-500 via-gray-500 to-black min-h-screen">
    {/* Enhanced Hero Section */}
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <div className="flex justify-center mb-6">
          <Headphones className="w-20 h-20 text-green-400 animate-bounce" />
        </div>
        <h1 className="text-7xl sm:text-8xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 text-transparent bg-clip-text animate-gradient">
          Music
        </h1>
        <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Dive into rhythms, beats, and trends shaping the world of Bollywood, Hollywood, and beyond.
        </p>
        <div className="flex justify-center gap-6">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            <Play className="w-5 h-5" /> Start Listening
          </button>
          <button className="px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
            Explore Genres
          </button>
        </div>
      </div>
    </section>

    {/* Enhanced Category Section */}
    <section className="container mx-auto px-6 py-20">
      <div className="flex items-center justify-center gap-4 mb-12">
        <TrendingUp className="w-8 h-8 text-green-400" />
        <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 text-transparent bg-clip-text">
          Trending Music Categories
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryData.map((category, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/20 transition-all duration-500"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative h-64 overflow-hidden">
              <img
                src={category.image}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                alt={category.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            </div>

            <div className="relative p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-purple-400 text-transparent bg-clip-text">
                  {category.title}
                </h3>
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
              </div>
              
              <p className="text-gray-300 text-base mb-6 line-clamp-3">
                {category.description}
              </p>

              <div className="flex items-center justify-between">
                <a
                  href={category.link}
                  className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
                >
                  <Music2 className="w-4 h-4" /> Explore
                </a>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">4.9</span>
                </div>
              </div>
            </div>

            {hoveredIndex === index && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>
            )}
          </div>
        ))}
      </div>
    </section>

    {/* New Stats Section */}
    <section className="container mx-auto px-6 py-20 border-t border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Active Users", value: "2M+", icon: "👥" },
          { label: "Songs Available", value: "10M+", icon: "🎵" },
          { label: "Artists", value: "50K+", icon: "🎤" },
          { label: "Daily Plays", value: "5M+", icon: "▶️" }
        ].map((stat, index) => (
          <div key={index} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors duration-300">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
};

export default Music;