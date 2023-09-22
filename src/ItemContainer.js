import React, { useEffect } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import "./ItemContainer.css";

function ItemContainer(props) {
  useEffect(() => {}, []);

  function listItems() {
    return props.items.map((item, index) => <Item item={item} key={index} />);
  }

  return (
    <div className="Item">
      <h2>Item Container</h2>
      {listItems()}
    </div>
  );
}

function mapStateToProps(state) {
  return { items: state.item };
}

export default connect(mapStateToProps)(ItemContainer);
