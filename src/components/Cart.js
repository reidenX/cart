import React, { Component } from "react";
import image from "../assets/Vector5.png";
import "./Cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  decrement() {
    if (this.state.quantity > 0) {
      this.setState((state) => ({
        quantity: state.quantity - 1,
      }));
    }
  }

  increment() {
    this.setState((state) => ({
      quantity: state.quantity + 1,
    }));
  }

  checkout() {
    this.setState((state) => ({
      quantity: 0,
    }));
  }

  render() {
    return (
      <>
        <h1>Checkout Cart</h1>
        <div className="container">
          <div className="cart">
            <div className="Photo">
              <img src={image} alt="" />
            </div>
            <div>
              <h5>$10.00</h5>
            </div>
            <div className="buttons">
              <button onClick={this.decrement}>-</button>
              <input type="text" id="text" value={this.state.quantity} />
              <button onClick={this.increment}>+</button>
            </div>
            <div onClick={this.checkout} className="checkout" id="checkout">
              <button>Checkout</button>
            </div>
          </div>
          <div className="total"></div>
        </div>
      </>
    );
  }
}
export default Cart;
