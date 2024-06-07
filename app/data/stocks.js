const stocks = {
  AAPL: {
    position: "long",
    shares: 150,
    dailyReturn: {
      percentage: 1.2,
      value: 180,
    },
    monthlyReturn: {
      percentage: 5.6,
      value: 840,
    },
    yearlyReturn: {
      percentage: 25.3,
      value: 3780,
    },
    totalValue: 21000,
    tradesPerDay: 30,
    avgDailyVolume: 982000,
    marketCap: 2200000000,
  },
  GOOG: {
    position: "short",
    shares: 50,
    dailyReturn: {
      percentage: -0.5,
      value: -75,
    },
    monthlyReturn: {
      percentage: 2.3,
      value: 345,
    },
    yearlyReturn: {
      percentage: 15.1,
      value: 2265,
    },
    totalValue: 12500,
    tradesPerDay: 15,
    avgDailyVolume: 1200000,
    marketCap: 1500000000,
  },
};

export default stocks;
