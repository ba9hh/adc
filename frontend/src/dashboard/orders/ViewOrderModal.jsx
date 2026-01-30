import React from "react";
import { X, Calendar, DollarSign } from "lucide-react";
const ViewOrderModal = ({ isOpen, onClose, order }) => {
  if (!isOpen || !order) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Shipped":
        return "bg-purple-100 text-purple-700";
      case "Pending":
        return "bg-amber-100 text-amber-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
          <h3 className="text-2xl font-bold text-slate-900">Order Details</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Order Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-600">Order ID</p>
              <p className="text-xl font-bold text-slate-900">
                #ORD-{order.id}
              </p>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(
                order.status,
              )}`}
            >
              {order.status}
            </span>
          </div>

          {/* Customer Information */}
          <div className="bg-slate-50 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {order.customers?.name?.charAt(0) || "?"}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {order.customers?.name || "Unknown Customer"}
                </p>
                <p className="text-sm text-slate-600">
                  {order.customers?.email || "No email"}
                </p>
              </div>
            </div>

            {order.shipping_address && (
              <div className="mt-3 pt-3 border-t border-slate-200">
                <p className="text-sm font-medium text-slate-700 mb-1">
                  Shipping Address
                </p>
                <p className="text-sm text-slate-600">
                  {order.shipping_address}
                </p>
              </div>
            )}
          </div>

          {/* Order Information */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="text-blue-600" size={20} />
                <p className="text-sm font-medium text-blue-900">Order Date</p>
              </div>
              <p className="text-lg font-semibold text-blue-900">
                {new Date(order.created_at).toLocaleDateString()}
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-green-600" size={20} />
                <p className="text-sm font-medium text-green-900">
                  Total Amount
                </p>
              </div>
              <p className="text-lg font-semibold text-green-900">
                ${order.total?.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Payment Method */}
          {order.payment_method && (
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">
                Payment Method
              </p>
              <p className="text-slate-900">{order.payment_method}</p>
            </div>
          )}

          {/* Order Items (if available) */}
          {order.order_items && order.order_items.length > 0 && (
            <div>
              <p className="text-sm font-medium text-slate-700 mb-3">
                Order Items
              </p>
              <div className="space-y-2">
                {order.order_items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-slate-900">
                        {item.products?.name || "Product"}
                      </p>
                      <p className="text-sm text-slate-600">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-slate-900">
                      ${item.price?.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {order.notes && (
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">Notes</p>
              <p className="text-slate-600 bg-slate-50 p-3 rounded-lg">
                {order.notes}
              </p>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-slate-200">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewOrderModal;
