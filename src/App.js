import "./App.css";
import { connect } from "react-redux";
import React from "react";
import ItemCreator from "./ItemCreator";
import { createStore } from "redux";
import itemsReducer from "./reducer";
import ItemContainer from "./ItemContainer";

const store = createStore(itemsReducer);


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="add-to-cart-app">
          <ItemCreator />
          <ItemContainer />
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
