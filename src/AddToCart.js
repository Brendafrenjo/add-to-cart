import React, { useState } from "react";
import "./AddToCart.css";
import Images from "./Images";

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
