import React from "react";
import { Eye, Edit, Trash2, Search, Filter, Plus } from "lucide-react";

const Orders = () => {
  const orders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      date: "2026-01-28",
      total: "$125.00",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      date: "2026-01-28",
      total: "$89.50",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      customer: "Bob Johnson",
      date: "2026-01-27",
      total: "$234.00",
      status: "Shipped",
    },
    {
      id: "#ORD-004",
      customer: "Alice Brown",
      date: "2026-01-27",
      total: "$67.99",
      status: "Pending",
    },
    {
      id: "#ORD-005",
      customer: "Charlie Wilson",
      date: "2026-01-26",
      total: "$456.00",
      status: "Completed",
    },
  ];

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
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

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
              placeholder="Search orders..."
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50">
            <Filter size={20} />
            Filter
          </button>
        </div>

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
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
