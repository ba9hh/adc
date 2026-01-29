import React from "react";
import { AlertCircle } from "lucide-react";
const DeleteCategoryModal = ({
  isOpen,
  onClose,
  onConfirm,
  category,
  isLoading,
}) => {
  if (!isOpen || !category) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-red-600" size={32} />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
            Delete Category
          </h3>

          <p className="text-slate-600 text-center mb-6">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-slate-900">
              "{category.name}"
            </span>
            ? This action cannot be undone.
          </p>

          {category.products_count > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
              <p className="text-amber-800 text-sm">
                <strong>Warning:</strong> This category has{" "}
                {category.products_count} product(s). Deleting it may affect
                these products.
              </p>
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
