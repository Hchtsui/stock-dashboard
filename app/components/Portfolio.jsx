"use client";

import React from "react";
import stocks from "../data/stocks";
import StockCard from "./StockCard";
import PortfolioDistribution from "./PortfolioDistribution";
import SummaryTable from "./SummaryTable";
import SummaryCard from "./SummaryCard";

// Portfolio component: Displays the overall portfolio including summary, distribution, and individual stock cards
const Portfolio = () => {
  // Calculate total portfolio value
  const totalValue = Object.values(stocks).reduce(
    (acc, stock) => acc + stock.totalValue,
    0
  );
  // Calculate total and average daily return
  const totalDailyReturn = Object.values(stocks).reduce(
    (acc, stock) => acc + stock.dailyReturn.value,
    0
  );
  const averageDailyReturn = totalDailyReturn / Object.values(stocks).length;

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* Portfolio Header */}
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Whales Stock Portfolio
        </h1>
      </header>
      {/* Portfolio Distribution Chart */}
      <section className="flex justify-center mb-4">
        <PortfolioDistribution stocks={stocks} />
      </section>
      {/* Summary Table */}
      <section className="flex justify-center mb-4">
        <SummaryTable stocks={stocks} />
      </section>
      {/* Summary Card */}
      <section className="flex justify-center mb-4">
        <SummaryCard
          totalValue={totalValue}
          averageDailyReturn={averageDailyReturn}
        />
      </section>
      {/* Individual Stock Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(stocks).map(([stock, data]) => (
          <StockCard key={stock} stock={stock} data={data} />
        ))}
      </section>
      {/* Footer with total portfolio value */}
      <footer className="mt-4 p-4 border-t text-center">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Total Portfolio Value: ${totalValue.toLocaleString()}
        </h2>
      </footer>
    </div>
  );
};

export default Portfolio;
