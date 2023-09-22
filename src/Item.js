import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./action";

function Item(props) {
  function handleDelete() {
    props.deleteItem(props.item);
  }

  return (
    <div>
      <li>
        {props.item}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
}

export default connect(null, mapDispatchToProps)(Item);
