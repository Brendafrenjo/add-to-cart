import React from "react";
import { connect } from "react-redux";
import Item from "./Item";
import { addItem, deleteItem } from "./action";

function ItemContainer(props) {
  function listItems() {
    return props.items.map((item, index) => <Item item={item} key={index} />);
  }

  return (
    <div className="Item">
      <p className="pt-3">Add list below: </p>
      {listItems()}
    </div>
  );
}

function mapStateToProps(state) {
  return { items: state.items };
}

const mapDispatchToProps = {
  deleteItem,
  addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
