import React, { useState } from "react";

const ImageWithFallback = ({
  src,
  alt,
  className = "",
  width = "400",
  height = "300",
  priority = false,
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const placeholderUrl = `/api/placeholder/${width}/${height}`;

  return (
    <div className="relative w-full pb-[56.25%]">
      {" "}
      {/* 16:9 aspect ratio */}
      {loading && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}
      <img
        src={error ? placeholderUrl : src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loading ? "opacity-0" : "opacity-100"
        } ${className}`}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? "eager" : "lazy"}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageWithFallback;
