
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { API_URL } from '../../src/config';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/blogs`);
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="mt-4 text-lg">
          <Link to="/" className="hover:text-green-400">Home</Link> &gt; Blog
        </p>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <div
              key={post._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`${API_URL}${post.image}`}
                alt={post.title}
                className="rounded-lg mb-4 w-full object-cover h-60"
              />
              <div className="mb-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  {post.category}
                </span>
                <span className="text-gray-600 text-sm">
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 150)}...
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/blog/${post._id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Read More
                </Link>
                <span className="text-gray-500 text-sm">
                  By {post.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
