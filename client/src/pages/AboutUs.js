import React from "react";
import img from '../images/pexels-olly-3779409.jpg'

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-Green mb-10 mt-5 animate-fadeIn">
          About EVS Network
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-14 leading-relaxed animate-fadeIn delay-100">
          EVS Network is your one-stop platform for the latest updates in
          Hollywood, Bollywood, music, and art. We aim to connect you with the 
          most trending stories, captivating events, and exclusive content from 
          the entertainment world.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center py-12 animate-fadeIn delay-200">
        <img
          src={img}
          alt="Our Mission"
          className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-Green mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            At EVS Network, we strive to provide our audience with the most authentic and 
            engaging entertainment news. We believe in celebrating art and culture from 
            across the globe. Whether it's movie premieres, celebrity gossip, or award shows, 
            we cover it all to keep you connected with the industry.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-800 bg-opacity-30 rounded-xl p-8 max-w-5xl mx-auto mt-12 animate-fadeIn delay-300">
        <h3 className="text-3xl font-semibold text-Green text-center mb-6">
          Why Choose EVS Network?
        </h3>
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start space-x-3">
            <span className="text-electricBlue text-xl">•</span>
            <p>Comprehensive coverage of Hollywood, Bollywood, and regional entertainment.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-electricBlue text-xl">•</span>
            <p>Exclusive interviews, red carpet moments, and behind-the-scenes stories.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-electricBlue text-xl">•</span>
            <p>In-depth reviews of movies, music albums, and TV series.</p>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-electricBlue text-xl">•</span>
            <p>A vibrant community of entertainment enthusiasts and critics.</p>
          </li>
        </ul>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto py-12 mt-16 text-center">
        <h3 className="text-3xl font-semibold text-Green mb-8">
          What Our Users Say
        </h3>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <blockquote className="p-6 rounded-xl bg-gray-800 bg-opacity-50">
            <p className="text-gray-300 mb-4">
              "EVS Network is my go-to source for entertainment updates! Their
              coverage of Hollywood events is top-notch."
            </p>
            <cite className="text-neonGreen">- Sarah, Los Angeles</cite>
          </blockquote>
          <blockquote className="p-6 rounded-xl bg-gray-800 bg-opacity-50">
            <p className="text-gray-300 mb-4">
              "As an art lover, I appreciate how EVS Network includes features
              on traditional and contemporary art. Highly recommended!"
            </p>
            <cite className="text-neonGreen">- Aman, Mumbai</cite>
          </blockquote>
          <blockquote className="p-6 rounded-xl bg-gray-800 bg-opacity-50">
            <p className="text-gray-300 mb-4">
              "Their insights on Bollywood movies are always on point! The
              interviews they feature are a delight to watch."
            </p>
            <cite className="text-neonGreen">- Priya, Delhi</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



