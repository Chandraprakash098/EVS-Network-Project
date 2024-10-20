// import React from "react";
// import CategorySection from "../components/CategorySection";
// import img1 from '../images/pexels-rdne-7005696.jpg'
// import img2 from '../images/pexels-cottonbro-6899768.jpg'
// import img3 from '../images/pexels-tanja-nikolic-437546641-15586392.jpg'
// import img4 from '../images/pexels-cottonbro-5082566.jpg'
// import img5 from '../images/pexels-letssnacktoronto-1630344.jpg'
// import img6 from '../images/pexels-askar-abayev-5638834.jpg'

// const HotEntertainmentHollywood = () => {
//   const articles = [
//     {
//       title: "Oscar Buzz: Predictions for This Year's Academy Awards",
//       excerpt:
//         "With the Oscars just around the corner, we break down the frontrunners in each category. Who will take home the golden statuette?",
//       image: img1,
//       link: "/hot-entertainment/hollywood/oscars",
//     },
//     {
//       title: "Behind the Scenes: Marvel's Next Big Franchise",
//       excerpt:
//         "Exclusive insights into Marvel's latest project that's set to redefine the superhero genre. Get ready for a new era of cinematic magic.",
//       image: img2,
//       link: "/hot-entertainment/hollywood/marvel-franchise",
//     },
//     {
//       title: "Hollywood's Power Couples: Who's Still Going Strong?",
//       excerpt:
//         "From Blake and Ryan to Tom and Zendaya, we look at the couples that are keeping love alive in Tinseltown.",
//       image: img3,
//       link: "/hot-entertainment/hollywood/power-couples",
//     },
//     {
//       title: "Top 10 Must-Watch Movies of 2024",
//       excerpt:
//         "From blockbusters to indie gems, here’s our list of the top 10 Hollywood movies you can’t miss this year.",
//       image: img4,
//       link: "/hot-entertainment/hollywood/top-movies-2024",
//     },
//     {
//       title: "Fashion Trends on the Red Carpet: Who Wore It Best?",
//       excerpt:
//         "The latest red carpet events gave us plenty of fashion inspiration. Here’s a look at some of the most talked-about outfits.",
//       image: img5,
//       link: "/hot-entertainment/hollywood/red-carpet",
//     },
//     {
//       title: "Hollywood’s Rising Stars: Meet the Next Generation",
//       excerpt:
//         "Get to know the up-and-coming actors and actresses who are making waves in Hollywood and setting new trends.",
//       image: img6,
//       link: "/hot-entertainment/hollywood/rising-stars",
//     },
//   ];

//   return (
//     <div className="bg-blackBg min-h-screen py-10">
//       <section className="text-center mt-20">
//         <h1 className="text-5xl font-extrabold text-Green mb-4">
//           Hollywood Highlights
//         </h1>
//         <p className="text-white text-lg max-w-2xl mx-auto mb-8">
//           Explore the latest buzz, gossip, and trends in Hollywood.
//         </p>
//       </section>

//       <section className="container mx-auto px-6 py-7">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {articles.map((article, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-r from-black via-gray-800 to-black border border-Green rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//             >
//               <img
//                 src={article.image}
//                 // alt={article.title}
//                 className="w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
//               />
//               <div className="p-6">
//                 <h3 className="text-Green text-2xl font-bold mb-3">
//                   {article.title}
//                 </h3>
//                 <p className="text-gray-300 text-base mb-4">
//                   {article.excerpt}
//                 </p>
//                 <a
//                   href={article.link}
//                   className="text-white underline hover:text-neonGreen"
//                 >
//                   Read More &rarr;
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HotEntertainmentHollywood;




import React, { useState, useEffect } from "react";
import { Film, Star, Heart, Share2, Eye, TrendingUp, Calendar } from 'lucide-react';
import img1 from '../images/pexels-rdne-7005696.jpg'
import img2 from '../images/pexels-cottonbro-6899768.jpg'
import img3 from '../images/pexels-tanja-nikolic-437546641-15586392.jpg'
import img4 from '../images/pexels-cottonbro-5082566.jpg'
import img5 from '../images/pexels-letssnacktoronto-1630344.jpg'
import img6 from '../images/pexels-askar-abayev-5638834.jpg'

const HotEntertainmentHollywood = () => {
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
      title: "Oscar Buzz: Predictions for This Year's Academy Awards",
      excerpt: "With the Oscars just around the corner, we break down the frontrunners in each category. Who will take home the golden statuette?",
      image: img1,
      link: "/hot-entertainment/hollywood/oscars",
    },
    {
      title: "Behind the Scenes: Marvel's Next Big Franchise",
      excerpt: "Exclusive insights into Marvel's latest project that's set to redefine the superhero genre. Get ready for a new era of cinematic magic.",
      image: img2,
      link: "/hot-entertainment/hollywood/marvel-franchise",
    },
    {
      title: "Hollywood's Power Couples: Who's Still Going Strong?",
      excerpt: "From Blake and Ryan to Tom and Zendaya, we look at the couples that are keeping love alive in Tinseltown.",
      image: img3,
      link: "/hot-entertainment/hollywood/power-couples",
    },
    {
      title: "Top 10 Must-Watch Movies of 2024",
      excerpt: "From blockbusters to indie gems, here's our list of the top 10 Hollywood movies you can't miss this year.",
      image: img4,
      link: "/hot-entertainment/hollywood/top-movies-2024",
    },
    {
      title: "Fashion Trends on the Red Carpet: Who Wore It Best?",
      excerpt: "The latest red carpet events gave us plenty of fashion inspiration. Here's a look at some of the most talked-about outfits.",
      image: img5,
      link: "/hot-entertainment/hollywood/red-carpet",
    },
    {
      title: "Hollywood's Rising Stars: Meet the Next Generation",
      excerpt: "Get to know the up-and-coming actors and actresses who are making waves in Hollywood and setting new trends.",
      image: img6,
      link: "/hot-entertainment/hollywood/rising-stars",
    },
  ];

  const toggleLike = (index) => {
    setLikes(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black min-h-screen text-white">
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
          <Film className="w-20 h-20 text-yellow-500 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 animate-gradient">
            Hollywood Highlights
          </h1>
          <p className="text-xl sm:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Explore the latest buzz, gossip, and trends in Hollywood.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              <Star className="w-5 h-5" /> Top Stories
            </button>
            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" /> Upcoming Events
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Articles Section with Hover Effects */}
      <section className="container mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-center gap-4 mb-12">
          <TrendingUp className="w-8 h-8 text-yellow-500" />
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500">
            Latest Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-800 to-pink-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 transition-all duration-500"
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
                      <Eye className="w-4 h-4" /> 3.2k
                    </div>
                    <div className="flex items-center gap-2 text-white/80">
                      <Star className="w-4 h-4 text-yellow-400" /> 4.9
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300"
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

      {/* New Featured Celebrities Section */}
      <section className="container mx-auto px-4 sm:px-6 py-20 border-t border-white/10">
        <h3 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-pink-500">
          Featured Celebrities
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {['Tom Hanks', 'Meryl Streep', 'Leonardo DiCaprio', 'Scarlett Johansson'].map((celebrity, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 p-1 mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-white text-2xl font-bold">
                  {celebrity[0]}
                </div>
              </div>
              <p className="text-white group-hover:text-yellow-400 transition-colors duration-300">{celebrity}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotEntertainmentHollywood;