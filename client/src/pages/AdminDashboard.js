import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('adminToken');
    try {
      const [blogsRes, jobsRes] = await Promise.all([
        axios.get(`${API_URL}/api/blogs`, {
          headers: { Authorization: `Bearer ${token}` }
        }),
        axios.get(`${API_URL}/api/jobs`, {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);
      setBlogs(blogsRes.data);
      setJobs(jobsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    const token = localStorage.getItem('adminToken');
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await axios.delete(`${API_URL}/api/blogs/${blogId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBlogs(blogs.filter(blog => blog._id !== blogId));
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    }
  };

  const handleDeleteJob = async (jobId) => {
    const token = localStorage.getItem('adminToken');
    if (window.confirm('Are you sure you want to delete this job listing?')) {
      try {
        await axios.delete(`${API_URL}/api/jobs/${jobId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setJobs(jobs.filter(job => job._id !== jobId));
      } catch (error) {
        console.error('Error deleting job:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Blog Posts</h2>
              <Link
                to="/admin/blog/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add New Blog
              </Link>
            </div>
            <div className="space-y-4">
              {blogs.map(blog => (
                <div key={blog._id} className="border-b pb-4">
                  <h3 className="font-medium">{blog.title}</h3>
                  <div className="flex gap-2 mt-2">
                    <Link
                      to={`/admin/blog/edit/${blog._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteBlog(blog._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Job Listings</h2>
              <Link
                to="/admin/job/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add New Job
              </Link>
            </div>
            <div className="space-y-4">
              {jobs.map(job => (
                <div key={job._id} className="border-b pb-4">
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-gray-600">{job.location}</p>
                  <div className="flex gap-2 mt-2">
                    <Link
                      to={`/admin/job/edit/${job._id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteJob(job._id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;



