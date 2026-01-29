import React, { useState } from "react";
import { X } from "lucide-react";
const AddCategoryModal = ({ isOpen, onClose, onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    name: "",
    icon: "📦",
    color: "from-blue-400 to-cyan-500",
  });

  const colorOptions = [
    { value: "from-blue-400 to-cyan-500", label: "Blue" },
    { value: "from-purple-400 to-pink-500", label: "Purple" },
    { value: "from-green-400 to-emerald-500", label: "Green" },
    { value: "from-amber-400 to-orange-500", label: "Orange" },
    { value: "from-red-400 to-rose-500", label: "Red" },
    { value: "from-indigo-400 to-purple-500", label: "Indigo" },
    { value: "from-pink-400 to-rose-500", label: "Pink" },
    { value: "from-teal-400 to-cyan-500", label: "Teal" },
  ];

  const iconOptions = [
    "💻",
    "📱",
    "👕",
    "👗",
    "📚",
    "🏠",
    "🎮",
    "⚽",
    "🎨",
    "🎵",
    "🍔",
    "☕",
    "🚗",
    "✈️",
    "💼",
    "🎁",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
          <h3 className="text-2xl font-bold text-slate-900">
            Add New Category
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Category Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Category Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="e.g., Electronics"
            />
          </div>

          {/* Icon Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Icon *
            </label>
            <div className="grid grid-cols-8 gap-2">
              {iconOptions.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => setFormData({ ...formData, icon })}
                  className={`text-2xl p-2 rounded-lg border-2 transition-all ${
                    formData.icon === icon
                      ? "border-amber-500 bg-amber-50 scale-110"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Color Theme *
            </label>
            <div className="grid grid-cols-2 gap-3">
              {colorOptions.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, color: color.value })
                  }
                  className={`p-3 rounded-lg border-2 transition-all ${
                    formData.color === color.value
                      ? "border-amber-500 ring-2 ring-amber-200"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`h-8 rounded bg-gradient-to-r ${color.value} mb-2`}
                  ></div>
                  <p className="text-sm font-medium text-slate-700">
                    {color.label}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Preview</p>
            <div className="bg-white rounded-xl p-4 shadow">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-br ${formData.color} flex items-center justify-center text-3xl mb-2 shadow`}
              >
                {formData.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                {formData.name || "Category Name"}
              </h4>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
