import React from "react";
import { SlidersHorizontal } from "lucide-react";

const ShopFilters = () => {
  return (
    <div className="mx-10 mt-5 flex justify-between items-end">
      <div>
        <button className="px-4 py-1 border border-gray-400">
          <span>
            <SlidersHorizontal className="w-4 h-4 inline mr-2 mb-1" />
          </span>
          Filters
        </button>
      </div>
      <div>
        <span className="text-sm">Sort by:</span>
        <select className="ml-2 p-1 border border-gray-500 rounded">
          <option value="newest">Newest</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ShopFilters;
