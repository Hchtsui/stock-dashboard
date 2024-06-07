"use client";

import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

// Helper function to sort stocks
const sortStocks = (stocks, sortBy, sortOrder) => {
  return Object.entries(stocks).sort(([aKey, aData], [bKey, bData]) => {
    const aValue = aData[sortBy];
    const bValue = bData[sortBy];
    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });
};

// SummaryTable component: Displays a table summarizing the portfolio
const SummaryTable = ({ stocks }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "totalValue",
    order: "asc",
  });

  // Function to handle sorting
  const handleSort = (key) => {
    let order = "asc";
    if (sortConfig.key === key && sortConfig.order === "asc") {
      order = "desc";
    }
    setSortConfig({ key, order });
  };

  const sortedStocks = sortStocks(stocks, sortConfig.key, sortConfig.order);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 dark:text-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Position</th>
            <th className="py-2 px-4 border-b">Shares</th>
            <th
              className="py-2 px-4 border-b"
              onClick={() => handleSort("dailyReturn")}
            >
              Daily Return{" "}
              {sortConfig.key === "dailyReturn" &&
                (sortConfig.order === "asc" ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th
              className="py-2 px-4 border-b"
              onClick={() => handleSort("monthlyReturn")}
            >
              Monthly Return{" "}
              {sortConfig.key === "monthlyReturn" &&
                (sortConfig.order === "asc" ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th
              className="py-2 px-4 border-b"
              onClick={() => handleSort("yearlyReturn")}
            >
              Yearly Return{" "}
              {sortConfig.key === "yearlyReturn" &&
                (sortConfig.order === "asc" ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th
              className="py-2 px-4 border-b"
              onClick={() => handleSort("totalValue")}
            >
              Total Value{" "}
              {sortConfig.key === "totalValue" &&
                (sortConfig.order === "asc" ? <FaSortUp /> : <FaSortDown />)}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedStocks.map(([stock, data]) => (
            <tr key={stock}>
              <td className="py-2 px-4 border-b">{stock}</td>
              <td className="py-2 px-4 border-b">{data.position}</td>
              <td className="py-2 px-4 border-b">{data.shares}</td>
              <td
                className={`py-2 px-4 border-b ${
                  data.dailyReturn.value >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data.dailyReturn.percentage}% (${data.dailyReturn.value})
              </td>
              <td
                className={`py-2 px-4 border-b ${
                  data.monthlyReturn.value >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data.monthlyReturn.percentage}% (${data.monthlyReturn.value})
              </td>
              <td
                className={`py-2 px-4 border-b ${
                  data.yearlyReturn.value >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data.yearlyReturn.percentage}% (${data.yearlyReturn.value})
              </td>
              <td className="py-2 px-4 border-b">
                ${data.totalValue.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SummaryTable;
