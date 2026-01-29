import React, { useState } from "react";
import {
  Edit,
  Trash2,
  Search,
  Filter,
  Plus,
  X,
  AlertCircle,
  Package,
} from "lucide-react";
import {
  useProducts,
  useAddProduct,
  useUpdateProduct,
  useDeleteProduct,
} from "../../services/products/queries";
import { useCategories } from "../../services/categories/queries";
import AddProductModal from "./AddProductModal.jsx";
import EditProductModal from "./EditProductModal.jsx";
import DeleteProductModal from "./DeleteProductModal.jsx";
const Products = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch products with filters
  const {
    data: products,
    isLoading,
    error,
  } = useProducts({
    search: searchTerm,
    category: categoryFilter,
  });

  // Fetch categories for filter dropdown
  const { data: categories } = useCategories();

  // Mutations
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (product) => {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  };

  const handleAddSubmit = (productData) => {
    addProduct.mutate(productData, {
      onSuccess: () => {
        setIsAddModalOpen(false);
      },
    });
  };

  const handleEditSubmit = (productData) => {
    updateProduct.mutate(
      {
        id: selectedProduct.id,
        updates: productData,
      },
      {
        onSuccess: () => {
          setIsEditModalOpen(false);
          setSelectedProduct(null);
        },
      },
    );
  };

  const handleDeleteConfirm = () => {
    deleteProduct.mutate(selectedProduct.id, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
      },
    });
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setIsFilterOpen(false);
  };

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
        <AlertCircle className="text-red-500" size={24} />
        <div>
          <h3 className="font-semibold text-red-800">Error loading products</h3>
          <p className="text-red-600 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-900">
          Products Management
        </h3>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Plus size={20} />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex gap-3">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                categoryFilter
                  ? "border-amber-500 bg-amber-50 text-amber-700"
                  : "border-slate-300 hover:bg-slate-50"
              }`}
            >
              <Filter size={20} />
              Filter
              {categoryFilter && (
                <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full">
                  1
                </span>
              )}
            </button>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-slate-200 z-10">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-slate-900">Filters</h4>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="p-1 hover:bg-slate-100 rounded"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Category
                      </label>
                      <select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">All Categories</option>
                        {categories?.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.icon} {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={handleClearFilters}
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 text-sm"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => setIsFilterOpen(false)}
                        className="flex-1 px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 text-sm"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h4 className="font-bold text-slate-900 mb-2">
                  {product.name}
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  {product.category}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-slate-900">
                    ${product.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      product.stock < 20
                        ? "text-red-600"
                        : product.stock < 50
                          ? "text-amber-600"
                          : "text-green-600"
                    }`}
                  >
                    Stock: {product.stock}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                  >
                    <Edit size={16} />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(product)}
                    className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Package className="text-slate-300 mb-4" size={64} />
            <p className="text-slate-500 text-lg font-medium">
              No products found
            </p>
            <p className="text-slate-400 text-sm">
              {searchTerm || categoryFilter
                ? "Try adjusting your filters"
                : "Add your first product to get started"}
            </p>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        categories={categories}
        isLoading={addProduct.isPending}
      />

      {/* Edit Product Modal */}
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProduct(null);
        }}
        onSubmit={handleEditSubmit}
        product={selectedProduct}
        categories={categories}
        isLoading={updateProduct.isPending}
      />

      {/* Delete Confirmation Modal */}
      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedProduct(null);
        }}
        onConfirm={handleDeleteConfirm}
        product={selectedProduct}
        isLoading={deleteProduct.isPending}
      />
    </div>
  );
};

export default Products;
