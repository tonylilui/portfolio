import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-white text-lg font-bold">
              Tony Li
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
              About
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">
              Contact
            </a>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
