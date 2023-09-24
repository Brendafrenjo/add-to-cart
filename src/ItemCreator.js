import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./action";
import "./ItemCreator.css"

function ItemCreator(props) {
  const [text, setText] = useState("");
  
  
  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addItem(text);
    setText("");
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <i className="fa-solid fa-cart-shopping fa-bounce icon"></i>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={text}
          autoFocus="on"
          placeholder="Type item..."
          className="form-control shadow search-item w-100 text-center"
        />
        <input
          type="submit"
          value="Add to Cart"
          className="btn btn-primary searcch-btn w-100"
        />
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (text) => dispatch(addItem(text)),
  };
}

export default connect(null, mapDispatchToProps)(ItemCreator);
