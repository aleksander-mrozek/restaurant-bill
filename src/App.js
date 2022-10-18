import React from "react";

import { RestaurantClass, RestaurantFunction } from "./components";

import "./App.css";

function App() {
  return (
    <div className="restaurant-container">
      <RestaurantClass />
      <RestaurantFunction />
    </div>
  );
}

export default App;
