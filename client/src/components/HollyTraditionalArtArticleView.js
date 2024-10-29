// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../config";
// import { Star, Film, Play, Sparkles, TrendingUp, Tv } from "lucide-react";

// const  HollyTraditionalArtArticleView = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Function to get the correct icon based on the article category
//   const getIconComponent = (iconName) => {
//     const icons = {
//       Star: <Star className="w-6 h-6" />,
//       Film: <Film className="w-6 h-6" />,
//       Play: <Play className="w-6 h-6" />,
//       Sparkles: <Sparkles className="w-6 h-6" />,
//       TrendingUp: <TrendingUp className="w-6 h-6" />,
//       Tv: <Tv className="w-6 h-6" />,
//     };
//     return icons[iconName] || <Star className="w-6 h-6" />;
//   };

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         // Updated API endpoint to match the backend route
//         const response = await axios.get(`${API_URL}/api/traditional-art-hollywood/${id}`);
//         console.log("Article data:", response.data); // Debug log
//         setArticle(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching article:", err); // Debug log
//         setError("Failed to load article");
//         setLoading(false);
//       }
//     };
//     fetchArticle();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <div className="text-neonGreen text-xl animate-pulse">Loading...</div>
//       </div>
//     );
//   }

//   if (error || !article) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <div className="text-red-500 text-xl">{error || "Music not found"}</div>
//       </div>
//     );
//   }

//   const formatContent = (content) => {
//     if (!content) return [];
//     return typeof content === "string"
//       ? content.split("\n\n").filter((paragraph) => paragraph.trim() !== "")
//       : Array.isArray(content) ? content : [content.toString()];
//   };

//   const paragraphs = formatContent(article.content);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       <div className="relative h-96">
//         <div className="absolute inset-0">
//           {article.image && (
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-full object-cover brightness-75"
//             />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
//         </div>
//         <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="bg-neonGreen/20 text-neonGreen px-3 py-1 rounded-full flex items-center gap-2">
//               {article.icon && getIconComponent(article.icon)}
//               {article.category}
//             </span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
//             {article.title}
//           </h1>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-3xl mx-auto">
//           {article.description && (
//             <div className="mb-8 text-xl text-gray-300 font-medium border-l-4 border-neonGreen pl-6">
//               {article.description}
//             </div>
//           )}

//           <div className="prose prose-lg prose-invert max-w-none">
//             {paragraphs.map((paragraph, index) => (
//               <p
//                 key={index}
//                 className="text-gray-300 mb-6 leading-relaxed transition duration-300 hover:translate-x-1"
//               >
//                 {paragraph}
//               </p>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HollyTraditionalArtArticleView;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { Star, Film, Play, Sparkles, TrendingUp, Tv } from "lucide-react";

const HollyTraditionalArtArticleView = () => {
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
        const response = await axios.get(`${API_URL}/api/traditional-art-hollywood/${id}`);
        setArticle(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching article:", err);
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
        <div className="text-red-500 text-xl">{error || "Article not found"}</div>
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
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Image */}
          <div className="md:w-1/2 lg:w-2/5 md:sticky md:top-10 md:h-screen mb-8 md:mb-0">
            {/* Mobile Title */}
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

          {/* Right Column - Content */}
          <div className="md:w-1/2 lg:w-3/5 p-6 md:p-12 bg-white rounded-lg shadow-md">
            {/* Desktop Title */}
            <div className="hidden md:block mb-6 text-black text-3xl md:text-4xl lg:text-5xl font-serif">
              {article.title}
            </div>

            {/* Category */}
            <div className="mb-6">
              <span className="bg-neonGreen/20 text-black px-3 py-1 rounded-full flex items-center gap-2 inline-flex">
                {article.icon && getIconComponent(article.icon)}
                {article.category}
              </span>
            </div>

            {/* Description */}
            {article.description && (
              <div className="text-lg text-gray-600 mb-8 border-l-4 border-neonGreen pl-6">
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

export default HollyTraditionalArtArticleView;