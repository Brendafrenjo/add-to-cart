import React from "react";
import "./AddToCart.css";
import Images from "./Images";

export default function AddToCart(params) {
  return (
    <div className="AddToCart">
      <br />
      <Images />
      <form>
        <input
          type="search"
          placeholder="Type item..."
          autoFocus="on"
          className="form-control shadow search-item w-100 text-center"
        />
      </form>
      <br />
      <form>
        <input
          type="submit"
          value="Add to Cart"
          className="btn btn-primary searcch-btn w-100"
        />
      </form>
      <br />
      <p>No items here yet...</p>
    </div>
  );
}
