"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

// PortfolioDistribution component: Displays a pie chart of the portfolio distribution
const PortfolioDistribution = ({ stocks }) => {
  // Extract labels (stock names) and data (total values) from stocks object
  const labels = Object.keys(stocks);
  const data = Object.values(stocks).map((stock) => stock.totalValue);

  // Define chart data and options
  const chartData = {
    labels,
    datasets: [
      {
        label: "Portfolio Distribution",
        data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      className="w-full md:w-1/2 lg:w-1/4 mx-auto"
      style={{ height: "250px" }}
    >
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PortfolioDistribution;
