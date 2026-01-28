import React from "react";
import { Link } from "react-router-dom";
const Breadcrumbs = () => {
  return (
    <div className="mx-0 my-10">
      <nav className=" bg-gray-100 px-6 py-2 text-sm text-black">
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

          <li className=" tracking-wide text-black font-medium">Shop</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
