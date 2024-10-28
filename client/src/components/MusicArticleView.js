
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { Star, Film, Play, Sparkles, TrendingUp, Tv } from "lucide-react";

const MusicArticleView = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getIconComponent = (iconName) => {
    const icons = {
      Star: <Star className="w-6 h-6" />,
      Film: <Film className="w-6 h-6" />,
      Play: <Play className="w-6 h-6" />,
      Sparkles: <Sparkles className="w-6 h-6" />,
      TrendingUp: <TrendingUp className="w-6 h-6" />,
      Tv: <Tv className="w-6 h-6" />,
    };
    return icons[iconName] || <Star className="w-6 h-6" />;
  };

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/music/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load article");
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error || "Music not found"}</div>
      </div>
    );
  }

  const formatContent = (content) => {
    if (!content) return [];
    return typeof content === "string"
      ? content.split("\n\n").filter((paragraph) => paragraph.trim() !== "")
      : Array.isArray(content) ? content : [content.toString()];
  };

  const paragraphs = formatContent(article.content);

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Image in Desktop, Content above in Mobile */}
          <div className="md:w-1/2 lg:w-2/5 md:sticky md:top-10 md:h-screen mb-8 md:mb-0">
            {/* Title */}
            <div className="md:hidden text-black mb-4 mt-10 px-6 text-3xl md:text-4xl lg:text-5xl font-serif">
              {article.title}
            </div>
            
            {/* Image */}
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Right Column - Title and Content */}
          <div className="md:w-1/2 lg:w-3/5 p-6 md:p-12 bg-white rounded-lg shadow-md">
            {/* Title */}
            <div className="hidden md:block mb-6 text-black text-3xl md:text-4xl lg:text-5xl font-serif">
              {article.title}
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider text-red-600">
                {article.category}
              </span>
            </div>

            {/* Description */}
            {article.description && (
              <div className="text-lg text-gray-600 mb-8">
                {article.description}
              </div>
            )}

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 mb-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicArticleView;
