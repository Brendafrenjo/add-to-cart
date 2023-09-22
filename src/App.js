import "./App.css";
import AddToCart from "./AddToCart";
import { connect } from "react-redux";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="add-to-cart-app">
          <AddToCart />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(App);
