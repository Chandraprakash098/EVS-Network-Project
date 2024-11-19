import React from "react";
import img from "../images/pexels-olly-3779409.jpg";


const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 text-gray-800 py-20 px-6">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl text-black font-extrabold mb-10 mt-5 animate-fadeIn">
          Who <span className="text-blue-600">We Are</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-14 leading-relaxed animate-fadeIn delay-100">
          EVS Network is your go-to source for the latest news, reviews, and
          insights into the world of Hollywood and Bollywood music and
          entertainment. We bring you up-to-date information on your favorite
          stars, movies, TV shows, and music.
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
          <h3 className="text-3xl font-semibold text-black mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to keep you entertained and informed. We strive to
            provide you with high-quality content that is both informative and
            engaging. Whether you're a die-hard fan or a casual observer, we've
            got something for everyone.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 max-w-5xl mx-auto mt-12 animate-fadeIn delay-300">
        <h3 className="text-3xl font-semibold text-white text-center mb-6">
          Our Team
        </h3>
        <ul className="space-y-4">
          <li className="flex items-start space-x-3">
            <span className="text-yellow-300 text-2xl">•</span>
            <p className="text-lg">
              Our dedicated team of entertainment enthusiasts is committed to
              delivering the best possible experience. We stay updated on the
              latest trends and breaking news to keep you ahead of the curve.
            </p>
          </li>
        </ul>
      </div>

      {/* Powered by Section */}
      <div className="bg-gradient-to-b from-gray-100 to-gray-300 py-16 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-extrabold text-gray-800 mb-6">
            Powered by <span className="text-blue-600">Evosynchtech</span>
          </h3>
          <p className="text-lg text-gray-700 max-w-xl mx-auto mb-8">
            EVS Network is powered by Evosynchtech, a leading digital marketing
            firm specializing in web development, digital marketing, and more.
            Our technical expertise ensures a seamless user experience on our
            website.
          </p>
          <p className="text-2xl text-black max-w-xl mx-auto mb-8 font-serif italic">
          Let's dive into the exciting world of entertainment together!
          </p>


        </div>

      </div>
    </section>
  );
};

export default AboutUs;
