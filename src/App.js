import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/girl.png";
import "./App.css";

import store from './store';
import { withdrawMoney } from './store/actions';

class App extends Component {
  retrieveMoney = (e) => {
    const moneyValue = e.target.dataset.amount;

    // dispatching our action
    store.dispatch(withdrawMoney(moneyValue));
  }

  ripAccount = () => {
    const { totalAmount } = store.getState();

    store.dispatch(withdrawMoney(totalAmount));
  }

  render() {
    const { totalAmount, username } = store.getState();
    console.log(totalAmount);
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(totalAmount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
          <button onClick={e => this.retrieveMoney(e)} data-amount="10000">WITHDRAW $10,000</button>
          <button onClick={e => this.retrieveMoney(e)} data-amount="5000">WITHDRAW $5,000</button>
        </section>

        <p onClick={this.ripAccount} className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
