import React from "react";
import {
  ShoppingCart,
  ShoppingBasket,
  ShoppingBag,
  Flame,
  User,
  Search,
} from "lucide-react";
const Header2 = () => {
  return (
    <div>
      <div className="px-20 py-2 grid grid-cols-2 items-center">
        <div className="flex flex-col">
          <h1 className="font-black text-[#D6A6A6] text-4xl">ADC</h1>
          <h2 className="font-semibold text-[#D6A6A6] text-xs">
            Autour du cou
          </h2>
        </div>
        <div className="flex justify-end gap-4">
          <div className="flex items-center rounded-2xl border-2 border-[#D6A6A6] bg-white/90 px-3 py-2 dark:border-stone-700 dark:bg-stone-800">
            <Search className="mr-2 h-6 w-6 text-[#D6A6A6]" />
            <input
              // value={query}
              // onChange={handleChange}
              placeholder="Search for anything (rings , necklaces, bracelets...)"
              className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
            />
          </div>
          <div className="flex  items-center gap-2">
            <User className="w-8 h-8 text-[#D6A6A6]" />
            <Flame className="w-8 h-8 text-[#D6A6A6]" />
            <ShoppingBasket className="w-8 h-8 text-[#D6A6A6]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <h1 className="text-sm">Braclets 📿</h1>
        <h1 className="text-sm">Rings 💍</h1>
        <h1 className="text-sm">Necklaces 📿</h1>
        <h1 className="text-sm">Earrings 💎</h1>
      </div>
    </div>
  );
};

export default Header2;
