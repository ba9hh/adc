import React, { useState } from "react";
import { Edit, Trash2, Plus, X, AlertCircle } from "lucide-react";
import {
  useCategories,
  useAddCategory,
  useUpdateCategory,
  useDeleteCategory,
} from "../../services/categories/queries";
import AddCategoryModal from "./AddCategoryModal.jsx";
import EditCategoryModal from "./EditCategoryModal.jsx";
import DeleteCategoryModal from "./DeleteCategoryModal.jsx";
const Categories = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch categories
  const { data: categories, isLoading, error } = useCategories();

  // Mutations
  const addCategory = useAddCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (category) => {
    setSelectedCategory(category);
    setIsDeleteModalOpen(true);
  };

  const handleAddSubmit = (categoryData) => {
    addCategory.mutate(categoryData, {
      onSuccess: () => {
        setIsAddModalOpen(false);
      },
    });
  };

  const handleEditSubmit = (categoryData) => {
    updateCategory.mutate(
      {
        id: selectedCategory.id,
        updates: categoryData,
      },
      {
        onSuccess: () => {
          setIsEditModalOpen(false);
          setSelectedCategory(null);
        },
      },
    );
  };

  const handleDeleteConfirm = () => {
    deleteCategory.mutate(selectedCategory.id, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        setSelectedCategory(null);
      },
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
        <AlertCircle className="text-red-500" size={24} />
        <div>
          <h3 className="font-semibold text-red-800">
            Error loading categories
          </h3>
          <p className="text-red-600 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-900">
          Categories Management
        </h3>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
          <Plus size={20} />
          Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div
              className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-4xl mb-4 shadow-lg`}
            >
              {category.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">
              {category.name}
            </h4>
            <p className="text-slate-600 mb-4">
              {category.products_count || 0} products
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => handleEditClick(category)}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Edit size={16} />
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(category)}
                className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Category Modal */}
      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        isLoading={addCategory.isPending}
      />

      {/* Edit Category Modal */}
      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCategory(null);
        }}
        onSubmit={handleEditSubmit}
        category={selectedCategory}
        isLoading={updateCategory.isPending}
      />

      {/* Delete Confirmation Modal */}
      <DeleteCategoryModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedCategory(null);
        }}
        onConfirm={handleDeleteConfirm}
        category={selectedCategory}
        isLoading={deleteCategory.isPending}
      />
    </div>
  );
};
export default Categories;
