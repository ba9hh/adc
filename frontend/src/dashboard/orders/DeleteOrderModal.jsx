import React from "react";
import { AlertCircle } from "lucide-react";
const DeleteOrderModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-red-600" size={32} />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
            Delete Order
          </h3>

          <p className="text-slate-600 text-center mb-6">
            Are you sure you want to delete order{" "}
            <span className="font-semibold text-slate-900">
              #ORD-{order.id}
            </span>
            ? This action cannot be undone.
          </p>

          <div className="bg-slate-50 rounded-lg p-4 mb-6">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Customer:</span>
                <span className="font-medium text-slate-900">
                  {order.customers?.name || "Unknown"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Total:</span>
                <span className="font-medium text-slate-900">
                  ${order.total?.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Status:</span>
                <span className="font-medium text-slate-900">
                  {order.status}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
            <p className="text-amber-800 text-sm text-center">
              <strong>Note:</strong> Deleting this order will also remove all
              associated order items and records.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                // Here you would call the delete mutation
                console.log("Delete order:", order.id);
                onClose();
              }}
              className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Delete Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrderModal;
