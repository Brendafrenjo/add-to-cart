import "./App.css";
import AddToCart from "./AddToCart";
import { connect } from "react-redux";
import React, { useState } from "react";
import ItemContainer from "./ItemContainer";

function App(props) {
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
