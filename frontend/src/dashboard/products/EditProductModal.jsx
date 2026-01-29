import React, { useState } from "react";
import { X } from "lucide-react";
const EditProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  product,
  categories,
  isLoading,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    description: "",
    image: "📦",
  });

  React.useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || "",
        category: product.category || "",
        price: product.price?.toString() || "",
        stock: product.stock?.toString() || "",
        description: product.description || "",
        image: product.image || "📦",
      });
    }
  }, [product]);

  const iconOptions = [
    "📦",
    "🎧",
    "⌚",
    "💼",
    "🔌",
    "💡",
    "👟",
    "🧘",
    "☕",
    "🔊",
    "🪴",
    "📱",
    "💻",
    "🎮",
    "📚",
    "🎨",
    "🍔",
    "🚗",
    "✈️",
    "🎁",
    "👕",
    "👗",
    "⚽",
    "🎵",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
          <h3 className="text-2xl font-bold text-slate-900">Edit Product</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="e.g., Wireless Headphones"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select a category</option>
                {categories?.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                step="0.01"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="99.99"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Stock Quantity *
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="50"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                placeholder="Product description..."
              />
            </div>

            {/* Icon Selection */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Product Icon *
              </label>
              <div className="grid grid-cols-12 gap-2">
                {iconOptions.map((icon) => (
                  <button
                    key={icon}
                    type="button"
                    onClick={() => setFormData({ ...formData, image: icon })}
                    className={`text-2xl p-2 rounded-lg border-2 transition-all ${
                      formData.image === icon
                        ? "border-amber-500 bg-amber-50 scale-110"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-slate-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-slate-700 mb-3">Preview</p>
            <div className="bg-white border border-slate-200 rounded-xl p-4 max-w-xs">
              <div className="text-6xl mb-4 text-center">{formData.image}</div>
              <h4 className="font-bold text-slate-900 mb-2">
                {formData.name || "Product Name"}
              </h4>
              <p className="text-sm text-slate-600 mb-3">
                {formData.category || "Category"}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-slate-900">
                  ${formData.price || "0.00"}
                </span>
                <span className="text-sm text-slate-600">
                  Stock: {formData.stock || 0}
                </span>
              </div>
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
              {isLoading ? "Updating..." : "Update Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
