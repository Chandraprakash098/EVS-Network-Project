import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import { Plus, LogOut, Edit2, Trash2, Menu } from "lucide-react";
import MusicBollywood from "./MusicBollywood";
import MusicHollywood from "./MusicHollywood";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [bollywoodEntertainment, setBollywoodEntertainment] = useState([]);
  const [hollywoodEntertainment, setHollywoodEntertainment] = useState([]);
  const [music, setMusic] = useState([]);
  const [musicBollywood, setMusicBollywood] = useState([]);
  const [musicHollywood, setMusicHollywood] = useState([]);
  const [traditionalArt, setTraditionalArt] = useState([]);
  const [traditionalArtBollywood, setTraditionalArtBollywood] = useState([]);
  const [traditionalArtHollywood, setTraditionalArtHollywood] = useState([]);
  const [category, setCategory] = useState(""); // For selecting category to upload images for
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const[deleteStatus,setDeleteStatus]=useState([])
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("adminToken");
    try {
      const [
        blogsRes,
        jobsRes,
        entertainmentRes,
        bollywoodEntertainmentRes,
        hollywoodEntertainmentRes,
        musicRes,
        musicBollywoodRes,
        musicHollywoodRes,
        artRes,
        bollyArtRes,
        hollyArtRes,
      ] = await Promise.all([
        axios.get(`${API_URL}/api/blogs`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/jobs`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/hot-entertainment`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/hot-bollywood-entertainment`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/hot-hollywood-entertainment`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/music`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/music-bollywood`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/music-hollywood`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/traditional-art`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/traditional-art-bollywood`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get(`${API_URL}/api/traditional-art-hollywood`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setBlogs(blogsRes.data);
      setJobs(jobsRes.data);
      setEntertainment(entertainmentRes.data);
      setBollywoodEntertainment(bollywoodEntertainmentRes.data);
      setHollywoodEntertainment(hollywoodEntertainmentRes.data);
      setMusic(musicRes.data);
      setMusicBollywood(musicBollywoodRes.data);
      setMusicHollywood(musicHollywoodRes.data);
      setTraditionalArt(artRes.data);
      setTraditionalArtBollywood(bollyArtRes.data);
      setTraditionalArtHollywood(hollyArtRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleDeleteBlog = async (blogId) => {
  //   const token = localStorage.getItem("adminToken");
  //   if (window.confirm("Are you sure you want to delete this blog post?")) {
  //     try {
  //       await axios.delete(`${API_URL}/api/blogs/${blogId}`, {
  //         headers: { Authorization: `Bearer ${token}` },
  //       });
  //       setBlogs(blogs.filter((blog) => blog._id !== blogId));
  //     } catch (error) {
  //       console.error("Error deleting blog:", error);
  //     }
  //   }
  // };


  const handleDeleteBlog = async (blogId) => {
    if (!window.confirm("Are you sure you want to delete this blog post?")) {
      return;
    }

    setDeleteStatus({ show: true, message: "Deleting...", type: "info" });

    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        throw new Error("No authentication token found");
      }

      await axios.delete(`${API_URL}/api/blogs/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setBlogs(blogs.filter((blog) => blog._id !== blogId));
      setDeleteStatus({
        show: true,
        message: "Blog post deleted successfully",
        type: "success",
      });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setDeleteStatus({ show: false, message: "", type: "" });
      }, 3000);
    } catch (error) {
      console.error("Error deleting blog:", error);

      let errorMessage = "Failed to delete blog post. ";
      if (error.response?.status === 401) {
        errorMessage += "Please login again.";
      } else if (error.response?.data?.error) {
        errorMessage += error.response.data.error;
      } else {
        errorMessage += "Please try again.";
      }

      setDeleteStatus({
        show: true,
        message: errorMessage,
        type: "error",
      });
    }
  };

  const handleDeleteJob = async (jobId) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this job listing?")) {
      try {
        await axios.delete(`${API_URL}/api/jobs/${jobId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setJobs(jobs.filter((job) => job._id !== jobId));
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };

  const handleDeleteEntertainment = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (
      window.confirm("Are you sure you want to delete this entertainment item?")
    ) {
      try {
        await axios.delete(`${API_URL}/api/hot-entertainment/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEntertainment(entertainment.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting entertainment:", error);
      }
    }
  };

  const handleDeleteBollywoodEntertainment = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (
      window.confirm(
        "Are you sure you want to delete this Bollywood entertainment item?"
      )
    ) {
      try {
        await axios.delete(`${API_URL}/api/hot-bollywood-entertainment/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBollywoodEntertainment(
          bollywoodEntertainment.filter((item) => item._id !== id)
        );
      } catch (error) {
        console.error("Error deleting Bollywood entertainment:", error);
        alert("Failed to delete Bollywood entertainment item");
      }
    }
  };

  const handleDeleteHollywoodEntertainment = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (
      window.confirm(
        "Are you sure you want to delete this Bollywood entertainment item?"
      )
    ) {
      try {
        await axios.delete(`${API_URL}/api/hot-hollywood-entertainment/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setHollywoodEntertainment(
          hollywoodEntertainment.filter((item) => item._id !== id)
        );
      } catch (error) {
        console.error("Error deleting Hollywood entertainment:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleDeleteMusic = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this music item ?")) {
      try {
        await axios.delete(`${API_URL}/api/music/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMusic(music.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting Hollywood entertainment:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleDeleteBollywoodMusic = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this music item ?")) {
      try {
        await axios.delete(`${API_URL}/api/music-bollywood/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMusicBollywood(musicBollywood.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting Hollywood entertainment:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleDeleteHollywoodMusic = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this music item ?")) {
      try {
        await axios.delete(`${API_URL}/api/music-hollywood/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMusicHollywood(musicHollywood.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting Hollywood entertainment:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleDeleteTraditionalArt = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this music item ?")) {
      try {
        await axios.delete(`${API_URL}/api/traditional-art/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTraditionalArt(traditionalArt.filter((item) => item._id !== id));
      } catch (error) {
        console.error("Error deleting Traditional Art:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleDeleteTraditionalArtBollywood = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this music item ?")) {
      try {
        await axios.delete(`${API_URL}/api/traditional-art-bollywood/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTraditionalArtBollywood(
          traditionalArtBollywood.filter((item) => item._id !== id)
        );
      } catch (error) {
        console.error("Error deleting Traditional Art:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleDeleteTraditionalArtHollywood = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Are you sure you want to delete this music item ?")) {
      try {
        await axios.delete(`${API_URL}/api/traditional-art-hollywood/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTraditionalArtHollywood(
          traditionalArtHollywood.filter((item) => item._id !== id)
        );
      } catch (error) {
        console.error("Error deleting Traditional Art:", error);
        alert("Failed to delete hollywood entertainment item");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  const SectionCard = ({
    title,
    items = [],
    addLink,
    onDelete,
    editBaseLink,
    extraInfo,
    category,
  }) => (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>
          <Link
            to={addLink}
            className="flex items-center gap-2 bg-white text-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <Plus size={16} />
            <span>Add New</span>
          </Link>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          {(Array.isArray(items) ? items : []).map((item) => (
            <div
              key={item._id}
              className="group bg-gray-50 p-3 sm:p-4 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200 text-sm sm:text-base">
                {item.title}
              </h3>
              {extraInfo && extraInfo(item)}
              <div className="flex flex-wrap gap-3 mt-2 sm:mt-3">
                <Link
                  to={`${editBaseLink}/${item._id}`}
                  className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors duration-200 text-sm"
                >
                  <Edit2 size={14} />
                  <span>Edit</span>
                </Link>
                <button
                  onClick={() => onDelete(item._id)}
                  className="flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors duration-200 text-sm"
                >
                  <Trash2 size={14} />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center py-6 sm:py-8 text-gray-500 text-sm sm:text-base">
              No items found. Add your first one!
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-3 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto mt-16 sm:mt-20">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
              <div className="bg-blue-600 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl sm:text-2xl font-bold">
                  A
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Admin Dashboard
              </h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition duration-200 w-full sm:w-auto justify-center"
            >
              <LogOut size={16} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Logout</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {/* <SectionCard
            title="Blog Posts"
            items={blogs}
            addLink="/admin/blog/new"
            onDelete={handleDeleteBlog}
            editBaseLink="/admin/blog/edit"
          /> */}

          {/* <SectionCard
            title="Hot-Entertainment"
            items={entertainment}
            addLink="/admin/hot-entertainment/new"
            onDelete={handleDeleteEntertainment}
            editBaseLink="/admin/hot-entertainment/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
            category="hot-entertainment"
          /> */}

          <SectionCard
            title="Hot-Bollywood-Entertainment"
            items={bollywoodEntertainment}
            addLink="/admin/hot-bollywood-entertainment/new"
            onDelete={handleDeleteBollywoodEntertainment}
            editBaseLink="/admin/hot-bollywood-entertainment/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
            category="hot-bollywood-entertainment"
          />

          <SectionCard
            title="Hot-Hollywood-Entertainment"
            items={hollywoodEntertainment}
            addLink="/admin/hot-hollywood-entertainment/new"
            onDelete={handleDeleteHollywoodEntertainment}
            editBaseLink="/admin/hot-hollywood-entertainment/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          />

          {/* <SectionCard
            title="Music"
            items={music}
            addLink="/admin/music/new"
            onDelete={handleDeleteMusic}
            editBaseLink="/admin/music/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          /> */}

          <SectionCard
            title="Bollywood Music"
            items={musicBollywood}
            addLink="/admin/music-bollywood/new"
            onDelete={handleDeleteBollywoodMusic}
            editBaseLink="/admin/music-bollywood/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          />

          <SectionCard
            title="Hollywoood Music"
            items={musicHollywood}
            addLink="/admin/music-hollywood/new"
            onDelete={handleDeleteHollywoodMusic}
            editBaseLink="/admin/music-hollywood/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          />

          {/* <SectionCard
            title="Tradional Art"
            items={traditionalArt}
            addLink="/admin/traditional-art/new"
            onDelete={handleDeleteTraditionalArt}
            editBaseLink="/admin/traditional-art/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          /> */}

          <SectionCard
            title="Tradional Art National"
            items={traditionalArtBollywood}
            addLink="/admin/traditional-art-bollywood/new"
            onDelete={handleDeleteTraditionalArtBollywood}
            editBaseLink="/admin/traditional-art-bollywood/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          />

          <SectionCard
            title="Tradional Art International"
            items={traditionalArtHollywood}
            addLink="/admin/traditional-art-hollywood/new"
            onDelete={handleDeleteTraditionalArtHollywood}
            editBaseLink="/admin/traditional-art-hollywood/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.category}
              </p>
            )}
          />

          <SectionCard
            title="Job Listings"
            items={jobs}
            addLink="/admin/job/new"
            onDelete={handleDeleteJob}
            editBaseLink="/admin/job/edit"
            extraInfo={(item) => (
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                {item.location}
              </p>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;





