import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Calendar,
  Play,
} from "lucide-react";
import img1 from "../images/ranveer.webp";
import img2 from "../images/pexels-abhinna-28939990.jpg";
import img3 from "../images/pexels-cottonbro-4009402.jpg";
import img4 from "../images/celebrityimage.jpg";
import img5 from "../images/celebrityimage1.jpg";
import img6 from "../images/pexels-eduardo-hernandez-soto-1315528681-28925178.jpg";
import img7 from "../images/pexels-rdne-8112576.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "EVS NETWORK IS HERE!",
      subtitle: "Buy your advance copy now...",
      type: "cover",
      image: img1, // Use a specific image for this slide
    },
    {
      title: "DRAWN TO A SOFT BRILLIANCE",
      subtitle: "The blushing metallic promises a dozen...",
      type: "beauty",
      image: img4, // Use a different image for this slide
    },
    {
      title: "BEST COMPANY",
      subtitle: "Wylde meets Rosalie Craig, Queen of the West End",
      type: "interview",
      image: img5, // Use another different image for this slide
    },
  ];

  const beautyArticles = [
    {
      title: "Season's Riches",
      subtitle: "We're falling for Fall...",
      date: "Sep 27, 2024",
      bgColor: "bg-purple-100",
      image: img1, // Use specific image
    },
    {
      title: "A Golden Summer",
      subtitle: "Beauty's getting warm...",
      date: "Aug 29, 2024",
      bgColor: "bg-orange-100",
      image: img2, // Use specific image
    },
    {
      title: "Slip into Neutral...",
      subtitle: "The art of subtlety...",
      date: "Jun 28, 2024",
      bgColor: "bg-gray-100",
      image: img3, // Use specific image
    },
    {
      title: "MY BLUE HEAVEN",
      subtitle: "The beauty of blue...",
      date: "Jun 1, 2024",
      bgColor: "bg-blue-100",
      image: img2, // Use another specific image
    },
  ];

  const cultureArticles = [
    {
      title: "The Visitors",
      date: "Jun 13, 2024",
      image: img2, // Use a unique image for this article
    },
    {
      title: "The Wylde Review: THE NORTHMAN",
      date: "Apr 25, 2022",
      image: img3, // Use another image
    },
    {
      title: "The Wylde Review: DUNE",
      date: "Nov 1, 2021",
      image: img1, // Use a different image
    },
  ];

  const travelArticles = [
    {
      title: "Southern France",
      description:
        "Southern France is best known for its rolling granite mountains, bountiful farms, underground caves, plenty of heritage, and let's not forget chestnuts and vineyards...",
      image: img1,
    },
    {
      title: "Mielcke and Hurtigkarl, Copenhagen",
      description:
        "Nestled in the beautiful Royal Danish Horticultural Society Garden – Copenhagen's very own Garden of Eden – lies a listed Nineteenth Century building, and inside, the gourmet restaurant Mielcke and Hurtigkarl.",
      image: img2,
    },
    {
      title: "Absalon Hotel, Copenhagen",
      description:
        "Located just a five-minute walk from Central Station and twenty minutes from the airport, the Absalon Hotel offers the perfect base from which to explore Copenhagen.",
      image: img3,
    },
  ];

  const interviews = [
    {
      title: "Wylde Meets: David Newton",
      date: "Jul 17, 2021",
      image: img1,
    },
    {
      title: "The Wylde Interview: Tom Daley",
      subtitle: "Can Tom take Tokyo?",
      date: "May 15, 2020",
      image: img2,
    },
    {
      title: "The Wylde Interview: Ben Miller",
      subtitle: "The Miller's Tale...",
      date: "May 15, 2020",
      image: img3,
    },
    {
      title: "The Wylde Interview: Tate McRae",
      subtitle: "The Canadian all-pop whirlwind pauses for Wylde...",
      date: "May 15, 2020",
      image: img2,
    },
  ];

  const entertainmentItems = [
    {
      image: img1,
      category: "AWARD SHOW",
      title: "IIFA 2024: A NIGHT OF GLAMOUR",
      description:
        "Witness the most spectacular moments from Bollywood's biggest award ceremony",
      views: "2.5M views",
      date: "Live Tonight",
      trending: true,
    },
    {
      image: img2,
      category: "EXCLUSIVE",
      title: "STAR-STUDDED PREMIERE",
      description:
        "Behind the scenes at the most awaited film premiere of the year",
      views: "1.8M views",
      date: "2 hours ago",
      trending: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Header Carousel */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full h-full">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Full-width and full-height image */}
              <div className="relative w-full h-screen">
                <img
                  src={slide.image} // Use slide-specific image
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "300px" }}
                />

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center p-4 sm:p-8">
                  <h1 className="text-4xl sm:text-6xl font-mono tracking-wider mb-4 text-black">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl italic">{slide.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + slides.length) % slides.length
              )
            }
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % slides.length)
            }
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <ChevronRight className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
          </button>
        </div>
      </div>

      <section className="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
            {/* Left Column - Feature Article */}
            <motion.div
              className="space-y-6 sm:space-y-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-4xl sm:text-3xl font-extrabold font-sans tracking-wide sm:tracking-wider text-gray-900 uppercase mb-2 sm:mb-4">
                  DRAWN TO A
                  <span className="block font-serif text-2xl sm:text-3xl font-extrabold tracking-wide sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-yellow-400 shadow-xl sm:shadow-2xl drop-shadow-lg">
                    SOFT BRILLIANCE
                  </span>
                </h2>

                <p className="text-base sm:text-xl text-gray-600 italic font-light leading-relaxed">
                  The blushing metallic promises a dozen ways to illuminate your
                  beauty routine this season...
                </p>
              </div>
              <motion.div
                className="relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-w-16 aspect-h-9 sm:aspect-w-16 sm:aspect-h-12">
                  <img
                    src={img3}
                    alt="Rose gold beauty editorial"
                    className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs sm:text-sm font-light">
                    Photography by Studio Elegance
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              {[img1, img2, img3, img1].map((img, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
                    <img
                      src={img}
                      alt={`Editorial image ${index + 1}`}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <motion.div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-sm font-light">
                      View Story
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hot Entertainment Section */}
      <section className="bg-slate-100 py-8 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r  from-black via-gray-400 to-black tracking-wider   uppercase mb-4 sm:mb-0">
              HOT ENTERTAINMENT
            </h2>

            <Link
              to="/hot-entertainment"
              className="text-sm italic text-gray-700 hover:text-neon-green transition-colors mt-4 sm:mt-0"
            >
              See All in Entertainment
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full"
            >
              <img
                src={img1}
                alt="Entertainment Highlight"
                className="object-cover rounded-lg shadow-lg w-full h-full"
              />
              {/* Text at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl sm:text-2xl font-serif">
                  AWARD NIGHT HIGHLIGHTS
                </h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full"
            >
              <img
                src={img2}
                alt="Entertainment Event"
                className="object-cover rounded-lg shadow-lg w-full h-full"
              />
              {/* Text at the bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-xl sm:text-2xl font-serif">
                  RED CARPET MOMENTS
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-8 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
              HOT BOLLYWOOD ENTERTAINMENT
            </h2>
            <Link
              to="/hot-entertainment/bollywood"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Bollywood Entertainment
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-full"
            >
              <img
                src={img6}
                alt="Entertainment Highlight"
                className="object-cover rounded-lg shadow-lg w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg sm:text-2xl font-serif">
                  AWARD NIGHT HIGHLIGHTS
                </h3>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-full h-100full"
            >
              <img
                src={img7}
                alt="Entertainment Event"
                className="object-cover rounded-lg shadow-lg w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white text-lg sm:text-2xl font-serif">
                  RED CARPET MOMENTS
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-8 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r  from-black via-gray-400 to-black tracking-wider   uppercase mb-4 sm:mb-0">
              HOT HOLLYWOOD ENTERTAINMENT
            </h2>

            <Link
              to="/hot-entertainment/hollywood"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Hollywood Entertainment
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-w-4 aspect-h-5"
            >
              <img
                src={img1} // Specific image for first entertainment item
                alt="Entertainment Highlight"
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                {/* <h3 className="text-black text-lg sm:text-2xl font-serif">
                  AWARD NIGHT HIGHLIGHTS
                </h3> */}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative aspect-w-4 aspect-h-5"
            >
              <img
                src={img2} // Specific image for second entertainment item
                alt="Entertainment Event"
                className="object-cover rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                {/* <h3 className="text-black text-lg sm:text-2xl font-serif">
                  RED CARPET MOMENTS
                </h3> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r  from-black via-gray-400 to-black tracking-wider   uppercase mb-4 sm:mb-0">
              Music
            </h2>
            <Link
              to="/music"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Music
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {beautyArticles.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`${article.bgColor} p-4 rounded-lg`}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-64 object-cover mb-3 sm:mb-4 rounded"
                />
                <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                  {article.date}
                </p>
                <h3 className="text-black sm:text-lg font-serif">
                  {article.title}
                </h3>
                <p className="text-black sm:text-sm italic">
                  {article.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bollywood Music */}
      <section className="py-12 sm:py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
              Bollywood Music
            </h2>
            <Link
              to="/music/bollywood"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Bollywood Music
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {cultureArticles.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-w-4 aspect-h-5"
              >
                <img
                  src={article.image} // Use article-specific image
                  alt={article.title}
                  className="object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-black text-lg sm:text-xl font-serif">
                    {article.title}
                  </h3>
                  <p className="text-black sm:text-sm font-mono">
                    {article.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hollywood Music */}
      <section className="py-12 sm:py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r  from-black via-gray-400 to-black tracking-wider   uppercase mb-4 sm:mb-0">
              HOLLYWOOD Music
            </h2>
            <Link
              to="/music/hollywood"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Hollywood Music
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {interviews.map((interview, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img
                    src={interview.image}
                    alt={interview.title}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-black sm:text-xl font-serif">
                    {interview.title}
                  </h3>
                  {interview.subtitle && (
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      {interview.subtitle}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-gray-500 font-mono">
                    {interview.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Art Section */}
      <section className="bg-slate-100 py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r  from-black via-gray-400 to-black tracking-wider   uppercase mb-4 sm:mb-0">
              Traditional Art
            </h2>
            <Link
              to="/traditional-art"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Traditional Art
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {travelArticles.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="space-y-4"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-black sm:text-xl font-serif">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-mono">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          {[img3, img7, img6].map((image, index) => (
            <motion.div
              key={index}
              initial={{ y: index * -200 }}
              whileHover={{ y: index * -220, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt={`Section ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Your Title Here
          </h1>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-slate-100 py-16 px-4 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r  from-black via-gray-400 to-black tracking-wider   uppercase mb-4 sm:mb-0">
            Follow us on Instagram
          </h2>
          <br />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[img1, img2, img3, img2].map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-w-1 aspect-h-1"
              >
                <img
                  src={image} // Use different images from the array
                  alt={`Instagram post ${index + 1}`}
                  className="object-cover rounded-lg w-full h-full" // Ensure images fill their container
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-slate-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-serif mb-4 md:mb-6">
              Subscribe to EVs-Network
            </h3>
            <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
              Get exclusive access to the hottest stories, celebrity interviews, and behind-the-scenes content delivered right to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 sm:px-6 py-3 bg-white/10 rounded-full text-white placeholder-gray-400 border border-white/20 focus:border-white outline-none w-full sm:w-auto text-sm md:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all text-sm md:text-base"
              >
                Subscribe Now
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;