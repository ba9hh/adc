import React from "react";
import Header from "../components/Header";
import ShopFilters from "./ShopFilters";
import ShopProducts from "./ShopProducts";
import Breadcrumbs from "./Breadcrumbs";
const Shop = () => {
  return (
    <div>
      {/* <Header /> */}
      <Breadcrumbs />
      <ShopFilters />
      <ShopProducts />
    </div>
  );
};

export default Shop;
