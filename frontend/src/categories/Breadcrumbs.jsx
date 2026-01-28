import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div className="mx-10 ">
      <nav className="border border-[#D6B6A6] px-6 py-1 text-sm text-black">
        <ol className="flex items-center space-x-2">
          <li>
            <Link
              to="/"
              className="hover:font-semibold hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>

          <li className="text-black">/</li>

          <li className=" tracking-wide text-black">Categories</li>
          <li className="text-black">/</li>

          <li className=" tracking-wide text-black font-medium">Rings</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
