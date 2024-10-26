import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config";

const FormTraditionalArtHollywood = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Trending",
    icon: "Star",
    image: null,
  });
  const [previewImage, setPreviewImage] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Simple icon representations using emoji or text
  const iconOptions = {
    Star: "⭐",
    Film: "🎬",
    Play: "▶️",
    Sparkles: "✨",
    TrendingUp: "📈",
    Tv: "📺",
  };

  useEffect(() => {
    if (id) {
      fetchArts();
    }
  }, [id]);

  const fetchArts = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(
        `${API_URL}/api/traditional-art-hollywood/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const { title, description, category, icon, image } = response.data;
      setFormData({ title, description, category, icon });
      setPreviewImage(image);
    } catch (error) {
      setError("Failed to fetch entertainment data");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) {
        // 5MB limit
        setError("Image size must be less than 5MB");
        return;
      }
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== undefined) {
        form.append(key, formData[key]);
      }
    });

    try {
      const token = localStorage.getItem("adminToken");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      if (id) {
        await axios.put(
          `${API_URL}/api/traditional-art-hollywood/${id}`,
          form,
          { headers }
        );
      } else {
        await axios.post(`${API_URL}/api/traditional-art-hollywood`, form, {
          headers,
        });
      }
      navigate("/admin/dashboard");
    } catch (error) {
      console.log("Error:", error);
      setError(error.response?.data?.message || "Error saving entertainment");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl">
        <div className="p-6 mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
            {id
              ? "Edit Entertainment Item"
              : "Add New Traditional Hollywood Art Item"}
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                required
                placeholder="Enter title..."
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                Article
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all h-32"
                required
                placeholder="Write your article..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-200">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700/50 text-white border border-gray-600 focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-all"
                >
                  {[
                    "Trending",
                    "Featured",
                    "New Release",
                    "Fashion",
                    "Awards",
                    "Streaming",
                  ].map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-200">
                  Icon
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(iconOptions).map(([name, icon]) => (
                    <button
                      key={name}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, icon: name }))
                      }
                      className={`p-3 rounded-lg border ${
                        formData.icon === name
                          ? "bg-green-400/20 border-green-400 text-green-400"
                          : "bg-gray-700/50 border-gray-600 text-gray-300"
                      } hover:bg-gray-600/50 transition-all text-xl`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-200">
                Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="hidden"
                  accept="image/*"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center w-full p-4 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-green-400 transition-all"
                >
                  <div className="text-center">
                    <span className="text-3xl">📸</span>
                    <p className="mt-2 text-sm text-gray-400">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                </label>
              </div>

              {previewImage && (
                <div className="relative mt-4 rounded-lg overflow-hidden">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-green-400 text-gray-900 px-6 py-3 rounded-lg font-semibold 
                ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-500"
                } 
                transition-all transform hover:scale-[1.02] active:scale-[0.98]`}
            >
              {isSubmitting ? "Saving..." : id ? "Update" : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTraditionalArtHollywood;
