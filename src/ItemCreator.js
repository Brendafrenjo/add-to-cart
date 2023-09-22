import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "./action";

function ItemCreator(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    return setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addItem(text);
    setText("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={text} />
        <input type="submit" value="Create" />
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
