
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const Career = () => {
  const [jobListings, setJobListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/jobs`);
        setJobListings(response.data);
      } catch (error) {
        setError('Error fetching job listings');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-900 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">Careers</h1>
        <p className="mt-4 text-lg">
          <Link to="/" className="hover:text-neonGreen">Home</Link> &gt; Careers
        </p> 
      </div>

      {/* Careers Section */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-neonGreen mb-6 text-center">Discover your new career</h2>
        <p className="text-lg mb-8 text-center text-gray-600">
          Come be part of our team with Inventics – bring your ideas and determination to make a difference.
          Join us and help our clients become the best versions of themselves.
        </p>

        {/* Loading and Error Handling */}
        {loading ? (
          <p className="text-center">Loading job listings...</p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          // Job Listings
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobListings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-neonGreen">{job.title}</h3>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-gray-700 mb-2">{job.description}</p>
                <h4 className="font-bold text-neonGreen">Requirements:</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {job.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex}>{requirement}</li>
                  ))}
                </ul>
                <a
                  href={job.applyLink}
                  className="inline-block bg-neonGreen text-black px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Career;





