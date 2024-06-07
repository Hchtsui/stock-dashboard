"use client";

import React from "react";
import StockChart from "./StockChart";
import { FaArrowUp, FaArrowDown, FaRegChartBar } from "react-icons/fa";

// StockCard component: Displays detailed information about an individual stock
const StockCard = ({ stock, data }) => (
  <div className="border p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white flex flex-col space-y-4 transform transition duration-500 hover:scale-105">
    <h2 className="text-2xl font-bold mb-2 flex items-center">
      <FaRegChartBar className="mr-2" /> {stock}
    </h2>

    {/* Display the position (long/short) of the stock */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Position:</span>
      <span>{data.position}</span>
    </div>

    {/* Display the number of shares */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Shares:</span>
      <span>{data.shares}</span>
    </div>

    {/* Display the daily return with an icon indicating increase or decrease */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Daily Return:</span>
      <span
        className={`flex items-center ${
          data.dailyReturn.value >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {data.dailyReturn.value >= 0 ? <FaArrowUp /> : <FaArrowDown />}
        {data.dailyReturn.percentage}% (${data.dailyReturn.value})
      </span>
    </div>

    {/* Display the monthly return with an icon indicating increase or decrease */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Monthly Return:</span>
      <span
        className={`flex items-center ${
          data.monthlyReturn.value >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {data.monthlyReturn.value >= 0 ? <FaArrowUp /> : <FaArrowDown />}
        {data.monthlyReturn.percentage}% (${data.monthlyReturn.value})
      </span>
    </div>

    {/* Display the yearly return with an icon indicating increase or decrease */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Yearly Return:</span>
      <span
        className={`flex items-center ${
          data.yearlyReturn.value >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {data.yearlyReturn.value >= 0 ? <FaArrowUp /> : <FaArrowDown />}
        {data.yearlyReturn.percentage}% (${data.yearlyReturn.value})
      </span>
    </div>

    {/* Display the total value of the stock */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Total Value:</span>
      <span>${data.totalValue.toLocaleString()}</span>
    </div>

    {/* Display the number of trades per day */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Trades per Day:</span>
      <span>{data.tradesPerDay}</span>
    </div>

    {/* Display the average daily volume */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Avg. Daily Volume:</span>
      <span>{data.avgDailyVolume.toLocaleString()}</span>
    </div>

    {/* Display the market capitalization */}
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Market Cap:</span>
      <span>${data.marketCap.toLocaleString()}</span>
    </div>

    {/* Stock chart showing performance over time */}
    <StockChart stock={stock} data={data} />
  </div>
);

export default StockCard;
