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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error || "Blog not found"}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Navigation and Image */}
          <div className="md:w-1/2 lg:w-2/5 md:sticky md:top-10 md:h-screen mb-8 md:mb-0">
            {/* Navigation */}
            <div className="flex items-center space-x-2 text-gray-600 text-sm mb-4 px-6">
              <Link to="/" className="flex items-center hover:text-gray-900 transition duration-300">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-gray-900 transition duration-300">Blog</Link>
            </div>

            {/* Title for Mobile */}
            <div className="md:hidden text-gray-900 mb-4 px-6 text-3xl md:text-4xl lg:text-5xl font-serif">
              {blog.title}
            </div>
            
            {/* Image */}
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Right Column - Content */}
          <div className="md:w-1/2 lg:w-3/5 p-6 md:p-12 bg-white rounded-lg shadow-md">
            {/* Title for Desktop */}
            <div className="hidden md:block mb-6 text-gray-900 text-3xl md:text-4xl lg:text-5xl font-serif">
              {blog.title}
            </div>

            {/* Category and Meta Info */}
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                {blog.category}
              </span>
              <span className="text-sm text-gray-600">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
              <span className="text-sm text-gray-600">
                {blog.readTime || '5'} min read
              </span>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
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
    </div>
  );
};

export default BlogDetail;