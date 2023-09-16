import React, { useState, useEffect } from "react";
import "./AddToCart.css";
import Images from "./Images";
import { createStore } from "redux";
import { Provider, connect, useSelector, useDispatch } from "react-redux";

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(countReducer);

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: "ADD" }),
    subtract: () => dispatch({ type: "SUBTRACT" }),
  };
};

const Component = ({ count, add, subtract }) => {
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={add}>Add</button>
      <button onClick={add}>Subtract</button>
    </div>
  );
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default function AddToCart() {
  const [item, setItem] = useState(" ");
  const [message, setMessage] = useState(`No items here yet...`);

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`${item}`);
  }

  function updateItem(event) {
    setItem(event.target.value);
  }

  return (
    <div className="AddToCart">
      <Provider store={store}>
        <Container />
      </Provider>
      <br />
      <br />
      <br />
      <i class="fa-solid fa-cart-shopping fa-bounce icon"></i>
      <Images />
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type item..."
          autoFocus="on"
          onChange={updateItem}
          className="form-control shadow search-item w-100 text-center"
        />
        <br />
        <input
          type="submit"
          value="Add to Cart"
          className="btn btn-primary searcch-btn w-100"
        />
      </form>
      <br />
      <p className="items">{message}</p>
    </div>
  );
}
