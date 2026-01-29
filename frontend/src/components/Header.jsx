import React, { useState } from "react";
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,
  Flame,
  User,
  Search,
  Menu,
} from "lucide-react";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

const Header = () => {
  const { getTotalItems } = useCart();
  const cartCount = getTotalItems();
  const { getTotalFavorites } = useFavorites();
  const favoritesCount = getTotalFavorites();
  const [big, setBig] = useState(false);
  return (
    <div className="sticky top-0 bg-white">
      {big && (
        <div className="">
          <div className="w-full h-11 bg-[#D6A6A6] flex justify-center items-center">
            <h1 className="text-white font-semibold text-sm">
              Livraison gratuite sur les commandes supérieures à 100DT
            </h1>
          </div>
          <div className="px-10 pb-2 pt-4 grid grid-cols-3 items-center">
            <div className="grid grid-cols-2 gap-2 w-1/2">
              <Link
                to="/c/bracelets"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Braclets 📿
              </Link>
              <Link
                to="/c/rings"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Rings 💍
              </Link>
              <Link
                to="/c/necklaces"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Necklaces 📿
              </Link>
              <Link
                to="/c/earrings"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Earrings 💎
              </Link>
            </div>
            <div className="border-b-2 border-[#D6A6A6] pb-0.5">
              <Link
                to="/"
                className="flex flex-col items-center border-b-2 border-[#D6A6A6] pb-2"
              >
                <h1 className="font-black text-[#D6A6A6] text-4xl">ADC</h1>
                <h2 className="font-semibold text-[#D6A6A6] text-xs">
                  Autour du cou
                </h2>
              </Link>
            </div>
            <div className="flex flex-col items-end gap-2 ">
              <div className="flex items-center gap-2">
                <Link to="/account">
                  <User className="w-7 h-7 text-[#D6A6A6]" />
                </Link>
                <Link to="/guest/favorites">
                  <Flame className="w-7 h-7 text-[#D6A6A6]" />
                </Link>
                <Link to="/card">
                  <ShoppingBasket className="w-7 h-7 text-[#D6A6A6]" />
                </Link>
              </div>
              <div className="flex items-center rounded-2xl border-2 border-[#D6A6A6] bg-white/90 px-3 py-1 dark:border-stone-700 dark:bg-stone-800">
                <Search className="mr-2 h-6 w-6 text-[#D6A6A6]" />
                <input
                  // value={query}
                  // onChange={handleChange}
                  placeholder="Search for anything (rings , necklaces, bracelets...)"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {!big && (
        <div className="border-b border-gray-300">
          <div className="w-full h-[0px] bg-[#D6A6A6] flex justify-center items-center"></div>
          <div className=" px-20 pb-2 pt-2 grid grid-cols-3 items-center">
            <div className="grid grid-cols-4 gap-2 w-fit">
              <button
                // onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="rounded-xl border-2 border-[#D6A6A6] p-1.5 dark:border-stone-700 dark:bg-stone-800 w-fit"
                aria-label="Open filters"
              >
                <Menu className="h-5 w-5 text-[#D6A6A6]" />
              </button>
              <div className="flex items-center justify-center rounded-xl border-2 border-[#D6A6A6] bg-white/90 px-0 py-1 dark:border-stone-700 dark:bg-stone-800">
                <Search className=" h-5 w-5 text-[#D6A6A6]" />
                {/* <input
                    value={query}
                    onChange={handleChange}
                    placeholder="Search for anything (rings , necklaces, bracelets...)"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
                  /> */}
              </div>
              {/* <Link
                to="/c/bracelets"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Braclets
              </Link> */}
              {/* <Link
                to="/c/rings"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Rings
              </Link> */}
              {/* <Link
                to="/c/necklaces"
                className="text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1"
              >
                Necklaces
              </Link> */}
              {/* <Link
                to="/c/earrings"
                className="relative text-sm border border-[#D6A6A6] text-[#D6A6A6] p-1 overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to right, black 0%, transparent 100%)",
                  maskImage:
                    "linear-gradient(to right, black 0%, transparent 100%)",
                }}
              >
                Earrings
              </Link> */}
            </div>
            <div className="">
              <Link
                to="/"
                className="flex flex-col items-center  border-[#D6A6A6] pb-2"
              >
                <h1 className="font-black text-[#D6A6A6] text-3xl">ADC</h1>
              </Link>
            </div>
            <div className="flex flex-col items-end gap-2 ">
              <div className="flex items-center gap-2">
                <Link to="/account">
                  <User className="w-7 h-7 text-[#D6A6A6]" />
                </Link>
                <Link to="/guest/favorites" className="relative">
                  <Flame className="w-7 h-7 text-[#D6A6A6]" />
                  {favoritesCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {favoritesCount}
                    </span>
                  )}
                </Link>
                <Link to="/card" className="relative">
                  <ShoppingBasket className="w-7 h-7 text-[#D6A6A6]" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
