// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { API_URL } from "../config";
// import { Star, Film, Play, Sparkles, TrendingUp, Tv } from "lucide-react";

// const getIconComponent = (iconName) => {
//   const icons = {
//     Star: <Star className="w-6 h-6" />,
//     Film: <Film className="w-6 h-6" />,
//     Play: <Play className="w-6 h-6" />,
//     Sparkles: <Sparkles className="w-6 h-6" />,
//     TrendingUp: <TrendingUp className="w-6 h-6" />,
//     Tv: <Tv className="w-6 h-6" />,
//   };
//   return icons[iconName] || <Star className="w-6 h-6" />;
// };

// const ArticleView = () => {
//   const { id } = useParams();
//   const [article, setArticle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticle = async () => {
//       try {
//         const response = await axios.get(
//           `${API_URL}/api/hot-entertainment/${id}`
//         );
//         console.log("Article data:", response.data); // Debug log
//         setArticle(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching article:", err);
//         setError("Failed to load article");
//         setLoading(false);
//       }
//     };

//     fetchArticle();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <div className="text-neonGreen text-xl">Loading...</div>
//       </div>
//     );
//   }

//   if (error || !article) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center">
//         <div className="text-red-500 text-xl">
//           {error || "Article not found"}
//         </div>
//       </div>
//     );
//   }

//   // Safely format content into paragraphs
//   const formatContent = (content) => {
//     if (!content) return [];
//     // Handle both string and array content
//     if (typeof content === "string") {
//       return content
//         .split("\n\n")
//         .filter((paragraph) => paragraph.trim() !== "");
//     }
//     return Array.isArray(content) ? content : [content.toString()];
//   };

//   const paragraphs = formatContent(article.content);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
//       {/* Hero Section with Image */}
//       <div className="relative h-96">
//         <div className="absolute inset-0">
//           {article.image && (
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-full object-cover"
//             />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
//         </div>
//         <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="bg-neonGreen/20 text-neonGreen px-3 py-1 rounded-full flex items-center gap-2">
//               {article.icon && getIconComponent(article.icon)}
//               {article.category || "Uncategorized"}
//             </span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             {article.title}
//           </h1>
//         </div>
//       </div>

//       {/* Article Content */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="max-w-3xl mx-auto">
//           {/* Description/Summary */}
//           {article.description && (
//             <div className="mb-8 text-xl text-gray-300 font-medium border-l-4 border-neonGreen pl-6">
//               {article.description}
//             </div>
//           )}

//           {/* Main Content */}
//           <div className="prose prose-lg prose-invert max-w-none">
//             {paragraphs.length > 0 &&
//               paragraphs.map((paragraph, index) => (
//                 <p key={index} className="text-gray-300 mb-6 leading-relaxed">
//                   {paragraph}
//                 </p>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleView;




import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";
import { Star, Film, Play, Sparkles, TrendingUp, Tv } from "lucide-react";

// Function to get the correct icon based on the article category
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

const ArticleView = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the article based on the article ID
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/hot-entertainment/${id}`);
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
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-neonGreen text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-red-500 text-xl">{error || "Article not found"}</div>
      </div>
    );
  }

  // Safely format content into paragraphs
  const formatContent = (content) => {
    if (!content) return [];
    return typeof content === "string"
      ? content.split("\n\n").filter((paragraph) => paragraph.trim() !== "")
      : Array.isArray(content) ? content : [content.toString()];
  };

  const paragraphs = formatContent(article.content);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover brightness-75"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
        </div>
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-end pb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-neonGreen/20 text-neonGreen px-3 py-1 rounded-full flex items-center gap-2 animate-bounce">
              {article.icon && getIconComponent(article.icon)}
              {article.category || "Uncategorized"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Description/Summary */}
          {article.description && (
            <div className="mb-8 text-xl text-gray-300 font-medium border-l-4 border-neonGreen pl-6">
              {article.description}
            </div>
          )}

          {/* Main Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            {paragraphs.length > 0 &&
              paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-300 mb-6 leading-relaxed transition duration-300 hover:translate-x-1">
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-neonGreen/10 py-12 text-center">
        <h2 className="text-3xl font-semibold text-neonGreen drop-shadow-md">
          Stay Tuned for More Gossip!
        </h2>
        <p className="text-gray-400 mt-4">Subscribe to our newsletter for the latest Hollywood buzz.</p>
        <button className="mt-6 bg-neonGreen text-black px-6 py-3 rounded-full font-bold hover:bg-white transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default ArticleView;
