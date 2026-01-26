import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div className="mx-10 mt-8">
      <nav className="bg-[#D6B6A6] px-6 py-1 text-sm text-gray-50">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              to="/"
              className="hover:font-semibold hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>

          <li className="text-white">/</li>

          <li className="uppercase tracking-wide text-white font-medium">
            Shop
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
