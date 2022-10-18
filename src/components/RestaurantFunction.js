import React, { useState } from "react";

function RestaurantFunction() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [input, setInput] = useState("");
  const [selection, setSelection] = useState(10);
  const [vat] = useState(8);
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleSelection = (e) => {
    setSelection(e.target.value);
  };
  const handleSubmit = (e) => {
    if (isCalculated === true) {
      setInput("");
      setSelection(10);
    }
    setIsCalculated(!isCalculated);
  };
  const calculate = () => {
    const price = Number(input);
    const tip = price * (Number(selection) / 100);
    const tax = price * (vat / 100);
    const sum = price + tip + tax;
    const finalSum = sum.toFixed(2);
    return finalSum;
  };
  const displayResults = () => {
    if (isCalculated === true) {
      return (
        <div>
          <span>Your final bill is: {calculate()}</span>
          <button onClick={handleSubmit}>Try again</button>
        </div>
      );
    }
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="net-amount"></label>
        <input
          id="net-amount"
          name="price"
          type="number"
          step="0.01"
          min="1"
          onChange={handleInput}
          value={input}
        />
        <label htmlFor="tip"></label>
        <select
          id="tip"
          name="tip"
          value={selection}
          onChange={handleSelection}
        >
          <option value="0">I don't want to leave a tip</option>
          <option value="5">5%</option>
          <option value="10">10% (Recommended)</option>
          <option value="15">15%</option>
        </select>
        <span>VAT: {vat}% will be included</span>
        <button type="submit">Final sum with tax</button>
      </form>
    );
  };
  return (
    <div>
      <span>Functional component:</span>
      {displayResults()}
    </div>
  );
}

export default RestaurantFunction;
