import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./action";
import "./Item.css"

function Item(props) {
  function handleDelete() {
    props.deleteItem(props.item);
  }

  return (
    <div className="items">
      <button onClick={handleDelete}>{props.item}</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
}

export default connect(null, mapDispatchToProps)(Item);
