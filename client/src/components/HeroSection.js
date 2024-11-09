import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  TrendingUp,
  Calendar,
  Play,
} from "lucide-react";
import img1 from "../images/celebrity1.jpg";
import img2 from "../images/pexels-abhinna-28939990.jpg";
import img3 from "../images/softbrilliance5.webp";
import img4 from "../images/headerimag3.webp";
import img5 from "../images/celebrity2.webp";
import img6 from "../images/pexels-eduardo-hernandez-soto-1315528681-28925178.jpg";
import img7 from "../images/bhoolbhuliya.webp";
import img8 from "../images/softbrilliance2.webp";
import img9 from "../images/softbrilliance3.jpg";
import img10 from "../images/softbrilliance2.webp";
import img11 from "../images/softbrilliance.webp";
import img12 from "../images/hotentertainment1.jpg";
import img13 from "../images/hotentertainment2.jpg";
import img14 from "../images/anaya.jpg";
import img15 from "../images/hotentertainmentholy1.jpg";
import img16 from "../images/hotentertainmentholy2.jpg";
import img17 from "../images/music1.jpg";
import img18 from "../images/music2.jpg";
import img19 from "../images/music3.jpg";
import img20 from "../images/music4.jpg";
import img21 from "../images/musicboly1.jpg";
import img22 from "../images/musicboly2.jpg";
import img23 from "../images/musicboly3.jpg";
import img25 from "../images/musicholy1.jpg";
import img26 from "../images/musicholy2.jpg";
import img27 from "../images/musicholy3.jpg";
import img28 from "../images/musicholy4.jpg";
import img29 from "../images/art1.webp";
import img30 from "../images/art2.webp";
import img31 from "../images/art3.webp";
import img32 from "../images/avenger.jpg";
import img33 from "../images/headerimage2.jpeg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "EVS NETWORK IS HERE!",
      subtitle: "Olivia Rodrigo on her first Netflix concert",
      type: "cover",
      image: img4, // Use a specific image for this slide
      link: "/music/hollywood/article/672f0386a871d8680b5e737e",
    },
    {
      title: "DRAWN TO A SOFT BRILLIANCE",
      subtitle: "Influencers Critisized Diljit Dosangj ",
      type: "beauty",
      image: img33, // Use a different image for this slide
      link: "/music/bollywood/article/672f030ea871d8680b5e7349",
    },
    {
      title: "ART WITHOUT BOUNDARIES",
      subtitle: "Top 10 Must-Watch Hollywood Movies of 2024",
      type: "interview",
      image: img32, // Use another different image for this slide
      link: "/hot-entertainment/hollywood/article/672f0442a871d8680b5e7397",
    },
  ];

  const beautyArticles = [
    {
      title: "Season's Riches",
      subtitle: "We're falling for Fall...",
      date: "Sep 27, 2024",
      bgColor: "bg-purple-100",
      image: img17, // Use specific image
    },
    {
      title: "A Golden Summer",
      subtitle: "Beauty's getting warm...",
      date: "Aug 29, 2024",
      bgColor: "bg-orange-100",
      image: img18, // Use specific image
    },
    {
      title: "Slip into Neutral...",
      subtitle: "The art of subtlety...",
      date: "Jun 28, 2024",
      bgColor: "bg-gray-100",
      image: img19, // Use specific image
    },
    {
      title: "MY BLUE HEAVEN",
      subtitle: "The beauty of blue...",
      date: "Jun 1, 2024",
      bgColor: "bg-blue-100",
      image: img20, // Use another specific image
    },
  ];

  const cultureArticles = [
    {
      title: "The Visitors",
      date: "Jun 13, 2024",
      image: img21, // Use a unique image for this article
      link: "music/bollywood/article/672f030ea871d8680b5e7349",
    },
    {
      title: "The Wylde Review: THE NORTHMAN",
      date: "Apr 25, 2022",
      image: img22, // Use another image
      link: "/music/bollywood/article/672f030ea871d8680b5e7349",
    },
    {
      title: "The Wylde Review: DUNE",
      date: "Nov 1, 2021",
      image: img23, // Use a different image
      link: "/music/bollywood/article/672f030ea871d8680b5e7349",
    },
  ];

  const travelArticles = [
    {
      title: "Southern France",
      description:
        "Southern France is best known for its rolling granite mountains, bountiful farms, underground caves, plenty of heritage, and let's not forget chestnuts and vineyards...",
      image: img29,
    },
    {
      title: "Mielcke and Hurtigkarl, Copenhagen",
      description:
        "Nestled in the beautiful Royal Danish Horticultural Society Garden – Copenhagen's very own Garden of Eden – lies a listed Nineteenth Century building, and inside, the gourmet restaurant Mielcke and Hurtigkarl.",
      image: img30,
    },
    {
      title: "Absalon Hotel, Copenhagen",
      description:
        "Located just a five-minute walk from Central Station and twenty minutes from the airport, the Absalon Hotel offers the perfect base from which to explore Copenhagen.",
      image: img31,
    },
  ];

  const artInternational = [
    {
      title: "Southern France",
      description:
        "Southern France is best known for its rolling granite mountains, bountiful farms, underground caves, plenty of heritage, and let's not forget chestnuts and vineyards...",
      image: img29,
    },
    {
      title: "Mielcke and Hurtigkarl, Copenhagen",
      description:
        "Nestled in the beautiful Royal Danish Horticultural Society Garden – Copenhagen's very own Garden of Eden – lies a listed Nineteenth Century building, and inside, the gourmet restaurant Mielcke and Hurtigkarl.",
      image: img30,
    },
    {
      title: "Absalon Hotel, Copenhagen",
      description:
        "Located just a five-minute walk from Central Station and twenty minutes from the airport, the Absalon Hotel offers the perfect base from which to explore Copenhagen.",
      image: img31,
    },
  ];

  


  const interviews = [
    {
      title: "Olivia Rodrigo on her first Netflix concert",
      date: "Jul 17, 2021",
      image: img4,
      link: "music/hollywood/article/672f0386a871d8680b5e737e",
    },
    {
      title: "The Wylde Interview: Tom Daley",
      subtitle: "Can Tom take Tokyo?",
      date: "May 15, 2020",
      image: img26,
      link: "music/hollywood/article/672f0386a871d8680b5e737e",
    },
    {
      title: "The Wylde Interview: Ben Miller",
      subtitle: "The Miller's Tale...",
      date: "May 15, 2020",
      image: img27,
      link: "music/hollywood/article/672f0386a871d8680b5e737e",
    },
    {
      title: "The Wylde Interview: Tate McRae",
      subtitle: "The Canadian all-pop whirlwind pauses for Wylde...",
      date: "May 15, 2020",
      image: img28,
      link: "music/hollywood/article/672f0386a871d8680b5e737e",
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
    <div className="min-h-screen bg-white ">
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
              <div className="relative w-full h-full">
                <div className="absolute inset-0">
                  <img
                    src={slide.image} // Use slide-specific image
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    // style={{ minHeight: "300px" }}
                    style={{
                      objectPosition: "50% 50%",
                      minHeight: "100vh",
                    }}
                  />
                </div>

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-end items-center text-white text-center p-4 sm:p-8">
                  {/* <h1 className="text-4xl sm:text-6xl font-serif  tracking-wider mb-4 text-white">
                    {slide.title}
                  </h1> */}
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-serif text-white italic">
                    {slide.subtitle}
                  </p>
                  <br />
                  <Link to={slide.link} className="group relative inline-block">
                    {" "}
                    <span className="relative z-10 block italic px-8 py-3 text-lg md:text-xl font-serif tracking-wider text-white transition-transform duration-300 group-hover:transform group-hover:-translate-y-1 hover:bg-pink-500">
                      Explore More{" "}
                    </span>{" "}
                    <span className="absolute inset-0 border-2 border-white rounded-lg opacity-50 transition-opacity duration-300 group-hover:opacity-100" />{" "}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between p-4">
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
                    src={img11}
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
              {[img1, img9, img3, img10].map((img, index) => (
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
            <h2 className="text-2xl sm:text-5xl font-serif  font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
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
            <Link to="/hot-entertainment">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full cursor-pointer"
              >
                <img
                  src={img12}
                  alt="Entertainment Highlight"
                  className="object-cover rounded-lg shadow-lg w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  {/* <h3 className="text-white italic text-xl sm:text-2xl font-serif">
                    AWARD NIGHT HIGHLIGHTS
                  </h3> */}
                </div>
              </motion.div>
            </Link>

            <Link to="/hot-entertainment">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full cursor-pointer"
              >
                <img
                  src={img13}
                  alt="Entertainment Event"
                  className="object-cover rounded-lg shadow-lg w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  {/* <h3 className="text-white text-xl sm:text-2xl font-serif">
                    RED CARPET MOMENTS
                  </h3> */}
                </div>
              </motion.div>
            </Link>
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
            <Link to="/hot-entertainment/bollywood/article/672f0caba871d8680b5e7533">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full cursor-pointer"
              >
                <img
                  src={img14}
                  alt="Entertainment Highlight"
                  className="object-cover rounded-lg shadow-lg w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  {/* <h3 className="text-white text-lg sm:text-2xl font-serif">
                    AWARD NIGHT HIGHLIGHTS
                  </h3> */}
                </div>
              </motion.div>
            </Link>

            <Link to="/hot-entertainment/bollywood/article/672f0c3ca871d8680b5e74fe">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full cursor-pointer"
              >
                <img
                  src={img7}
                  alt="Entertainment Event"
                  className="object-cover rounded-lg shadow-lg w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
                  {/* <h3 className="text-white text-lg sm:text-2xl font-serif">
                    RED CARPET MOMENTS
                  </h3> */}
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-8 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
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
            <Link to="/hot-entertainment/hollywood/article/672f0442a871d8680b5e7397">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-w-4 aspect-h-5 cursor-pointer"
              >
                <img
                  src={img16}
                  alt="Entertainment Highlight"
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent"></div>
              </motion.div>
            </Link>

            <Link to="/hot-entertainment/hollywood/article/672f0788a871d8680b5e73e5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative aspect-w-4 aspect-h-5 cursor-pointer"
              >
                <img
                  src={img15}
                  alt="Entertainment Event"
                  className="object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent"></div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Music Section */}
      {/* <section className="py-12 px-4 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
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
              <Link to="/music" key={index} className="block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${article.bgColor} p-4 rounded-lg cursor-pointer`}
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
              </Link>
            ))}
          </div>
        </div>
      </section> */}

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
              <Link to={article.link} key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-w-4 aspect-h-5 cursor-pointer"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
                    {/* <h3 className="text-black text-lg sm:text-xl font-serif">
                      {article.title}
                    </h3>
                    <p className="text-black sm:text-sm font-mono">
                      {article.date}
                    </p> */}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Hollywood Music */}
      <section className="py-12 sm:py-16 px-4 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
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
                <Link to={interview.link} className="block">
                  <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                    <img
                      src={interview.image}
                      alt={interview.title}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </Link>
                <div className="space-y-2">
                  <h3 className="text-black sm:text-xl font-serif">
                    {interview.title}
                  </h3>
                  {/* {interview.subtitle && (
                    <p className="text-sm sm:text-base text-gray-600 italic">
                      {interview.subtitle}
                    </p>
                  )} */}
                  {/* <p className="text-xs sm:text-sm text-gray-500 font-mono">
                    {interview.date}
                  </p> */}
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
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
              Indian Traditional Art
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
                <Link to="/traditional-art" className="block">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                  </div>
                </Link>
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

      <section className="bg-slate-100 py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-5xl font-serif font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-400 to-black tracking-wider uppercase mb-4 sm:mb-0">
              International Traditional Art
            </h2>

            <Link
              to="/traditional-art"
              className="text-xs sm:text-sm italic text-gray-700 hover:text-neon-green transition-colors"
            >
              See All in Traditional Art
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {artInternational.map((article, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="space-y-4"
              >
                <Link to="/traditional-art" className="block">
                  <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full rounded-lg shadow-lg"
                    />
                  </div>
                </Link>
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
          {/* <h1 className="text-4xl md:text-6xl font-bold text-center">
            Your Title Here
          </h1> */}
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

      {/* Newsletter Section
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
      </section> */}
    </div>
  );
};

export default HeroSection;

