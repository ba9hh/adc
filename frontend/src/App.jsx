import { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home.jsx";
import Shop from "./shop/Shop.jsx";
import Product from "./product/Product.jsx";
import Category from "./categories/Category.jsx";
import Card from "./card/Card.jsx";
import Favorites from "./favorites/Favorites.jsx";
import Checkout from "./checkout/Checkout.jsx";
import Header from "./components/Header.jsx";
import HomeHeader from "./components/HomeHeader.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import { Outlet } from "react-router-dom";
import Account from "./Account/Account.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import { FavoritesProvider } from "./context/FavoritesContext";

function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}

function StandardLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
}
function App() {
  return (
    <>
      <CartProvider>
        <FavoritesProvider>
          <CartDrawer />
          <Routes>
            <Route path="/" element={<HomeLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route element={<StandardLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/c/:category" element={<Category />} />

              <Route path="/product/:id" element={<Product />} />
              <Route path="/card" element={<Card />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/guest/favorites" element={<Favorites />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </CartProvider>
    </>
  );
}

export default App;
