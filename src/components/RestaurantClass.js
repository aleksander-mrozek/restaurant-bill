import React from "react";

class RestaurantClass extends React.Component {
  state = {
    isCalculated: false,
    input: "",
    selection: 10,
    vat: 8,
  };
  handleInput = (e) => {
    this.setState({ input: e.target.value });
  };
  handleSelection = (e) => {
    this.setState({ selection: e.target.value });
  };
  handleSubmit = (e) => {
    if (this.state.isCalculated === true) {
      this.setState({
        input: "",
        selection: 10,
      });
    }
    this.setState({ isCalculated: !this.state.isCalculated });
  };
  calculate() {
    const price = Number(this.state.input);
    const tip = price * (Number(this.state.selection) / 100);
    const tax = price * (this.state.vat / 100);
    const sum = price + tip + tax;
    const finalSum = sum.toFixed(2);
    return finalSum;
  }
  displayResults() {
    if (this.state.isCalculated === true) {
      return (
        <div>
          <span>Your final bill is: {this.calculate()}</span>
          <button onClick={this.handleSubmit}>Try again</button>
        </div>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="net-amount"></label>
        <input
          id="net-amount"
          name="price"
          type="number"
          step="0.01"
          min="1"
          onChange={this.handleInput}
          value={this.state.input}
        />
        <label htmlFor="tip"></label>
        <select
          id="tip"
          name="tip"
          value={this.state.selection}
          onChange={this.handleSelection}
        >
          <option value="0">I don't want to leave a tip</option>
          <option value="5">5%</option>
          <option value="10">10% (Recommended)</option>
          <option value="15">15%</option>
        </select>
        <span>VAT: {this.state.vat}% will be included</span>
        <button type="submit">Final sum with tax</button>
      </form>
    );
  }
  render() {
    return (
      <div>
        <span>Class component:</span>
        {this.displayResults()}
      </div>
    );
  }
}

export default RestaurantClass;
