"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// StockChart component: Displays a line chart showing the daily return of a stock
const StockChart = ({ stock, data }) => {
  // Prepare the data for the chart
  const chartData = {
    // Labels for the x-axis representing different days
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
      {
        // Label for the dataset
        label: "Daily Return",
        // Data points for the line chart
        data: [data.dailyReturn.value, 120, 180, 150, data.dailyReturn.value],
        // Border color of the line
        borderColor: "rgba(75, 192, 192, 1)",
        // Background color under the line
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  // Options for the chart configuration
  const options = {
    // Make the chart responsive
    responsive: true,
    plugins: {
      // Position of the legend
      legend: {
        position: "top",
      },
      // Title configuration
      title: {
        display: true,
        text: `${stock} Daily Return`,
      },
    },
    // Maintain the aspect ratio
    maintainAspectRatio: false,
  };

  return (
    // Container for the chart with a fixed height
    <div className="h-48 w-full">
      {/* Render the Line chart with the prepared data and options */}
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StockChart;
