import React from "react";
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,
  Flame,
  User,
  Search,
} from "lucide-react";
const Header1 = () => {
  return (
    <div>
      <div className="bg-[#D6A6A6] px-20 py-2 grid grid-cols-3 items-center">
        <div className="w-1/2">
          <div className="flex items-center rounded-2xl border border-white bg-white/90 px-3 py-3 dark:border-stone-700 dark:bg-stone-800">
            <Search className="mr-2 h-6 w-6 text-[#D6A6A6]" />
            <input
              // value={query}
              // onChange={handleChange}
              placeholder="Search for anything (rings , necklaces, bracelets...)"
              className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-black text-amber-50 text-4xl">ADC</h1>
          <h2 className="font-semibold text-amber-50 text-xs">Autour du cou</h2>
        </div>
        <div className="flex justify-end items-center gap-3">
          <User className="w-9 h-9 text-white" />
          <Flame className="w-9 h-9 text-white" />
          <ShoppingBasket className="w-9 h-9 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header1;
