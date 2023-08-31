import React from "react";

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
      <form>
        <input
          type="search"
          placeholder="Type item..."
          autoFocus="on"
          className="form-control shadow search-item w-100"
        />
      </form>
      <form>
        <input
          type="submit"
          value="Add to Cart"
          className="btn btn-primary searcch-btn"
        />
          </form>
          <p>
              No items here yet...
          </p>
    </div>
  );
}
