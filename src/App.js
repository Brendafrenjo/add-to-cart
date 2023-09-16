import "./App.css";
import AddToCart from "./AddToCart";
import { useState, useEffect } from "react";
import { createStore } from "redux";
import { Provider, connect, useSelector, useDispatch } from "react-redux";

const countReducer = function (state = 0, action) {
  switch ((action, type)) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer)

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

export default App;
