
// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { API_URL } from '../../src/config';

// const BlogForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [blog, setBlog] = useState({
//     title: '',
//     content: '',
//     category: '',
//     tags: '',
//     author: ''
//   });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState('');

//   useEffect(() => {
//     if (id) {
//       fetchBlog();
//     }
//   }, [id]);

//   const fetchBlog = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/blogs/${id}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem('adminToken')}`
//         }
//       });
//       const blogData = response.data;
//       setBlog({
//         title: blogData.title,
//         content: blogData.content,
//         category: blogData.category,
//         tags: blogData.tags.join(','),
//         author: blogData.author
//       });
//       setPreview(blogData.image);
//     } catch (error) {
//       console.error('Error fetching blog:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBlog(prev => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//         const formData = new FormData();
//         formData.append('title', blog.title);
//         formData.append('content', blog.content);
//         formData.append('category', blog.category);
//         formData.append('tags', blog.tags);
//         formData.append('author', blog.author);
        
//         if (image) {
//             formData.append('image', image);
//         }

//         // Log the form data for debugging
//         for (let pair of formData.entries()) {
//             console.log(pair[0] + ': ' + pair[1]);
//         }

//         const config = {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 Authorization: `Bearer ${localStorage.getItem('adminToken')}`
//             }
//         };

//         let response;
//         if (id) {
//             response = await axios.put(`${API_URL}/api/blogs/${id}`, formData, config);
//         } else {
//             response = await axios.post(`${API_URL}/api/blogs`, formData, config);
//         }

//         console.log('Response:', response.data);
//         navigate('/admin/dashboard');
//     } catch (error) {
//         console.error('Error saving blog:', error);
//         alert('Failed to save blog post: ' + (error.response?.data?.error || error.message));
//     } finally {
//         setLoading(false);
//     }
// };

//   return (
//     <div className="min-h-screen bg-gray-100 py-24 px-4">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
//         <h2 className="text-2xl font-bold mb-6">
//           {id ? 'Edit Blog Post' : 'Create New Blog Post'}
//         </h2>
        
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={blog.title}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Content
//             </label>
//             <textarea
//               name="content"
//               value={blog.content}
//               onChange={handleChange}
//               rows="6"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Category
//             </label>
//             <input
//               type="text"
//               name="category"
//               value={blog.category}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Author
//             </label>
//             <input
//               type="text"
//               name="author"
//               value={blog.author}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Tags (comma-separated)
//             </label>
//             <input
//               type="text"
//               name="tags"
//               value={blog.tags}
//               onChange={handleChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               placeholder="e.g. music, concert, festival"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full"
//             />
//             {preview && (
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="mt-2 h-40 object-cover rounded"
//               />
//             )}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
//           >
//             {loading ? 'Saving...' : (id ? 'Update Blog' : 'Create Blog')}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BlogForm;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../src/config';

const BlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
    author: ''
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');

  const categories = [
    'Technology', 'Lifestyle', 'Travel', 'Food', 
    'Fashion', 'Sports', 'Entertainment', 'Business'
  ];

  useEffect(() => {
    if (id) {
      fetchBlog();
    }
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      const blogData = response.data;
      setBlog({
        title: blogData.title,
        content: blogData.content,
        category: blogData.category,
        tags: blogData.tags.join(','),
        author: blogData.author
      });
      setPreview(blogData.image);
    } catch (error) {
      setError('Failed to fetch blog details');
      console.error('Error fetching blog:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        setError('Image size must be less than 5MB');
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('title', blog.title);
      formData.append('content', blog.content);
      formData.append('category', blog.category);
      formData.append('tags', blog.tags);
      formData.append('author', blog.author);
      
      if (image) {
        formData.append('image', image);
      }

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('adminToken')}`
        }
      };

      if (id) {
        await axios.put(`${API_URL}/api/blogs/${id}`, formData, config);
      } else {
        await axios.post(`${API_URL}/api/blogs`, formData, config);
      }

      navigate('/admin/dashboard');
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to save blog post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mt-20 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {id ? '✍️ Edit Blog Post' : '✨ Create New Blog Post'}
          </h2>
          <p className="text-gray-400">Share your thoughts with the world</p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 md:p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={blog.title}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter your blog title..."
                required
              />
            </div>

            {/* Content Textarea */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Content
              </label>
              <textarea
                name="content"
                value={blog.content}
                onChange={handleChange}
                rows="8"
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Write your blog content..."
                required
              />
            </div>

            {/* Category and Author Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Category
                </label>
                <select
                  name="category"
                  value={blog.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-200">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={blog.author}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            {/* Tags Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={blog.tags}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Enter tags separated by commas (e.g. technology, coding, web)"
              />
            </div>

            {/* Image Upload */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-200">
                Featured Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-700 rounded-lg hover:border-blue-500 transition-all">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-blue-500 hover:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-400">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>
              {preview && (
                <div className="mt-4 relative rounded-lg overflow-hidden">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-semibold text-white
                ${loading 
                  ? 'bg-blue-600/50 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700 active:transform active:scale-[0.98]'} 
                transition-all duration-200 shadow-lg`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                id ? 'Update Blog Post' : 'Publish Blog Post'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
