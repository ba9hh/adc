import React from "react";
import { Eye, Edit, Trash2, Search, Filter, Plus } from "lucide-react";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      orders: 12,
      spent: "$1,245.00",
      joined: "2025-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      orders: 8,
      spent: "$892.50",
      joined: "2025-02-20",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      orders: 15,
      spent: "$2,134.00",
      joined: "2024-11-10",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      orders: 5,
      spent: "$467.99",
      joined: "2025-03-05",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      orders: 20,
      spent: "$3,456.00",
      joined: "2024-09-12",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-slate-900">
          Customers Management
        </h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200">
          <Plus size={20} />
          Add Customer
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
              placeholder="Search customers..."
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
                  Name
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Email
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Orders
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Total Spent
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Joined
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <span className="font-medium text-slate-900">
                        {customer.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {customer.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {customer.orders}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                    {customer.spent}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">
                    {customer.joined}
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

export default Customers;
