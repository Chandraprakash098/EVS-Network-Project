import React from "react";
import ImageWithFallback from "./ImageWithFallback";


const EntertainmentCard = ({ image, title, description, link }) => (
  <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-neonGreen/30 rounded-xl overflow-hidden shadow-xl hover:shadow-neonGreen/20 transition-all duration-500 transform hover:-translate-y-1">
    <ImageWithFallback
      src={image}
      alt={title}
      className="transform group-hover:scale-105 transition-transform duration-700"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative p-6">
      <h3 className="text-neonGreen text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 text-sm mb-4 overflow-hidden text-ellipsis display-webkit-box [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center px-4 py-2 bg-neonGreen/20 text-neonGreen border border-neonGreen/50 rounded-full text-sm font-medium hover:bg-neonGreen hover:text-black transition-all duration-300"
      >
        Read More
        <svg
          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  </div>
);

export default EntertainmentCard;