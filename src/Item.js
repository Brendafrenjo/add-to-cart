import React from "react";
import { connect } from "react-redux";
import { deleteItem } from "./action";

const Item = (props) => {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={deleteItem}>Delete</button>
      </li>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (item) => dispatch(deleteItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Item);
