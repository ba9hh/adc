import React, { useState } from "react";
import NavBar from "./NavBar";
import Orders from "./Orders";
import Categories from "./categories/Categories";
import Products from "./products/Products";
import Customers from "./Customers";
import Header from "./Header";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex-1 ml-64 p-8">
        <Header />
        {/* {activeSection === 'overview' && <Overview />} */}
        {activeSection === "orders" && <Orders />}
        {activeSection === "products" && <Products />}
        {activeSection === "categories" && <Categories />}
        {activeSection === "customers" && <Customers />}
      </div>
    </div>
  );
};

export default Dashboard;
