import React from "react";
import { Package, ShoppingCart, Users, Grid, TrendingUp } from "lucide-react";

const NavBar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: "overview", icon: TrendingUp, label: "Overview" },
    { id: "orders", icon: ShoppingCart, label: "Orders" },
    { id: "products", icon: Package, label: "Products" },
    { id: "categories", icon: Grid, label: "Categories" },
    { id: "customers", icon: Users, label: "Customers" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white shadow-2xl">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D6A6A6] to-[#D6B6A6] bg-clip-text text-transparent">
          Admin Panel
        </h1>
        <p className="text-slate-400 text-sm mt-1">Dashboard v2.0</p>
      </div>

      <div className="p-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-gradient-to-r from-[#D6A6A6] to-[#D6B6A6] text-white shadow-lg shadow-orange-500/20"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-slate-400">admin@example.com</p>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default NavBar;
