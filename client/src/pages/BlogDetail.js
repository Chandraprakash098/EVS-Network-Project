
// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import { API_URL } from '../../src/config';

// const BlogDetail = () => {
//   const { id } = useParams(); // Get blog ID from the URL
//   const [blog, setBlog] = useState(null); // Store blog data from backend
//   const [loading, setLoading] = useState(true); // Track loading state
//   const [error, setError] = useState(null); // Track errors

//   // Fetch blog from the backend when component mounts
//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const response = await fetch(`${API_URL}/${id}`); // Fetch blog by ID
//         if (!response.ok) throw new Error('Failed to fetch blog');
//         const data = await response.json();
//         setBlog(data); // Set the blog data
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [id]); // Run whenever the ID changes

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Header Section */}
//       <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 px-6">
//         <div className="relative max-w-4xl mx-auto">
//           <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4">
//             <Link to="/" className="flex items-center hover:text-white transition duration-300">
//               <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
//             </Link>
//             <span>/</span>
//             <Link to="/blog" className="hover:text-white transition duration-300">Blog</Link>
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//             {blog.title}
//           </h1>
//           <div className="flex items-center gap-4 text-sm md:text-base text-gray-300">
//             <span className="px-3 py-1 rounded-full bg-blue-500/20">
//               {blog.category}
//             </span>
//             <span>{new Date(blog.date).toLocaleDateString()}</span>
//             <span>{blog.readTime} min read</span>
//           </div>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="w-full my-8">
//         <div className="max-w-5xl mx-auto">
//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full rounded-xl shadow-xl object-cover"
//             style={{ height: '300px' }}
//           />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
//         <div className="bg-black rounded-2xl shadow-xl p-8 md:p-12">
//           <div className="prose prose-lg max-w-none leading-relaxed text-gray-800">
//             <p className="text-2xl mb-4 font-serif text-white first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
//               {blog.content}
//             </p>
//           </div>

//           {/* Tags Section */}
//           <div className="mt-12 pt-8 border-t border-gray-200">
//             <h4 className="text-lg font-semibold mb-4">Related Topics</h4>
//             <div className="flex flex-wrap gap-2">
//               {blog.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition duration-300">
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { API_URL } from '../../src/config';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs/${id}`);
        setBlog(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 px-6">
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4">
            <Link to="/" className="flex items-center hover:text-white transition duration-300">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-white transition duration-300">Blog</Link>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm md:text-base text-gray-300">
            <span className="px-3 py-1 rounded-full bg-blue-500/20">
              {blog.category}
            </span>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            <span>{blog.readTime || '5'} min read</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="prose prose-lg max-w-none leading-relaxed text-gray-800">
            <p className="text-2xl mb-4 font-serif text-gray-800 first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
              {blog.content}
            </p>
          </div>

          {/* Tags Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold mb-4">Related Topics</h4>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition duration-300">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;