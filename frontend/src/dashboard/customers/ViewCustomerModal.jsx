import React from "react";
import {
  X,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  DollarSign,
  Calendar,
} from "lucide-react";
const ViewCustomerModal = ({ isOpen, onClose, customer }) => {
  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between sticky top-0 bg-white">
          <h3 className="text-2xl font-bold text-slate-900">
            Customer Details
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Customer Header */}
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-3xl font-bold">
              {customer.name?.charAt(0) || "?"}
            </div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900">
                {customer.name}
              </h4>
              <p className="text-slate-600">{customer.email}</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <ShoppingBag className="text-blue-600" size={20} />
                <p className="text-sm font-medium text-blue-900">
                  Total Orders
                </p>
              </div>
              <p className="text-2xl font-bold text-blue-900">
                {customer.orders_count || 0}
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-green-600" size={20} />
                <p className="text-sm font-medium text-green-900">
                  Total Spent
                </p>
              </div>
              <p className="text-2xl font-bold text-green-900">
                ${customer.total_spent?.toFixed(2) || "0.00"}
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-slate-50 rounded-lg p-4 space-y-3">
            <h5 className="font-semibold text-slate-900 mb-3">
              Contact Information
            </h5>

            <div className="flex items-center gap-3">
              <Mail className="text-slate-400" size={18} />
              <div>
                <p className="text-xs text-slate-600">Email</p>
                <p className="text-slate-900">{customer.email}</p>
              </div>
            </div>

            {customer.phone && (
              <div className="flex items-center gap-3">
                <Phone className="text-slate-400" size={18} />
                <div>
                  <p className="text-xs text-slate-600">Phone</p>
                  <p className="text-slate-900">{customer.phone}</p>
                </div>
              </div>
            )}

            {(customer.address || customer.city || customer.country) && (
              <div className="flex items-start gap-3">
                <MapPin className="text-slate-400 mt-1" size={18} />
                <div>
                  <p className="text-xs text-slate-600">Address</p>
                  <p className="text-slate-900">
                    {customer.address && (
                      <>
                        {customer.address}
                        <br />
                      </>
                    )}
                    {customer.city &&
                      customer.country &&
                      `${customer.city}, ${customer.country}`}
                    {customer.city && !customer.country && customer.city}
                    {!customer.city && customer.country && customer.country}
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <Calendar className="text-slate-400" size={18} />
              <div>
                <p className="text-xs text-slate-600">Member Since</p>
                <p className="text-slate-900">
                  {new Date(customer.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Recent Orders (if available) */}
          {customer.orders && customer.orders.length > 0 && (
            <div>
              <h5 className="font-semibold text-slate-900 mb-3">
                Recent Orders
              </h5>
              <div className="space-y-2">
                {customer.orders.slice(0, 5).map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-slate-900">#{order.id}</p>
                      <p className="text-sm text-slate-600">
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-slate-900">
                        ${order.total?.toFixed(2)}
                      </p>
                      <p className="text-sm text-slate-600">{order.status}</p>
                    </div>
                  </div>
                ))}
              </div>
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

export default ViewCustomerModal;
