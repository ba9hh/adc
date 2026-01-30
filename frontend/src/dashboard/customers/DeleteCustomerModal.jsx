import React from "react";
import { AlertCircle } from "lucide-react";
const DeleteCustomerModal = ({
  isOpen,
  onClose,
  onConfirm,
  customer,
  isLoading,
}) => {
  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-red-600" size={32} />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
            Delete Customer
          </h3>

          <p className="text-slate-600 text-center mb-6">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-slate-900">
              "{customer.name}"
            </span>
            ? This action cannot be undone.
          </p>

          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                {customer.name?.charAt(0) || "?"}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{customer.name}</p>
                <p className="text-sm text-slate-600">{customer.email}</p>
              </div>
            </div>
            <div className="space-y-1 text-sm border-t border-slate-200 pt-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Total Orders:</span>
                <span className="font-medium text-slate-900">
                  {customer.orders_count || 0}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total Spent:</span>
                <span className="font-medium text-slate-900">
                  ${customer.total_spent?.toFixed(2) || "0.00"}
                </span>
              </div>
            </div>
          </div>

          {customer.orders_count > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
              <p className="text-amber-800 text-sm text-center">
                <strong>Warning:</strong> This customer has{" "}
                {customer.orders_count} order(s). Deleting will also remove all
                associated order history.
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
              {isLoading ? "Deleting..." : "Delete Customer"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomerModal;
