"use client";

import React from "react";
import { FaWallet } from "react-icons/fa";

// SummaryCard component: Displays a summary of the portfolio
const SummaryCard = ({ totalValue, averageDailyReturn }) => {
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <FaWallet className="mr-2" /> Portfolio Summary
      </h2>

      {/* Display the total value of the portfolio */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="font-semibold">Total Value:</span>
        <span>${totalValue.toLocaleString()}</span>
      </div>

      {/* Display the average daily return of the portfolio */}
      <div className="flex items-center space-x-2 mb-2">
        <span className="font-semibold">Average Daily Return:</span>
        <span>{averageDailyReturn.toFixed(2)}%</span>
      </div>
    </div>
  );
};

export default SummaryCard;
