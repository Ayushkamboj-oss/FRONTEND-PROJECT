import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-gray-900 text-white shadow-md">
        {/* Top Heading Line */}
        <div className="bg-gray-700 text-sm text-gray-300 px-4 py-2 flex justify-between items-center">
          <span>Welcome, Ayush Kamboj 👨‍💻</span>
        </div>

        {/* Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">🚀 Dev Dashboard</h1>
          <nav className="flex gap-6">
            <NavLink
              to="/home"
              end
              aria-label="Navigate to Home"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-yellow-300 transition duration-200"
              }
            >
              📖 Home
            </NavLink>
            <NavLink
              to="search"
              aria-label="Navigate to GitHub"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-yellow-300 transition duration-200"
              }
            >
              Search
            </NavLink>
            
            <NavLink
              to="login"
              aria-label="Navigate to Login"
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-bold"
                  : "hover:text-yellow-300 transition duration-200"
              }
            >
              Login
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;