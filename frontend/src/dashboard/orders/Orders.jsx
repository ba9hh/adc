import React, { useState } from "react";
import {
  Eye,
  Edit,
  Trash2,
  Search,
  Filter,
  Plus,
  X,
  AlertCircle,
  ShoppingCart,
  Calendar,
  DollarSign,
  User,
} from "lucide-react";
import { useOrders, useUpdateOrderStatus } from "../../services/orders/queries";
import { useCustomers } from "../../services/customers/queries";
import ViewOrderModal from "./ViewOrderModal.jsx";
import EditOrderModal from "./EditOrderModal.jsx";
import DeleteOrderModal from "./DeleteOrderModal.jsx";
const Orders = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch orders with filters
  const {
    data: orders,
    isLoading,
    error,
  } = useOrders({
    status: statusFilter,
  });

  // Fetch customers for reference
  const { data: customers } = useCustomers();

  // Mutations
  const updateOrderStatus = useUpdateOrderStatus();

  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setIsViewModalOpen(true);
  };

  const handleEditClick = (order) => {
    setSelectedOrder(order);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (order) => {
    setSelectedOrder(order);
    setIsDeleteModalOpen(true);
  };

  const handleStatusUpdate = (newStatus) => {
    updateOrderStatus.mutate(
      {
        id: selectedOrder.id,
        status: newStatus,
      },
      {
        onSuccess: () => {
          setIsEditModalOpen(false);
          setSelectedOrder(null);
        },
      },
    );
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setIsFilterOpen(false);
  };

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

  // Filter orders by search term (client-side)
  const filteredOrders = orders?.filter((order) => {
    const searchLower = searchTerm.toLowerCase();
    const customerName = order.customers?.name?.toLowerCase() || "";
    const orderId = order.id?.toString().toLowerCase() || "";

    return customerName.includes(searchLower) || orderId.includes(searchLower);
  });

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
        <AlertCircle className="text-red-500" size={24} />
        <div>
          <h3 className="font-semibold text-red-800">Error loading orders</h3>
          <p className="text-red-600 text-sm">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-900">Orders Management</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200">
          <Plus size={20} />
          New Order
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
              placeholder="Search orders by ID or customer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                statusFilter
                  ? "border-amber-500 bg-amber-50 text-amber-700"
                  : "border-slate-300 hover:bg-slate-50"
              }`}
            >
              <Filter size={20} />
              Filter
              {statusFilter && (
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
                        Order Status
                      </label>
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <option value="">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
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
        ) : filteredOrders && filteredOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                    Order ID
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                    Customer
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                    Date
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                    Total
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                    Status
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">
                      #ORD-{order.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {order.customers?.name || "Unknown"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      ${order.total?.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                          order.status,
                        )}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewClick(order)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEditClick(order)}
                          className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="Edit Status"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(order)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Order"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <ShoppingCart className="text-slate-300 mb-4" size={64} />
            <p className="text-slate-500 text-lg font-medium">
              No orders found
            </p>
            <p className="text-slate-400 text-sm">
              {searchTerm || statusFilter
                ? "Try adjusting your filters"
                : "Orders will appear here once customers make purchases"}
            </p>
          </div>
        )}
      </div>

      {/* View Order Modal */}
      <ViewOrderModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedOrder(null);
        }}
        order={selectedOrder}
      />

      {/* Edit Order Status Modal */}
      <EditOrderModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedOrder(null);
        }}
        onSubmit={handleStatusUpdate}
        order={selectedOrder}
        isLoading={updateOrderStatus.isPending}
      />

      {/* Delete Confirmation Modal */}
      <DeleteOrderModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedOrder(null);
        }}
        order={selectedOrder}
      />
    </div>
  );
};

export default Orders;
