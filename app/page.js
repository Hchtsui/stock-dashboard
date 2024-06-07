import React from "react";
import Portfolio from "./components/Portfolio";

// Home component: The main page of the application that renders the Portfolio component
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Portfolio />
    </div>
  );
};

export default Home;
