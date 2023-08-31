import React from "react";
import "./AddToCart.css";
import AddToCartImage from "./AddToCartImage";

export default function AddToCart(params) {
  return (
    <div className="AddToCart">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
         <AddToCartImage />
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
