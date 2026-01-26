import React, { useState } from "react";
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,
  Flame,
  User,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <div>
      <div className="w-full h-11 bg-[#D6A6A6] flex justify-center items-center">
        <h1 className="text-white font-semibold text-sm">
          Livraison gratuite sur les commandes supérieures à 100DT
        </h1>
      </div>
      <div className=" px-10 pb-2 pt-4 grid grid-cols-3 items-center">
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
            <User className="w-7 h-7 text-[#D6A6A6]" />
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
  );
};

export default HomeHeader;
