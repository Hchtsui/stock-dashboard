"use client";

import React from "react";
import { FaChartPie, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Whales Portfolio
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-800 dark:text-white"
            onClick={toggleDarkMode}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="text-gray-800 dark:text-white">
            <FaChartPie />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
