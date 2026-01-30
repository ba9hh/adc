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
  User,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  DollarSign,
  Calendar,
} from "lucide-react";
import {
  useCustomers,
  useAddCustomer,
  useUpdateCustomer,
  useDeleteCustomer,
} from "../../services/customers/queries";
import ViewCustomerModal from "./ViewCustomerModal";
import AddCustomerModal from "./AddCustomerModal";
import EditCustomerModal from "./EditCustomerModal";
import DeleteCustomerModal from "./DeleteCustomerModal";

const Customers = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch customers with search
  const {
    data: customers,
    isLoading,
    error,
  } = useCustomers({
    search: searchTerm,
  });

  // Mutations
  const addCustomer = useAddCustomer();
  const updateCustomer = useUpdateCustomer();
  const deleteCustomer = useDeleteCustomer();

  const handleViewClick = (customer) => {
    setSelectedCustomer(customer);
    setIsViewModalOpen(true);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleEditClick = (customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (customer) => {
    setSelectedCustomer(customer);
    setIsDeleteModalOpen(true);
  };

  const handleAddSubmit = (customerData) => {
    addCustomer.mutate(customerData, {
      onSuccess: () => {
        setIsAddModalOpen(false);
      },
    });
  };

  const handleEditSubmit = (customerData) => {
    updateCustomer.mutate(
      {
        id: selectedCustomer.id,
        updates: customerData,
      },
      {
        onSuccess: () => {
          setIsEditModalOpen(false);
          setSelectedCustomer(null);
        },
      },
    );
  };

  const handleDeleteConfirm = () => {
    deleteCustomer.mutate(selectedCustomer.id, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
        setSelectedCustomer(null);
      },
    });
  };

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
        <AlertCircle className="text-red-500" size={24} />
        <div>
          <h3 className="font-semibold text-red-800">
            Error loading customers
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
          Customers Management
        </h3>
        <button
          onClick={handleAddClick}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-lg transition-all duration-200"
        >
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
              placeholder="Search customers by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        ) : customers && customers.length > 0 ? (
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
                          {customer.name?.charAt(0) || "?"}
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
                      {customer.orders_count || 0}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-slate-900">
                      ${customer.total_spent?.toFixed(2) || "0.00"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      {new Date(customer.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleViewClick(customer)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleEditClick(customer)}
                          className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="Edit Customer"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteClick(customer)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Customer"
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
            <User className="text-slate-300 mb-4" size={64} />
            <p className="text-slate-500 text-lg font-medium">
              No customers found
            </p>
            <p className="text-slate-400 text-sm">
              {searchTerm
                ? "Try adjusting your search"
                : "Add your first customer to get started"}
            </p>
          </div>
        )}
      </div>

      {/* View Customer Modal */}
      <ViewCustomerModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedCustomer(null);
        }}
        customer={selectedCustomer}
      />

      {/* Add Customer Modal */}
      <AddCustomerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        isLoading={addCustomer.isPending}
      />

      {/* Edit Customer Modal */}
      <EditCustomerModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedCustomer(null);
        }}
        onSubmit={handleEditSubmit}
        customer={selectedCustomer}
        isLoading={updateCustomer.isPending}
      />

      {/* Delete Confirmation Modal */}
      <DeleteCustomerModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedCustomer(null);
        }}
        onConfirm={handleDeleteConfirm}
        customer={selectedCustomer}
        isLoading={deleteCustomer.isPending}
      />
    </div>
  );
};

export default Customers;
