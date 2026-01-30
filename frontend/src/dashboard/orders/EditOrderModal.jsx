import React, { useState } from "react";
import { X } from "lucide-react";
const EditOrderModal = ({ isOpen, onClose, onSubmit, order, isLoading }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  React.useEffect(() => {
    if (order) {
      setSelectedStatus(order.status || "Pending");
    }
  }, [order]);

  const statuses = [
    { value: "Pending", color: "bg-amber-100 text-amber-700 border-amber-300" },
    { value: "Processing", color: "bg-blue-100 text-blue-700 border-blue-300" },
    {
      value: "Shipped",
      color: "bg-purple-100 text-purple-700 border-purple-300",
    },
    {
      value: "Completed",
      color: "bg-green-100 text-green-700 border-green-300",
    },
    { value: "Cancelled", color: "bg-red-100 text-red-700 border-red-300" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedStatus);
  };

  if (!isOpen || !order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">
            Update Order Status
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <p className="text-sm text-slate-600 mb-1">Order ID</p>
            <p className="text-lg font-bold text-slate-900">#ORD-{order.id}</p>
          </div>

          <div>
            <p className="text-sm text-slate-600 mb-1">Customer</p>
            <p className="font-medium text-slate-900">
              {order.customers?.name || "Unknown"}
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Select New Status
            </label>
            <div className="space-y-2">
              {statuses.map((status) => (
                <button
                  key={status.value}
                  type="button"
                  onClick={() => setSelectedStatus(status.value)}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left font-medium ${
                    selectedStatus === status.value
                      ? `${status.color} border-current ring-2 ring-offset-2`
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {status.value}
                </button>
              ))}
            </div>
          </div>

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
              {isLoading ? "Updating..." : "Update Status"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrderModal;
