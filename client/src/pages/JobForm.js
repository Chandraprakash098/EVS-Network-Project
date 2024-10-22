// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';
// import { API_URL } from '../config';

// const JobForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     title: '',
//     location: '',
//     description: '',
//     requirements: '',
//     // applyLink: ''
   
//   });

//   useEffect(() => {
//     if (id) {
//       fetchJob();
//     }
//   }, [id]);

//   const fetchJob = async () => {
//     try {
//       const token = localStorage.getItem('adminToken');
//       const response = await axios.get(`${API_URL}/api/jobs/${id}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const job = response.data;
//       setFormData({
//         ...job,
//         requirements: job.requirements.join('\n') // Convert array to newline-separated string
//       });
//     } catch (error) {
//       setError('Error fetching job');
//       console.error('Error:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const token = localStorage.getItem('adminToken');
//       const jobData = {
//         ...formData,
//         requirements: formData.requirements
//           .split('\n')
//           .map(req => req.trim())
//           .filter(req => req) // Remove empty lines
//       };

//       if (id) {
//         await axios.put(`${API_URL}/api/jobs/${id}`, jobData, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       } else {
//         await axios.post(`${API_URL}/api/jobs`, jobData, {
//           headers: { Authorization: `Bearer ${token}` }
//         });
//       }

//       navigate('/admin/dashboard');
//     } catch (error) {
//       setError('Error saving job');
//       console.error('Error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-24 px-4">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
//         <h1 className="text-2xl font-bold mb-6">
//           {id ? 'Edit Job Listing' : 'Create New Job Listing'}
//         </h1>

//         {error && (
//           <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 mb-2">Job Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">Description</label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-2 border rounded h-32"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 mb-2">
//               Requirements (one per line)
//             </label>
//             <textarea
//               name="requirements"
//               value={formData.requirements}
//               onChange={handleChange}
//               className="w-full p-2 border rounded h-32"
//               placeholder="Bachelor's degree in Computer Science&#10;3+ years of experience&#10;Strong communication skills"
//               required
//             />
//           </div>

//           {/* <div>
//             <label className="block text-gray-700 mb-2">Apply Link</label>
//             <input
//               type="url"
//               name="applyLink"
//               value={formData.applyLink}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//           </div> */}



//           <div className="flex gap-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className={`px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ${
//                 loading ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             >
//               {loading ? 'Saving...' : 'Save Job Listing'}
//             </button>
//             <button
//               type="button"
//               onClick={() => navigate('/admin/dashboard')}
//               className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default JobForm;





import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../config';

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    requirements: '',
  });

  useEffect(() => {
    if (id) {
      fetchJob();
    }
  }, [id]);

  const fetchJob = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${API_URL}/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const job = response.data;
      setFormData({
        ...job,
        requirements: job.requirements.join('\n')
      });
    } catch (error) {
      setError('Error fetching job');
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('adminToken');
      const jobData = {
        ...formData,
        requirements: formData.requirements
          .split('\n')
          .map(req => req.trim())
          .filter(req => req)
      };

      if (id) {
        await axios.put(`${API_URL}/api/jobs/${id}`, jobData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post(`${API_URL}/api/jobs`, jobData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }

      navigate('/admin/dashboard');
    } catch (error) {
      setError('Error saving job');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-20 mb-8">
              {id ? 'Edit Job Listing' : 'Create New Job Listing'}
            </h1>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-lg mb-6 animate-fade-in">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-hover:text-blue-600">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-hover:text-blue-600">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-hover:text-blue-600">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-[160px] resize-y"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors duration-200 group-hover:text-blue-600">
                  Requirements (one per line)
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 min-h-[160px] resize-y"
                  placeholder="Bachelor's degree in Computer Science&#10;3+ years of experience&#10;Strong communication skills"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-1/2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold 
                           hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:ring-blue-300 
                           transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                           transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {loading ? 'Saving...' : 'Save Job Listing'}
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/admin/dashboard')}
                  className="w-full sm:w-1/2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold
                           hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 
                           transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobForm;

