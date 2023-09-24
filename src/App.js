import "./App.css";
import { connect } from "react-redux";
import React, { useState } from "react";
import ItemCreator from "./ItemCreator";

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="add-to-cart-app">
          <ItemCreator />
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
